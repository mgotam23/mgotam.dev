import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

import { fullName, email, linkedin, github, twitter } from "@/config/config";

const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-20 px-6 overflow-hidden"
    >
      {/* Field Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Orb (Soccer Ball Glow) */}
      <div 
        className="absolute top-20 right-10 md:right-20 w-96 h-96 animate-pulse"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(34, 197, 94, 0.8), 
            rgba(34, 197, 94, 0.4) 40%, 
            transparent 70%)`,
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      
      {/* Soccer Ball Icon */}
      <div 
        className="absolute top-32 right-16 md:right-32 text-8xl opacity-10"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        🏀
      </div>
      
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Main Heading */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block">Get on</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              the court.
            </span>
          </h2>
          
          {/* Dot Pattern (like stadium lights) */}
          <div className="grid grid-cols-12 gap-2 mt-8 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${
                  i % 3 === 0 ? 'bg-green-400' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Right Column - Contact Info */}
        <div className="space-y-8 flex flex-col justify-center">
          {/* Email */}
          <a 
            href={`mailto:${email}`}
            className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/30 transition-colors">
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Pass the Ball</h3>
              <p className="text-green-400 group-hover:text-green-300 transition-colors">
                {email}
              </p>
            </div>
          </a>
          
          {/* LinkedIn */}
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/30 transition-colors">
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Catch Me on LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-green-300 transition-colors">
                LinkedIn Profile
              </p>
            </div>
          </a>
          
          {/* GitHub */}
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/30 transition-colors">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">See the Playbook</h3>
              <p className="text-gray-400 group-hover:text-green-300 transition-colors">
                GitHub Portfolio
              </p>
            </div>
          </a>
        </div>
      </div>
      
      {/* Add keyframes for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </footer>
  );
};

export { ContactSection };