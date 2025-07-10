import { Award, ShieldCheck, GitMerge, Clock, BarChart2, Users, Sparkles, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "Industry-Recognized Excellence",
      description: "5-time Webby Awards nominee with 98% client satisfaction across 120+ projects"
    },
    {
      icon: <GitMerge className="w-6 h-6 text-indigo-600" />,
      title: "Future-Proof Technology",
      description: "We build with Next.js, TypeScript, and headless architectures—not outdated WordPress"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Military-Grade Security",
      description: "Enterprise-grade protection including WAF, DDoS mitigation, and daily malware scans"
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Lightning-Fast Delivery",
      description: "Average project completion 30% faster than industry standard"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
      title: "Performance Obsessed",
      description: "Guaranteed >90 Lighthouse scores with our optimization framework"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Dedicated Dream Team",
      description: "Your project gets a senior developer, designer, and PM—no juniors"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-5 py-2 rounded-full mb-4 animate-[fadeIn_0.8s_ease-in-out]">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-indigo-600">The Lebo Tech Difference</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-[slideUp_0.6s_ease-in-out]">
            Why <span className="text-indigo-600">Top-Performing</span> Businesses Choose Us
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.6s_ease-in-out_0.1s]">
            The competitive advantages that set our web solutions apart
          </p>
        </div>

        {/* Grid with Tailwind animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-[slideUp_0.5s_ease-in-out forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg transition-all duration-300 group-hover:bg-indigo-100">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 animate-[fadeIn_0.8s_ease-in-out_0.3s]">
          {[
            "Google Premier Partner",
            "Clutch Top 100 Developers 2024",
            "5-Star Rated on Upwork",
            "Shopify Plus Certified"
          ].map((badge, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add these keyframes to your Tailwind config */}
      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;