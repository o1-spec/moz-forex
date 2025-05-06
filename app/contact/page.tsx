import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ContactForm from "@/sections/Contact/ContactForm";
import ContactHero from "@/sections/Contact/ContactHero";
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
