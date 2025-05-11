import { SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const Frame2ByAnima = (): JSX.Element => {
  // Define search fields data for mapping
  const searchFields = [
    {
      id: "destination",
      icon: <SearchIcon className="w-6 h-6 opacity-70" />,
      placeholder: "SearchIcon destinations, hotels",
      width: "w-[454.16px]",
      customIcon: false,
    },
    {
      id: "checkin",
      icon: null,
      placeholder: "Check in",
      width: "flex-1",
      customIcon: true,
      iconSrc: "/group-2.png",
    },
    {
      id: "checkout",
      icon: null,
      placeholder: "Check out",
      width: "flex-1",
      customIcon: true,
      iconSrc: "/group-3.png",
    },
    {
      id: "guests",
      icon: <UserIcon className="w-6 h-6 opacity-70 ml-[-7.12px]" />,
      placeholder: "1 room, 2 adults",
      width: "flex-1",
      customIcon: false,
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-[9.61px] px-[19.22px] py-[9.61px] bg-[#ffffff66] rounded-[19.22px] backdrop-blur-[19.22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(19.22px)_brightness(100%)]">
      <div className="gap-[38.45px] flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        {searchFields.map((field) => (
          <div
            key={field.id}
            className={`flex items-center gap-[9.61px] px-[9.61px] py-[14.42px] relative ${field.width}`}
          >
            {field.customIcon ? (
              <div className="relative w-[24.03px] h-[24.03px] opacity-70">
                <img
                  className="absolute w-[22px] h-[22px] top-px left-px"
                  alt="CalendarIcon icon"
                  src={field.iconSrc}
                />
              </div>
            ) : (
              field.icon
            )}

            <div className="relative w-fit mt-[-1.39px] opacity-70 font-normal text-white text-[19.2px] tracking-[0] leading-normal whitespace-nowrap">
              {field.placeholder}
            </div>
          </div>
        ))}

        <Button className="flex items-center justify-center gap-[9.61px] px-[38.45px] py-[14.42px] relative flex-1 grow bg-white rounded-[38.45px] hover:bg-white/90">
          <span className="mt-[-2.40px] text-[#2659c3] text-[19.2px] relative w-fit opacity-70 font-bold tracking-[0] leading-normal whitespace-nowrap">
            SearchIcon
          </span>
        </Button>
      </div>
    </div>
  );
};
