import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Client logos data
  const clientLogos = [
    { src: "/logo-5.svg", alt: "Logo" },
    { src: "/logo-4.svg", alt: "Logo" },
    { src: "/logo-3.svg", alt: "Logo" },
    { src: "/logo.svg", alt: "Logo" },
    { src: "/logo-2.svg", alt: "Logo" },
    { src: "/logo-1.svg", alt: "Logo" },
    { src: "/logo-3.svg", alt: "Logo" },
  ];

  // Membership cards data
  const membershipCards = [
    {
      icon: {
        src: "/icon-2.svg",
        alt: "Icon",
        bgClass:
          "bg-tintt-5 rounded-[12.53px_3.48px_6.96px_3.48px] -rotate-180",
      },
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: {
        src: "/group-1-1.png",
        alt: "Group",
        bgClass:
          "bg-tintt-5 rounded-[12.53px_3.48px_6.96px_3.48px] -rotate-180",
      },
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: {
        src: "/group-2-1.png",
        alt: "Group",
        bgClass:
          "bg-tintt-5 rounded-[12.53px_3.48px_6.96px_3.48px] -rotate-180",
      },
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-7">
      {/* Hero Section */}
      <div className="flex items-center gap-[72px] px-[100px] py-[67px] w-full bg-neutralsilver">
        <div className="flex flex-col items-start gap-[22px] flex-1">
          <div className="flex flex-col items-start gap-[11px] w-full">
            <h1 className="font-['Inter',Helvetica] font-normal text-[44.5px] leading-[53px] tracking-[0]">
              <span className="text-neutraldgrey">Lessons and insights </span>
              <span className="text-brandprimary">from 8 years</span>
            </h1>
            <p className="font-['Inter',Helvetica] font-normal text-[11px] text-[#717171] leading-[17px]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <Button className="bg-brandprimary px-[22px] py-[10px] rounded-[3px]">
            <span className="text-neutralwhite">Register</span>
          </Button>
        </div>

        <div className="relative w-[272px] h-[283px]">
          <div className="absolute w-[97px] h-[191px] top-[83px] left-[175px]">
            <img
              className="absolute w-[76px] h-11 top-[147px] left-[21px]"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10-7.svg"
            />

            <div className="absolute w-[88px] h-[179px] top-0 left-0">
              <div className="h-[179px]">
                <div className="relative w-[88px] h-[179px]">
                  <img
                    className="absolute w-[50px] h-[111px] top-[68px] left-[30px]"
                    alt="Freepik bottom"
                    src="/freepik--bottom--inject-10.png"
                  />

                  <div className="absolute w-[88px] h-[88px] top-0 left-0">
                    <div className="relative h-[88px]">
                      <img
                        className="absolute w-[50px] h-[31px] top-[23px] left-0"
                        alt="Vector"
                        src="/vector-32.svg"
                      />

                      <img
                        className="absolute w-[21px] h-5 top-[31px] left-[29px]"
                        alt="Vector"
                        src="/vector-36.svg"
                      />

                      <img
                        className="absolute w-[7px] h-2 top-7 left-[3px]"
                        alt="Vector"
                        src="/vector-34.svg"
                      />

                      <img
                        className="absolute w-[3px] h-[5px] top-[42px] left-[27px]"
                        alt="Vector"
                        src="/vector-25.svg"
                      />

                      <img
                        className="absolute w-[34px] h-[46px] top-[30px] left-[42px]"
                        alt="Vector"
                        src="/vector-35.svg"
                      />

                      <img
                        className="absolute w-[26px] h-[26px] top-0 left-[43px]"
                        alt="Vector"
                        src="/vector-28.svg"
                      />

                      <img
                        className="absolute w-6 h-[29px] top-[7px] left-[46px]"
                        alt="Vector"
                        src="/vector-40.svg"
                      />

                      <img
                        className="absolute w-[9px] h-1.5 top-6 left-[54px]"
                        alt="Vector"
                        src="/vector-38.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-[15px] left-[55px]"
                        alt="Vector"
                        src="/vector-41.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-3 left-[55px]"
                        alt="Vector"
                        src="/vector-57.svg"
                      />

                      <img
                        className="absolute w-1 h-[3px] top-[21px] left-[53px]"
                        alt="Vector"
                        src="/vector-26.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-[22px] left-[54px]"
                        alt="Vector"
                        src="/vector-29.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-3 left-[47px]"
                        alt="Vector"
                        src="/vector-37.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-[15px] left-[47px]"
                        alt="Vector"
                        src="/vector-27.svg"
                      />

                      <img
                        className="absolute w-1 h-1.5 top-3.5 left-[49px]"
                        alt="Vector"
                        src="/vector-39.svg"
                      />

                      <img
                        className="absolute w-9 h-[53px] top-8 left-[52px]"
                        alt="Vector"
                        src="/vector-31.svg"
                      />

                      <img
                        className="absolute w-[5px] h-0.5 top-[62px] left-[76px]"
                        alt="Vector"
                        src="/vector-70.svg"
                      />

                      <img
                        className="absolute w-4 h-[25px] top-8 left-[69px]"
                        alt="Vector"
                        src="/vector-44.svg"
                      />

                      <img
                        className="absolute w-[50px] h-[19px] top-[69px] left-3.5"
                        alt="Vector"
                        src="/vector-43.svg"
                      />

                      <img
                        className="absolute w-[50px] h-[19px] top-[69px] left-3.5"
                        alt="Group"
                        src="/group-6.png"
                      />

                      <img
                        className="absolute w-[50px] h-[19px] top-[69px] left-3.5"
                        alt="Group"
                        src="/group-7.png"
                      />

                      <img
                        className="absolute w-[50px] h-7 top-[58px] left-3.5"
                        alt="Vector"
                        src="/vector-46.svg"
                      />

                      <img
                        className="absolute w-[50px] h-7 top-[58px] left-3.5"
                        alt="Group"
                        src="/group-8.png"
                      />

                      <img
                        className="absolute w-[37px] h-[21px] top-16 left-[18px]"
                        alt="Vector"
                        src="/vector-45.svg"
                      />

                      <img
                        className="absolute w-[37px] h-[21px] top-16 left-[18px]"
                        alt="Group"
                        src="/group-9.png"
                      />

                      <img
                        className="absolute w-[13px] h-2 top-[65px] left-[37px]"
                        alt="Vector"
                        src="/vector-42.svg"
                      />

                      <img
                        className="absolute w-[13px] h-[7px] top-[65px] left-[37px]"
                        alt="Vector"
                        src="/vector-59.svg"
                      />

                      <img
                        className="absolute w-[13px] h-[7px] top-[65px] left-[37px]"
                        alt="Group"
                        src="/group-10.png"
                      />

                      <img
                        className="absolute w-8 h-[19px] top-[69px] left-3.5"
                        alt="Vector"
                        src="/vector-49.svg"
                      />

                      <img
                        className="absolute w-8 h-[19px] top-[69px] left-3.5"
                        alt="Group"
                        src="/group-11.png"
                      />

                      <img
                        className="absolute w-8 h-[19px] top-[69px] left-3.5"
                        alt="Group"
                        src="/group-12.png"
                      />

                      <img
                        className="absolute w-[37px] h-[39px] top-12 left-[9px]"
                        alt="Vector"
                        src="/vector-50.svg"
                      />

                      <img
                        className="absolute w-[37px] h-[39px] top-12 left-[9px]"
                        alt="Group"
                        src="/group-13.png"
                      />

                      <img
                        className="absolute w-9 h-[39px] top-[47px] left-2.5"
                        alt="Vector"
                        src="/vector-48.svg"
                      />

                      <img
                        className="absolute w-9 h-[39px] top-[47px] left-2.5"
                        alt="Group"
                        src="/group-14.png"
                      />

                      <img
                        className="absolute w-[5px] h-[22px] top-[65px] left-[41px]"
                        alt="Vector"
                        src="/vector-51.svg"
                      />

                      <img
                        className="absolute w-[5px] h-[22px] top-[65px] left-[41px]"
                        alt="Vector"
                        src="/vector-51.svg"
                      />

                      <img
                        className="absolute w-[5px] h-[22px] top-[65px] left-[41px]"
                        alt="Vector"
                        src="/vector-51.svg"
                      />

                      <img
                        className="absolute w-[5px] h-1.5 top-[65px] left-[23px]"
                        alt="Vector"
                        src="/vector-47.svg"
                      />

                      <img
                        className="absolute w-[15px] h-2 top-[74px] left-[50px]"
                        alt="Vector"
                        src="/vector-56.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute w-[66px] h-10 top-[243px] left-[74px]"
            alt="Freepik shadow"
            src="/freepik--shadow--inject-10-5.svg"
          />

          <div className="absolute w-[166px] h-[239px] top-0 left-0">
            <img
              className="absolute w-[136px] h-[78px] top-40 left-0"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10-3.svg"
            />

            <img
              className="absolute w-[116px] h-[131px] top-[39px] left-[26px]"
              alt="Freepik shadow"
              src="/freepik--shadow--inject-10.png"
            />

            <div className="absolute w-[135px] h-[187px] top-9 left-px bg-[url(/freepik--monitor--inject-10.png)] bg-[100%_100%]" />

            <div className="absolute w-[153px] h-[199px] top-0 left-3.5">
              <div className="relative h-[199px]">
                <div className="absolute w-[127px] h-[168px] top-0 left-[7px]">
                  <div className="relative h-[168px]">
                    <div className="absolute w-[127px] h-[168px] top-0 left-0">
                      <div className="relative h-[168px]">
                        <img
                          className="w-[127px] h-[166px] top-0.5 absolute left-0"
                          alt="Freepik window"
                          src="/freepik--window--inject-10.png"
                        />

                        <img
                          className="absolute w-[125px] h-[166px] top-px left-0.5"
                          alt="Freepik outline"
                          src="/freepik--outline--inject-10.svg"
                        />

                        <div className="absolute w-[127px] h-[81px] top-0 left-0 bg-[url(/vector-3.svg)] bg-[100%_100%]">
                          <div className="relative h-[81px] bg-[url(/vector-3.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[125px] h-20 top-px left-0.5"
                              alt="Vector"
                              src="/vector-130.svg"
                            />

                            <img
                              className="absolute w-0.5 h-1 top-2.5 left-[114px]"
                              alt="Vector"
                              src="/vector-126.svg"
                            />

                            <img
                              className="absolute w-0.5 h-1 top-2 left-[118px]"
                              alt="Vector"
                              src="/vector-128.svg"
                            />

                            <img
                              className="absolute w-0.5 h-1 top-[5px] left-[122px]"
                              alt="Vector"
                              src="/vector-20.svg"
                            />

                            <img
                              className="absolute w-[126px] h-[73px] top-0 left-px"
                              alt="Vector"
                              src="/vector-129.svg"
                            />

                            <img
                              className="absolute w-[126px] h-[73px] top-0 left-px"
                              alt="Group"
                              src="/group.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[67px] h-[89px] top-[53px] left-3.5"
                      alt="Freepik flowchart"
                      src="/freepik--flowchart--inject-10.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[62px] h-[125px] top-[17px] left-[91px]">
                  <div className="relative h-[125px]">
                    <div className="w-[62px] h-[125px] top-0 absolute left-0">
                      <div className="relative h-[125px]">
                        <img
                          className="absolute w-[59px] h-[123px] top-0.5 left-[3px]"
                          alt="Vector"
                          src="/vector-131.svg"
                        />

                        <img
                          className="absolute w-[59px] h-[123px] top-0.5 left-[3px]"
                          alt="Vector"
                          src="/vector.svg"
                        />

                        <img
                          className="absolute w-[59px] h-[123px] top-0.5 left-[3px]"
                          alt="Group"
                          src="/group-1.png"
                        />

                        <img
                          className="absolute w-[61px] h-11 top-0 left-0"
                          alt="Vector"
                          src="/vector-1.svg"
                        />

                        <img
                          className="absolute w-[59px] h-[42px] top-0.5 left-[3px]"
                          alt="Vector"
                          src="/vector-2.svg"
                        />

                        <img
                          className="absolute w-[61px] h-[35px] top-0 left-px"
                          alt="Group"
                          src="/group-2.png"
                        />

                        <img
                          className="absolute w-[3px] h-2.5 top-[34px] left-0"
                          alt="Vector"
                          src="/vector-21.svg"
                        />

                        <img
                          className="absolute w-0.5 h-1 top-[11px] left-12"
                          alt="Vector"
                          src="/vector-18.svg"
                        />

                        <img
                          className="absolute w-0.5 h-1 top-2 left-[52px]"
                          alt="Vector"
                          src="/vector-20.svg"
                        />

                        <img
                          className="absolute w-0.5 h-1 top-1.5 left-[57px]"
                          alt="Vector"
                          src="/vector-124.svg"
                        />

                        <img
                          className="absolute w-[3px] h-[82px] top-[42px] left-0"
                          alt="Vector"
                          src="/vector-6.svg"
                        />
                      </div>
                    </div>

                    <img
                      className="absolute w-[49px] h-[91px] top-[25px] left-2"
                      alt="Freepik code inject"
                      src="/freepik--code--inject-10.png"
                    />
                  </div>
                </div>

                <img
                  className="absolute w-[22px] h-[38px] top-[158px] left-0"
                  alt="Freepik shadow"
                  src="/freepik--shadow--inject-10-4.svg"
                />

                <img
                  className="absolute w-4 h-[18px] top-[110px] left-0"
                  alt="Freepik shadow"
                  src="/vector-5.svg"
                />

                <img
                  className="absolute w-4 h-[18px] top-[127px] left-0"
                  alt="Freepik shadow"
                  src="/vector-5.svg"
                />

                <img
                  className="absolute w-4 h-[18px] top-[145px] left-0"
                  alt="Freepik shadow"
                  src="/vector-5.svg"
                />

                <div className="absolute w-[25px] h-10 top-[159px] left-[3px] bg-[url(/freepik--speach-bubble--inject-10.png)] bg-[100%_100%]">
                  <img
                    className="absolute w-[19px] h-[19px] top-[11px] left-1"
                    alt="Freepik inject"
                    src="/freepik----inject-10.png"
                  />
                </div>

                <div className="absolute w-[18px] h-[19px] top-[111px] left-[3px]">
                  <div className="relative h-[19px]">
                    <div className="absolute w-[18px] h-[19px] top-0 left-0">
                      <div className="h-[19px]">
                        <div className="w-[18px] h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                          <div className="relative h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[18px] h-2.5 top-0 left-0"
                              alt="Vector"
                              src="/vector-16.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Vector"
                              src="/vector-5.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Group"
                              src="/group-3.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[3px] h-1.5 top-2.5 left-[5px]"
                      alt="Vector"
                      src="/vector-11.svg"
                    />

                    <img
                      className="absolute w-[3px] h-1.5 top-2 left-[9px]"
                      alt="Vector"
                      src="/vector-19.svg"
                    />

                    <img
                      className="absolute w-[3px] h-1.5 top-1.5 left-3"
                      alt="Vector"
                      src="/vector-9.svg"
                    />
                  </div>
                </div>

                <div className="top-32 absolute w-[18px] h-[19px] left-[3px]">
                  <div className="relative h-[19px]">
                    <div className="absolute w-[18px] h-[19px] top-0 left-0">
                      <div className="h-[19px]">
                        <div className="w-[18px] h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                          <div className="relative h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[18px] h-2.5 top-0 left-0"
                              alt="Vector"
                              src="/vector-16.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Vector"
                              src="/vector-5.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Group"
                              src="/group-4.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[3px] h-[7px] top-2.5 left-[3px]"
                      alt="Vector"
                      src="/vector-4.svg"
                    />

                    <img
                      className="absolute w-[3px] h-1.5 top-2 left-[7px]"
                      alt="Vector"
                      src="/vector-92.svg"
                    />

                    <img
                      className="absolute w-[3px] h-[7px] top-1.5 left-2.5"
                      alt="Vector"
                      src="/vector-22.svg"
                    />

                    <img
                      className="absolute w-0.5 h-1.5 top-[5px] left-[15px]"
                      alt="Vector"
                      src="/vector-15.svg"
                    />
                  </div>
                </div>

                <div className="top-[146px] absolute w-[18px] h-[19px] left-[3px]">
                  <div className="relative h-[19px]">
                    <div className="absolute w-[18px] h-[19px] top-0 left-0">
                      <div className="h-[19px]">
                        <div className="w-[18px] h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                          <div className="relative h-[19px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
                            <img
                              className="absolute w-[18px] h-2.5 top-0 left-0"
                              alt="Vector"
                              src="/vector-16.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Vector"
                              src="/vector-5.svg"
                            />

                            <img
                              className="absolute w-4 h-[18px] top-px left-0.5"
                              alt="Group"
                              src="/group-5.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[3px] h-1.5 top-[9px] left-[5px]"
                      alt="Vector"
                      src="/vector-84.svg"
                    />

                    <img
                      className="absolute w-0.5 h-1 top-2 left-[9px]"
                      alt="Vector"
                      src="/vector-33.svg"
                    />

                    <img
                      className="absolute w-[3px] h-1 top-[7px] left-3"
                      alt="Vector"
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-5 h-[25px] top-[47px] left-[180px]">
            <div className="relative h-[25px] bg-[url(/freepik--speech-bubble--inject-10.png)] bg-[100%_100%]">
              <img
                className="absolute w-2 h-[13px] top-[7px] left-[9px]"
                alt="Freepik x inject"
                src="/freepik--x--inject-10.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="flex flex-col w-full items-center gap-[11px] px-[100px]">
        <div className="flex flex-col w-[773px] items-center gap-[6px]">
          <h2 className="font-['Inter',Helvetica] font-normal text-neutraldgrey text-[25px] text-center leading-[31px]">
            Our Clients
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#717171] text-[11px] text-center leading-[17px]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="flex justify-between items-center w-full h-[68px]">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[33px] h-[33px] rounded-[6px]"
            >
              <img
                className="absolute w-7 h-7 top-[3px] left-[3px]"
                alt={logo.alt}
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Membership Section */}
      <div className="flex flex-col items-start gap-[11px] w-full">
        <div className="flex flex-col w-full items-center gap-[6px]">
          <h2 className="w-[377px] font-['Inter',Helvetica] font-normal text-neutraldgrey text-[25px] text-center leading-[31px]">
            Manage your entire community in a single system
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#717171] text-[11px] text-center leading-[17px] w-full">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex w-full items-center justify-between px-[100px]">
          {membershipCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col w-[208px] items-center gap-[6px] px-[22px] py-[17px] bg-neutralwhite rounded-[6px] shadow-[0px_1.39px_2.78px_#abbed133]"
            >
              <CardContent className="flex flex-col items-center gap-[11px] p-0">
                <div className="relative w-[45px] h-[39px]">
                  <div
                    className={`absolute w-[35px] h-[34px] top-[5px] left-2.5 ${card.icon.bgClass}`}
                  />
                  {card.icon.src.includes("icon") ? (
                    <img
                      className="absolute w-[33px] h-[33px] top-0 left-0"
                      alt={card.icon.alt}
                      src={card.icon.src}
                    />
                  ) : (
                    <div className="absolute w-[33px] h-[33px] top-0 left-0">
                      <img
                        className="absolute w-[25px] h-[21px] top-1.5 left-1"
                        alt={card.icon.alt}
                        src={card.icon.src}
                      />
                    </div>
                  )}
                </div>
                <h3 className="font-['Inter',Helvetica] font-bold text-neutraldgrey text-[19.5px] text-center leading-[25px]">
                  {card.title}
                </h3>
                <p className="font-['Inter',Helvetica] font-normal text-[#717171] text-[10px] text-center leading-[14px] w-[175px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
