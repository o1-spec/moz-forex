import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import ContactForm from "@/src/sections/Contact/ContactForm";
import ContactHero from "@/src/sections/Contact/ContactHero";
import React from "react";

function ContactPage() {
  return (
    <>
      <Nav name="contact"/>
      <ContactHero />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default ContactPage;
