import React from 'react';
import ContactForm from '../../components/ContactForm';
import Navbar from '../../components/Navbar';
import Hero from '@/app/components/Hero';

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <ContactForm />
    </div>
  );
}     
