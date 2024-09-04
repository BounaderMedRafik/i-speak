import Feutres from "@/components/marketing/Feutres";
import Gallery from "@/components/marketing/Gallery";
import { Hero } from "@/components/marketing/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Feutres />
      </div>
      <div>
        <Gallery />
      </div>
      <div className=" h-screen" />
    </main>
  );
}
