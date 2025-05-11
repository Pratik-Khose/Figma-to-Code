import { HeartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const Frame3ByAnima = (): JSX.Element => {
  // Destination data
  const destinations = [
    { name: "Bali, Indonesia", image: "/image-18.png" },
    { name: "Kerry, Ireland", image: "/image-18-1.png" },
    { name: "Sydney, Australia", image: "/image-18-2.png" },
    { name: "Paris, France", image: "/image-18-3.png" },
  ];

  // Property types data
  const propertyTypes = [
    { name: "Hotels", image: "/image-18-4.png" },
    { name: "Apartments", image: "/image-18-5.png" },
    { name: "Resorts", image: "/image-18-6.png" },
    { name: "Villas", image: "/image-18-7.png" },
  ];

  // Offers data
  const offers = [
    {
      title: "Domestic Flights",
      subtitle: "Huge savings on flight with trxvl.",
      description: "Book domestic flights starting @ just ₹1459",
      image: "/image-19.png",
    },
    {
      title: "International Hotels",
      subtitle: "Enjoy upto 20% off on International Hotels",
      description:
        "Make the most of  this deal on your first booking with trxvl.",
      image: "/image-19-1.png",
    },
    {
      title: "Bank Offer",
      subtitle: "Get upto 30% instant discount",
      description:
        "Get discount on flights, hotels and holiday packages with HDFC bank credit card.",
      image: "/image-19-2.png",
    },
  ];

  // Travel communities data
  const communities = [
    {
      name: "India",
      type: "Travel community",
      travelers: "155,073 travelers",
      background: "/frame-31-19.svg",
    },
    {
      name: "Travel Talk",
      type: "Travel community",
      travelers: "155,073 travelers",
      background: "/frame-31-18.svg",
    },
    {
      name: "Beach",
      type: "Travel community",
      travelers: "155,073 travelers",
      background: "/frame-31-20.svg",
    },
    {
      name: "Mountains",
      type: "Travel community",
      travelers: "155,073 travelers",
      background: "/frame-31-17.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[86.51px] w-full">
      {/* Top Vacation Destinations */}
      <div className="flex flex-col items-start gap-[38.45px] w-full">
        <div className="px-[144.18px] py-[9.61px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[38.4px]">
            Top Vacation Destinations
          </h2>
        </div>

        <ScrollArea className="w-full h-[240.29px]">
          <div className="flex gap-[30px] px-[151px]">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="w-[372px] h-60 rounded-[9.61px] overflow-hidden relative"
                style={{
                  backgroundImage: `url(${destination.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-[25px] left-[29px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[28.8px]">
                  {destination.name}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Offers */}
      <div className="flex flex-col items-start gap-[38.45px] w-full">
        <div className="px-[144.18px] py-[9.61px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#000000] text-[38.4px]">
            Offers
          </h2>
        </div>

        <ScrollArea className="w-full h-[309.98px]">
          <div className="flex gap-[30px] px-[144px]">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="w-[788.17px] shadow-[0px_4.81px_19.22px_#9e9e9e40] rounded-[19.22px] p-[19.22px_19.22px_28.84px]"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-[28.84px]">
                    <div className="relative flex-1 rounded-[25.21px] overflow-hidden">
                      <div className="relative">
                        <div className="absolute top-5 right-5 z-10">
                          <HeartIcon className="w-[38px] h-[38px] text-white" />
                        </div>
                        <img
                          className="w-full object-cover"
                          alt="Offer image"
                          src={offer.image}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[19.22px]">
                      <div className="flex flex-col items-start gap-[19.22px]">
                        <div className="flex flex-col items-start gap-[4.81px]">
                          <div className="opacity-50 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#000000] text-[19.2px]">
                            {offer.title}
                          </div>

                          <div className="w-[372.46px] opacity-80 [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-[#000000] text-[28.8px]">
                            {offer.subtitle}
                          </div>
                        </div>

                        <div className="w-[386.87px] opacity-50 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#000000] text-[19.2px]">
                          {offer.description}
                        </div>
                      </div>

                      <div className="flex items-end w-full">
                        <Button className="bg-[#2659c3] rounded-[38.45px] px-[38.45px] py-[19.22px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-white text-[19.2px]">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Browse by property type */}
      <div className="flex flex-col items-start gap-[38.45px] w-full">
        <div className="px-[144.18px] py-[9.61px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#000000] text-[38.4px]">
            Browse by property type
          </h2>
        </div>

        <ScrollArea className="w-full h-[240.29px]">
          <div className="flex gap-[30px] px-[151px]">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className="w-[372px] h-60 rounded-[9.61px] overflow-hidden relative"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-[25px] left-[29px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[28.8px]">
                  {property.name}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Travel Expert Banner */}
      <Card className="w-[1352.86px] h-[474.58px] rounded-[28.84px] overflow-hidden relative bg-[url(/image-20.png)] bg-cover bg-center">
        <CardContent className="p-0">
          <div className="absolute top-[95px] left-24 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[67.3px]">
            Plan your trip with travel expert
          </div>
          <div className="absolute top-[278px] left-24 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-white text-[38.4px]">
            Our professional advisors can craft your perfect itinerary
          </div>
        </CardContent>
      </Card>

      {/* Connect with other travelers */}
      <div className="flex flex-col h-[485.4px] items-start justify-between w-full">
        <div className="px-[144.18px] py-[9.61px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#000000] text-[38.4px]">
            Connect with other travelers in our community
          </h2>
        </div>

        <ScrollArea className="w-full h-[412.11px]">
          <div className="flex gap-[30px] px-[144px]">
            {communities.map((community, index) => (
              <Card
                key={index}
                className="w-[372.46px] shadow-[0px_4.81px_19.22px_#9e9e9e40] rounded-[19.22px] p-[19.22px]"
              >
                <CardContent className="p-0 flex flex-col gap-[28.84px]">
                  <div
                    className="w-full h-[240.29px] rounded-[9.61px]"
                    style={{
                      backgroundImage: `url(${community.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="flex flex-col items-start gap-[9.61px]">
                    <div className="opacity-80 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#000000] text-[28.8px]">
                      {community.name}
                    </div>
                    <div className="opacity-50 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#000000] text-[19.2px]">
                      {community.type}
                    </div>
                    <div className="opacity-50 [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#000000] text-[19.2px]">
                      {community.travelers}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
