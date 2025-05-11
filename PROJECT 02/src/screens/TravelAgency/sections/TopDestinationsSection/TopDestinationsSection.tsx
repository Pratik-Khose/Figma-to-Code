import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TopDestinationsSection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      id: 1,
      name: "Rome, Italty",
      days: "10 Days Trip",
      price: "$5,42k",
      image: "/rectangle-14-1.png",
      navigationIcon: "/navigation-1.png",
    },
    {
      id: 2,
      name: "London, UK",
      days: "12 Days Trip",
      price: "$4.2k",
      image: "/rectangle-14-2.png",
      navigationIcon: "/navigation-2.png",
    },
    {
      id: 3,
      name: "Full Europe",
      days: "28 Days Trip",
      price: "$15k",
      image: "/rectangle-14.png",
      navigationIcon: "/navigation.png",
    },
  ];

  return (
    <section className="w-full max-w-[1106px] mx-auto py-16">
      <div className="text-center mb-12">
        <h3 className="font-semibold text-lg text-text-clr mb-2">
          Top Selling
        </h3>
        <h2 className="font-bold text-[50px] text-x-3rd font-['Volkhov',Helvetica]">
          Top Destinations
        </h2>
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        {destinations.map((destination, index) => (
          <div key={destination.id} className="w-full sm:w-[315px] relative">
            <Card className="border-0 overflow-hidden">
              <div className="relative w-full h-[457px]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  {index === 2 && (
                    <img
                      className="absolute w-[97px] h-[253px] top-[158px] right-0"
                      alt="Decore"
                      src="/decore-3.svg"
                    />
                  )}
                  <div className="absolute bottom-0 w-full">
                    <CardContent className="bg-white p-5 rounded-[0px_0px_24px_24px]">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-lg text-text-clr">
                          {destination.name}
                        </h3>
                        <span className="font-medium text-lg text-text-clr">
                          {destination.price}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2">
                          <img
                            className="w-4 h-4 m-0.5"
                            alt="Navigation"
                            src={destination.navigationIcon}
                          />
                        </div>
                        <span className="font-medium text-base text-text-clr">
                          {destination.days}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
