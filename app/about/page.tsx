import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Testimonials from "@/components/Testimonials";
import AboutHero from "@/sections/about/AboutHero";
import CoreValues from "@/sections/about/CoreValues";
import KeyDifferences from "@/sections/about/KeyDifferences";
import LegalInfo from "@/sections/about/LegalInfo";
import VisionAndMission from "@/sections/about/VisionAndMission";
import FAQSection from "@/sections/faq/FAQSection";
import Services from "@/sections/Homepage/Services";
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
