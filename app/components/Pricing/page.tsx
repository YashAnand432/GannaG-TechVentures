import React, { useState } from 'react';
import LoginModal from "../Login/page"; // adjust path if needed

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const plans = [
    {
      name: "Pro",
      price: isYearly ? 19 : 25,
      features: [
        "1 autopilot project",
        "Unlimited words",
        "Access to all tools",
        "Automatic keyword research",
        "Content scheduling",
        "Internal & external linking",
        "Rank tracking",
        "AI SEO Recommendations",
        "Automatic publishing",
        "AI & Stock images",
        "10% off backlinks"
      ],
      highlighted: false
    },
    {
      name: "Team",
      price: isYearly ? 32 : 42,
      features: [
        "3 autopilot projects",
        "Unlimited words",
        "Access to all tools",
        "Automatic keyword research",
        "Content scheduling",
        "Internal & external linking",
        "Rank tracking",
        "AI SEO Recommendations",
        "Automatic publishing",
        "AI & Stock images",
        "15% off backlinks"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: isYearly ? 66 : 86,
      features: [
        "10 autopilot projects",
        "Unlimited words",
        "Access to all tools",
        "Automatic keyword research",
        "Content scheduling",
        "Internal & external linking",
        "Rank tracking",
        "AI SEO Recommendations",
        "Automatic publishing",
        "AI & Stock images",
        "20% off backlinks"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="relative py-0 px-4">
      <div className="max-w-6xl mx-auto">
        <section className="py-0 relative bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-black font-semibold mb-2">THE WORLD'S MOST ADVANCED AI LANGUAGE MODEL</p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent">
              Write unique and human-like copy in seconds
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Powered by AI</h3>
              <p className="text-white">
                The GPT-3 AI language model is nothing like you've seen before: natural, unique and creative.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Powerful settings</h3>
              <p className="text-white">
                Adjust the creativity level or the tone of voice to generate the perfect copy for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimized for conversions</h3>
              <p className="text-white">
                Trained with conversions in mind to write content that captures attention and converts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Available Tools</h3>
              <p className="text-white">
                Generate all types of copy or content in seconds with the ultimate creative writing tool.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grammar check</h3>
              <p className="text-white">
                Don't let poor grammar hurt your visitor's trust. Copymatic can check and rewrite your content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sentence rewriter</h3>
              <p className="text-white">
                AI understands your sentence and rewrites it in a completely unique and smart way.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* Header */}
        <div className="text-center mt-36">
          <p className="text-black font-semibold text-md uppercase tracking-wide mb-4">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent ">
            Start writing 10x faster with AI
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto mb-8">
            Our plans are simple and transparent, they are based on the number of generated words on a rolling monthly basis.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-4 ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <div className="relative">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 h-8 rounded-full transition-colors ${
                  isYearly ? 'bg-[#603699]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                    isYearly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <span className={`ml-4 ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <div className="ml-3 relative">
                <div className="bg-blue-100 text-[#603699] px-3 py-1 rounded-full text-sm font-semibold">
                  4 months free
                </div>
                <div className="absolute -top-2 -left-2">
                  <svg className="w-6 h-6 text-[#603699]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.highlighted
                  ? 'border-2 border-blue-600 shadow-xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">/mo</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">billed yearly</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowLoginModal(true)}
                className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-[#603699] text-white hover:bg-[#4D2C7D]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Start free trial →
              </button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
         <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default PricingSection;