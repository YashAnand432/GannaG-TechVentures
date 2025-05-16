import React from "react";

export default function AllToolsOverlay() {
  const categories = [
    "All",
    "Blog Content",
    "Website Copy & SEO",
    "Social Media & Ads",
    "Marketing",
    "More Tools",
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex flex-row items-center space-x-4 sm:space-x-6 md:space-x-8 px-4 py-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer whitespace-nowrap px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-300 rounded-xl transition"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
