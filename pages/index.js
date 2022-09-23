import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Leads from "@/components/Leads";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-bluish text-white">
      <Header />

      <Leads />
      <Form />
      <Footer />
    </div>
  );
}
