import React from 'react';

const GlitchText = ({ text, className = "", color = "#F72585" }) => {
  return (
    <div className={`relative inline-block font-press-start ${className}`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full opacity-70 animate-glitch-1 select-none pointer-events-none"
        style={{ color: '#E0AAFF', clipPath: 'inset(50% 0 30% 0)' }}
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full opacity-70 animate-glitch-2 select-none pointer-events-none"
        style={{ color: '#5A189A', clipPath: 'inset(10% 0 60% 0)' }}
      >
        {text}
      </span>
      
      <style>{`
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, -2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 2px); }
          100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 1px); }
        }
        .animate-glitch-1 {
          animation: glitch-1 2.5s infinite linear alternate-reverse;
        }
        .animate-glitch-2 {
          animation: glitch-2 3s infinite linear alternate-reverse;
        }
      `}</style>
    </div>
  );
};

export default GlitchText;
