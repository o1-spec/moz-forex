import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import Testimonials from "@/src/components/Testimonials";
import AboutHero from "@/src/sections/about/AboutHero";
import CoreValues from "@/src/sections/about/CoreValues";
import KeyDifferences from "@/src/sections/about/KeyDifferences";
import LegalInfo from "@/src/sections/about/LegalInfo";
import VisionAndMission from "@/src/sections/about/VisionAndMission";
import FAQSection from "@/src/sections/faq/FAQSection";
import Services from "@/src/sections/Homepage/Services";
import React from "react";

function AboutUsPage() {
  return (
    <>
      <Nav name="about" />
      <AboutHero/>
      <KeyDifferences/>
      <VisionAndMission/>
      <CoreValues />
      <div className="bg-[#2F2F304D]">
        <Services />
      </div>
      <LegalInfo />
      <div className="bg-[#2F2F304D]">
        <Testimonials />
      </div>
      <CTA />
      <FAQSection />
      <Footer />
    </>
  );
}

export default AboutUsPage;
