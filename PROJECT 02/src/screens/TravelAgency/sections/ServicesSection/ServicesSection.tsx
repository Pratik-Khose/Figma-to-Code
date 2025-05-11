import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Data for the plus sign pattern
  const plusSignsData = [
    { top: 0, left: 0, color: "text-[#ff7152]" },
    { top: 35, left: 0, color: "text-neutral-200" },
    { top: 70, left: 0, color: "text-neutral-200" },
    { top: 0, left: 35, color: "text-neutral-200" },
    { top: 35, left: 35, color: "text-neutral-200" },
    { top: 70, left: 35, color: "text-neutral-200" },
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
    { top: 0, left: 140, color: "text-neutral-200" },
    { top: 35, left: 140, color: "text-neutral-200" },
    { top: 70, left: 140, color: "text-neutral-200" },
    { top: 105, left: 140, color: "text-neutral-200" },
    { top: 140, left: 140, color: "text-neutral-200" },
  ];

  // Service cards data
  const serviceCards = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      iconSection: (
        <div className="relative h-[75px]">
          <div className="absolute w-[50px] h-[49px] top-0 left-[17px] bg-[#fff1da] rounded-[18px_5px_10px_5px] rotate-180" />
          <div className="absolute w-[67px] h-[70px] top-0 left-0">
            <div className="h-[70px]">
              <div className="relative w-[67px] h-[70px]">
                <img
                  className="absolute w-3.5 h-[17px] top-[50px] left-2.5"
                  alt="Vector"
                  src="/vector-39.svg"
                />
                <img
                  className="absolute w-[17px] h-[19px] top-12 left-[5px]"
                  alt="Vector"
                  src="/vector-38.svg"
                />
                <img
                  className="absolute w-[19px] h-1 top-[66px] left-2"
                  alt="Vector"
                  src="/vector-36.svg"
                />
                <img
                  className="absolute w-2.5 h-1 top-[66px] left-0"
                  alt="Vector"
                  src="/vector-34.svg"
                />
                <img
                  className="absolute w-2 h-[11px] top-10 left-5"
                  alt="Vector"
                  src="/vector-32.svg"
                />
                <img
                  className="absolute w-2.5 h-[13px] top-[38px] left-[15px]"
                  alt="Vector"
                  src="/vector-35.svg"
                />
                <img
                  className="absolute w-2 h-2 top-0 left-[58px]"
                  alt="Vector"
                  src="/vector-43.svg"
                />
                <img
                  className="absolute w-2 h-1.5 top-0 left-[58px]"
                  alt="Vector"
                  src="/vector-40.svg"
                />
                <img
                  className="absolute w-[37px] h-1.5 top-[3px] left-5"
                  alt="Group"
                  src="/group-11.png"
                />
                <img
                  className="absolute w-[27px] h-[9px] top-[7px] left-[30px]"
                  alt="Group"
                  src="/group-12.png"
                />
                <img
                  className="absolute w-1.5 h-[37px] top-2.5 left-[58px]"
                  alt="Group"
                  src="/group-13.png"
                />
                <img
                  className="absolute w-[9px] h-[27px] top-2.5 left-[51px]"
                  alt="Group"
                  src="/group-14.png"
                />
                <img
                  className="absolute w-[7px] h-[7px] top-1 left-[55px]"
                  alt="Vector"
                  src="/vector-11.svg"
                />
                <img
                  className="absolute w-[5px] h-[5px] top-1 left-[55px]"
                  alt="Vector"
                  src="/vector-20.svg"
                />
                <img
                  className="absolute w-2 h-2 top-[5px] left-[54px]"
                  alt="Group"
                  src="/group-15.png"
                />
                <img
                  className="absolute w-10 h-10 top-[13px] left-[22px]"
                  alt="Vector"
                  src="/vector-18.svg"
                />
                <img
                  className="absolute w-3 h-10 top-[5px] left-3.5"
                  alt="Group"
                  src="/group-16.png"
                />
                <img
                  className="absolute w-[39px] h-[39px] top-[11px] left-[25px]"
                  alt="Vector"
                  src="/vector-23.svg"
                />
                <img
                  className="absolute w-3 h-3 top-0.5 left-[17px]"
                  alt="Vector"
                  src="/vector-25.svg"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      iconSection: (
        <div className="relative h-[153px]">
          <div className="absolute w-[50px] h-[49px] top-[42px] left-12 bg-[#fff1da] rounded-[18px_5px_10px_5px]" />
          <div className="absolute w-[137px] h-[95px] top-[29px] left-[15px] rotate-[-31.84deg]">
            <div className="relative w-32 h-[70px] top-[13px] left-[5px] rotate-[-12.05deg]">
              <div className="relative w-[124px] h-[94px] top-[-7px] left-px">
                <img
                  className="absolute w-[13px] h-3 top-[53px] left-[63px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-10.svg"
                />
                <img
                  className="absolute w-2.5 h-[9px] top-[25px] left-16 rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-10.svg"
                />
                <img
                  className="absolute w-8 h-[29px] top-4 left-[51px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-4.svg"
                />
                <img
                  className="absolute w-[100px] h-[71px] top-2.5 left-[18px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-8.svg"
                />
                <img
                  className="absolute w-[69px] h-[54px] top-[33px] left-[30px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-16.svg"
                />
                <img
                  className="absolute w-[26px] h-[26px] top-[33px] left-0.5 rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-6.svg"
                />
                <img
                  className="absolute w-[19px] h-[15px] top-[53px] left-2 rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-13.svg"
                />
                <img
                  className="absolute w-2.5 h-[9px] top-[22px] left-[106px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-3.svg"
                />
                <img
                  className="absolute w-2.5 h-[11px] top-[29px] left-[95px] rotate-[12.05deg]"
                  alt="Vector"
                  src="/vector-19.svg"
                />
                <img
                  className="absolute w-12 h-14 top-4 left-11 rotate-[12.05deg]"
                  alt="Group"
                  src="/group-10.png"
                />
              </div>
            </div>
          </div>
        </div>
      ),
      hasRedBox: true,
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      iconSection: (
        <div className="relative h-[75px]">
          <div className="absolute w-[50px] h-[49px] top-0 left-[17px] bg-[#fff1da] rounded-[18px_5px_10px_5px] rotate-180" />
          <img
            className="absolute w-10 h-[69px] top-1.5 left-0 object-cover"
            alt="Image"
            src="/image-25.png"
          />
        </div>
      ),
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      iconSection: (
        <div className="relative h-[66px]">
          <div className="absolute w-[50px] h-[49px] top-[17px] left-[27px] bg-[#fff1da] rounded-[18px_5px_10px_5px]" />
          <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-[url(/group-17.png)] bg-[100%_100%]" />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1232px] mx-auto py-12">
      {/* Decorative plus signs pattern */}
      <div className="relative float-right w-[197px] h-[166px]">
        {plusSignsData.map((plus, index) => (
          <div
            key={index}
            className={`absolute ${plus.color} [font-family:'Roboto',Helvetica] font-normal text-[22px]`}
            style={{ top: `${plus.top}px`, left: `${plus.left}px` }}
          >
            +
          </div>
        ))}
      </div>

      {/* Section header */}
      <div className="text-center mb-12">
        <p className="[font-family:'Poppins',Helvetica] font-semibold text-text-clr text-lg mb-2">
          CATEGORY
        </p>
        <h2 className="[font-family:'Volkhov',Helvetica] font-bold text-x-3rd text-[50px]">
          We Offer Best Services
        </h2>
      </div>

      {/* Service cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {serviceCards.map((service, index) => (
          <div key={index} className="relative w-[267px]">
            {service.hasRedBox && (
              <div className="absolute w-[100px] h-[100px] bottom-0 left-[-35px] bg-[#df6951] rounded-[30px_0px_10px_0px]" />
            )}
            <Card className="relative bg-white rounded-[36px] shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005]">
              <CardContent className="flex flex-col items-center pt-8 pb-6">
                <div className="flex justify-center mb-6 h-[75px]">
                  {service.iconSection}
                </div>
                <h3 className="[font-family:'Open_Sans',Helvetica] font-normal text-text-heading-color text-xl mb-4 text-center">
                  {service.title}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-text-clr text-base text-center leading-[26px] max-w-[181px]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
