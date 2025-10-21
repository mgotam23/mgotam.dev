import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#111827] text-[#F9FAFB] font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background pattern similar to the hero section */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="court" patternUnits="userSpaceOnUse" width="150" height="150" patternTransform="scale(2) rotate(45)">
              <path d="M 75 0 L 75 150 M 0 75 L 150 75" stroke="#F97316" strokeWidth="1" />
              <circle cx="75" cy="75" r="20" stroke="#F97316" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#court)" />
        </svg>
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          {/* Simple SVG for a missed shot */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-orange-500 animate-bounce"
          >
            <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22z" stroke="#F9FAFB" />
            <path d="M15.5 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#F9FAFB" />
            <path d="M9.5 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#F9FAFB" />
            <path d="M16 14s-1.5 2-4 2-4-2-4-2" stroke="#F9FAFB" />
          </svg>
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold text-orange-500 font-heading tracking-wider">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-2 text-[#F9FAFB] font-heading">
          Airball!
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-sm mx-auto">
          Looks like you've taken a shot from way outside the court. The page you're looking for couldn't be found.
        </p>
        
        <a href="/" className="inline-flex items-center gap-2 bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
          <Home size={20} />
          Return to Center Court
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;