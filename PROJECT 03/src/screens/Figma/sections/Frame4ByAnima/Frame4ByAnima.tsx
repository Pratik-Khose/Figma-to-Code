import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Frame4ByAnima = (): JSX.Element => {
  // Navigation items data for easy mapping
  const navItems = [
    { label: "Home", active: true },
    { label: "Stays", active: false },
    { label: "Flights", active: false },
    { label: "Packages", active: false },
    { label: "Sign Up", active: false, bold: true },
  ];

  return (
    <header className="w-full h-[102px] bg-[#ffffff05] backdrop-blur-[9.61px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.61px)_brightness(100%)]">
      <div className="max-w-[1528px] h-full mx-auto px-14 flex items-center justify-between">
        <div className="text-[38.4px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white">
          trxvl.
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[28.84px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`p-[9.61px] text-[19.2px] opacity-70 text-white whitespace-nowrap
                    ${item.active ? "border-b-[1.2px] border-white" : ""}
                    ${item.bold ? "[font-family:'Helvetica-Bold',Helvetica] font-bold" : "[font-family:'Helvetica-Regular',Helvetica] font-normal"}`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
