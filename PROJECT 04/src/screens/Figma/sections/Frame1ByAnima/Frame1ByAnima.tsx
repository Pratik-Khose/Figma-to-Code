import React from "react";

export const Frame1ByAnima = (): JSX.Element => {
  // Define categories data for mapping
  const categories = [
    { name: "Beaches", image: "/image-4-1.png" },
    { name: "Deserts", image: "/image-16-1.png" },
    { name: "Mountains", image: "/image-3-1.png" },
    { name: "Iconic Cities", image: "/image-13-1.png" },
    { name: "Houseboats", image: "/image-17-1.png" },
    { name: "Countryside", image: "/image-10-1.png" },
    { name: "Camping", image: "/image-5-1.png" },
    { name: "Castles", image: "/image-12-1.png" },
    { name: "Skiing", image: "/image-15-1.png" },
    { name: "Tropical", image: "/image-8-1.png" },
  ];

  return (
    <nav className="w-full py-4 px-36">
      <div className="flex items-start justify-between">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-[19.22px] cursor-pointer"
          >
            <img
              className="w-[38.45px] h-[38.45px] object-cover"
              alt={`${category.name} icon`}
              src={category.image}
            />
            <span className="opacity-40 font-normal text-[19.2px] text-white tracking-[0] leading-normal whitespace-nowrap">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};
