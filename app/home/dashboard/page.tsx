"use client";
import React, { useState } from 'react';

const DashboardPage = () => {
  const [search, setSearch] = useState('');
  const tools = [
    { title: "Article Generator", description: "Generate SEO-optimized articles easily." },
    { title: "Blog Post Writer", description: "Quickly create quality blog posts." },
    { title: "Content Rewriter", description: "Rewrite your content to make it unique." },
    { title: "Paragraph Generator", description: "Generate paragraphs with AI." },
  ];

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar search={search} setSearch={setSearch} />

      {/* Content */}
      <main className="p-4 sm:p-6 md:p-8 flex-1">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Hey ABC 👋 — Let's boost your website traffic today!
        </h1>

        {/* Pinned Tools */}
        <PinnedTools />

        {/* Stats */}
        <StatsSection />

        {/* Tools Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Most Popular Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} title={tool.title} description={tool.description} />
            ))}
          </div>
        </section>

        {/* Marketing Banner */}
        <MarketingBanner />

        {/* Recent Activities */}
        <RecentActivities />

        {/* Recent Content */}
        <RecentContentList />
      </main>
    </div>
  );
};

export default DashboardPage;

// Navbar
const Navbar = ({ search, setSearch }: { search: string; setSearch: (val: string) => void }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 shadow gap-4">
    <input
      type="text"
      placeholder="Search tools..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full sm:w-1/2 p-2 border rounded-lg focus:outline-none"
    />
    <div className="flex items-center gap-4 sm:gap-6">
      <button className="relative">
        <span className="material-icons">notifications</span>
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
      </button>
      <img src="/image.jpeg" alt="Profile" className="w-8 h-8 rounded-full" />
    </div>
  </div>
);

// Stats
const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
    <h3 className="text-gray-500 text-sm sm:text-base">{title}</h3>
    <p className="text-xl sm:text-2xl font-bold">{value}</p>
  </div>
);

const StatsSection = () => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
    <StatCard title="Words Generated" value="1,726" />
    <StatCard title="Items Created" value="10" />
    <StatCard title="Time Saved" value="7 hours" />
    <StatCard title="Tools Used" value="2/81" />
  </div>
);

// Tool Card
const ToolCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Marketing Banner
const MarketingBanner = () => (
  <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg mb-8">
    <h3 className="text-lg sm:text-xl font-bold mb-2">Grow your website traffic on Autopilot</h3>
    <p className="mb-4 text-sm sm:text-base">Let AI help you publish more content automatically.</p>
    <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 text-sm sm:text-base">
      Activate Autopilot
    </button>
  </div>
);

// Pinned Tools
const PinnedTools = () => (
  <section className="mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Pinned Tools</h2>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer w-full sm:w-auto">
        Article Generator
      </div>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer w-full sm:w-auto">
        Blog Writer
      </div>
    </div>
  </section>
);

// Recent Activities
const RecentActivities = () => (
  <section className="mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Recent Activities</h2>
    <ul className="list-disc list-inside text-sm sm:text-base">
      <li>Generated a blog post — 5 min ago</li>
      <li>Created a paragraph — 20 min ago</li>
      <li>Rewrote content — 1 hour ago</li>
    </ul>
  </section>
);

// Recent Content List
const RecentContentList = () => (
  <section>
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Recent Content</h2>
    <div className="bg-white p-4 rounded-lg shadow-sm text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b last:border-b-0">
        <span className="font-semibold">Human Rights</span>
        <span className="text-gray-500">Mar 24 - 660 words</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between py-2">
        <span className="font-semibold">Travelling</span>
        <span className="text-gray-500">Mar 24 - 556 words</span>
      </div>
    </div>
  </section>
);
