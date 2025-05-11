import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for statistics section
  const statsData = [
    { icon: "/icon-1.svg", number: "2,245,341", label: "Members" },
    { icon: "/group-2-2.png", number: "46,328", label: "Clubs" },
    { icon: "/icon-4.svg", number: "828,867", label: "Event Bookings" },
    { icon: "/icon-3.svg", number: "1,926,436", label: "Payments" },
  ];

  // Data for logos section
  const logosData = [
    { background: "bg-tintt-5", logo: "/logo-5.svg" },
    { background: "bg-neutralsilver", logo: "/logo-4.svg" },
    { background: "bg-neutralsilver", logo: "/logo-3.svg" },
    { background: "bg-neutralsilver", logo: "/logo.svg" },
    { background: "bg-neutralsilver", logo: "/logo-2.svg" },
    { background: "bg-neutralsilver", logo: "/logo-1.svg" },
  ];

  // Data for blog cards
  const blogCardsData = [
    {
      image: "/image-18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "/image-19.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "/image-20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-8">
      {/* First content section */}
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-center justify-between px-24 py-6 w-full">
          <div className="relative w-[307px] h-[301px]">
            <div className="relative w-[307px] h-[229px] mt-9">
              <div className="relative h-[229px]">
                <img
                  className="absolute w-[307px] h-[216px] top-0 left-0"
                  alt="Background complete"
                />
                <img
                  className="absolute w-[180px] h-[139px] top-4 left-[65px]"
                  alt="Background simple"
                />
                <img
                  className="absolute w-[238px] h-3.5 top-[215px] left-[34px]"
                  alt="Shadow"
                  src="/shadow.png"
                />
                <img
                  className="absolute w-[71px] h-[198px] top-[26px] left-[177px]"
                  alt="Character"
                  src="/character-2.png"
                />
                <img
                  className="absolute w-[85px] h-[158px] top-2.5 left-[117px]"
                  alt="Screen"
                  src="/screen.png"
                />
                <img
                  className="absolute w-[55px] h-[161px] top-[63px] left-[67px]"
                  alt="Character"
                  src="/character-1.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[460px] items-start gap-6">
            <div className="flex flex-col w-full md:w-[418px] items-start gap-3">
              <h2 className="text-neutraldgrey text-2xl leading-8 font-normal font-['Inter',Helvetica]">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="text-[#717171] text-xs leading-3.5 font-normal font-['Inter',Helvetica]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <Button className="bg-brandprimary rounded-sm text-neutralwhite">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <div className="flex flex-wrap w-full items-center justify-between px-24 py-11 bg-neutralsilver">
        <div className="flex flex-col w-full md:w-[375px] items-start gap-1.5">
          <div className="flex flex-col items-start gap-1.5">
            <h2 className="w-[284px] text-2xl leading-8 font-normal font-['Inter',Helvetica]">
              <span className="text-[#4d4d4d]">Helping a local </span>
              <span className="text-[#4caf4f]">business reinvent itself</span>
            </h2>
          </div>
          <p className="text-text-gray-900 text-xs leading-4 font-normal font-['Inter',Helvetica]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex flex-col items-center gap-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {statsData.slice(0, 2).map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img className="w-8 h-8" alt="Icon" src={stat.icon} />
                </div>
                <div className="flex flex-col">
                  <div className="text-neutraldgrey text-lg font-bold font-['Inter',Helvetica]">
                    {stat.number}
                  </div>
                  <div className="text-[#717171] text-xs font-normal font-['Inter',Helvetica]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {statsData.slice(2, 4).map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img className="w-8 h-8" alt="Icon" src={stat.icon} />
                </div>
                <div className="flex flex-col">
                  <div className="text-neutraldgrey text-lg font-bold font-['Inter',Helvetica]">
                    {stat.number}
                  </div>
                  <div className="text-[#717171] text-xs font-normal font-['Inter',Helvetica]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second content section */}
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-center justify-between px-24 py-6 w-full">
          <div className="relative w-[307px] h-[302px]">
            <div className="relative w-[307px] h-[302px]">
              <img
                className="absolute w-[307px] h-[265px] top-0 left-0"
                alt="Background complete"
              />
              <img
                className="absolute w-[223px] h-52 top-[61px] left-[33px]"
                alt="Background simple"
              />
              <img
                className="absolute w-[223px] h-px top-[301px] left-[39px]"
                alt="Floor"
                src="/floor.png"
              />
              <img
                className="absolute w-[60px] h-[103px] top-[137px] left-[200px]"
                alt="Plant"
                src="/plant.png"
              />
              <img
                className="absolute w-[60px] h-[72px] top-[3px] left-[197px]"
                alt="Padlock"
                src="/padlock.png"
              />
              <div className="absolute w-[111px] h-60 top-[35px] left-[113px]">
                <div className="relative w-[109px] h-60">
                  <img
                    className="absolute w-[104px] h-[212px] top-0 left-0"
                    alt="Vector"
                    src="/vector-53.svg"
                  />
                  <img
                    className="absolute w-[94px] h-[198px] top-1.5 left-[5px]"
                    alt="Vector"
                    src="/vector-58.svg"
                  />
                  <img
                    className="absolute w-[55px] h-[17px] top-[164px] left-6"
                    alt="Vector"
                    src="/vector-68.svg"
                  />
                  <div className="absolute w-[69px] top-[168px] left-10 font-['Montserrat',Helvetica] font-normal text-[#e8e8e3] text-[5.7px]">
                    SING UP
                  </div>
                  <img
                    className="absolute w-[19px] h-[3px] top-[58px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[3px] top-[58px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[74px] h-[13px] top-[66px] left-[17px]"
                    alt="Vector"
                    src="/vector-61.svg"
                  />
                  <img
                    className="absolute w-[34px] h-[3px] top-[70px] left-[23px]"
                    alt="Vector"
                    src="/vector-52.svg"
                  />
                  <img
                    className="absolute w-[34px] h-[3px] top-[70px] left-[23px]"
                    alt="Vector"
                    src="/vector-52.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[3px] top-[89px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[3px] top-[89px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[74px] h-[13px] top-[97px] left-[17px]"
                    alt="Vector"
                    src="/vector-90.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[3px] top-[121px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[3px] top-[121px] left-[17px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[74px] h-[13px] top-[130px] left-[17px]"
                    alt="Vector"
                    src="/vector-73.svg"
                  />
                  <img
                    className="absolute w-[34px] h-[3px] top-[102px] left-[22px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[34px] h-[3px] top-[102px] left-[22px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[22px]"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[27px]"
                    alt="Vector"
                    src="/vector-77.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-8"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-9"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[41px]"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[45px]"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[50px]"
                    alt="Vector"
                    src="/vector-77.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[54px]"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-[135px] left-[59px]"
                    alt="Vector"
                    src="/vector-65.svg"
                  />
                  <img
                    className="absolute w-10 h-[3px] top-[135px] left-[22px]"
                    alt="Group"
                    src="/group-15.png"
                  />
                  <img
                    className="absolute w-2.5 h-2.5 top-[27px] left-[50px]"
                    alt="Vector"
                    src="/vector-82.svg"
                  />
                  <img
                    className="absolute w-2.5 h-2.5 top-[27px] left-[50px]"
                    alt="Vector"
                    src="/vector-82.svg"
                  />
                  <img
                    className="absolute w-[34px] h-1 top-[41px] left-[37px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                  <img
                    className="absolute w-[34px] h-1 top-[41px] left-[37px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                </div>
              </div>
              <img
                className="absolute w-[37px] h-[42px] top-[97px] left-[41px]"
                alt="Speech bubble"
                src="/speech-bubble.png"
              />
              <div className="absolute w-[103px] h-[200px] top-[101px] left-[60px]">
                <div className="relative h-[200px]">
                  <img
                    className="absolute w-[19px] h-2.5 top-[191px] left-6"
                    alt="Vector"
                    src="/vector-76.svg"
                  />
                  <img
                    className="absolute w-[18px] h-px top-[199px] left-6"
                    alt="Vector"
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-[35px]"
                    alt="Vector"
                    src="/vector-88.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-9"
                    alt="Vector"
                    src="/vector-87.svg"
                  />
                  <img
                    className="absolute w-[3px] h-0.5 top-[197px] left-6"
                    alt="Vector"
                    src="/vector-91.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-[34px]"
                    alt="Vector"
                    src="/vector-101.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[196px] left-[34px]"
                    alt="Vector"
                    src="/vector-85.svg"
                  />
                  <img
                    className="absolute w-[19px] h-2.5 top-[191px] left-[51px]"
                    alt="Vector"
                    src="/vector-76.svg"
                  />
                  <img
                    className="absolute w-[18px] h-px top-[199px] left-[51px]"
                    alt="Vector"
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-[62px]"
                    alt="Vector"
                    src="/vector-88.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-[63px]"
                    alt="Vector"
                    src="/vector-87.svg"
                  />
                  <img
                    className="absolute w-[3px] h-0.5 top-[197px] left-[51px]"
                    alt="Vector"
                    src="/vector-91.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[197px] left-[61px]"
                    alt="Vector"
                    src="/vector-101.svg"
                  />
                  <img
                    className="absolute w-px h-px top-[196px] left-[61px]"
                    alt="Vector"
                    src="/vector-89.svg"
                  />
                  <img
                    className="absolute w-[103px] h-[108px] top-[5px] left-0"
                    alt="Vector"
                    src="/vector-125.svg"
                  />
                  <img
                    className="absolute w-[63px] h-[50px] top-[27px] left-[11px]"
                    alt="Vector"
                    src="/vector-100.svg"
                  />
                  <img
                    className="absolute w-[11px] h-px top-[62px] left-7"
                    alt="Vector"
                    src="/vector-102.svg"
                  />
                  <img
                    className="absolute w-3 h-0.5 top-[60px] left-[29px]"
                    alt="Vector"
                    src="/vector-113.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[11px] top-12 left-[50px]"
                    alt="Vector"
                    src="/vector-110.svg"
                  />
                  <img
                    className="absolute w-2.5 h-[3px] top-[62px] left-[11px]"
                    alt="Vector"
                    src="/vector-104.svg"
                  />
                  <img
                    className="absolute w-[9px] h-3.5 top-7 left-[46px]"
                    alt="Vector"
                    src="/vector-114.svg"
                  />
                  <img
                    className="absolute w-px h-[13px] top-[29px] left-[71px]"
                    alt="Vector"
                    src="/vector-103.svg"
                  />
                  <img
                    className="absolute w-[15px] h-[27px] top-[3px] left-[34px]"
                    alt="Vector"
                    src="/vector-105.svg"
                  />
                  <img
                    className="absolute w-0.5 h-[3px] top-3.5 left-11"
                    alt="Vector"
                    src="/vector-106.svg"
                  />
                  <img
                    className="absolute w-[37px] h-[57px] top-0 left-4"
                    alt="Vector"
                    src="/vector-111.svg"
                  />
                  <img
                    className="absolute w-0.5 h-[3px] top-[17px] left-[45px]"
                    alt="Vector"
                    src="/vector-108.svg"
                  />
                  <img
                    className="absolute w-[47px] h-[119px] top-[76px] left-5"
                    alt="Vector"
                    src="/vector-109.svg"
                  />
                  <img
                    className="absolute w-2.5 h-0.5 top-[93px] left-[31px]"
                    alt="Vector"
                    src="/vector-112.svg"
                  />
                  <img
                    className="absolute w-[17px] h-px top-[189px] left-[47px]"
                    alt="Vector"
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute w-[17px] h-px top-48 left-[23px]"
                    alt="Vector"
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute w-0.5 h-[99px] top-[94px] left-[35px]"
                    alt="Vector"
                    src="/vector-122.svg"
                  />
                  <img
                    className="absolute w-3.5 h-28 top-[77px] left-[51px]"
                    alt="Vector"
                    src="/vector-107.svg"
                  />
                  <img
                    className="absolute w-2 h-px top-[131px] left-[49px]"
                    alt="Vector"
                    src="/vector-123.svg"
                  />
                  <img
                    className="absolute w-[7px] h-px top-[132px] left-[50px]"
                    alt="Vector"
                    src="/vector-117.svg"
                  />
                  <img
                    className="absolute w-8 h-1 top-[76px] left-[21px]"
                    alt="Vector"
                    src="/vector-121.svg"
                  />
                  <img
                    className="absolute w-1.5 h-[23px] top-[93px] left-8"
                    alt="Group"
                    src="/group-16.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[460px] items-start gap-6">
            <div className="flex flex-col w-full md:w-[418px] items-start gap-3">
              <h2 className="text-neutraldgrey text-2xl leading-8 font-normal font-['Inter',Helvetica]">
                How to design your site footer like we did
              </h2>
              <p className="text-[#717171] text-xs leading-3.5 font-normal font-['Inter',Helvetica]">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <Button className="bg-brandprimary rounded-sm text-neutralwhite">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="flex flex-wrap w-full items-center gap-14 px-24 py-6 bg-neutralsilver">
        <img
          className="w-[227px] h-[227px] object-cover"
          alt="Testimonial image"
          src="/image-9.png"
        />

        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-3 w-full">
            <p className="text-[#717171] text-xs leading-4 font-medium font-['Inter',Helvetica]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="text-brandprimary text-sm leading-5 font-normal font-['Inter',Helvetica]">
                Tim Smith
              </div>
              <div className="text-neutrallgrey text-xs leading-4 font-normal font-['Inter',Helvetica]">
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full">
            <div className="flex items-center gap-7">
              {logosData.map((logo, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 ${logo.background} rounded-sm flex items-center justify-center`}
                >
                  <img className="w-7 h-7" alt="Logo" src={logo.logo} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 p-1.5 flex-1">
              <div className="text-brandprimary text-sm leading-5 font-normal font-['Inter',Helvetica]">
                Meet all customers
              </div>
              <ArrowRightIcon className="w-4 h-4 text-brandprimary" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-col items-center gap-1.5 w-full max-w-3xl">
          <h2 className="text-neutraldgrey text-2xl leading-8 font-normal text-center font-['Inter',Helvetica]">
            Caring is the new marketing
          </h2>
          <p className="text-[#717171] text-xs leading-4 font-normal text-center max-w-md font-['Inter',Helvetica]">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full px-24 py-6">
          {blogCardsData.map((blog, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-[256px] h-[199px] object-cover"
                alt={`Blog image ${index + 1}`}
                src={blog.image}
              />
              <Card className="mt-[-67px] bg-neutralsilver rounded-sm shadow-[0px_5.57px_11.14px_#abbed166]">
                <CardContent className="flex flex-col items-center gap-3 p-3">
                  <p className="w-[198px] text-[#717171] text-sm leading-5 font-normal text-center font-['Inter',Helvetica]">
                    {blog.title}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 p-1.5 w-full">
                    <div className="text-brandprimary text-sm leading-5 font-normal whitespace-nowrap font-['Inter',Helvetica]">
                      Readmore
                    </div>
                    <ArrowRightIcon className="w-4 h4 text-brandprimary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
