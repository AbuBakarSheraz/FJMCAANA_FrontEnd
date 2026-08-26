import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/siteContent";
import { notFound } from "next/navigation";

export default function AboutPage() {
  const page = getContentPage(["about"]);
  if (!page) notFound();
  
  return (
    <>
      <Navbar />
      <ContentPage page={page} />
      <Footer />
    </>
  );
}
