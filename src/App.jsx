import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Phone, Mail, MessageSquare, X, Briefcase } from 'lucide-react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Process from "./components/Process";
import ServicesSection from "./components/Services";
import MarqueeSection from './components/Partners';
import Footer from './components/Footer';
import FAQSection from './components/FAQ';
import TestimonialsSection from './components/Testimonials';
import LimitedTimeOffer from './components/LimitedTimeOffer';
import WhyChooseUs from './components/WhyChooseUse';
import ProjectsShowcase from './components/ProjectShowcase';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactOptions = [
    {
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
      title: "WhatsApp Me",
      detail: "+254 (717)-191-224",
      action: "Start Chat",
      color: "from-green-50 to-green-100",
      link: "https://wa.me/15551234567"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: "Business Line",
      detail: "+254 (717)-191-224",
      action: "Dial Now",
      color: "from-blue-50 to-blue-100",
      link: "tel:+15559876543"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: "Business Email",
      detail: "lebokeson@gmail.com",
      action: "Compose Email",
      color: "from-purple-50 to-purple-100",
      link: "mailto:lebokeson@gmail.com"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-xl p-8 max-w-lg w-full mx-4 shadow-2xl animate-scaleIn">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-3">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-indigo-600">Business Inquiries Only</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Preferred Contact Method
          </h3>
          <p className="text-gray-500 mt-1">We respond within 1 business day</p>
        </div>

        <div className="space-y-4">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-gradient-to-r ${option.color} hover:shadow-md transition-all group`}
            >
              <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-900">{option.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{option.detail}</p>
              </div>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                {option.action}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6 justify-center text-gray-500 text-sm">
          <Briefcase className="w-4 h-4" />
          <span>Strictly for business purposes</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar showContactModal={() => setShowContactModal(true)} />
      <HeroSection showContactModal={() => setShowContactModal(true)} />
      <Process />
      <ProjectsShowcase showContactModal={() => setShowContactModal(true)} />
      <ServicesSection showContactModal={() => setShowContactModal(true)} />
      <WhyChooseUs showContactModal={() => setShowContactModal(true)} />
      <MarqueeSection />
      <TestimonialsSection showContactModal={() => setShowContactModal(true)} />
      <LimitedTimeOffer showContactModal={() => setShowContactModal(true)} />
      <FAQSection showContactModal={() => setShowContactModal(true)} />
      <Footer showContactModal={() => setShowContactModal(true)} />

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </BrowserRouter>
  );
};

export default App;