"use client";
import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContentBlockData {
  id: string;
  heading: string;
  text: string;
  backgroundColor: string;
  media?: {
    type: "image";
    src: string;
    alt?: string;
  };
}

const SamspireInteriors: React.FC = () => {

  const blocks: ContentBlockData[] = [
    {
      id: "1",
      heading: "Bespoke Collections",
      text: "Explore our meticulously curated furniture collections, designed to elevate your living spaces with unparalleled comfort and sophistication. From sleek contemporary designs to timeless classics, find the perfect pieces to express your unique style.",
      backgroundColor: "bg-secondary/10",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Luxurious living room with modern furniture",
      },
    },
    {
      id: "2",
      heading: "Artisanal Craftsmanship",
      text: "At Samspire Interiors, we pride ourselves on our commitment to sustainable, high-quality craftsmanship. Each piece is meticulously created by skilled artisans using responsibly sourced materials, ensuring that your stylish choices also contribute to a more sustainable future.",
      backgroundColor: "bg-primary/10",
      media: {
        type: "image",
        src: "https://bondars.com/wp-content/uploads/2021/07/best-furniture-brands.jpg",
        alt: "Craftsman working on a wooden chair",
      },
    },
    {
      id: "3",
      heading: "Immersive Design Studio",
      text: "Experience the future of interior design with our state-of-the-art Immersive Design Studio. Visualize your dream space in stunning detail, experiment with different layouts and styles, and bring your vision to life before making a single purchase.",
      backgroundColor: "bg-accent/10",
      media: {
        type: "image",
        src: "https://imgdataserver.com/items/AT20914523043_zm.jpg",
        alt: "Immersive 3D design rendering of a modern living room",
      },
    },
  ];

  const ContentBlock: React.FC<ContentBlockData> = ({ heading, text, backgroundColor, media }) => {
    const isImageFirst = media?.src === blocks[1].media?.src;  // Check if it's the second block (Artisanal Craftsmanship)
    
    return (
      <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${backgroundColor}`}>
        {/* Reversed order for the second block */}
        {isImageFirst && (
          <div className="flex-1 w-full md:w-auto">
            {media && media.type === "image" ? (
              <Image
                src={media.src || "/placeholder.svg"}
                alt={media.alt || ""}
                width={500}
                height={300}    
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : null}
          </div>
        )}
        
        <div className="flex-1 space-y-2 md:space-y-4">
          <motion.h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {text}
          </motion.p>
        </div>

        {!isImageFirst && (
          <div className="flex-1 w-full md:w-auto">
            {media && media.type === "image" ? (
              <Image
                src={media.src || "/placeholder.svg"}
                alt={media.alt || ""}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : null}
          </div>
        )}
      </div>
    );
  };

  const ContentBlocks: React.FC<{ blocks: ContentBlockData[] }> = ({ blocks }) => {
    return (
      <section className="flex flex-col space-y-8 md:space-y-12 py-8 md:py-16 px-2 sm:px-4 md:px-8 bg-background">
        {blocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ContentBlock {...block} />
          </motion.div>
        ))}
      </section>
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-1 sm:px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 md:mt-12 text-primary">Welcome to Samspire Interiors</h1>
      <ContentBlocks blocks={blocks} />
    </div>
  );
};

export default SamspireInteriors;