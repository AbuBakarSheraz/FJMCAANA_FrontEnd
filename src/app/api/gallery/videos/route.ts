import cloudinary, {
  hasCloudinaryConfig,
} from "@/lib/cloudinary";

type GalleryVideo = {
  id: string;
  width: number;
  height: number;
  aspectRatio: number;
  video: string;
  thumbnail: string;
  alt: string;
};

function mapCloudinaryVideo(
  video: any
): GalleryVideo {
  const base =
    video.secure_url as string;

  /*
   * Generate a JPG thumbnail from
   * the Cloudinary video.
   *
   * This URL is ONLY used as the
   * poster image.
   */
  const thumbnail =
    base.replace(
      "/video/upload/",
      "/video/upload/w_600,c_limit,q_auto,f_jpg/"
    );

  return {
    id: video.public_id,

    width: video.width,
    height: video.height,

    aspectRatio:
      video.width / video.height,

    /*
     * IMPORTANT:
     *
     * This is the ORIGINAL video URL.
     * Do NOT add f_jpg, f_webp, etc.
     */
    video: base,

    /*
     * JPG thumbnail for the poster.
     */
    thumbnail,

    alt:
      video.context?.custom?.alt ??
      video.public_id
        .split("/")
        .pop() ??
      "Gallery video",
  };
}

async function loadCloudinaryVideos(
  folder: string
): Promise<GalleryVideo[]> {
  const result =
    await cloudinary.api.resources_by_asset_folder(
      folder,
      {
        max_results: 500,
        context: true,
      }
    );

  /*
   * The folder contains both images
   * and videos, so explicitly select
   * only video resources.
   */
  const videoResources =
    (result.resources ?? []).filter(
      (resource: any) =>
        resource.resource_type ===
        "video"
    );

  return videoResources
    .sort(
      (a: any, b: any) =>
        a.public_id.localeCompare(
          b.public_id
        )
    )
    .map(
      mapCloudinaryVideo
    );
}

export async function GET(
  request: Request
) {
  try {
    const {
      searchParams,
    } = new URL(
      request.url
    );

    const folder =
      searchParams.get(
        "folder"
      );

    if (!folder) {
      return Response.json(
        {
          error:
            "Gallery folder is required",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !hasCloudinaryConfig()
    ) {
      return Response.json(
        []
      );
    }

    const videos =
      await loadCloudinaryVideos(
        folder
      );

    return Response.json(
      videos
    );
  } catch (error: any) {
    console.error(
      "[gallery/videos] FULL ERROR:",
      error
    );

    return Response.json(
      {
        error:
          error?.message ??
          "Failed to load gallery videos",
      },
      {
        status: 500,
      }
    );
  }
}