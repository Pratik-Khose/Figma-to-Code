import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

// Define destination card data for reusability
const destinationCards = [
  {
    id: 1,
    name: "Havelock",
    image: "..//frame-31-11.png",
    heartIcon: "/bytesize-heart-7.svg",
    rating: "4.9",
    duration: "3Days 4 Nights",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    description: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    currentPrice: "₹88,952",
  },
  {
    id: 2,
    name: "Maldives",
    image: "..//frame-31-16.png",
    heartIcon: "/bytesize-heart-1.svg",
    rating: "4.9",
    duration: "3Days 4 Nights",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    description: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    currentPrice: "₹88,952",
  },
];

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <h2 className="text-[29.3px] font-bold mb-8 ml-[110px]">
        Recently Viewed
      </h2>

      <ScrollArea className="w-full">
        <div className="flex gap-[22.01px] ml-[110px] pb-4">
          {destinationCards.map((destination) => (
            <Card
              key={destination.id}
              className="flex-shrink-0 rounded-[14.67px] shadow-[0px_3.67px_14.67px_#9e9e9e40] border-none"
            >
              <CardContent className="p-[14.67px] space-y-[22.01px]">
                <div
                  className="relative w-[284.29px] h-[183.42px] rounded-[19.24px] overflow-hidden"
                  style={{
                    background: `url(${destination.image}) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)`,
                  }}
                >
                  <img
                    className="absolute w-[29px] h-[29px] top-[15px] left-60"
                    alt="HeartIcon icon"
                    src={destination.heartIcon}
                  />
                </div>

                <div className="space-y-[22.01px]">
                  <div className="space-y-[7.34px]">
                    <div className="flex justify-between items-start w-full opacity-80">
                      <div className="text-[22px] font-normal">
                        {destination.name}
                      </div>

                      <div className="flex items-center gap-[7.34px]">
                        <img
                          className="w-[22.01px] h-[22.01px]"
                          alt="StarIcon rating"
                          src="/ant-design-star-filled.svg"
                        />
                        <span className="text-[22px] font-normal">
                          {destination.rating}
                        </span>
                      </div>
                    </div>

                    <div className="text-[14.7px] font-normal opacity-50">
                      {destination.duration}
                    </div>
                  </div>

                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center gap-[7.34px] w-[55.02px]">
                      <img
                        className="w-[22.01px] h-[22.01px]"
                        alt="Flight icon"
                        src="/ic-baseline-flight.svg"
                      />
                      <div className="text-[11px] opacity-50 w-[44.02px] h-[13.76px]">
                        {destination.amenities.flights} Flights
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-[7.34px] w-[45.85px]">
                      <img
                        className="w-[22.01px] h-[22.01px]"
                        alt="HotelIcon icon"
                        src={
                          destination.id === 1
                            ? "/ri-hotel-line-1.svg"
                            : "/ri-hotel-line.svg"
                        }
                      />
                      <div className="text-[11px] opacity-50">
                        {destination.amenities.hotels} HotelIcon
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-[7.34px] w-[55.02px]">
                      <img
                        className="w-[22.01px] h-[22.01px]"
                        alt="CarIcon icon"
                        src="/cil-car-alt.svg"
                      />
                      <div className="text-[11px] opacity-50 mx-[-0.99px]">
                        {destination.amenities.transfers} Transfers
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-[7.34px] w-[55.02px]">
                      <img
                        className="w-[22.01px] h-[22.01px]"
                        alt="Trekking icon"
                        src={
                          destination.id === 1
                            ? "/iconoir-trekking.svg"
                            : "/iconoir-trekking-5.svg"
                        }
                      />
                      <div className="text-[11px] opacity-50 mx-[-0.49px]">
                        {destination.amenities.activities} Activities
                      </div>
                    </div>
                  </div>

                  <div className="space-y-[7.34px]">
                    {destination.description.map((item, index) => (
                      <div
                        key={index}
                        className="text-[14.7px] font-normal opacity-50"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-[22.01px]">
                    <div className="text-[14.7px] font-thin line-through">
                      {destination.originalPrice}
                    </div>

                    <div className="flex items-end gap-[3.67px]">
                      <div className="text-[22px] font-bold">
                        {destination.currentPrice}
                      </div>
                      <div className="text-[11px] opacity-50">Per person</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="flex-shrink-0 w-[313.64px] h-[503.48px] bg-[#3886ab] rounded-[14.67px] overflow-hidden shadow-[0px_3.67px_14.67px_#9e9e9e40] border-none">
            <CardContent className="p-0">
              <div className="relative w-[625px] h-[507px] left-[-143px] bg-[url(/image-26.png)] bg-[100%_100%]">
                <div className="flex flex-col w-[270px] items-start gap-[22.01px] relative top-[50px] left-[165px]">
                  <div className="w-[269.62px] gap-[7.34px] flex flex-col items-start">
                    <div className="w-[269.62px] gap-[22.01px] flex items-start">
                      <h3 className="text-[22px] font-bold text-white">
                        Summer Bonanza!
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[14.67px]">
                    <p className="w-[269.62px] text-[14.7px] font-normal text-white">
                      Enjoy confortable transfers in shared coaches
                    </p>
                    <p className="w-[269.62px] text-[14.7px] font-normal text-white">
                      Choose from 5 flights per week
                    </p>
                    <p className="w-[269.62px] text-[14.7px] font-normal text-white leading-[22.0px]">
                      Get a free Rapid Antigen Test at selected hotels
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
