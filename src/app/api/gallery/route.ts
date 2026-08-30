import { promises as fs } from "fs";
import path from "path";
import cloudinary, { hasCloudinaryConfig } from "@/lib/cloudinary";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

type GalleryImage = {
  id: string;
  width: number;
  height: number;
  aspectRatio: number;
  thumb: { avif: string; webp: string; fallback: string };
  full: { avif: string; webp: string; fallback: string };
  blur: string;
  alt: string;
};

async function loadLocalGallery(folder: string): Promise<GalleryImage[]> {
  const galleryRoot = path.join(process.cwd(), "public", "gallery", folder);

  try {
    const entries = await fs.readdir(galleryRoot, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => entry.name);

    return files
      .sort((a, b) => a.localeCompare(b))
      .map((filename, index) => {
        const publicPath = `/gallery/${folder}/${filename}`;
        return {
          id: `${folder}-${index}-${filename}`,
          width: 1200,
          height: 800,
          aspectRatio: 1.5,
          thumb: { avif: publicPath, webp: publicPath, fallback: publicPath },
          full: { avif: publicPath, webp: publicPath, fallback: publicPath },
          blur: publicPath,
          alt: filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
        };
      });
  } catch (error: any) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}

function mapCloudinaryResource(img: any): GalleryImage {
  const base = img.secure_url as string;
  const transform = (t: string) => base.replace("/upload/", `/upload/${t}/`);

  return {
    id: img.public_id,
    width: img.width,
    height: img.height,
    aspectRatio: img.width / img.height,
    thumb: {
      // c_limit: caps the width at 600px if larger, leaves smaller images
      // untouched — no cropping, no upscaling, same aspect ratio as before.
      avif: transform("w_600,c_limit,q_auto,f_avif"),
      webp: transform("w_600,c_limit,q_auto,f_webp"),
      fallback: transform("w_600,c_limit,q_auto,f_jpg"),
    },
    full: {
      // Exact uploaded file — untouched.
      avif: base,
      webp: base,
      fallback: base,
    },
    blur: transform("w_40,c_limit,q_10,f_jpg,e_blur:800"),
    alt: img.context?.custom?.alt ?? img.public_id.split("/").pop(),
  };
}

async function loadCloudinaryGallery(folder: string): Promise<GalleryImage[]> {
  // Folders are root-level in this account — no "Home/" prefix.
  const result = await cloudinary.api.resources_by_asset_folder(folder, {
    max_results: 500,
    context: true,
  });

  return (result.resources ?? [])
    .sort((a: any, b: any) => a.public_id.localeCompare(b.public_id))
    .map(mapCloudinaryResource);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");

    if (!folder) {
      return Response.json({ error: "Gallery folder is required" }, { status: 400 });
    }

    if (!hasCloudinaryConfig()) {
      return Response.json(await loadLocalGallery(folder));
    }

    const images = await loadCloudinaryGallery(folder);
    if (images.length > 0) return Response.json(images);

    console.warn(`[gallery] No Cloudinary images found in asset folder "${folder}"`);
    return Response.json(await loadLocalGallery(folder));
  } catch (error: any) {
    console.error("[gallery] FULL ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}