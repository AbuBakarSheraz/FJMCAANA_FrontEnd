import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SealDivider from "@/components/SealDivider";
import Leadership from "@/components/Leadership";
import CausesSection from "@/components/CausesSection";
import GetInvolved from "@/components/GetInvolved";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <SealDivider />
        <Leadership />
        <CausesSection />
        <GetInvolved />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}