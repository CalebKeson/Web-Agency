import { Star, Quote, ArrowRight, ArrowLeft, Zap, Sparkles, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = ({showContactModal}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      role: "CEO, TechStart Inc.",
      content: "Lebo Tech transformed our outdated WordPress site into a blazing-fast Next.js application. Our bounce rate dropped by 65% and conversions increased by 40% within the first month. Their team is worth every penny!",
      rating: 5,
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Director of E-Commerce",
      content: "The e-commerce platform they built handles 10,000+ daily visitors effortlessly. Their attention to checkout optimization increased our average order value by 28%. Simply exceptional development work.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Priya M.",
      role: "CMO, HealthPlus",
      content: "From legacy PHP to modern React in 6 weeks - their migration was flawless with zero downtime. Our mobile traffic engagement tripled thanks to their responsive redesign. The best tech partners we've worked with.",
      rating: 5,
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with animated icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-5 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-indigo-600 animate-[pulse_2s_infinite]" />
            <span className="font-medium text-indigo-600">Client Voices</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-indigo-600">Transformative</span> Results, <span className="text-indigo-600">Verified</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The impact we've delivered for forward-thinking companies
          </p>
        </div>

        {/* Testimonial Card - Fixed Height Container */}
        <div className="relative max-w-4xl mx-auto h-[480px]"> {/* Fixed height container */}
          <div className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row h-full">
              {/* Client Image - Fixed Height */}
              <div className="md:w-2/5 h-full relative overflow-hidden">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-indigo-200 font-medium">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content - Fixed Height */}
              <div className="md:w-3/5 p-10 flex flex-col h-full">
                <Quote className="w-10 h-10 text-indigo-400 rotate-180 mb-6 opacity-80" />
                
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-100 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-full rounded-full" 
                        style={{ width: `${(currentIndex + 1) / testimonials.length * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {currentIndex + 1}/{testimonials.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows - Elevated */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-700 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-700 transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Enhanced CTA */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Success Story?</h3>
            <p className="text-indigo-100 mb-8 text-lg">
              Let's discuss how we can deliver exceptional results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </button>
              <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                Get Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;