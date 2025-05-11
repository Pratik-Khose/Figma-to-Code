import { ArrowRightIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Footer navigation data
  const companyLinks = [
    "About us",
    "Blog",
    "Contact us",
    "Pricing",
    "Testimonials",
  ];

  const supportLinks = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];

  return (
    <footer className="flex flex-col w-full">
      {/* CTA Section */}
      <div className="flex flex-col items-center gap-[22px] py-[22px] bg-neutralsilver">
        <h2 className="w-full max-w-[617px] [font-family:'Inter',Helvetica] font-normal text-neutralblack text-[44.5px] text-center leading-[53px]">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <Button className="flex items-center gap-[5.5px] px-[22px] py-[10px] bg-brandprimary rounded-[3px] text-neutralwhite">
          <span className="font-body-medium-body-2 text-[length:var(--body-medium-body-2-font-size)] tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)]">
            Get a Demo
          </span>
          <ArrowRightIcon className="w-[11px] h-[11px]" />
        </Button>
      </div>

      {/* Main Footer */}
      <div className="flex justify-between px-[115px] py-[45px] bg-neutralblack">
        {/* Logo and Company Info */}
        <div className="flex flex-col gap-[28px]">
          {/* Logo */}
          <div className="flex items-center gap-[7px]">
            <img className="w-[30px] h-[21px]" alt="Icon" src="/icon.svg" />
            <img
              className="w-[96px] h-[18px]"
              alt="Nexcent"
              src="/nexcent-1.svg"
            />
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-[5.5px]">
            <p className="w-[244px] font-body-regular-body-3 text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]">
              Copyright © 2020 Landify UI Kit.
            </p>
            <p className="w-[244px] font-body-regular-body-3 text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]">
              All rights reserved
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-[11px]">
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                className="w-[22px] h-[22px]"
                alt={`Social icon ${index}`}
                src={`/social-icons${index > 1 ? `-${index - 1}` : ""}.svg`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-[21px]">
          {/* Company Links */}
          <div className="flex flex-col gap-[17px]">
            <h3 className="w-[111px] font-heading-headline-4 text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)]">
              Company
            </h3>
            <div className="flex flex-col gap-[8px]">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-[111px] font-body-regular-body-3 text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-[17px]">
            <h3 className="w-[111px] font-heading-headline-4 text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)]">
              Support
            </h3>
            <div className="flex flex-col gap-[8px]">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-[111px] font-body-regular-body-3 text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-[17px]">
            <h3 className="w-[111px] font-heading-headline-4 text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)]">
              Stay up to date
            </h3>
            <div className="relative w-[180px] h-[28px]">
              <Input
                className="h-7 w-[177px] bg-default-white bg-opacity-20 rounded-[5.5px] text-text-gray-300 font-body-regular-body-3 text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)]"
                placeholder="Your email address"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-7 w-7 p-0"
              >
                <SendIcon className="h-[13px] w-[13px] text-neutralwhite" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
