import React from 'react';
import Link from 'next/link';

export default function MyContent() {
  return (
    <main className="min-h-screen bg-[#f5f9fc] px-4 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          My Content
        </h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Find all your articles and any saved content below.
        </p>

        {/* Empty State Box */}
        <div className="bg-white shadow-md rounded-xl p-6 sm:p-10 text-center flex flex-col items-center">
          <p className="text-gray-700 text-base sm:text-lg mb-2">
            You haven't created any articles or content yet.
          </p>
          <p className="text-sm text-gray-500 mb-6 max-w-md">
            Start by using our AI Article Generator tool or explore all available tools.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/home/alltools" passHref>
              <button className="w-full sm:w-auto bg-[#f0e8ff] text-[#6b21a8] font-medium px-6 py-2 rounded-lg hover:bg-[#e5d7ff] transition">
                View All Tools
              </button>
            </Link>
            <Link href="/home/aiarticlewriter" passHref>
              <button className="w-full sm:w-auto bg-[#5b18e8] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#4c0fcf] transition">
                Generate Article
              </button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
