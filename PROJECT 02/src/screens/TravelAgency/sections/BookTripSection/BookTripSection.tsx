import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BookTripSection = (): JSX.Element => {
  // Data for the three steps
  const steps = [
    {
      id: 1,
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-x-3",
      icon: "/group-9.png",
    },
    {
      id: 2,
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-x-4",
      icon: "/water-sport-1.png",
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-x-5",
      icon: "/taxi-car-cab-vehicle-transport.png",
    },
  ];

  return (
    <section className="w-full max-w-[1118px] mx-auto py-12 relative">
      <div className="text-center mb-6">
        <p className="font-semibold text-text-clr text-lg">Easy and Fast</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <h2 className="text-x-3rd text-[50px] tracking-[0] leading-normal font-bold [font-family:'Volkhov',Helvetica] mb-12">
            Book Your Next Trip <br />
            in 3 Easy Steps
          </h2>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-5">
                <div
                  className={`w-[47px] h-12 rounded-[13px] ${step.bgColor} flex items-center justify-center`}
                >
                  {step.icon.includes("group-9") ? (
                    <div className="w-[22px] h-[22px] rotate-180 bg-[url(/group-9.png)] bg-[100%_100%]" />
                  ) : step.icon.includes("water-sport") ? (
                    <img
                      className="w-[22px] h-[18px]"
                      alt="Water sport"
                      src="/water-sport-1.png"
                    />
                  ) : (
                    <div className="w-[22px] h-[19px] bg-[url(/taxi-car-cab-vehicle-transport.png)] bg-[100%_100%]" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-text-clr text-base leading-[19.9px]">
                    {step.title}
                  </h3>
                  <p className="font-normal text-text-clr text-base leading-[19.9px] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-[354px] h-[367px] absolute top-0 right-16 bg-[#59b1e6cc] rounded-[177px/183.5px] blur-[75px] opacity-40" />

          <div className="relative mt-[59px]">
            {/* Main Trip Card */}
            <Card className="w-[370px] rounded-[26px] shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] bg-white">
              <CardContent className="p-0 relative">
                <img
                  className="w-[321px] h-[161px] mt-5 mx-auto object-cover rounded-t-lg"
                  alt="Trip to Greece"
                  src="/rectangle-17.png"
                />

                <div className="p-6">
                  <h3 className="font-medium text-[#080808] text-lg leading-[22.4px] [font-family:'Poppins',Helvetica]">
                    Trip To Greece
                  </h3>

                  <div className="flex items-center mt-4">
                    <span className="font-medium text-text-2 text-base tracking-[-0.08px] leading-[19.9px]">
                      14-29 June
                    </span>
                    <img
                      className="w-px h-4 mx-3"
                      alt="Line"
                      src="/line-3.svg"
                    />
                    <span className="font-medium text-text-2 text-base tracking-[-0.08px] leading-[19.9px]">
                      by Robbin joseph
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-6">
                    <div className="w-9 h-9 bg-circle rounded-[18px] flex items-center justify-center">
                      <div className="relative w-3.5 h-3.5 bg-[url(/group-4.png)] bg-[100%_100%]">
                        <div className="relative w-[11px] h-[11px] top-0.5 left-0.5 bg-[url(/group-5.png)] bg-[100%_100%]" />
                      </div>
                    </div>

                    <div className="w-9 h-9 bg-circle rounded-[18px] flex items-center justify-center">
                      <div className="w-3.5 h-3.5 bg-[url(/group-6.png)] bg-[100%_100%]" />
                    </div>

                    <div className="w-9 h-9 bg-circle rounded-[18px] flex items-center justify-center">
                      <img
                        className="w-3.5 h-3.5"
                        alt="Send"
                        src="/send-2.svg"
                      />
                    </div>
                  </div>

                  <div className="flex items-center mt-6">
                    <div className="w-4 h-4 rotate-180 bg-[url(/group-7.png)] bg-[100%_100%]" />
                    <span className="ml-3 font-medium text-text-2 text-base tracking-[-0.32px] leading-[19.9px]">
                      24 people going
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ongoing Trip Card */}
            <Card className="w-[263px] h-[129px] absolute top-[219px] right-0 rounded-[18px] shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] bg-white">
              <CardContent className="p-4 relative">
                <div className="flex items-center">
                  <div className="relative w-[50px] h-[50px]">
                    <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-white rounded-[25px] shadow-[1px_9px_6px_#69676721] opacity-30" />
                    <img
                      className="w-[50px] h-[50px] absolute"
                      alt="Mask group"
                      src="/mask-group-2.png"
                    />
                  </div>

                  <div className="ml-4">
                    <p className="font-medium text-text-2 text-sm tracking-[-0.49px] leading-[17.4px]">
                      Ongoing
                    </p>
                    <h3 className="font-medium text-[#080808] text-lg tracking-[-0.27px] leading-[22.4px] mt-1">
                      Trip to rome
                    </h3>
                  </div>
                </div>

                <div className="mt-4 ml-[82px]">
                  <p className="font-medium text-sm leading-[17.4px]">
                    <span className="text-[#8a79df] tracking-[-0.11px]">
                      40%
                    </span>
                    <span className="text-[#080808]"> completed</span>
                  </p>

                  <div className="w-[156px] h-[5px] mt-2 bg-circle rounded-[30px]">
                    <div className="w-[73px] h-[5px] bg-x-1 rounded-[30px]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="w-5 h-[19px] absolute bottom-[31px] right-[166px] bg-[url(/group-8.png)] bg-[100%_100%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
