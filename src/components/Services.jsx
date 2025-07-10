import { RefreshCw, ShieldAlert, Smartphone, Rocket, Code, ShoppingCart, Zap, ArrowRight, ChevronRight, Phone } from 'lucide-react';

const ServicesSection = ({showContactModal}) => {
  const services = [
    {
      icon: <RefreshCw className="w-8 h-8 text-indigo-600" />,
      title: "Website Modernization Rescue",
      description: "Transform outdated websites into secure, high-performance assets",
      highlights: [
        "WordPress/PHP to modern stacks",
        "Security vulnerability fixes",
        "<2s load time optimization",
        "jQuery to React/Vue migration",
        "Mobile-first redesigns",
        "Legacy CMS migrations",
        "Performance audits",
        "SEO optimization"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      cta: "Get Modernization Audit"
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Custom Web Development",
      description: "Bespoke websites engineered for performance",
      highlights: [
        "React/Next.js with TypeScript",
        "Tailwind CSS UI/UX",
        "Headless CMS integration",
        "API-first architecture",
        "ADA/WCAG compliance",
        "Web3 integration",
        "Real-time features",
        "Database optimization"
      ],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      cta: "View Our Work"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
      title: "E-Commerce Revolution",
      description: "Optimized online stores that convert",
      highlights: [
        "Shopify/Headless solutions",
        "Checkout optimization",
        "Platform migrations",
        "PCI-DSS compliance",
        "PWA mobile experience",
        "Inventory integration",
        "Payment gateways",
        "Conversion tracking"
      ],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      cta: "Analyze My Store"
    }
  ];

  const outdatedTech = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      name: "WordPress (Pre-2020)",
      risk: "87% of hacked sites use outdated WP",
      solution: "Headless WordPress + React"
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      name: "jQuery Codebases",
      risk: "3x slower than modern frameworks",
      solution: "Migration to React/Vue"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
      name: "Non-responsive",
      risk: "Lose 40% mobile traffic",
      solution: "Mobile-first redesign"
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-purple-500" />,
      name: "PHP 5.x/7.0",
      risk: "No security updates",
      solution: "Upgrade to PHP 8.2+"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with animated rocket */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-5 py-2 rounded-full mb-4">
            <Rocket className="w-5 h-5 text-indigo-600 animate-[bounce_2s_infinite]" />
            <span className="font-medium text-indigo-600">Future-Ready Websites</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="text-indigo-600">Services</span> That Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specializing in transforming outdated websites while building high-performance solutions
          </p>
        </div>

        {/* Outdated Tech Warning - 4 Cards */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm border border-red-200">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Website Might Be at Risk</h3>
              <p className="text-gray-700 mb-4">
                Websites using these outdated technologies suffer from security vulnerabilities and poor performance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {outdatedTech.map((tech, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      {tech.icon}
                      <span className="font-medium text-gray-800">{tech.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">⚠️ {tech.risk}</p>
                    <p className="text-sm font-medium text-indigo-600">✨ {tech.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Stack - Improved Layout */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-200 group h-full"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image - Full Height */}
                <div className="lg:w-2/5 h-56 lg:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content - With Gap */}
                <div className="lg:w-3/5 p-6 lg:pl-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Two Column Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <button className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 group-hover:shadow-md w-full sm:w-auto">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA with Image */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100 hover:border-indigo-200 transition-colors shadow-sm hover:shadow-md">
  <div className="max-w-2xl mx-auto text-center">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ready to Transform Your Website?</h3>
    <p className="text-lg text-gray-600 mb-6">
      Get a free technical audit with actionable insights in 24 hours
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
        Request Free Audit
        <ArrowRight className="w-5 h-5" />
      </button>
      <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-3.5 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
        <Phone className="w-5 h-5 text-indigo-600" />
        Book a Call
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default ServicesSection;