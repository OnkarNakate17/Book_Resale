import React from 'react'
import Navbar from '../component/Navbar'
import ContactForm from '../component/ContactForm'
import Footer from '../component/Footer'

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <ContactForm />
    </div>

    <Footer />
</>
  )
}
