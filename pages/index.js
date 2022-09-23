import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Leads from "@/components/Leads";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="bg-bluish text-white">
      <NextSeo
        title="Damn Good Leads"
        description="Curated lead lists from the best sales and scraping minds in the market."
        canonical="https://www.damngoodleads.com"
        openGraph={{
          url: "https://www.damngoodleads.com",
          title: "Damn Good Leads",
          description:
            "Curated lead lists from the best sales and scraping minds in the market.",
          images: [
            {
              url: "https://i.imgur.com/P6QcGAD.png",
              width: 800,
              height: 600,
              alt: "OG Image for Damn Good Leads",
              type: "image/jpeg",
            },
          ],
          site_name: "Damn Good Leads",
        }}
      />
      <Header />

      <Leads />
      <Form />
      <Footer />
    </div>
  );
}
