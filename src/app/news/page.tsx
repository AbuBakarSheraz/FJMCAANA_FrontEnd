import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/siteContent";
import { getRecords } from "@/lib/content-store";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const page = getContentPage(["news"]);
  if (!page) notFound();
  
  const records = await getRecords("news");
  
  return (
    <>
      <Navbar />
      <ContentPage 
        page={{ 
          ...page, 
          sections: [{ 
            items: records.map((item) => ({ 
              title: item.title, 
              detail: [item.date, item.summary].filter(Boolean).join(" · "), 
              href: item.link, 
              image: item.image 
            })) 
          }] 
        }} 
      />
      <Footer />
    </>
  );
}
