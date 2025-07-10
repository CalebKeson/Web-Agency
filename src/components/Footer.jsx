import { LayoutDashboard, Mail, Phone, MapPin, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6 group">
              <LayoutDashboard className="w-8 h-8 text-indigo-600 group-hover:text-indigo-400 transition-all duration-300 transform group-hover:rotate-12" />
              <span className="text-2xl font-bold group-hover:text-indigo-400 transition-colors duration-300">Lebo Tech</span>
            </div>
            <p className="text-gray-400 mb-6 hover:text-indigo-300 transition-colors duration-300">
              Transforming digital experiences through innovative web solutions and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white hover:text-indigo-400 transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Our Work', 'Services', 'About Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:pl-2 flex items-center">
                    <span className="hidden group-hover:block w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white hover:text-indigo-400 transition-colors duration-300">Services</h3>
            <ul className="space-y-3">
              {['Web Design', 'Web Development', 'E-Commerce', 'Website Modernization', 'UI/UX Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:pl-2 flex items-center">
                    <span className="hidden group-hover:block w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white hover:text-indigo-400 transition-colors duration-300">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">lebokeson@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">+254 (717) 191-224</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">Nairobi, KE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 mb-16 border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 hover:text-indigo-400 transition-colors duration-300 inline-block">Stay Updated</h3>
            <p className="text-gray-400 mb-6 hover:text-indigo-300 transition-colors duration-300">
              Subscribe to our newsletter for the latest web trends and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-400 focus:outline-none text-white hover:border-indigo-300 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-indigo-500/30 transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm hover:text-indigo-300 transition-colors duration-300">
            © {new Date().getFullYear()} Lebo Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-indigo-300 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-300 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-300 text-sm transition-colors duration-300">
              Cookies
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-indigo-300 text-sm transition-colors duration-300 font-medium">
              Designed by Lebo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;