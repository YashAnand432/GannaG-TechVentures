"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import LoginModal from "../Login/page"; // adjust path if needed

export default function Home() {
  const [email, setEmail] = useState('')
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen relative z-10 bg-transparent ">
      {/* Hero Section */}
      <section className="relative py-20 px-4 ">
        <div className="max-w-6xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent">
                Unlock the power of AI across the web
              </h1>
              <p className="text-xl text-white mb-8">
                Download our Chrome extension and write any type of content using 
                AI where you need it the most.
              </p>
              <p className="text-lg text-white mb-8">
                Get access to 80+ AI writing tools in your browser including our 
                revolutionary AI chat assistant, CopyChat.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold cursor-pointer transition-colors">
                Add Copymatic to Chrome
              </button>
            </div>
            
            {/* Chat Interface Preview */}
            <div className="relative ">
              <div className="bg-white rounded-xl shadow-xl p-6 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">👤</span>
                  </div>
                  <span className="ml-3 text-gray-900 font-medium">What is the price of Bitcoin today</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <div className="text-sm text-gray-800">
                      <p className="mb-2">
                        The price of Bitcoin as of today, 6 February, 23:32 UTC is $21,183.87. This 
                        is a significant increase from the price of Bitcoin just a few days ago, which 
                        was at $19,467.68.
                      </p>
                      <p>
                        The current market capitalization of Bitcoin stands at approximately 385 billion dollars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-white font-semibold mb-2 ">BOOST YOUR WRITING PRODUCTIVITY</p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6">
            End writer's block today
          </h2>
          <p className="text-xl text-white mb-8">
            It's like having access to a team of copywriting experts writing powerful copy for you in 1-click.
          </p>
          
          <button   onClick={() => setShowLoginModal(true)}
          className="bg-white text-black px-8 py-3 rounded-lg  cursor-pointer text-lg font-semibold hover:bg-blue-700 transition-colors mb-8">
            Start your free trial →
          </button>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-white">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              50+ tools to explore
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              No credit card required
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">Copymatic</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Save time. Get inspired.</h3>
              <p className="text-white text-sm mb-4">
                Automatically generate blog articles, website copy, landing pages & digital ads for your 
                business in seconds. Unleash the most advanced AI writer to boost your traffic and productivity.
              </p>
              <p className="text-white text-xs">© 2025 Copymatic. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">USE CASES</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-blue-600">AI Rewriter</a></li>
                <li><a href="#" className="hover:text-blue-600">AI Article Writer</a></li>
                <li><a href="#" className="hover:text-blue-600">AI Content Generator</a></li>
                <li><a href="#" className="hover:text-blue-600">About Us Page Generator</a></li>
                <li><a href="#" className="hover:text-blue-600">Subject Lines Generator</a></li>
                <li><a href="#" className="hover:text-blue-600">AI Text Completer</a></li>
                <li><a href="#" className="hover:text-blue-600">Text Rewriter & Spinner</a></li>
                <li><a href="#" className="hover:text-blue-600">ChatGPT Alternative</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">ABOUT</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Login</a></li>
                <li><a href="#" className="hover:text-blue-600">Signup</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">COPYMATIC</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600">@CopymaticAI</a></li>
                <li><a href="#" className="hover:text-blue-600">Affiliate Program</a></li>
              </ul>
            </div>
          </div>
        </div>
           <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      </footer>
    </div>
  )
}