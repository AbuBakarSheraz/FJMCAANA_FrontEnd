import Link from "next/link";
import { isAdmin, isAdminConfigured } from "@/lib/admin-auth";
import { login } from "../actions";
import { redirect } from "next/navigation";

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await isAdmin()) redirect("/admin");
  const { error } = await searchParams;
  const configured = isAdminConfigured();
  return <main className="admin-shell"><section className="admin-login"><Link href="/" className="admin-brand">FJMCAANA</Link><p className="admin-kicker">Content management</p><h1>Sign in to the admin panel</h1>{!configured ? <p className="admin-alert">Before signing in, add <code>FJMCAANA_ADMIN_PASSWORD</code> and <code>FJMCAANA_ADMIN_SESSION_SECRET</code> to your environment.</p> : <form action={login} className="admin-form"><label>Password<input name="password" type="password" required autoFocus /></label>{error && <p className="admin-error">That password was not accepted.</p>}<button type="submit">Sign in</button></form>}<Link href="/" className="admin-back">← Back to website</Link></section></main>;
}
