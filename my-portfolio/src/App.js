// Portfolio Website using React + Tailwind CSS

import React, { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll to set active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="font-bold text-xl text-blue-700">SG</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "skills", "education", "experience", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider ${
                  activeSection === item ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-inner">
            {["home", "about", "projects", "skills", "education", "experience", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block py-2 px-4 w-full text-left ${
                  activeSection === item ? "text-blue-600 font-semibold" : "text-gray-600"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Sai Ganesh Grandhi
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                AI/ML Specialist & Identity Access Management Expert
              </p>
              <p className="mb-8 text-blue-100 max-w-lg">
                Building intelligent systems and securing digital identities. University of Windsor graduate with expertise in machine learning and cybersecurity.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white p-1 rounded-full shadow-xl">
                {/* Replace with your profile picture */}
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl">SG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">My Background</h3>
                <p className="mb-4">
                  I'm a passionate computer science graduate with extensive experience in AI/ML and IAM (CyberArk, SSO, PAM). 
                  I love building intelligent systems and contributing to digital security solutions.
                </p>
                <p>
                  With a strong foundation in both theoretical concepts and practical applications, I bring a unique 
                  perspective to solving complex problems in the areas of machine learning and identity security.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8 border-t-2 md:border-t-0 md:border-l-2 border-gray-100 pt-6 md:pt-0 md:pl-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">My Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Machine Learning & AI Development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Identity & Access Management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cybersecurity (CyberArk, SSO, PAM)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Research & Academic Publication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-blue-700 flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">DharmaBot</h3>
                <p className="text-gray-700 mb-4">
                  A sophisticated chatbot leveraging LangChain & Buddhist teachings, utilizing Mistral and LLaMA-3 models with RAG for intelligent responses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">LLM</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">RAG</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">LangChain</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-purple-700 flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Eye Tracking ML</h3>
                <p className="text-gray-700 mb-4">
                  Trained custom deep learning models on VREED dataset for continuous user authentication with high accuracy rates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Deep Learning</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Authentication</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">VR</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-green-700 flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">IAM Automation Tool</h3>
                <p className="text-gray-700 mb-4">
                  Python-based tool for streamlining user access provisioning, integrating with Active Directory to enhance security workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Active Directory</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">IAM</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-700">Technical Skills</h3>
              
              {/* Skill Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Machine Learning / Deep Learning</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Python / TensorFlow / PyTorch</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Identity & Access Management</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">CyberArk / SSO / PAM</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-700">Additional Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white shadow rounded-lg text-center">
                  <svg className="h-8 w-8 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h4 className="font-medium">Security Analysis</h4>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                  <svg className="h-8 w-8 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <h4 className="font-medium">Research & Writing</h4>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                  <svg className="h-8 w-8 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-medium">Project Management</h4>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                  <svg className="h-8 w-8 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="font-medium">Team Leadership</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 py-6 border-l-2 border-blue-600">
              <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] top-8"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700">M.Sc. in Computer Science</h3>
                    <h4 className="font-medium mb-2">University of Windsor</h4>
                    <p className="text-gray-600 mb-4">Focus on Machine Learning and Computer Security</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Thesis: Continuous Authentication in VR using Eye Tracking</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Specialized in AI/ML and cybersecurity integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Research assistant in XR and ML domains</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-3 rounded-full">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left timeline */}
              <div className="md:col-span-4 md:text-right flex flex-col justify-center">
                <h3 className="font-bold text-lg">IT Security Analyst</h3>
                <p className="text-blue-600 font-medium">Healthcare Organization</p>
                <p className="text-sm text-gray-600">2019 - 2022</p>
              </div>
              
              {/* Timeline dot */}
              <div className="md:col-span-1 relative flex items-center justify-center">
                <div className="h-full w-1 bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-6 h-6 bg-blue-600 rounded-full z-10"></div>
              </div>
              
              {/* Right content */}
              <div className="md:col-span-7 bg-white rounded-lg shadow-md p-6">
                <p className="mb-4">Led identity and access management initiatives focusing on CyberArk, Centrify, and RBAC implementations across enterprise systems.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Migrated over 1000 UNIX/Linux servers to domain-based authentication</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Developed automation tools reducing access provisioning time by 70%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Implemented least privilege access policies enhancing security posture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/5 mb-4 md:mb-0">
                <div className="p-4 bg-blue-100 rounded-lg text-center">
                  <span className="text-blue-700 font-bold">IEEE VR</span>
                  <p className="text-sm text-blue-800">2025 (Under Review)</p>
                </div>
              </div>
              <div className="md:w-4/5 md:pl-8">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Continuous Authentication in VR using Eye Tracking</h3>
                <p className="mb-4 text-gray-700">
                  This research explores novel methods for continuous user authentication in virtual reality environments 
                  using eye movement patterns. We developed deep learning models trained on the VREED dataset and achieved 
                  92% accuracy in real-time authentication scenarios.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Virtual Reality</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Authentication</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Machine Learning</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="mb-6">
                  Feel free to reach out if you have any questions or would like to collaborate on projects.
                  I'm always open to discussing new opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:ggrandhi98@gmail.com" className="hover:underline">ggrandhi98@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <a href="https://www.linkedin.com/in/saiganeshgrandhi/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <a href="https://github.com/gsg0618" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Sai Ganesh Grandhi</h2>
              <p className="text-gray-400">AI/ML & Identity Access Management Specialist</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:ggrandhi98@gmail.com" className="hover:text-blue-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/saiganeshgrandhi/" className="hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/gsg0618" className="hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sai Ganesh Grandhi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
