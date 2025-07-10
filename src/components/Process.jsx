import { BadgeCheck, ArrowRight } from 'lucide-react';

const ProcessSection = ({showContactModal}) => {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Discovery Call",
      description: "We discuss your goals, audience, and vision to craft the perfect strategy",
      accent: "bg-indigo-100 hover:bg-indigo-200"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Custom Proposal",
      description: "You receive a tailored plan with timelines, deliverables, and investment",
      accent: "bg-purple-100 hover:bg-purple-200"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: "Design & Build",
      description: "Our team builds your website with weekly progress updates",
      accent: "bg-blue-100 hover:bg-blue-200"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
        </svg>
      ),
      title: "Launch & Support",
      description: "We deploy your site and provide 30 days of free maintenance",
      accent: "bg-green-100 hover:bg-green-200"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <BadgeCheck className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-indigo-600">Proven Process</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Transparent workflow that delivers exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl ${step.accent} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-white/30`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group hover:shadow-md transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>
              <div className="mt-6 pt-6 border-t border-white/30 group-hover:border-white/40 transition-colors duration-300">
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                  Step {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={()=>showContactModal()} className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-2 hover:scale-[1.02] cursor-pointer">
            Get Started Today
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;