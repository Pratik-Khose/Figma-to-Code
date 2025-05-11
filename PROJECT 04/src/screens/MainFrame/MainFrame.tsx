import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const MainFrame = (): JSX.Element => {
  const designTools = [
    {
      name: "Figma",
      icon: "/group.png",
      iconClass: "w-[14px] h-[20px] top-1 left-[7px]",
    },
    {
      name: "Photoshop",
      icon: "/adobe-photoshop-icon-1.svg",
      iconClass: "w-[25px] h-[25px]",
    },
    {
      name: "Illustrator",
      icon: "/adobe-illustrator-cc-seeklogo-com-1.svg",
      iconClass: "w-[25px] h-[25px]",
    },
  ];

  const statistics = [
    { value: "40", label: "Screens", left: "285px" },
    { value: "3", label: "Style", left: "546px" },
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="bg-[url(/screen-1.png)] bg-cover bg-[50%_50%] w-[1024px] h-[768px] relative">
        {/* Logo and Tagline */}
        <div className="absolute w-[220px] h-[180px] top-[155px] left-[49px]">
          <img
            className="absolute w-[90px] h-[90px] top-0 left-[65px] object-cover"
            alt="Screenshot"
            src="/screenshot--773--1.png"
          />

          <div className="absolute w-[220px] h-[90px] top-[89px] left-0 [font-family:'Fira_Sans',Helvetica] font-normal text-transparent text-[38px] text-center tracking-[0] leading-[42px]">
            <span className="text-black">
              STYLISH
              <br />
            </span>
            <span className="[font-family:'Sacramento',Helvetica] text-black text-[30px] leading-[33px]">
              Find Your Style
            </span>
          </div>
        </div>

        {/* App Title */}
        <div className="absolute w-[336px] h-12 top-[404px] left-[58px] [font-family:'Poppins',Helvetica] font-medium text-black text-[38px] tracking-[0.75px] leading-[47.2px] whitespace-nowrap">
          Shopping App
        </div>

        {/* UI Kit Card */}
        <div className="absolute w-[302px] h-[75px] top-[479px] left-[58px]">
          <Card className="relative w-[300px] h-[75px] bg-[#9775fa] rounded-[8px] border-none">
            <CardContent className="absolute w-[286px] h-[59px] top-2 left-2 p-0 [font-family:'Inria_Sans',Helvetica] font-normal text-white text-[24px] tracking-[3.48px] leading-[normal]">
              Ecommerce Shopping App UI Kit
            </CardContent>
          </Card>
        </div>

        {/* Design Tools */}
        {designTools.map((tool, index) => (
          <React.Fragment key={tool.name}>
            <div
              className={`absolute w-[25px] h-[25px] top-[${579 + index * 45}px] left-[${tool.name === "Illustrator" ? 59 : 58}px] ${tool.name === "Figma" ? "bg-[#424242] rounded-lg overflow-hidden" : ""}`}
            >
              <img
                className={tool.iconClass}
                alt={`${tool.name} icon`}
                src={tool.icon}
              />
            </div>
            <div
              className={`absolute w-[${tool.name === "Figma" ? 62 : tool.name === "Photoshop" ? 104 : 95}px] top-[${581 + index * 44}px] left-[${tool.name === "Illustrator" ? 93 : 92}px] [font-family:'Poppins',Helvetica] font-medium text-black text-[19px] text-center tracking-[0.38px] leading-[23.6px] whitespace-nowrap`}
            >
              {tool.name}
            </div>
          </React.Fragment>
        ))}

        {/* Statistics */}
        {statistics.map((stat) => (
          <div
            key={stat.label}
            className="absolute top-[609px]"
            style={{ left: stat.left }}
          >
            <div className="[font-family:'Inter',Helvetica] font-normal text-transparent text-[60px] tracking-[0] leading-[60px]">
              <span className="font-extrabold text-[#9775fa] leading-[84px]">
                {stat.value}
                <br />
              </span>
              <span className="font-semibold text-[#1d1e20] text-[30px] leading-[42px]">
                {stat.label}
              </span>
            </div>
          </div>
        ))}

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="absolute w-[2px] h-[80px] top-[624px] left-[493px] bg-[#9775fa]"
        />
      </div>
    </div>
  );
};