'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cosmic-white to-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-cosmic-blue/10 rounded-full text-cosmic-blue text-sm font-medium">
                🚀 USDT-Backed Digital Wallet
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-cosmic-navy leading-tight">
                The Future of{' '}
                <span className="bg-cosmic-gradient bg-clip-text text-transparent">
                  Digital Wallets
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience seamless USDT-backed transactions with 1:1 stability. 
                CosmicPay brings the power of digital finance to your fingertips with 
                UPI integration, liquidity rewards, and global accessibility.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cosmic-gradient text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-cosmic-blue text-cosmic-blue px-8 py-4 rounded-xl font-semibold hover:bg-cosmic-blue hover:text-white transition-all duration-200 flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-cosmic-navy">$50M+</div>
                <div className="text-gray-600">Transaction Volume</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-cosmic-navy">100K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-cosmic-navy">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Visualization */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 mx-auto max-w-sm animate-float">
                <div className="bg-cosmic-gradient rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">CosmicPay Wallet</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/80 text-sm">Available Balance</p>
                      <p className="text-2xl font-bold">$12,450.00</p>
                      <p className="text-white/60 text-xs">≈ 12,450 USDT</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <button className="bg-white/20 rounded-xl p-3 text-center">
                        <div className="text-sm font-medium">Send</div>
                      </button>
                      <button className="bg-white/20 rounded-xl p-3 text-center">
                        <div className="text-sm font-medium">Receive</div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Transaction List */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-gray-800 font-semibold">Recent Activity</h4>
                  {[
                    { type: 'Received', amount: '+$500.00', time: '2 min ago' },
                    { type: 'Sent', amount: '-$150.00', time: '1 hour ago' },
                    { type: 'Liquidity Reward', amount: '+$25.50', time: '3 hours ago' },
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-800">{tx.type}</p>
                        <p className="text-xs text-gray-500">{tx.time}</p>
                      </div>
                      <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cosmic-blue/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}