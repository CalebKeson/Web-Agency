import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, CreditCard, Smartphone, Globe, RefreshCw, ChevronRight, Mail, Phone  } from 'lucide-react';

const FAQSection = ({showContactModal}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to build a custom website?",
      answer: "Our typical timeline ranges from 4-8 weeks depending on complexity. We follow an agile process with weekly deliverables so you see progress continuously. Rush projects (2-3 weeks) are available for 25% premium.",
      icon: <Clock className="w-5 h-5 text-indigo-600" />
    },
    {
      question: "What if I need changes after launch?",
      answer: "All our projects include 30 days of free post-launch support. After that, we offer flexible maintenance plans starting at $99/month. For major changes, we provide discounted development hours to our existing clients.",
      icon: <RefreshCw className="w-5 h-5 text-indigo-600" />
    },
    {
      question: "How do you ensure my website is secure?",
      answer: "We implement multiple security layers: daily malware scans, SSL encryption, web application firewalls, and regular core updates. All sites include our security shield package with 24/7 monitoring and instant attack response.",
      icon: <Shield className="w-5 h-5 text-indigo-600" />
    },
    {
      question: "What about mobile responsiveness?",
      answer: "Every website we build is mobile-first designed, tested on 50+ real devices, and optimized for Core Web Vitals. We guarantee 95+ mobile performance scores on Google Lighthouse with continuous optimization.",
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />
    },
    {
      question: "Do you offer hosting and maintenance?",
      answer: "Yes! Our premium hosting (starting at $29/month) includes CDN, daily backups, staging environments, and 99.99% uptime. Maintenance plans cover updates, security patches, and 1 hour of monthly edits.",
      icon: <Globe className="w-5 h-5 text-indigo-600" />
    },
    {
      question: "What's your payment structure?",
      answer: "We require 30% deposit to start, 40% at design approval, and 30% at launch. All major credit cards, ACH, and wire transfers accepted. Enterprise clients may qualify for net-30 terms on approved credit.",
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with animated icon */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-5 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-indigo-600 animate-[pulse_2s_infinite]" />
            <span className="font-medium text-indigo-600">Client Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Smart Questions, <span className='text-indigo-600'> Smarter</span> Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What savvy clients ask about custom web development
          </p>
        </div>

        {/* Animated Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 ${activeIndex === index ? 'border-indigo-300 shadow-md' : 'hover:border-indigo-200'}`}
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left group transition-colors ${activeIndex === index ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${activeIndex === index ? 'bg-indigo-100' : 'bg-gray-100'} group-hover:bg-indigo-100 transition-colors`}>
                    {faq.icon}
                  </div>
                  <h3 className={`text-lg font-medium ${activeIndex === index ? 'text-indigo-700' : 'text-gray-800'}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4 shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-transform" />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 ml-14 text-gray-600 border-t border-gray-100 pt-4">
                  {faq.answer}
                  {index === 1 && (
                    <button className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100 transition-colors inline-flex items-center gap-1">
                      View Maintenance Plans
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                  {index === 2 && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                      <div className="flex items-center gap-2 text-indigo-600 font-medium">
                        <Shield className="w-4 h-4" />
                        <span>All projects include our 30-day security guarantee</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100 hover:border-indigo-200 transition-colors shadow-sm hover:shadow-md">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team is ready to provide personalized answers within 1 business day
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Email Our Team
                <Mail className="w-5 h-5" />
              </button>
              <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-3.5 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-indigo-600" />
                15-Minute Quick Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;