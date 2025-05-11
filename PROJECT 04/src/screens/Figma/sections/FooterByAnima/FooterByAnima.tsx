import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterByAnima = (): JSX.Element => {
  // Footer links data organized by columns
  const footerLinks = [
    ["Seslendirme ve Alt Jazz", "Media Market", "Gillie", "Size Last"],
    ["Self Betimes", "Yatırımcı İlişkileri", "Basal Himmler"],
    ["Yard Market", "Is İmkanları", "Car Tercihleri"],
    ["Hedge Karla", "Mullein Koşulları", "Autumnal Bulgier"],
  ];

  // Social media icons with their respective components
  const socialIcons = [
    { icon: <FacebookIcon size={22} />, alt: "Facebook" },
    { icon: <InstagramIcon size={22} />, alt: "Instagram" },
    { icon: <TwitterIcon size={22} />, alt: "Twitter" },
    { icon: <YoutubeIcon size={22} />, alt: "Youtube" },
  ];

  return (
    <footer className="w-full bg-black py-10 px-4">
      <div className="container mx-auto relative">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-[29.3px] font-bold text-white font-['Helvetica-Bold',Helvetica] whitespace-nowrap">
            Trxvl.
          </h2>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Footer links columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
            {footerLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-[13.76px]">
                {column.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className={`text-gray text-[11.9px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal tracking-[0] leading-normal ${
                      linkIndex === 0 ? "mt-[-0.92px]" : ""
                    }`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-[18.34px] mt-8 md:mt-0">
            {socialIcons.map((social, index) => (
              <a key={index} href="#" className="text-gray hover:text-white">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Helmet KOD button */}
        <div className="mt-8">
          <Button
            variant="outline"
            className="h-auto px-[13.76px] py-[9.17px] border-[0.92px] border-solid border-[#808080] rounded-none"
          >
            <span className="text-gray font-netflix-sans-regular-13px whitespace-nowrap">
              Helmet KOD
            </span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-[10.1px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-gray">
          © 1997-2021 Netflix, Inc.&nbsp;&nbsp;{"{i-062d573a0ee099242}"}
        </div>
      </div>
    </footer>
  );
};
