import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Code, RefreshCw, PenTool, Mail, Bell } from 'lucide-react';

const Navbar = ({showContactModal}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Web Design", icon: <PenTool className="w-5 h-5" />, desc: "Stunning, conversion-focused designs" },
    { name: "Web Development", icon: <Code className="w-5 h-5" />, desc: "Fast, secure custom websites" },
    { name: "Website Renovation", icon: <RefreshCw className="w-5 h-5" />, desc: "Modernize existing sites" },
    { name: "UI/UX Design", icon: <LayoutDashboard className="w-5 h-5" />, desc: "Intuitive user experiences" }
  ];

  // Custom max-w-7xl equivalent (80rem = 1280px)
  const maxWidthStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem', // px-4
    width: '100%'
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 py-4'}`}
      style={{ backdropFilter: 'blur(6px)' }}
    >
      {/* Main container with 7xl width */}
      <div style={maxWidthStyle}>
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo - Left aligned */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group z-50"
            style={{ flexShrink: 0 }}
          >
            <LayoutDashboard className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
              Lebo Tech
            </span>
          </Link>

          {/* Desktop Navigation - Center aligned */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 font-medium transition-all">
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-96 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  style={{ 
                    animation: 'fadeIn 0.3s ease-out forwards',
                    width: '540px'
                  }}
                >
                  <div className="grid grid-cols-2 gap-0">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-start gap-4 p-6 hover:bg-gray-50 transition-colors border-b border-r border-gray-100"
                      >
                        <div className="p-2.5 bg-indigo-50 rounded-lg text-indigo-600">
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{service.name}</p>
                          <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/work" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Our Work
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
            <Link 
              // to="/contact"
              onClick={showContactModal} 
              className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden bg-white py-4 px-4 shadow-lg rounded-lg mt-2"
            style={{ animation: 'slideDown 0.3s ease-out forwards' }}
          >
            <div className="flex flex-col space-y-3">
              <div className="border-b border-gray-100 pb-3">
                <button 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="mt-2 pl-4 space-y-3">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-3 p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors"
                      >
                        <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600">
                          {service.icon}
                        </div>
                        <div>
                          <p>{service.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/work" className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded hover:bg-gray-50 transition-colors">
                Our Work
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded hover:bg-gray-50 transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded hover:bg-gray-50 transition-colors">
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-colors text-center mt-2 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      
    </header>
  );
};

export default Navbar;