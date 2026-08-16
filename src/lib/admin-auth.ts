import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "fjmcaana_admin";

function secret() {
  return process.env.FJMCAANA_ADMIN_SESSION_SECRET;
}

function sign(value: string) {
  return createHmac("sha256", secret()!).update(value).digest("hex");
}

export function isAdminConfigured() {
  return Boolean(process.env.FJMCAANA_ADMIN_PASSWORD && secret());
}

export async function isAdmin() {
  if (!isAdminConfigured()) return false;
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return false;
  const [value, signature] = token.split(".");
  if (!value || !signature || value !== "admin") return false;
  const expected = sign(value);
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function authenticate(password: string) {
  if (!isAdminConfigured()) return false;
  const expected = process.env.FJMCAANA_ADMIN_PASSWORD!;
  const valid = password.length === expected.length && timingSafeEqual(Buffer.from(password), Buffer.from(expected));
  if (!valid) return false;
  (await cookies()).set(cookieName, `admin.${sign("admin")}`, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 8 });
  return true;
}

export async function requireAdmin() {
  if (!(await isAdmin())) throw new Error("Unauthorized");
}

export async function signOut() {
  (await cookies()).delete(cookieName);
}
