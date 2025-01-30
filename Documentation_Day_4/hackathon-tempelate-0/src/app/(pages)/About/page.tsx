"use client";

import React from "react";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import FAQs from "@/app/components/FAQs";
import ContentBlocks from "@/app/components/ContentBlocks";

export default function About() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentBlocks />
      <FAQs />
    </div>
  );
}
