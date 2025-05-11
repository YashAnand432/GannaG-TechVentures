

'use client';

import { Rocket, CalendarClock, Link2, Tags, Layers, FileText, Upload } from 'lucide-react';

export default function activate() {
  const features = [
    {
      icon: <Tags className="w-6 h-6 text-indigo-600" />,
      title: "AI–powered Keyword Research",
      description: "We find and pick the keywords with the most potential to gain traffic.",
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-indigo-600" />,
      title: "Content Planner",
      description: "Schedule your content months ahead and let AI publish content on autopilot.",
    },
    {
      icon: <Link2 className="w-6 h-6 text-indigo-600" />,
      title: "AI–powered Internal Linking",
      description: "Copymatic analyzes the pages that need to be linked to in your blog posts.",
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: "AI–powered SEO Recommendations",
      description: "Automatically apply the recommendations with one-click update.",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "Articles That Rank",
      description: "We leverage AI to write articles and humans to proofread and format them.",
    },
    {
      icon: <Upload className="w-6 h-6 text-indigo-600" />,
      title: "Automatic Publishing",
      description: "Thanks to our integrations, Copymatic can publish your blog posts automatically.",
    },
  ];

  return (
    <main className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-4 py-1 rounded-full">NEW</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">Grow your traffic on autopilot with <span className="text-indigo-600">AI</span></h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Say bye to the time-consuming SEO tasks of keyword research, content creation, and optimization. With Copymatic Studio, the world’s first autonomous SEO agent, your traffic can now grow on autopilot.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300">
              <div>{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition duration-300">
          Get Started
        </button>
      </div>
    </main>
  );
}
