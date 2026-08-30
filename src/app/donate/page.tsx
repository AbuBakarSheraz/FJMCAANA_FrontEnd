import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CausesSection from "@/components/CausesSection";
import { getRecords } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function DonatePage() {
  const projects = await getRecords("projects");
  
  return (
    <>
      <Navbar />
      <PageHeader 
        eyebrow="Give" 
        title="Support a Cause" 
        description="Your gift supports healthcare, education, emergency relief, and the next generation of women physicians." 
      />
      <CausesSection causes={projects} expanded />
      <section className="mx-auto max-w-7xl px-8 py-12 sm:px-2 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-pine-dark">Giving with Purpose</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            FJMCAANA donations support projects in Pakistan related to our alma mater, including scholarships, 
            the FJMU E-Library, and health initiatives. For check payments and cause-specific giving, contact the FJMCAANA team.
          </p>
          <a 
            className="mt-6 inline-flex rounded-lg bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark"
            href="mailto:team@fjmcaana.org?subject=Donation%20inquiry"
          >
            Contact about giving
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
