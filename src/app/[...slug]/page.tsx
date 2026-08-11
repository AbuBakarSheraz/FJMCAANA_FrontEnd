import Link from "next/link";
import { notFound } from "next/navigation";
import CausesSection from "@/components/CausesSection";
import ContentPage from "@/components/ContentPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { CONTENT_PAGES, FEATURED_CAUSES, LIFETIME_MEMBERS, getContentPage } from "@/lib/siteContent";
import { TEAM_MEMBERS } from "@/lib/team";
import MembershipTiers from "@/components/MembershipTiers";
import ZeffyEmbed from "@/components/ZeffyEmbed";

export function generateStaticParams() {
  return [
    ...CONTENT_PAGES.map((page) => ({ slug: page.path })),
    { slug: ["about", "executive-committee"] },
    { slug: ["get-involved", "lifetime-members"] },
    { slug: ["donate"] },
  ];
}

export default async function SitePage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const path = slug ?? [];
  const key = path.join("/");

  if (key === "about/executive-committee") {
    return <><Navbar /><PageHeader eyebrow="Leadership" title="Executive Committee" description="The council and executive members leading FJMCAANA's mission, projects, and community." /><main className="max-w-6xl mx-auto px-6 py-12 sm:py-16"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{TEAM_MEMBERS.map((member) => <Link href={`/team#${member.slug}`} key={member.slug} className="rounded-xl border border-pine/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-pine/25 hover:shadow-sm"><p className="font-mono text-[11px] uppercase tracking-widest text-gold">{member.role}</p><h2 className="mt-2 font-display text-xl font-semibold text-pine-dark">{member.name}</h2><p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.highlight}</p><span className="mt-4 inline-block text-sm font-semibold text-pine">Read biography <span aria-hidden="true">→</span></span></Link>)}</div></main><Footer /></>;
  }

  if (key === "get-involved/lifetime-members") {
    return <><Navbar /><PageHeader eyebrow="Get Involved" title="Lifetime Members" description="Alumnae who have made an enduring commitment to FJMCAANA." /><main className="max-w-6xl mx-auto px-6 py-12 sm:py-16"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{LIFETIME_MEMBERS.map(([name, year]) => <div className="rounded-xl border border-pine/10 bg-white p-5" key={name}><h2 className="font-display text-lg font-semibold text-pine-dark">{name}</h2>{year && <p className="mt-1 text-sm text-ink-soft">Class of {year}</p>}</div>)}</div></main><Footer /></>;
  }
if (key === "get-involved/membership") {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Get Involved"
        title="Membership"
        description="Membership of FJMCAANA is open to FJMC alumni residing in the United States and Canada."
      />
      <MembershipTiers />
      <ZeffyEmbed />
      <Footer />
    </>
  );
}

  if (key === "donate") {
    return <>
    <Navbar />
    <PageHeader eyebrow="Give" title="Support a cause" description="Your gift supports healthcare, 
    education, emergency relief, and the next generation of women physicians." />
    <CausesSection causes={FEATURED_CAUSES} expanded />
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="max-w-3xl">
        <h2 className="font-display text-2xl font-semibold text-pine-dark">Giving with purpose</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">FJMCAANA states that donations support projects in Pakistan related to its alma mater,
           including scholarships, the FJMU E-Library, and health initiatives. For check payments and cause-specific giving, 
           contact the FJMCAANA team.</p>
           <a className="mt-6 inline-flex rounded-lg bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark"
            href="mailto:team@fjmcaana.org?subject=Donation%20inquiry">Contact about giving</a>
            </div>
     </section>
    <Footer />
    </>;
  }

  const page = getContentPage(path);
  if (!page) notFound();
  return <><Navbar /><ContentPage page={page} /><Footer /></>;
}
