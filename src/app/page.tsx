import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SealDivider from "@/components/SealDivider";
import Leadership from "@/components/Leadership";
import CausesSection from "@/components/CausesSection";
import GetInvolved from "@/components/GetInvolved";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

// --- Server-side data fetching from your NestJS API -----------------------
// This page is a Server Component, so you can fetch directly here at request
// or build time. Swap these for real calls once your API is deployed, e.g.:
//
// const stats = await fetch(`${process.env.API_BASE_URL}/stats`, { next: { revalidate: 60 } })
//   .then((r) => r.json());
// const causes = await fetch(`${process.env.API_BASE_URL}/causes`, { next: { revalidate: 60 } })
//   .then((r) => r.json());
// const news = await fetch(`${process.env.API_BASE_URL}/news?limit=3`, { next: { revalidate: 300 } })
//   .then((r) => r.json());
//
// Each component already has sensible fallback data baked in, so the page
// renders correctly even before the API is wired up — just pass props once
// it's ready:  <StatsBar stats={stats} /> / <CausesSection causes={causes} /> / <NewsSection items={news} />

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <SealDivider />
      <Leadership />
      <SealDivider />
      <CausesSection />
      <SealDivider />
      <GetInvolved />
      <SealDivider />
      <NewsSection />
      <Footer />
    </>
  );
}
