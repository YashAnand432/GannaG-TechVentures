"use client";

import { useState } from "react";

export default function AiArticleWriter() {
  const [language, setLanguage] = useState("English (US)");
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [subheadings, setSubheadings] = useState<string[]>([""]);

  const languageOptions = [
    "English (US)",
    "English (UK)",
    "French",
    "Spanish",
    "German",
    "Italian",
    "Dutch",
    "Portuguese",
    "Japanese",
    "Chinese",
    "Korean",
    "Hindi",
    "Arabic",
    "Russian",
    "Turkish",
    "Polish",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
  ];

  const handleSubheadingChange = (index: number, value: string) => {
    const newSubheadings = [...subheadings];
    newSubheadings[index] = value;
    setSubheadings(newSubheadings);
  };

  const addSubheading = () => {
    setSubheadings([...subheadings, ""]);
  };

  return (
    <main className="min-h-screen bg-[#f7fafd] py-10 px-4">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Generate Articles With AI
        </h1>

        {/* Language */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            {languageOptions.map((lang, idx) => (
              <option key={idx} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Article Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Article Title*
          </label>
          <input
            type="text"
            placeholder="e.g. The 15 Best Places to Live in the US in 2023"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Focus Keywords */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Focus Keywords (separated with a comma)
          </label>
          <input
            type="text"
            placeholder="Add keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Outline */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Outline* (minimum 3 subheadings)
          </label>
          {subheadings.map((sub, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Subheading ${idx + 1}`}
              value={sub}
              onChange={(e) => handleSubheadingChange(idx, e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-2"
            />
          ))}
          <button
            onClick={addSubheading}
            className="text-sm text-blue-600 hover:underline mt-1"
          >
            + Add another subheading
          </button>
        </div>

        {/* Write Article Button */}
        <div className="text-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md disabled:opacity-50"
            disabled={
              !title || subheadings.filter((s) => s.trim() !== "").length < 3
            }
          >
            Write Article
          </button>
        </div>
      </div>
    </main>
  );
}
