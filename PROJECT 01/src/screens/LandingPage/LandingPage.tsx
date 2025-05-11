import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const LandingPage = (): JSX.Element => {
  // Data for pagination dots
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      <HeaderSection />

      <HeroSection />

      <MainContentSection />

      <FooterSection />
    </div>
  );
};
