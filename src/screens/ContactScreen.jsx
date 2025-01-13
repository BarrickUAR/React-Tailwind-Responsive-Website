import React from "react";
import HeaderFixed from "../components/HeaderFixed";
import Footer from "../components/Footer";
import SectionOne from "../sections/Contact/SectionOne";
import ContactForm from "../sections/Contact/ContactForm";

function ContactScreen() {
  return (
    <div>
      <HeaderFixed />

      <SectionOne></SectionOne>

      <ContactForm></ContactForm>

      <Footer />
    </div>
  );
}

export default ContactScreen;
