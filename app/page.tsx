"use client"
import React from 'react';
import { useState, useEffect } from 'react';

export default function AIStartupLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(147, 51, 234, 0.3) 0%, 
              transparent 50%),
            radial-gradient(circle at 20% 80%, 
              rgba(124, 58, 237, 0.4) 0%, 
              transparent 50%),
            radial-gradient(circle at 80% 20%, 
              rgba(168, 85, 247, 0.4) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              #1e1b4b 0%, 
              #312e81 25%, 
              #553c9a 50%, 
              #7c3aed 75%, 
              #000000 100%)
          `
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* AI Icon */}
        <div className="mb-12">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full shadow-inner animate-pulse" />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl blur-xl opacity-50 scale-110" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent">
            Free AI Startup Website
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-white bg-clip-text text-transparent">
            Kit
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-12 font-light">
          Effortlessly build a fully functional, responsive, no-code website 
          for AI-driven products in minutes using free Framer and Figma components.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Framer Button */}
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span>Get for Framer</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          {/* Figma Button */}
          <button className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-500">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span>Get for Figma</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}