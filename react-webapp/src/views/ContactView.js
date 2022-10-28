import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'

function ContactView() {
window.top.document.title = "Contact | Fixxo."

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contact"/>
      <MapSection />
      <ContactFormSection />
      <FooterSection/>
    </>


  )
}

export default ContactView