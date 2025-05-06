import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import FAQHero from "@/sections/faq/FAQHero";
import FAQLinks from "@/sections/faq/FAQLinks";
import FAQSection from "@/sections/faq/FAQSection";
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
