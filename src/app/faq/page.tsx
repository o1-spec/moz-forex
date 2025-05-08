import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import FAQHero from "@/src/sections/faq/FAQHero";
import FAQLinks from "@/src/sections/faq/FAQLinks";
import FAQSection from "@/src/sections/faq/FAQSection";
import React from "react";

function FAQPage() {
  return (
    <>
      <Nav name="faq" /> 
      <FAQHero />
      <FAQLinks />
      <FAQSection />
      <Footer />
    </>
  );
}

export default FAQPage;
