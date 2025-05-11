import {
  CarIcon,
  HeartIcon,
  HotelIcon,
  MapIcon,
  PlaneIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data structure for destination cards
const destinations = [
  {
    id: 1,
    name: "Mauritius",
    rating: 4.7,
    duration: "3Days 4 Nights",
    image: "/image-27.png",
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
    currentPrice: "₹88,952",
  },
  {
    id: 2,
    name: "Havelock",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "/image-28.png",
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
    currentPrice: "₹88,952",
  },
  {
    id: 3,
    name: "Whitsunday Islands",
    rating: 4.5,
    duration: "3Days 4 Nights",
    image: "/image-29.png",
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
    currentPrice: "₹88,952",
  },
  {
    id: 4,
    name: "Maldives",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "/image-30.png",
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
    currentPrice: "₹88,952",
  },
];

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1430px] mx-auto py-8">
      <h2 className="text-[29.3px] font-bold mb-8 px-4 md:px-0">
        Honeymoon Freebies Special
      </h2>

      <div className="flex gap-[22px] overflow-x-auto pb-4 px-4 md:px-0">
        {destinations.map((destination) => (
          <Card
            key={destination.id}
            className="flex-shrink-0 rounded-[14.67px] shadow-[0px_3.67px_14.67px_#9e9e9e40] border-none"
          >
            <CardContent className="p-[14.67px] flex flex-col gap-[22px]">
              <div className="relative w-[284px] h-[183px] rounded-[7.34px] overflow-hidden">
                <div className="absolute top-5 right-5 z-10">
                  <HeartIcon className="w-[29px] h-[29px] text-white stroke-[1.5px]" />
                </div>
                <img
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-[7.34px]">
                  <div className="flex justify-between items-center opacity-80">
                    <h3 className="text-[22px] font-normal">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-[7.34px]">
                      <StarIcon className="w-[22px] h-[22px] fill-current text-yellow-500" />
                      <span className="text-[22px] font-normal">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-[14.7px] opacity-50">
                    {destination.duration}
                  </p>
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex flex-col items-center gap-[7.34px]">
                    <PlaneIcon className="w-[22px] h-[22px]" />
                    <span className="text-[11px] opacity-50">
                      {destination.amenities.flights} Flights
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-[7.34px]">
                    <HotelIcon className="w-[22px] h-[22px]" />
                    <span className="text-[11px] opacity-50">
                      {destination.amenities.hotels} Hotel
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-[7.34px]">
                    <CarIcon className="w-[22px] h-[22px]" />
                    <span className="text-[11px] opacity-50">
                      {destination.amenities.transfers} Transfers
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-[7.34px]">
                    <MapIcon className="w-[22px] h-[22px]" />
                    <span className="text-[11px] opacity-50">
                      {destination.amenities.activities} Activities
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[7.34px]">
                  {destination.features.map((feature, index) => (
                    <p key={index} className="text-[14.7px] opacity-50">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-[22px]">
                  <span className="text-[14.7px] font-thin line-through">
                    {destination.originalPrice}
                  </span>
                  <div className="flex items-end gap-[3.67px]">
                    <span className="text-[22px] font-bold">
                      {destination.currentPrice}
                    </span>
                    <span className="text-[11px] opacity-50">Per person</span>
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
