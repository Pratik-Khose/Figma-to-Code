import { CalendarIcon, SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FooterWrapperByAnima } from "./sections/FooterWrapperByAnima";
import { Frame1ByAnima } from "./sections/Frame1ByAnima";
import { Frame2ByAnima } from "./sections/Frame2ByAnima/Frame2ByAnima";
import { Frame3ByAnima } from "./sections/Frame3ByAnima";
import { Frame4ByAnima } from "./sections/Frame4ByAnima";
import { Frame5ByAnima } from "./sections/Frame5ByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Figma = (): JSX.Element => {
  // Category data for mapping
  const categories = [
    { name: "Beaches", image: "/image-4-1.png", active: true },
    { name: "Deserts", image: "/image-16-1.png", active: false },
    { name: "Mountains", image: "/image-3-1.png", active: false },
    { name: "Iconic Cities", image: "/image-13-1.png", active: false },
    { name: "Houseboats", image: "/image-17-1.png", active: false },
    { name: "Countryside", image: "/image-10-1.png", active: false },
    { name: "Camping", image: "/image-5-1.png", active: false },
    { name: "Castles", image: "/image-12-1.png", active: false },
    { name: "Skiing", image: "/image-15-1.png", active: false },
    { name: "Tropical", image: "/image-8-1.png", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Background image with blur effect */}
        <div className="relative w-full">
          <img
            className="w-full h-auto object-cover blur-[13.96px]"
            alt="Background Image"
            src="/image-37.png"
          />
          <img
            className="w-full h-auto object-cover absolute top-0 left-0"
            alt="Background Image Clear"
            src="/image-38.png"
          />

          <div className="absolute top-[76px] left-[139px] text-[61.1px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
            trxvl.
          </div>
        </div>

        {/* Main content container */}
        <div className="flex justify-center w-full">
          {/* Left content section */}
          <div className="w-full max-w-[1641px] bg-white shadow-[22.48px_44.21px_122.88px_#00000080] overflow-hidden relative">
            {/* Hero section */}
            <div className="w-full relative">
              <img
                className="w-full h-auto object-cover"
                alt="Hero Image"
                src="/image-1-1.png"
              />
              <div className="w-full h-[126px] absolute bottom-0 left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_90%)]" />

              <div className="absolute top-[149px] left-36 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[86.5px] tracking-[0] leading-normal">
                The whole world awaits.
              </div>

              <div className="absolute top-[517px] left-36 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[38.4px] tracking-[0] leading-normal whitespace-nowrap">
                Top categories
              </div>
            </div>

            {/* SearchIcon section */}
            <Frame1ByAnima />

            {/* Categories section */}
            <Frame2ByAnima />

            {/* Additional content sections */}
            <Frame3ByAnima />
            <Frame4ByAnima />
            <Frame5ByAnima />
            <FooterWrapperByAnima />
          </div>

          {/* Right content section */}
          <div className="w-full max-w-[1253px] bg-white shadow-[22.48px_44.21px_122.88px_#00000080] overflow-hidden relative">
            {/* Hero section */}
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                alt="Image"
                src="/image-1.png"
              />
              <div className="absolute w-full h-24 bottom-0 left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_90%)]" />

              <div className="absolute top-[114px] left-[110px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[66px] tracking-[0] leading-normal">
                The whole world awaits.
              </div>
            </div>

            {/* SearchIcon section */}
            <Card className="mx-[110px] mt-[304px] bg-[#ffffff1a] backdrop-blur-[14.67px] rounded-[14.67px]">
              <CardContent className="p-[7.34px]">
                <div className="flex items-center justify-between gap-[29.35px]">
                  <div className="flex items-center gap-[7.34px] px-[7.34px] py-[11px] w-[346.66px]">
                    <SearchIcon className="w-[18.34px] h-[18.34px] opacity-70" />
                    <span className="opacity-70 [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-[14.7px]">
                      SearchIcon destinations, hotels
                    </span>
                  </div>

                  <div className="flex items-center gap-[7.34px] px-[7.34px] py-[11px] flex-1">
                    <CalendarIcon className="w-[18.34px] h-[18.34px] opacity-70" />
                    <span className="opacity-70 [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-[14.7px]">
                      Check in
                    </span>
                  </div>

                  <div className="flex items-center gap-[7.34px] px-[7.34px] py-[11px] flex-1">
                    <CalendarIcon className="w-[18.34px] h-[18.34px] opacity-70" />
                    <span className="opacity-70 [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-[14.7px]">
                      Check out
                    </span>
                  </div>

                  <div className="flex items-center gap-[7.34px] px-[7.34px] py-[11px] flex-1">
                    <UserIcon className="w-[18.34px] h-[18.34px] opacity-70" />
                    <span className="opacity-70 [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-[14.7px]">
                      1 room, 2 adults
                    </span>
                  </div>

                  <Button className="px-[29.35px] py-[11px] bg-white rounded-[29.35px] hover:bg-white/90">
                    <span className="text-[#1b4e7a] text-[14.7px] opacity-70 [font-family:'Helvetica-Bold',Helvetica] font-bold">
                      SearchIcon
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories section */}
            <div className="mt-[394px] ml-[110px]">
              <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[29.3px] mb-[30px]">
                Top categories
              </h2>

              <div className="flex items-start justify-between w-[1033px]">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-[14.67px]"
                  >
                    <img
                      className="w-[29.35px] h-[29.35px] object-cover"
                      alt={category.name}
                      src={category.image}
                    />
                    <div
                      className={`[font-family:${category.active ? "'Helvetica-Bold'" : "'Helvetica-Regular'"},Helvetica] ${category.active ? "font-bold" : "font-normal opacity-40"} text-white text-[14.7px]`}
                    >
                      {category.name}
                    </div>
                  </div>
                ))}
              </div>

              <img
                className="w-[72px] h-px mt-[30px] mx-auto"
                alt="Line"
                src="/line-1.svg"
              />
            </div>

            {/* Content sections */}
            <div className="mt-[100px]">
              <div className="flex items-start gap-[7.34px] p-[7.34px]">
                <div className="flex flex-col items-start gap-[66.03px]">
                  <FrameByAnima />
                  <FrameWrapperByAnima />
                  <DivWrapperByAnima />
                  <DivByAnima />
                </div>
              </div>
            </div>

            {/* Footer sections */}
            <FooterByAnima />
            <SectionComponentNodeByAnima />
          </div>

          {/* Mobile mockup section */}
          <div className="w-[753px] relative">
            <div className="w-[639px] h-[1293px] bg-[url(/main-1.png)] bg-cover bg-center mx-auto">
              <img
                className="w-[572px] h-[1234px] mx-auto mt-[27px]"
                alt="iPhone mockup"
                src="/iphone-13-mockup-label-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
