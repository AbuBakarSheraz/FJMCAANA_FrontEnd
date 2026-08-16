import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";

export const CONTENT_COLLECTIONS = ["news", "projects", "events", "gallery"] as const;
export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number];

export type ContentRecord = {
  id: string;
  collection: ContentCollection;
  title: string;
  summary: string;
  date?: string;
  image?: string;
  link?: string;
  featured?: boolean;
  createdAt: string;
};

type ContentStore = { records: ContentRecord[] };

const filePath = path.join(process.cwd(), "data", "site-content.json");

const seed: ContentRecord[] = [
  { id: "news-annual-projects-2022", collection: "news", title: "Annual Projects/Activities Video Highlights 2022", summary: "Annual projects and activities video highlights.", date: "December 31, 2022", featured: true, createdAt: "2022-12-31" },
  { id: "news-president-report-2022", collection: "news", title: "Annual President Report 2022", summary: "FJMCAANA President's annual report.", date: "December 31, 2022", featured: true, createdAt: "2022-12-31" },
  { id: "news-annual-report-2022", collection: "news", title: "FJMCAANA Annual Report 2022", summary: "FJMCAANA annual report.", date: "December 31, 2022", featured: true, createdAt: "2022-12-31" },
  { id: "project-cornea", collection: "projects", title: "Cornea Transplants", summary: "US$15,000 raised in Ramadan 2022 to support 60 transplants at Sir Ganga Ram Hospital.", featured: true, createdAt: "2022-01-01" },
  { id: "project-flood-relief", collection: "projects", title: "Kashani Basti Flood Relief", summary: "FJMCAANA and FJMU supported construction and inauguration of 29 houses in Fazal Pur, South Punjab.", featured: true, createdAt: "2022-01-01" },
  { id: "project-scholarship", collection: "projects", title: "Student Scholarship", summary: "15 scholarships per year for deserving FJMC students.", featured: true, createdAt: "2022-01-01" },
  { id: "event-conference-2022", collection: "events", title: "4th Annual Scientific Conference", summary: "", date: "December 16, 2022", createdAt: "2022-12-16" },
  { id: "event-spring-2022", collection: "events", title: "FJMCAANA Annual Spring Meeting", summary: "Omni Hotel & Resort", date: "March 24, 2022", createdAt: "2022-03-24" },
  { id: "event-winter-2021", collection: "events", title: "FJMU Winter Meeting", summary: "Lahore", date: "December 21, 2021", createdAt: "2021-12-21" },
  { id: "gallery-winter-meeting", collection: "gallery", title: "FJMCAANA Winter Meeting", summary: "December 22–24, 2021", createdAt: "2021-12-24" },
];

async function readStore(): Promise<ContentStore> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as ContentStore;
    return Array.isArray(parsed.records) ? parsed : { records: seed };
  } catch {
    return { records: seed };
  }
}

export async function getRecords(collection?: ContentCollection) {
  const { records } = await readStore();
  return records
    .filter((record) => !collection || record.collection === collection)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function saveRecords(records: ContentRecord[]) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify({ records }, null, 2) + "\n", "utf8");
}

export async function upsertRecord(record: ContentRecord) {
  const records = await getRecords();
  const index = records.findIndex((item) => item.id === record.id);
  if (index === -1) records.push(record);
  else records[index] = record;
  await saveRecords(records);
}

export async function removeRecord(id: string) {
  const records = await getRecords();
  await saveRecords(records.filter((record) => record.id !== id));
}
