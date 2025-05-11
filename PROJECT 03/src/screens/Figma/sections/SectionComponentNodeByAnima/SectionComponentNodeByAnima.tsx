import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { name: "Home", active: true },
    { name: "Stays", active: false },
    { name: "Flights", active: false },
    { name: "Packages", active: false },
    { name: "Sign Up", active: false, bold: true },
  ];

  return (
    <header className="flex flex-col w-full items-start gap-[7.34px] py-[22.01px]">
      <div className="self-stretch w-full flex items-center justify-between">
        <div className="text-[29.3px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white tracking-[0] leading-normal whitespace-nowrap">
          trxvl.
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[22.01px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`p-[7.34px] text-[14.7px] opacity-70 [font-family:'Helvetica-${item.bold ? "Bold" : "Regular"}',Helvetica] ${
                    item.bold ? "font-bold" : "font-normal"
                  } text-white tracking-[0] leading-normal whitespace-nowrap ${
                    item.active ? "border-b-[0.92px] border-white" : ""
                  }`}
                  href="#"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
