// import React from 'react';

// const DashboardPage = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       {/* <aside className="w-64 bg-white border-r p-4">
//         <h2 className="text-2xl font-bold mb-8">CopyMatic</h2>
//         <nav className="flex flex-col gap-4">
//           <a href="#" className="text-gray-700 hover:text-blue-500">Dashboard</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500">AI Article Writer</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500">All Tools</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500">My Content</a>
//           <a href="#" className="text-gray-700 hover:text-blue-500">Activate</a>
//         </nav>
//       </aside> */}

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-gray-50">
//         {/* Greeting */}
//         <h1 className="text-3xl font-semibold mb-6">Hey ABC 👋 — Let's boost your website traffic today!</h1>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <StatCard title="Words Generated" value="1,726 words" />
//           <StatCard title="Items Generated" value="10 items" />
//           <StatCard title="Time Saved" value="7 hours" />
//           <StatCard title="Tools Used" value="2/81" />
//         </div>

//         {/* Popular Tools */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Most Popular Tools</h2>
//           <div className="grid grid-cols-4 gap-6">
//             <ToolCard title="Article Generator" description="Generate SEO-optimized articles easily." />
//             <ToolCard title="Blog Post Writer" description="Quickly create quality blog posts." />
//             <ToolCard title="Content Rewriter" description="Rewrite your content to make it unique." />
//             <ToolCard title="Paragraph Generator" description="Generate paragraphs with AI." />
//           </div>
//         </section>

//         {/* Marketing Section */}
//         <section className="p-6 bg-purple-100 rounded-lg mb-8">
//           <h3 className="text-xl font-bold mb-2">Grow your website traffic on autopilot with AI</h3>
//           <p className="text-gray-600 mb-4">
//             Just enter your website URL, and Autopilot will generate content and suggest changes that will help you rank higher.
//           </p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Activate Autopilot</button>
//         </section>

//         {/* Recent Content */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Recent Content</h2>
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <RecentContent title="Human Rights" date="Mar 24" words="660" />
//             <RecentContent title="Travelling" date="Mar 24" words="556" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default DashboardPage;

// // Helper Components
// const StatCard = ({ title, value }: { title: string; value: string }) => (
//   <div className="bg-white p-6 rounded-lg shadow">
//     <h3 className="text-gray-500">{title}</h3>
//     <p className="text-2xl font-bold">{value}</p>
//   </div>
// );

// const ToolCard = ({ title, description }: { title: string; description: string }) => (
//   <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
//     <h4 className="font-bold mb-2">{title}</h4>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// const RecentContent = ({ title, date, words }: { title: string; date: string; words: string }) => (
//   <div className="flex justify-between py-2 border-b last:border-b-0">
//     <span className="font-semibold">{title}</span>
//     <div className="text-gray-500 text-sm">{date} — {words} words</div>
//   </div>
// );


"use client";
import React, { useState } from 'react';

const DashboardPage = () => {
  const [search, setSearch] = useState('');
  const tools = [
    { title: "Article Generator", description: "Generate SEO-optimized articles easily." },
    { title: "Blog Post Writer", description: "Quickly create quality blog posts." },
    { title: "Content Rewriter", description: "Rewrite your content to make it unique." },
    { title: "Paragraph Generator", description: "Generate paragraphs with AI." },
    // Add more tools here
  ];

  const filteredTools = tools.filter(tool => 
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      


      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <Navbar search={search} setSearch={setSearch} />

        {/* Content */}
        <main className="p-8">
          <h1 className="text-3xl font-semibold mb-6">Hey ABC 👋 — Let's boost your website traffic today!</h1>

          {/* Pinned Tools */}
          <PinnedTools />

          {/* Stats */}
          <StatsSection />

          {/* Tools Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Most Popular Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default DashboardPage;
const Navbar = ({ search, setSearch }: { search: string; setSearch: (val: string) => void }) => (
  <div className="flex items-center justify-between bg-white p-4 shadow">
    <input
      type="text"
      placeholder="Search tools..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-1/2 p-2 border rounded-lg focus:outline-none"
    />
    <div className="flex items-center gap-6">
      <button className="relative">
        <span className="material-icons">notifications</span>
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
      </button>
      <img src="/image.jpeg" alt="Profile" className="w-8 h-8 rounded-full" />
    </div>
  </div>
);

// Other Components...
const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white p-6 rounded-lg shadow text-center">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const StatsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    <StatCard title="Words Generated" value="1,726" />
    <StatCard title="Items Created" value="10" />
    <StatCard title="Time Saved" value="7 hours" />
    <StatCard title="Tools Used" value="2/81" />
  </div>
);

const ToolCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MarketingBanner = () => (
  <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg mb-8">
    <h3 className="text-xl font-bold mb-2">Grow your website traffic on Autopilot</h3>
    <p className="mb-4">Let AI help you publish more content automatically.</p>
    <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">Activate Autopilot</button>
  </div>
);

const PinnedTools = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Pinned Tools</h2>
    <div className="flex gap-4">
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">Article Generator</div>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">Blog Writer</div>
    </div>
  </section>
);

const RecentActivities = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
    <ul className="list-disc list-inside">
      <li>Generated a blog post — 5 min ago</li>
      <li>Created a paragraph — 20 min ago</li>
      <li>Rewrote content — 1 hour ago</li>
    </ul>
  </section>
);

const RecentContentList = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Recent Content</h2>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between py-2 border-b last:border-b-0">
        <span className="font-semibold">Human Rights</span>
        <span className="text-gray-500 text-sm">Mar 24 - 660 words</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="font-semibold">Travelling</span>
        <span className="text-gray-500 text-sm">Mar 24 - 556 words</span>
      </div>
    </div>
  </section>
);
