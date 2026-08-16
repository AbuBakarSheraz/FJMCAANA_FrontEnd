import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { CONTENT_COLLECTIONS, getRecords } from "@/lib/content-store";
import { deleteContent, logout, saveContent } from "./actions";

const label = (value: string) => value[0].toUpperCase() + value.slice(1);

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ saved?: string; deleted?: string; error?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const records = await getRecords();
  const { saved, deleted, error } = await searchParams;
  return <main className="admin-shell"><div className="admin-panel"><header className="admin-header"><div><Link href="/" className="admin-brand">FJMCAANA</Link><p className="admin-kicker">Content management</p><h1>Website content</h1><p>Add, update, or remove news, projects, events, and gallery entries. Changes appear on the public site immediately.</p></div><div className="admin-actions"><Link href="/" target="_blank">View website ↗</Link><form action={logout}><button className="admin-quiet">Sign out</button></form></div></header>{saved && <p className="admin-success">Saved. The website has been updated.</p>}{deleted && <p className="admin-success">Entry deleted.</p>}{error && <p className="admin-error">Please complete the title and select a valid image (JPG, PNG, or WebP; 5 MB maximum).</p>}<section className="admin-create"><h2>Add a new entry</h2><ContentForm /></section>{CONTENT_COLLECTIONS.map((collection) => <section className="admin-collection" key={collection}><h2>{label(collection)}</h2><div className="admin-records">{records.filter((record) => record.collection === collection).map((record) => <details className="admin-record" key={record.id}><summary>{record.image && <Image src={record.image} alt="" width={48} height={48} />}{record.title}<span>{record.date || "No date"}</span></summary><ContentForm record={record} /><form action={deleteContent} className="delete-form"><input name="id" type="hidden" value={record.id} /><button type="submit">Delete this entry</button></form></details>)}{records.every((record) => record.collection !== collection) && <p className="admin-empty">No entries yet.</p>}</div></section>)}</div></main>;
}

function ContentForm({ record }: { record?: Awaited<ReturnType<typeof getRecords>>[number] }) {
  return <form action={saveContent} className="admin-form" encType="multipart/form-data"><input name="id" type="hidden" value={record?.id ?? ""} /><input name="createdAt" type="hidden" value={record?.createdAt ?? ""} /><input name="existingImage" type="hidden" value={record?.image ?? ""} /><div className="admin-fields"><label>Section<select name="collection" defaultValue={record?.collection ?? "news"}>{CONTENT_COLLECTIONS.map((collection) => <option key={collection} value={collection}>{label(collection)}</option>)}</select></label><label>Title<input name="title" required defaultValue={record?.title ?? ""} /></label><label>Date<input name="date" placeholder="e.g. December 16, 2026" defaultValue={record?.date ?? ""} /></label><label>Link (optional)<input name="link" type="url" placeholder="https://…" defaultValue={record?.link ?? ""} /></label></div><label>Short description<textarea name="summary" rows={3} defaultValue={record?.summary ?? ""} /></label><label>Photo (JPG, PNG, or WebP; up to 5 MB)<input name="image" type="file" accept="image/jpeg,image/png,image/webp" /></label><label className="admin-checkbox"><input name="featured" type="checkbox" defaultChecked={record?.featured} /> Show this on the home page</label><button type="submit">{record ? "Save changes" : "Add entry"}</button></form>;
}
