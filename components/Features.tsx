'use client';

import { Smartphone, Coins, WholeWord as Wordpress, ArrowRightLeft, Wallet, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'UPI Integration',
    description: 'Instantly withdraw funds to your UPI-enabled bank account with seamless integration and real-time processing.',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Liquidity Provision',
    description: 'Earn while you hold. Register as a liquidity provider and earn a 1% commission on every transaction.',
    color: 'bg-green-500',
  },
  {
    icon: Wordpress,
    title: 'WordPress Compatibility',
    description: 'Seamlessly integrate CosmicPay as a payment method on your WordPress site for global transactions.',
    color: 'bg-purple-500',
  },
  {
    icon: ArrowRightLeft,
    title: 'Wallet-to-Wallet Transfers',
    description: 'Transfer funds directly between CosmicPay wallets in a secure and user-friendly environment.',
    color: 'bg-orange-500',
  },
  {
    icon: Coins,
    title: 'Direct USDT Deposit',
    description: 'Deposit USDT directly into your wallet and start managing your digital assets with complete ease.',
    color: 'bg-cyan-500',
  },
  {
    icon: Wallet,
    title: '1:1 USDT Backing',
    description: 'Every dollar in your wallet is backed 1:1 with USDT, ensuring stability and security in all transactions.',
    color: 'bg-indigo-500',
  },
];

export default function Features() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-cosmic-navy">
            Powerful Features for{' '}
            <span className="bg-cosmic-gradient bg-clip-text text-transparent">
              Modern Finance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CosmicPay combines cutting-edge technology with user-friendly design to deliver 
            the most comprehensive digital wallet experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-cosmic-blue/20"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-cosmic-navy group-hover:text-cosmic-blue transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <button className="text-cosmic-blue font-semibold hover:text-cosmic-navy transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
                  Know More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}