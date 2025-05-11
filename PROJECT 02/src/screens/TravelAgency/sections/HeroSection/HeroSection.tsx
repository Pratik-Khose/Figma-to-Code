import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation menu items data
const navItems = [
  { label: "Desitnations", href: "#" },
  { label: "Hotels", href: "#" },
  { label: "Flights", href: "#" },
  { label: "Bookings", href: "#" },
  { label: "Login", href: "#" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="relative">
        <div className="absolute w-[479px] h-[497px] top-[89px] left-0 bg-d-2 rounded-[239.47px/248.43px] blur-[75px] opacity-30" />
        <img
          className="absolute right-0 h-[873px]"
          alt="Decore"
          src="/decore-2.svg"
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-between py-6 mx-auto max-w-7xl">
        <img className="h-[34px]" alt="Logo" src="/logo.png" />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="[font-family:'Google_Sans-Medium',Helvetica] font-medium text-x-1st text-[17px]">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <Button
                variant="outline"
                className="h-10 rounded-[5px] border border-solid border-[#212832] [font-family:'Google_Sans-Medium',Helvetica] font-medium text-x-1st text-[17px]"
              >
                Sign up
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="flex items-center">
                <span className="[font-family:'Google_Sans-Medium',Helvetica] font-medium text-x-1st text-[17px]">
                  EN
                </span>
                <img
                  className="w-2.5 h-1.5 ml-1"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-between mx-auto max-w-7xl pt-10">
        {/* Left content */}
        <div className="max-w-[636px]">
          <p className="[font-family:'Poppins',Helvetica] font-bold text-[#df6951] text-xl">
            BEST DESTINATIONS AROUND THE WORLD
          </p>

          <div className="relative mt-4">
            <h1 className="[font-family:'Volkhov',Helvetica] font-bold text-[#181e4b] text-[84px] tracking-[-3.36px] leading-[89px]">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life
            </h1>
            <img
              className="absolute w-[385px] h-3 top-[69px] right-0"
              alt="Decore"
              src="/decore.png"
            />
            <img
              className="absolute w-[385px] h-3 top-[69px] right-0"
              alt="Decore"
              src="/decore-1.png"
            />
          </div>

          <p className="mt-8 [font-family:'Poppins',Helvetica] font-medium text-[#5e6282] text-base leading-[30px] max-w-[477px]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex items-center mt-8 gap-10">
            <Button className="h-[60px] px-7 bg-yellow rounded-[10px] shadow-[0px_20px_35px_#f1a50126] [font-family:'Google_Sans-Medium',Helvetica] font-medium text-white text-lg">
              Find out more
            </Button>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#df6951] rounded-[26px] shadow-[0px_15px_30px_#df69514c]">
                <img
                  className="w-[11px] h-[13px]"
                  alt="Play"
                  src="/polygon-1.svg"
                />
              </div>
              <span className="ml-5 [font-family:'Poppins',Helvetica] font-medium text-text-color text-[17px]">
                PlayIcon Demo
              </span>
            </div>
          </div>
        </div>

        {/* Right content - Traveler image */}
        <div className="relative">
          <img
            className="h-[764px] object-cover"
            alt="Traveller"
            src="/traveller-1.png"
          />

          {/* Decorative plane elements */}
          <div className="absolute top-[85px] left-[148px] w-[137px] h-[95px] rotate-[-31.84deg]">
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
                  src="/group-19.png"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-[132px] left-[632px] w-[137px] h-[95px] rotate-[-31.84deg]">
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
                  src="/group-18.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
