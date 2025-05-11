import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "Features", active: false },
    { label: "Community", active: false },
    { label: "Blog", active: false },
    { label: "Pricing", active: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[100px] py-3 bg-neutralwhite shadow-shadow-4px">
      {/* Logo */}
      <div className="flex items-center gap-[5.57px]">
        <img className="w-[24.36px] h-[16.71px]" alt="Icon" src="/icon.svg" />
        <img
          className="w-[77.61px] h-[14.38px]"
          alt="Nexcent"
          src="/nexcent.svg"
        />
      </div>

      <div className="flex items-center gap-6">
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink className="font-body-medium-body-2 text-neutraldgrey text-[16px] leading-[24px] tracking-[0px] font-[500] px-1">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Register Button */}
        <Button className="flex items-center gap-[5.57px] bg-brandprimary text-neutralwhite rounded-[2.78px] px-[22.27px] py-[9.74px]">
          <span className="font-body-medium-body-2 text-[16px] leading-[24px] tracking-[0px] font-[500]">
            Register Now
          </span>
          <ArrowRightIcon className="w-[11.14px] h-[11.14px]" />
        </Button>
      </div>
    </header>
  );
};
