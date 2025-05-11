import React from "react";

export const FooterSection = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Mobile", href: "#" },
  ];

  // Contact links data
  const contactLinks = [
    { title: "Help/FAQ", href: "#" },
    { title: "Press", href: "#" },
    { title: "Affilates", href: "#" },
  ];

  // More links data
  const moreLinks = [
    { title: "Airlinefees", href: "#" },
    { title: "Airline", href: "#" },
    { title: "Low fare tips", href: "#" },
  ];

  return (
    <footer className="relative w-full py-20 bg-transparent">
      {/* Background gradient */}
      <div className="absolute w-[479px] h-[497px] top-[137px] right-0 bg-d-2 rounded-[239.47px/248.43px] rotate-180 blur-[75px] opacity-40" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-['Poppins',Helvetica] font-medium text-[#181e4b] text-[44px]">
              Jadoo.
            </h2>
            <p className="font-['Poppins',Helvetica] font-medium text-text-clr text-[13px] leading-[16.2px]">
              Book your trip in minute, get full
              <br />
              Control for much longer.
            </p>
          </div>

          {/* Company links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#080808] text-[21px] leading-[26.1px]">
              Company
            </h3>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-medium text-text-clr text-lg leading-[22.4px]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#080808] text-[21px] leading-[26.1px]">
              Contact
            </h3>
            <nav className="flex flex-col space-y-3">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-medium text-text-clr text-lg leading-[22.4px]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* More links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#080808] text-[21px] leading-[26.1px]">
              More
            </h3>
            <nav className="flex flex-col space-y-3">
              {moreLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-medium text-text-clr text-lg leading-[22.4px]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* App download and social media section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <p className="font-['Poppins',Helvetica] font-medium text-text-clr text-sm">
            All rights reserved@jadoo.co
          </p>

          <div className="mt-8 md:mt-0">
            <h4 className="font-['Poppins',Helvetica] font-medium text-text-clr text-xl tracking-[0.10px] leading-[24.9px] mb-4">
              Discover our app
            </h4>
            <div className="flex space-x-2">
              {/* Google Play button */}
              <div className="flex items-center bg-[#080808] rounded-[17.5px] px-4 py-2 h-[35px]">
                <img
                  className="w-5 h-5 mr-2"
                  alt="Google play"
                  src="/google-play-1.svg"
                />
                <img className="h-[15px]" alt="Google Play" src="/vector.svg" />
              </div>

              {/* App Store button */}
              <div className="flex items-center bg-[#080808] rounded-[17.5px] px-4 py-2 h-[35px]">
                <div className="w-[13px] h-4 mr-2 bg-[url(/group-3.png)] bg-[100%_100%]" />
                <img className="h-[17px]" alt="App Store" src="/vector-2.svg" />
              </div>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex items-center space-x-4 mt-8 md:mt-0">
            <img
              className="w-[61px] h-[61px]"
              alt="Social"
              src="/social-1.png"
            />
            <div className="relative w-[65px] h-[65px] bg-[url(/background.svg)] bg-[100%_100%]">
              <div className="relative w-4 h-4 top-[22px] left-[25px]">
                <div className="relative h-4 bg-[url(/group.png)] bg-[100%_100%]">
                  <img
                    className="absolute w-0.5 h-0.5 top-0.5 left-3"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <img
                    className="absolute w-2 h-2 top-1 left-1"
                    alt="Group"
                    src="/group-2.png"
                  />
                </div>
              </div>
            </div>
            <img className="w-[61px] h-[61px]" alt="Social" src="/social.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};
