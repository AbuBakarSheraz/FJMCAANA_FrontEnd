import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import LeadersSection from "@/components/LeadersSection";
import CausesSection from "@/components/CausesSection";
import ResourcesSection from "@/components/ResourcesSection";
import GetInvolved from "@/components/GetInvolved";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { getRecords } from "@/lib/content-store";
import OrganizationNotice from "@/components/OrganizationNotice";
import Announcement from "@/components/Announcement";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [projects, news] = await Promise.all([getRecords("projects"), getRecords("news")]);
  return (
    <>
      <Navbar />
      <Announcement />
      <Hero />
      <OrganizationNotice />
      <Leadership />
      <LeadersSection />
      <CausesSection />
      <ResourcesSection />
      <GetInvolved />
      <NewsSection items={news.filter((item) => item.featured).slice(0, 3)} />
      <Footer />
    </>
  );
}