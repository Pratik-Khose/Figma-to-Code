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
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

// Package data for mapping
const packages = [
  {
    id: 1,
    destination: "Mauritius",
    rating: 4.7,
    duration: "3Days 4 Nights",
    image: "/image-24.png",
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
    price: "₹88,952",
  },
  {
    id: 2,
    destination: "Havelock",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "/image-25.png",
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
    price: "₹88,952",
  },
  {
    id: 3,
    destination: "Whitsunday Islands",
    rating: 4.5,
    duration: "3Days 4 Nights",
    image: "/image-31.png",
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
    price: "₹88,952",
  },
  {
    id: 4,
    destination: "Maldives",
    rating: 4.9,
    duration: "3Days 4 Nights",
    image: "/image-32.png",
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
    price: "₹88,952",
  },
];

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <h2 className="mb-6 ml-[110px] font-bold text-[29.3px] text-black">
        All Inclusive Packages!
      </h2>

      <ScrollArea className="w-full">
        <div className="flex gap-[22px] ml-[110px] pb-4">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="flex-shrink-0 rounded-[14.67px] shadow-[0px_3.67px_14.67px_#9e9e9e40] border-none"
            >
              <CardContent className="p-[14.67px] space-y-[22px]">
                {/* Package Image */}
                <div className="relative w-[284px] h-[183px] rounded-[7.34px] overflow-hidden">
                  <div className="relative w-full h-full">
                    <button className="absolute z-10 top-[18px] right-[18px] w-[29px] h-[29px] text-white">
                      <HeartIcon className="w-full h-full" />
                    </button>
                    <img
                      className="absolute w-full h-full object-cover"
                      alt={`${pkg.destination} image`}
                      src={pkg.image}
                    />
                  </div>
                </div>

                {/* Package Details */}
                <div className="space-y-[22px]">
                  {/* Destination and Rating */}
                  <div className="space-y-[7.34px]">
                    <div className="flex justify-between items-start w-full opacity-80">
                      <h3 className="font-normal text-[22px] text-black">
                        {pkg.destination}
                      </h3>
                      <div className="flex items-center gap-[7.34px]">
                        <StarIcon className="w-[22px] h-[22px] fill-current text-yellow-500" />
                        <span className="font-normal text-[22px] text-black">
                          {pkg.rating}
                        </span>
                      </div>
                    </div>
                    <p className="opacity-50 font-normal text-[14.7px] text-black">
                      {pkg.duration}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center gap-[7.34px]">
                      <PlaneIcon className="w-[22px] h-[22px]" />
                      <span className="opacity-50 text-[11px] text-black">
                        {pkg.amenities.flights} Flights
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-[7.34px]">
                      <HotelIcon className="w-[22px] h-[22px]" />
                      <span className="opacity-50 text-[11px] text-black">
                        {pkg.amenities.hotels} Hotel
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-[7.34px]">
                      <CarIcon className="w-[22px] h-[22px]" />
                      <span className="opacity-50 text-[11px] text-black">
                        {pkg.amenities.transfers} Transfers
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-[7.34px]">
                      <MapIcon className="w-[22px] h-[22px]" />
                      <span className="opacity-50 text-[11px] text-black">
                        {pkg.amenities.activities} Activities
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-[7.34px]">
                    {pkg.description.map((item, index) => (
                      <p
                        key={index}
                        className="opacity-50 font-normal text-[14.7px] text-black"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-[22px]">
                    <span className="font-thin text-[14.7px] line-through text-black">
                      {pkg.originalPrice}
                    </span>
                    <div className="flex items-end gap-[3.67px]">
                      <span className="font-bold text-[22px] text-black">
                        {pkg.price}
                      </span>
                      <span className="opacity-50 font-normal text-[11px] text-black">
                        Per person
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
