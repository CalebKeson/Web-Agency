import {  Clock, Zap, ArrowRight, CheckCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const LimitedTimeOffer = ({showContactModal}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const seconds = prev.seconds - 1;
        if (seconds < 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.minutes < 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { ...prev, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const closeBanner = () => setIsVisible(false);

  return (
    <>
      {isVisible && (
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-800 py-12 px-6 rounded-xl shadow-2xl border border-indigo-400/20 mb-16">
          {/* Floating elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          
          {/* Close button */}
          <button 
            onClick={closeBanner}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            aria-label="Close offer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Animated badge */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 flex items-center gap-3 animate-[pulse_2s_infinite]">
                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="font-bold text-white tracking-wide">FLASH OFFER</span>
              </div>

              {/* Main content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Launch-Ready in 30 Days
                  </span> or We Work For Free
                </h2>
                <p className="text-lg text-indigo-100 max-w-2xl mx-auto lg:mx-0">
                  Commit now and get priority development + free SEO optimization ($2,500 value)
                </p>
              </div>

              {/* Countdown & CTA */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white bg-black/20 px-4 py-2 rounded-lg min-w-[60px]">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <span className="text-xs text-indigo-200 mt-1">HOURS</span>
                  </div>
                  <div className="text-2xl text-white font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white bg-black/20 px-4 py-2 rounded-lg min-w-[60px]">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <span className="text-xs text-indigo-200 mt-1">MINUTES</span>
                  </div>
                  <div className="text-2xl text-white font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white bg-black/20 px-4 py-2 rounded-lg min-w-[60px]">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <span className="text-xs text-indigo-200 mt-1">SECONDS</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-8 h-8 rounded-full border-2 border-white ${i >= spotsLeft ? 'bg-gray-400' : 'bg-yellow-400'}`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-white font-medium">
                    {spotsLeft} SPOTS LEFT
                  </span>
                </div>

                <button onClick={()=>showContactModal()} className="cursor-pointer px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center gap-3 group">
                  Claim Your Spot
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Offer highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                "Guaranteed 30-day delivery",
                "Free post-launch support (60 days)",
                "Dedicated project manager"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LimitedTimeOffer;