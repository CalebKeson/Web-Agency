const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white pt-48 pb-24 max-w-7xl mx-auto">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-200 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-purple-200 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Text + CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-3">
              <div className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-300 cursor-default">
                Award-Winning Agency
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">5.0 (200+ reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We Build Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Convert</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Transform your online presence with custom-designed, high-performance websites that drive results and elevate your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg flex items-center gap-2 group transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:scale-[1.02]">
                Get Your Free Audit
                <svg 
                  className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
              <button className="px-8 py-3.5 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm flex items-center gap-2 group transition-all duration-300 hover:shadow-md hover:border-indigo-300 hover:scale-[1.02]">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-all duration-300 group-hover:rotate-12">
                  <svg 
                    className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-all duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.8L14.9 9.5 6.3 16.2V2.8z"/>
                  </svg>
                </div>
                Watch Our Process
              </button>
            </div>

            {/* Stats in single row - Now with equal width cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { value: "250+", label: "Websites Launched" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "5x", label: "Avg. ROI Increase" },
                { value: "<2s", label: "Avg. Load Time" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-indigo-300 cursor-default hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 hover:text-gray-600 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image with tech stack below */}
          <div className="relative">
            {/* Main image */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-8 border-white mb-6 transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Team working on website design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating project card */}
              <div className="absolute bottom-6 left-6 bg-white p-5 rounded-lg shadow-md max-w-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-600 hover:text-indigo-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Latest Project</h4>
                    <p className="text-sm text-gray-500 hover:text-gray-600 transition-colors duration-300">E-commerce redesign</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-full bg-indigo-600 rounded-full w-3/4 hover:w-4/5 transition-all duration-500"></div>
                </div>
                <p className="text-sm text-gray-500 hover:text-gray-600 transition-colors duration-300">Development progress</p>
              </div>
            </div>

            {/* Tech stack - now below image */}
            <div className="flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-200 max-w-md mx-auto">
              {['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Shopify'].map((tech, i) => (
                <span key={i} className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;