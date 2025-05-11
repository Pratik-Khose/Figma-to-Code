import React from "react";
import { BookTripSection } from "./sections/BookTripSection/BookTripSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TopDestinationsSection } from "./sections/TopDestinationsSection/TopDestinationsSection";

export const TravelAgency = (): JSX.Element => {
  // Partner logos data for the brands section
  const partnerLogos = [
    { src: "/image-27.png", alt: "Partner logo 1" },
    { src: "/image-28.png", alt: "Partner logo 2" },
    { src: "/image-29.png", alt: "Partner logo 3", hasBackground: true },
    { src: "/image-30.png", alt: "Partner logo 4" },
    { src: "/image-31.png", alt: "Partner logo 5" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Top Destinations Section */}
      <TopDestinationsSection />

      {/* Book Trip Section */}
      <BookTripSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Subscription Section */}
      <NewsletterSubscriptionSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};
