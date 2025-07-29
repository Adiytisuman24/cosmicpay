'use client';

import { Shield, Zap, Globe, Users } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your funds are protected with enterprise-level security measures, including multi-signature wallets and cold storage for maximum protection.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    reverse: false,
  },
  {
    icon: Zap,
    title: 'Lightning Fast Transactions',
    description: 'Experience instant transfers with our optimized blockchain infrastructure. Most transactions complete in under 30 seconds.',
    image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600',
    reverse: true,
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Send and receive payments worldwide with competitive exchange rates and support for multiple currencies and payment methods.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    reverse: false,
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a thriving ecosystem of users, developers, and liquidity providers working together to build the future of digital finance.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    reverse: true,
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-cosmic-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                highlight.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${highlight.reverse ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cosmic-gradient rounded-xl flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-cosmic-navy">
                    {highlight.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="flex items-center space-x-6">
                  <button className="bg-cosmic-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                  <button className="text-cosmic-blue font-semibold hover:text-cosmic-navy transition-colors duration-200">
                    View Documentation →
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${highlight.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-cosmic-gradient opacity-10"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-cosmic-navy">Trusted by 100K+ users</p>
                      <p className="text-sm text-gray-600">Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}