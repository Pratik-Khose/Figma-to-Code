import {
  CarIcon,
  HeartIcon,
  HotelIcon,
  PlaneIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define destination data structure for reusability
const destinations = [
  {
    id: 1,
    name: "Mauritius",
    rating: 4.7,
    duration: "3Days 4 Nights",
    image: "..//frame-31-10.png",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    features: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    price: "₹88,952",
  },
  {
    id: 2,
    name: "Havelock",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "..//frame-31-11.png",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    features: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    price: "₹88,952",
  },
  {
    id: 3,
    name: "Whitsunday Islands",
    rating: 4.5,
    duration: "3Days 4 Nights",
    image: "..//frame-31-12.png",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    features: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    price: "₹88,952",
  },
  {
    id: 4,
    name: "Maldives",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "..//frame-31-16.png",
    amenities: {
      flights: 2,
      hotels: 1,
      transfers: 2,
      activities: 4,
    },
    features: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    originalPrice: "₹88,952",
    price: "₹88,952",
  },
];

export const FrameByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <h2 className="mb-6 ml-[110px] font-bold text-white text-[29.3px]">
        Popular Beach Destinations
      </h2>

      <div className="flex gap-[22px] ml-[110px] overflow-x-auto pb-4">
        {destinations.map((destination) => (
          <Card
            key={destination.id}
            className="flex-shrink-0 rounded-[14.67px] shadow-[0px_3.67px_14.67px_#9e9e9e40] border-0"
          >
            <CardContent className="p-[14.67px] flex flex-col gap-[22px]">
              <div
                className="relative w-[284.29px] h-[183.42px] rounded-[7.34px] overflow-hidden"
                style={{
                  background: `url(${destination.image}) 50% 50% / cover, linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
                }}
              >
                <button className="absolute w-[29px] h-[29px] top-[15px] right-[15px] text-white">
                  <HeartIcon className="w-full h-full" />
                </button>
              </div>

              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-[7.34px]">
                  <div className="flex w-full items-start justify-between opacity-80">
                    <h3 className="mt-[-0.92px] font-normal text-[22px]">
                      {destination.name}
                    </h3>

                    <div className="flex items-center gap-[7.34px]">
                      <StarIcon className="w-[22.01px] h-[22.01px] fill-current text-yellow-400" />
                      <span className="mt-[-0.92px] font-normal text-[22px]">
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  <p className="opacity-50 font-normal text-[14.7px]">
                    {destination.duration}
                  </p>
                </div>

                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col w-[55.02px] items-center gap-[7.34px]">
                    <PlaneIcon className="w-[22.01px] h-[22.01px]" />
                    <span className="w-[44.02px] h-[13.76px] opacity-50 text-[11px] text-center">
                      {destination.amenities.flights} Flights
                    </span>
                  </div>

                  <div className="flex flex-col w-[45.85px] items-center gap-[7.34px]">
                    <HotelIcon className="w-[22.01px] h-[22.01px]" />
                    <span className="opacity-50 text-[11px] text-center">
                      {destination.amenities.hotels} HotelIcon
                    </span>
                  </div>

                  <div className="flex flex-col w-[55.02px] items-center gap-[7.34px]">
                    <CarIcon className="w-[22.01px] h-[22.01px]" />
                    <span className="opacity-50 text-[11px] text-center">
                      {destination.amenities.transfers} Transfers
                    </span>
                  </div>

                  <div className="flex flex-col w-[55.02px] items-center gap-[7.34px]">
                    <StarIcon className="w-[22.01px] h-[22.01px]" />
                    <span className="opacity-50 text-[11px] text-center">
                      {destination.amenities.activities} Activities
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[7.34px]">
                  {destination.features.map((feature, index) => (
                    <p
                      key={index}
                      className="opacity-50 font-normal text-[14.7px]"
                    >
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-[22.01px]">
                  <span className="font-thin text-[14.7px] line-through">
                    {destination.originalPrice}
                  </span>

                  <div className="flex items-end gap-[3.67px]">
                    <span className="mt-[-0.92px] font-bold text-[22px]">
                      {destination.price}
                    </span>
                    <span className="opacity-50 font-normal text-[11px]">
                      Per person
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
