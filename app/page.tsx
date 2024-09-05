import Feutres from "@/components/marketing/Feutres";
import Footer from "@/components/marketing/Footer";
import Gallery from "@/components/marketing/Gallery";
import { Hero } from "@/components/marketing/Hero";
import Nav from "@/components/marketing/Nav";

export default function Home() {
  return (
    <main>
      <div>
        <Nav />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Feutres />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div className=" h-screen" /> */}
    </main>
  );
}
