import { BadgeCheck } from 'lucide-react';

const MarqueeSection = () => {
  const partners = [
    "Shopify", "Webflow", "React", "Next.js", 
    "Figma", "Tailwind CSS", "Contentful", "Vercel",
    "Adobe", "AWS", "Google Cloud", "Stripe"
  ];

  // Duplicate for seamless looping
  const partnerList = [...partners, ...partners];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with icon */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <BadgeCheck className="w-7 h-7 text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted By Industry Leaders
          </h2>
        </div>

        {/* Marquee container with fade edges */}
        <div className="relative overflow-hidden py-2">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Infinite marquee */}
          <div className="flex items-center py-4 animate-marquee whitespace-nowrap">
            {partnerList.map((partner, index) => (
              <div 
                key={`${partner}-${index}`} 
                className="inline-flex items-center justify-center mx-8"
              >
                <span className="text-xl font-medium text-gray-700 opacity-90 hover:opacity-100 hover:text-indigo-600 transition-all duration-300">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;