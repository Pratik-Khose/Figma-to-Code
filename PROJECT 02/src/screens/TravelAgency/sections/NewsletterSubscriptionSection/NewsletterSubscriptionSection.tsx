import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const NewsletterSubscriptionSection = (): JSX.Element => {
  // Array of plus signs with their positions and colors
  const plusSigns = [
    { top: 140, left: 0, color: "text-neutral-200" },
    { top: 105, left: 35, color: "text-neutral-200" },
    { top: 0, left: 70, color: "text-neutral-200" },
    { top: 35, left: 70, color: "text-neutral-200" },
    { top: 70, left: 70, color: "text-x-2nd" },
    { top: 105, left: 70, color: "text-neutral-200" },
    { top: 140, left: 70, color: "text-neutral-200" },
    { top: 0, left: 105, color: "text-neutral-200" },
    { top: 35, left: 105, color: "text-neutral-200" },
    { top: 70, left: 105, color: "text-neutral-200" },
    { top: 105, left: 105, color: "text-neutral-200" },
    { top: 140, left: 105, color: "text-neutral-200" },
    { top: 0, left: 140, color: "text-[#ff7152]" },
    { top: 35, left: 140, color: "text-neutral-200" },
    { top: 70, left: 140, color: "text-neutral-200" },
    { top: 105, left: 140, color: "text-neutral-200" },
    { top: 140, left: 140, color: "text-neutral-200" },
  ];

  return (
    <section className="relative w-full max-w-[1358px] h-[490px] mx-auto my-12">
      <div className="relative w-full h-[490px]">
        {/* Decorative plus signs */}
        <div className="absolute w-[187px] h-[166px] top-[324px] right-0">
          {plusSigns.map((plus, index) => (
            <div
              key={index}
              className={`absolute top-[${plus.top}px] left-[${plus.left}px] ${plus.color} font-normal text-[22px] font-['Roboto',Helvetica]`}
            >
              +
            </div>
          ))}
        </div>

        {/* Background container */}
        <div className="relative w-full h-[407px] mt-[13px]">
          <Card className="absolute w-[1170px] h-[407px] top-0 left-[87px] bg-light-color rounded-[20px_129px_20px_20px] rotate-180 opacity-20" />

          {/* Decorative images */}
          <img
            className="absolute w-[264px] h-[352px] top-0 right-[87px]"
            alt="Decorative element"
            src="/mask-group.png"
          />

          <img
            className="absolute w-[480px] h-[361px] top-[46px] left-0"
            alt="Decorative element"
            src="/mask-group-1.png"
          />
        </div>

        {/* Email input field */}
        <div className="absolute w-[423px] h-[68px] top-[274px] left-[339px]">
          <div className="relative w-full h-full bg-white rounded-[10px] flex items-center">
            <div className="absolute w-[21px] h-[18px] top-[25px] left-[31px]">
              <div className="relative h-[18px] rounded-[5px]">
                <img
                  className="absolute w-[13px] h-[5px] top-1.5 left-1"
                  alt="Email icon"
                  src="/vector-5.svg"
                />
                <div className="absolute w-[21px] h-[18px] top-0 left-0 rounded-[5px] border border-solid border-[#39425d]" />
              </div>
            </div>
            <Input
              className="h-full border-none pl-16 text-[#39425d] font-['Montserrat',Helvetica] text-sm"
              placeholder="Your email"
            />
          </div>
        </div>

        {/* Subscribe button */}
        <div className="absolute w-[182px] h-[68px] top-[274px] left-[784px]">
          <Button className="w-[180px] h-[68px] rounded-[10px] bg-[#FF946D] hover:bg-[#ff7152]">
            <span className="font-['Open_Sans',Helvetica] font-normal text-white text-[17px]">
              Subscribe
            </span>
          </Button>
        </div>

        {/* Heading */}
        <h2 className="absolute top-[92px] left-[232px] font-['Poppins',Helvetica] font-semibold text-text-clr text-[33px] text-center leading-[54px]">
          Subscribe to get information, latest news and other
          <br />
          interesting offers about Jadoo
        </h2>

        {/* Decorative icon */}
        <div className="absolute w-[70px] h-[70px] top-0 right-[113px] rounded-[35px] bg-white shadow-md flex items-center justify-center">
          <img
            className="w-[45px] h-[43px]"
            alt="Send icon"
            src="/send--2--1.png"
          />
        </div>
      </div>
    </section>
  );
};
