"use client";

import React, { useState } from "react";
import AllToolsNavbar from "@/app/components/AllToolsNavbar";
import ToolCard from "@/app/components/AllTools/ToolCard";
import { toolSections } from "@/app/dataStructure/toolsData";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function MyContent() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col space-y-6 px-4 sm:px-8 py-6">
      {/* Top Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-semibold">All Tools</h1>
        </div>

        <div className="sm:w-1/3 flex items-center gap-2">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cursor-pointer px-2 py-2 rounded-sm"
          >
            {hovered ? <HiLightBulb size={28} /> : <HiOutlineLightBulb size={28} />}
          </div>

          <input
            className="flex-1 px-3 py-2 rounded-sm bg-gray-200 placeholder-gray-600 text-sm focus:outline-none w-full"
            type="text"
            placeholder="What do you want to create?"
          />
        </div>
      </div>

      {/* Optional Navbar */}
      {/* <AllToolsNavbar /> */}

      {/* Tool Sections */}
      <div className="space-y-10">
        {toolSections.map((section) => (
          <div key={section.id} id={section.id}>
            {/* Optional Section Title */}
            {/* <h2 className="text-xl sm:text-2xl font-semibold mb-4">{section.name}</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.tools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  icon={tool.icon}
                  description={tool.description}
                  onClick={() =>
                    router.push(
                      `/${tool.name.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
