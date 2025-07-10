import { Code, ExternalLink, ArrowRight, Github, LayoutTemplate, Rocket } from 'lucide-react';

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Headless Shopify store with custom React frontend achieving 95+ Lighthouse scores",
      tags: ["Next.js", "Shopify", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg",
      github: "#",
      demo: "#",
      stats: "↑ 240% conversions"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Real-time analytics dashboard with WebSocket connections and data visualization",
      tags: ["React", "Node.js", "WebSockets"],
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      github: "#",
      demo: "#",
      stats: "↓ 80% load time"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient portal with telehealth integration",
      tags: ["TypeScript", "AWS", "Twilio"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      github: "#",
      demo: "#",
      stats: "10,000+ users"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header - Shorter & Punchier */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-5 py-2 rounded-full mb-4 animate-[fadeIn_0.8s_ease-in-out]">
            <Rocket className="w-5 h-5 text-indigo-600 animate-[bounce_2s_infinite]" />
            <span className="font-medium text-indigo-600">Our Work</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-[slideUp_0.6s_ease-in-out]">
            <span className="text-indigo-600">Delivered</span> With Impact
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.6s_ease-in-out_0.1s]">
            See our work that drives real business results
          </p>
        </div>

        {/* Taller Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group h-full flex flex-col animate-[slideUp_0.5s_ease-in-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Taller Image Section */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <LayoutTemplate className="w-4 h-4" />
                    {project.stats}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{project.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                  <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group-hover:underline"
                  >
                    Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-[fadeIn_0.8s_ease-in-out_0.3s]">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl group"
          >
            See All Projects
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;