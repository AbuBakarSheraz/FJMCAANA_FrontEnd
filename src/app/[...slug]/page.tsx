import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CausesSection from "@/components/CausesSection";
import ContentPage from "@/components/ContentPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { ALUMNI_PRESIDENTS, LIFETIME_MEMBERS, getContentPage } from "@/lib/siteContent";
import { TEAM_MEMBERS } from "@/\lib/team";
import LifetimeMemberCard from "@/components/LifetimeMemberCard";
import HealthChannelPage from "@/components/HealthChannelPage";
import { getRecords } from "@/lib/content-store";
import ContactPage from "@/components/ContactPage";
import MembershipTiers from "@/components/MembershipTiers";
export const dynamic = "force-dynamic";

export default async function SitePage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const path = slug ?? [];
  const key = path.join("/");

  if (key === "about/executive-committee") {
    return <><Navbar /><PageHeader eyebrow="Leadership" title="Executive Committee" description="The council and executive members leading FJMCAANA's mission, projects, and community." /><main className="max-w-6xl mx-auto px-6 py-12 sm:py-16"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{TEAM_MEMBERS.map((member) => <Link href={`/team#${member.slug}`} key={member.slug} className="rounded-xl border border-pine/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-pine/25 hover:shadow-sm"><p className="font-mono text-[11px] uppercase tracking-widest text-gold">{member.role}</p><h2 className="mt-2 font-display text-xl font-semibold text-pine-dark">{member.name}</h2><p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.highlight}</p><span className="mt-4 inline-block text-sm font-semibold text-pine">Read biography <span aria-hidden="true">→</span></span></Link>)}</div></main><Footer /></>;
  }

  if (key === "get-involved/health-channel") {
  return (
    <>
      <Navbar />
      <HealthChannelPage />
      <Footer />
    </>
  );
  }
  if (key === "get-involved/membership") {
  return (
    <>
      <Navbar />
      <MembershipTiers />
      <Footer />
    </>
  );
}
if (key === "contact") {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}

 if (key === "about/alumni-presidents") {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Get Involved"
        title="Lifetime Members"
        description="Celebrating the alumnae who have made an enduring commitment to FJMCAANA."
      />

      <main className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {ALUMNI_PRESIDENTS.map((member) => (
            <LifetimeMemberCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
if (key === "get-involved/lifetime-members") {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Get Involved"
        title="Lifetime Members"
        description="Celebrating the alumnae who have made an enduring commitment to FJMCAANA."
      />

      <main className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {LIFETIME_MEMBERS.map((member) => (
            <LifetimeMemberCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
  if (key === "donate") {
    const projects = await getRecords("projects");
    return <>
    <Navbar />
    <PageHeader eyebrow="Give" title="Support a cause" description="Your gift supports healthcare, 
    education, emergency relief, and the next generation of women physicians." />
    <CausesSection causes={projects} expanded />
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
  if (key === "about/presidents-message") {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Leadership"
        title="President's Message"
        description="Dr. Umbreen Chaudhary, President FJMCAANA 2025 & 2026, Class of '97."
      />

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* President Image */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sage/20">
              <Image
                src="/images/president.png"
                alt="Dr. Umbreen Chaudhary, President FJMCAANA"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 300px"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-5">
              <h2 className="font-display text-2xl font-semibold text-pine-dark">
                Dr. Umbreen Chaudhary
              </h2>

              <p className="mt-1 text-sm text-ink-soft">
                President, FJMCAANA 2025 & 2026
              </p>

              <p className="mt-1 text-sm text-ink-soft">
                Class of '97
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="max-w-2xl">
            <p className="text-lg font-medium text-pine-dark">
              Ladies of FJMCAANA,
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-ink-soft">
              <p>
                It is an honor to serve as the president of this remarkable
                organization, which is dedicated to celebrating women in
                medicine and supporting the next generation of female
                physicians.
              </p>

              <p>
                Our association was founded with a vision to connect, inspire,
                and empower women who have dedicated their lives to medicine.
                Through our collective experiences, we continue to shape the
                future of healthcare while addressing the unique challenges
                that women face in the profession.
              </p>

              <p>
                As we move forward, our focus remains on creating opportunities
                for mentorship, professional growth, and supporting our alma
                mater. Whether you are a seasoned physician or just beginning
                your medical journey, we are here to provide a supportive
                community.
              </p>

              <p>
                I invite you to join me in supporting our many philanthropic
                projects for 2025 and look forward to connecting with each of
                you.
              </p>
            </div>

            <div className="mt-8 border-t border-pine/10 pt-6">
              <p className="font-display text-xl font-semibold text-pine-dark">
                Umbreen Chaudhary, MD
              </p>

              <p className="mt-1 text-sm text-ink-soft">
                President, FJMCAANA
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

  const collection = key === "news" ? "news" : key === "impact/projects" ? "projects" : key === "impact/events" ? "events" : key === "impact/gallery" ? "gallery" : undefined;
  if (collection) {
    const records = await getRecords(collection);
    const page = getContentPage(path);
    if (!page) notFound();
    return <><Navbar /><ContentPage page={{ ...page, sections: [{ items: records.map((item) => ({ title: item.title, detail: [item.date, item.summary].filter(Boolean).join(" · "), href: item.link, image: item.image })) }] }} /><Footer /></>;
  }
  const page = getContentPage(path);
  if (!page) notFound();
  return <><Navbar /><ContentPage page={page} /><Footer /></>;
}
