"use server";

import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { authenticate, requireAdmin, signOut } from "@/lib/admin-auth";
import { CONTENT_COLLECTIONS, type ContentCollection, type ContentRecord, removeRecord, upsertRecord } from "@/lib/content-store";

const uploadsDirectory = path.join(process.cwd(), "public", "uploads");
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

function text(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function refreshSite() {
  ["/", "/news", "/impact/projects", "/impact/events", "/impact/gallery", "/donate"].forEach((pathname) => revalidatePath(pathname));
}

export async function login(formData: FormData) {
  if (await authenticate(text(formData, "password"))) redirect("/admin");
  redirect("/admin/login?error=1");
}

export async function logout() {
  await signOut();
  redirect("/admin/login");
}

export async function saveContent(formData: FormData) {
  await requireAdmin();
  const collection = text(formData, "collection") as ContentCollection;
  const title = text(formData, "title");
  if (!CONTENT_COLLECTIONS.includes(collection) || !title) redirect("/admin?error=required");

  const id = text(formData, "id") || `${collection}-${randomUUID()}`;
  let image = text(formData, "existingImage");
  const file = formData.get("image");
  if (file instanceof File && file.size > 0) {
    if (!allowedTypes.has(file.type) || file.size > 5 * 1024 * 1024) redirect("/admin?error=image");
    const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
    const filename = `${randomUUID()}.${extension}`;
    await fs.mkdir(uploadsDirectory, { recursive: true });
    await fs.writeFile(path.join(uploadsDirectory, filename), Buffer.from(await file.arrayBuffer()));
    image = `/uploads/${filename}`;
  }
  const record: ContentRecord = {
    id, collection, title, summary: text(formData, "summary"), date: text(formData, "date") || undefined,
    link: text(formData, "link") || undefined, image: image || undefined,
    featured: formData.get("featured") === "on", createdAt: text(formData, "createdAt") || new Date().toISOString(),
  };
  await upsertRecord(record);
  refreshSite();
  redirect("/admin?saved=1");
}

export async function deleteContent(formData: FormData) {
  await requireAdmin();
  await removeRecord(text(formData, "id"));
  refreshSite();
  redirect("/admin?deleted=1");
}
