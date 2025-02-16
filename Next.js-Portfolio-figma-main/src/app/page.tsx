import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A full-stack web application built with NextJS and TypeScript",
      tags: ["NextJS", "TypeScript", "TailwindCSS"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first responsive design system",
      tags: ["React", "Styled Components", "Firebase"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "E-commerce platform with payment integration",
      tags: ["NextJS", "Stripe", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Fixed width and centered */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered with max-width */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Noureen Malik</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full Stack Developer in modern web technologies
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Noonreen" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/noureen-malik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Consistent container width */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate developer with 5+ years of experience building modern web applications.
                  I specialize in React, NextJS, and TypeScript, with a strong focus on creating
                  performant and accessible user interfaces.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-6">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'NextJS', 'TypeScript', 'TailwindCSS', 'Node.js', 'MongoDB'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Grid with consistent spacing */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Centered form with consistent width */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Full width with centered content */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Noureen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;