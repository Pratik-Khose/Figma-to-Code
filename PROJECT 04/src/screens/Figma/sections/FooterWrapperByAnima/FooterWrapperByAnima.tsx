import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterWrapperByAnima = (): JSX.Element => {
  // Footer link data organized by columns
  const footerLinks = [
    ["Seslendirme ve Alt Jazz", "Media Market", "Gillie", "Size Last"],
    ["Self Betimes", "Yatırımcı İlişkileri", "Basal Himmler"],
    ["Yard Market", "Is İmkanları", "Car Tercihleri"],
    ["Hedge Karla", "Mullein Koşulları", "Autumnal Bulgier"],
  ];

  // Social media icons
  const socialIcons = [
    { icon: <FacebookIcon size={24} />, alt: "Facebook" },
    { icon: <InstagramIcon size={24} />, alt: "Instagram" },
    { icon: <TwitterIcon size={24} />, alt: "Twitter" },
    { icon: <YoutubeIcon size={24} />, alt: "Youtube" },
  ];

  return (
    <footer className="w-full bg-black py-12 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-[38.4px] font-bold text-white font-['Helvetica-Bold',Helvetica]">
              Trxvl.
            </h2>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap md:ml-auto gap-8 md:gap-16">
            {footerLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-[18.02px]">
                {column.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className={`w-fit font-['Netflix_Sans-Regular',Helvetica] font-normal text-gray text-[15.6px] tracking-[0] leading-normal ${linkIndex === 0 ? "mt-[-1.20px]" : ""}`}
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-6 mt-12 md:justify-end">
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className="text-gray hover:text-white transition-colors"
            >
              {social.icon}
            </div>
          ))}
        </div>

        {/* Helmet KOD button */}
        <div className="mt-8 flex md:justify-start">
          <Button
            variant="outline"
            className="border-[1.2px] border-solid border-[#808080] rounded-none px-[18.02px] py-[12.01px] h-auto"
          >
            <span className="font-netflix-sans-regular-13px text-gray">
              Helmet KOD
            </span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-8 font-['Netflix_Sans-Light',Helvetica] font-light text-gray text-[13.2px] tracking-[0] leading-normal">
          © 1997-2021 Netflix, Inc.&nbsp;&nbsp;{"{i-062d573a0ee099242}"}
        </div>
      </div>
    </footer>
  );
};
