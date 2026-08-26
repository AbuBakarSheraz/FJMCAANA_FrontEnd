import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/siteContent";
import { notFound } from "next/navigation";

export default function ImpactPage() {
  const page = getContentPage(["impact"]);
  if (!page) notFound();
  
  return (
    <>
      <Navbar />
      <ContentPage page={page} />
      <Footer />
    </>
  );
}
