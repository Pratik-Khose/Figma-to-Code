import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const Frame5ByAnima = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <div className="relative w-full h-[652px] overflow-hidden bg-[url(/image-21.png)] bg-cover">
      <div className="relative w-full h-full">
        <img
          className="absolute w-[244px] h-[73px] top-0 left-0 object-cover"
          alt="Image"
          src="/image-23.png"
        />

        <img
          className="absolute w-[244px] h-[73px] top-0 left-0 object-cover"
          alt="Image"
          src="/image-22.png"
        />
      </div>

      <div className="relative w-[369px] h-[694px] top-[90px] left-[158px]">
        <div className="relative w-[313px] h-[633px] bg-[url(/main-1.png)] bg-cover bg-center">
          <img
            className="absolute w-[280px] h-[604px] top-0 left-0 object-cover"
            alt="Iphone mockup"
            src="/iphone-13-mockup-label-1.png"
          />
        </div>
      </div>

      <div className="flex flex-col gap-7 absolute top-[90px] left-[569px]">
        <h1 className="text-[57.7px] font-bold text-white font-['Helvetica-Bold',Helvetica] tracking-normal leading-normal max-w-[868px]">
          Your all-in-one travel app.
        </h1>

        <p className="text-[28.8px] font-normal text-white font-['Helvetica-Regular',Helvetica] tracking-normal leading-normal max-w-[927px]">
          Book flights, hotels, trains &amp; rental cars anywhere in the world
          in just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </p>
      </div>

      <div className="flex flex-col gap-5 absolute top-[324px] left-[569px]">
        <Tabs
          defaultValue="mobile"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="bg-transparent gap-7">
            <TabsTrigger
              value="mobile"
              className={`px-5 py-2.5 rounded-[19.22px] text-2xl font-normal font-['Helvetica-Regular',Helvetica] text-white ${activeTab === "mobile" ? "bg-[#ffffff66] backdrop-blur-[19.22px]" : ""}`}
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="email"
              className={`px-2.5 py-2.5 text-2xl font-normal font-['Helvetica-Regular',Helvetica] text-white ${activeTab === "email" ? "bg-[#ffffff66] backdrop-blur-[19.22px] rounded-[19.22px]" : ""}`}
            >
              Email
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-5">
          <p className="text-[16.8px] font-normal text-white font-['Helvetica-Regular',Helvetica] tracking-normal leading-normal">
            Enter your phone number to receive a text with a link to download
            the app.
          </p>

          <Card className="w-[555px] bg-[#ffffff66] rounded-[19.22px] backdrop-blur-[19.22px]">
            <CardContent className="p-5 flex items-center gap-10">
              <div className="flex items-center gap-2.5 flex-1 py-3.5 px-2.5">
                <span className="opacity-70 text-[19.2px] font-normal text-white font-['Helvetica-Regular',Helvetica]">
                  +91
                </span>
                <Input
                  className="bg-transparent border-none text-[19.2px] font-normal text-white opacity-70 font-['Helvetica-Regular',Helvetica] placeholder:text-white placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Mobile number"
                />
              </div>
              <Button className="bg-white text-[#2659c3] rounded-[38.45px] px-10 py-3.5 text-[19.2px] font-bold opacity-70 font-['Helvetica-Bold',Helvetica] hover:bg-white/90">
                Search
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 absolute top-[324px] left-[1176px]">
        <Separator className="w-[61.69px] bg-white opacity-50" />
        <span className="text-[19.2px] font-normal text-white font-['Helvetica-Regular',Helvetica]">
          or
        </span>
        <Separator className="w-[61.69px] bg-white opacity-50" />
      </div>
    </div>
  );
};
