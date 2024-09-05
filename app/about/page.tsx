import AboutContent from "@/components/about/AboutContent";
import Footer from "@/components/marketing/Footer";
import Nav from "@/components/marketing/Nav";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className=" px-7 md:px-0">
        <AboutContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
