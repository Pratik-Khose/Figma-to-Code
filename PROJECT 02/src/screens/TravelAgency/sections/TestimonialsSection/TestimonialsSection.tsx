import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      quote:
        '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: "Mike taylor",
      position: "Lahore, Pakistan",
      image: "/image.png",
      active: true,
    },
    {
      id: 2,
      quote:
        '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: "Chris Thomas",
      position: "CEO of Red Button",
      image: null,
      active: false,
    },
  ];

  // Pagination indicators
  const paginationDots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];

  return (
    <section className="w-full max-w-[1169px] mx-auto py-12 relative">
      <div className="flex flex-col">
        <span className="font-['Poppins',Helvetica] font-semibold text-text-clr text-lg">
          TESTIMONIALS
        </span>

        <h2 className="font-['Volkhov',Helvetica] font-bold text-x-3rd text-[50px] mt-2">
          What People Say
          <br />
          about Us.
        </h2>

        <div className="flex space-x-[38px] mt-16">
          {paginationDots.map((dot, index) => (
            <div
              key={dot.id}
              className={`w-3 h-3 rounded-md ${dot.active ? "bg-[#39425d]" : "bg-neutral-200"}`}
            />
          ))}
        </div>

        <div className="flex mt-8 relative">
          {/* Main active testimonial */}
          <div className="relative">
            {testimonials
              .filter((t) => t.active)
              .map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="w-[547px] relative shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] rounded-[10px]"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      {testimonial.image && (
                        <img
                          className="w-[68px] h-[68px] absolute -top-8 left-0 object-cover"
                          alt="Testimonial author"
                          src={testimonial.image}
                        />
                      )}

                      <div className="pt-[62px] pb-8 px-[71px]">
                        <p className="font-['Poppins',Helvetica] font-medium text-text-clr text-base leading-8 mb-8">
                          {testimonial.quote}
                        </p>

                        <h3 className="font-['Poppins',Helvetica] font-semibold text-text-clr text-lg">
                          {testimonial.name}
                        </h3>

                        <p className="font-['Poppins',Helvetica] font-medium text-text-clr text-sm mt-2">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Secondary testimonial */}
          <div className="relative ml-[87px] mt-[124px]">
            {testimonials
              .filter((t) => !t.active)
              .map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="w-[506px] rounded-[10px] border-2 border-solid border-[#f7f7f7] shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005]"
                >
                  <CardContent className="p-8">
                    <p className="font-['Open_Sans',Helvetica] font-normal text-[#4e4e73] text-base leading-8 mb-8">
                      {testimonial.quote}
                    </p>

                    <h3 className="font-['Poppins',Helvetica] font-semibold text-text-clr text-lg">
                      {testimonial.name}
                    </h3>

                    <p className="font-['Poppins',Helvetica] font-medium text-text-clr text-sm mt-2">
                      {testimonial.position}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Pagination control */}
          <img
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[74px]"
            alt="Pagination"
            src="/pagination.png"
          />
        </div>
      </div>
    </section>
  );
};
