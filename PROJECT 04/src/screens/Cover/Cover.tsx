import React from "react";
import { Badge } from "../../components/ui/badge";

export const Cover = (): JSX.Element => {
  const features = [
    { id: 1, text: "Organized Layers" },
    { id: 2, text: "Stylish & Modern Design" },
    { id: 3, text: "Fully Customizable" },
    { id: 4, text: "With Design System" },
  ];

  const screenshots = [
    {
      id: 1,
      src: "/home-page-1.png",
      alt: "Home page",
      className: "absolute w-[290px] h-[377px] top-[65px] left-[238px]",
    },
    {
      id: 2,
      src: "/home-page-1.png",
      alt: "Home page",
      className: "absolute w-[121px] h-[377px] top-[81px] left-[884px]",
    },
    {
      id: 3,
      src: "/item-details-page.png",
      alt: "Item details page",
      className: "absolute w-[290px] h-[287px] top-0 left-[536px]",
    },
    {
      id: 4,
      src: "/cart-page-2.png",
      alt: "Cart page",
      className: "absolute w-[326px] h-[254px] top-[242px] left-[336px]",
    },
    {
      id: 5,
      src: "/cart-page-2.png",
      alt: "Cart page",
      className: "w-[320px] h-[128px] top-[368px] left-[685px] absolute",
    },
    {
      id: 6,
      src: "/cart-page-2.png",
      alt: "Cart page",
      className: "w-[194px] h-48 top-0 left-[812px] absolute",
    },
    {
      id: 7,
      src: "/on-boarding-screen-4.png",
      alt: "On boarding screen",
      className: "h-[138px] top-0 left-[480px] absolute w-[290px]",
    },
    {
      id: 8,
      src: "/on-boarding-screen-4.png",
      alt: "On boarding screen",
      className: "h-[70px] top-[425px] left-[490px] absolute w-[290px]",
    },
    {
      id: 9,
      src: "/on-boarding-screen-2.png",
      alt: "On boarding screen",
      className: "h-[146px] top-[350px] left-[71px] absolute w-[290px]",
    },
    {
      id: 10,
      src: "/on-boarding-screen-1-1.png",
      alt: "On boarding screen",
      className: "absolute w-[290px] h-[377px] top-[94px] left-[653px]",
    },
  ];

  return (
    <div className="bg-[#f5ffd1] flex flex-row justify-center w-full">
      <div className="bg-[#f5ffd1] w-[1024px] h-[570px]">
        <div className="relative w-[1005px] h-[570px] left-8">
          <div className="absolute w-[1005px] h-[570px] top-0 left-0">
            {screenshots.map((screenshot) => (
              <img
                key={screenshot.id}
                className={`${screenshot.className} object-cover`}
                alt={screenshot.alt}
                src={screenshot.src}
              />
            ))}

            <h1 className="absolute h-[93px] top-[95px] left-0 [font-family:'Manrope',Helvetica] font-extrabold text-colormaroon text-3xl tracking-[0] leading-normal">
              Grocery Shopping <br />
              Ecommerce App
            </h1>

            <Badge className="absolute w-[136px] h-6 top-[347px] left-0 bg-white rounded-lg flex items-center justify-start px-2 text-sm font-bold text-colorblack">
              <img
                className="w-3 h-3 mr-1.5"
                alt="Check decagram"
                src="/check-decagram.svg"
              />
              With Design System
            </Badge>
          </div>

          <h2 className="absolute h-[18px] top-[212px] left-0 [font-family:'Manrope',Helvetica] font-extrabold text-gray-1 text-base tracking-[0] leading-normal">
            Premium UI Kit
          </h2>

          {features.slice(0, 3).map((feature, index) => (
            <Badge
              key={feature.id}
              className={`absolute h-6 left-0 bg-white rounded-lg flex items-center justify-start px-2 text-sm font-bold text-colorblack ${
                index === 0
                  ? "w-[117px] top-[269px]"
                  : index === 1
                    ? "w-[140px] top-[320px]"
                    : "w-[122px] top-[371px]"
              }`}
            >
              <img
                className="w-3 h-3 mr-1.5"
                alt="Check decagram"
                src="/check-decagram.svg"
              />
              {feature.text}
            </Badge>
          ))}

          <p className="absolute h-[11px] top-[440px] left-0 [font-family:'Manrope',Helvetica] font-bold text-colorblack text-sm tracking-[0] leading-normal">
            Support on
          </p>

          <div className="absolute w-[95px] h-[36px] top-[32px] left-0 bg-[url(/image-1.png)] bg-[100%_100%]" />

          <div className="flex absolute top-[466px] left-0 gap-1.5">
            <img
              className="w-[38px] h-[36px] object-cover"
              alt="Adobexdplatform com"
              src="/adobexdplatform-com---png.png"
            />
            <img
              className="w-[53px] h-[53px] object-cover"
              alt="Figma png"
              src="/figma---png.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};