'use client';

import { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cosmic-gradient rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-cosmic-navy">CosmicPay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-cosmic-blue transition-colors duration-200">
              Products
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-cosmic-blue transition-colors duration-200">
              Pricing
            </a>
            <a href="#docs" className="text-gray-700 hover:text-cosmic-blue transition-colors duration-200">
              Docs
            </a>
            <a href="#support" className="text-gray-700 hover:text-cosmic-blue transition-colors duration-200">
              Support
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-cosmic-blue transition-colors duration-200">
              Login
            </button>
            <button className="bg-cosmic-gradient text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cosmic-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-cosmic-blue">
                Products
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-cosmic-blue">
                Pricing
              </a>
              <a href="#docs" className="block px-3 py-2 text-gray-700 hover:text-cosmic-blue">
                Docs
              </a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-cosmic-blue">
                Support
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <button className="text-left text-gray-700 hover:text-cosmic-blue">
                  Login
                </button>
                <button className="bg-cosmic-gradient text-white px-4 py-2 rounded-xl text-left">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}