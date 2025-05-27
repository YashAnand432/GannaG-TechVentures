// app/ai-article-writer/page.tsx
import React from "react";

export default function aiarticlewriter() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Generate Articles With AI</h2>
      
      <p className="mb-6 text-sm text-gray-500 bg-purple-50 p-4 rounded flex justify-between items-center">
        Would you like to try the new version, which includes advanced outline writing, maximum word count, and more?
        <button className="ml-4 bg-purple-600 text-white px-3 py-1 text-sm rounded hover:bg-purple-700">
          Try New Version
        </button>
      </p>

      <form className="bg-white p-6 rounded shadow max-w-2xl">
        {/* Language */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">Language</span>
          <select className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm">
            <option>English (US)</option>
          </select>
        </label>

        {/* Article Title */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">Article title*</span>
          <input
            type="text"
            placeholder="e.g. The 15 Best Places to Live in the US in 2023"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </label>

        {/* Focus Keywords */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">Focus Keywords (separated with a comma)</span>
          <input
            type="text"
            placeholder="Add keyword"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </label>

        {/* Outline */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">Outline* (minimum 3 subheadings)</span>
          <textarea
            placeholder="Enter at least 3 subheadings"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
            rows={4}
          ></textarea>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Generate Article
        </button>
      </form>
    </main>
  );
}
