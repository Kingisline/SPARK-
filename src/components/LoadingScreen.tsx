import { useEffect, useRef, useState } from "react";

const LoadingScreen = () => {
  return (
    <>
      {/* Keyframe animation for the logo reveal.
        - `shine-effect`: Animates a CSS mask across the logo, creating a "wipe" or "reveal" effect.
        - `fade-in`: A simple fade-in for the entire component for a smoother appearance.
      */}
      <style>{`
        @keyframes shine-effect {
          0% {
            -webkit-mask-position: 150%;
            mask-position: 150%;
          }
          100% {
            -webkit-mask-position: -50%;
            mask-position: -50%;
          }
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-shine {
          animation: shine-effect 2s cubic-bezier(0.6, 0, 0.4, 1) 0.5s forwards;
          -webkit-mask-image: linear-gradient(to right, transparent 30%, white 50%, transparent 70%);
          mask-image: linear-gradient(to right, transparent 30%, white 50%, transparent 70%);
          -webkit-mask-size: 400%;
          mask-size: 400%;
        }
        .animate-component-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* Main container for the splash screen, using your site's dark navy blue background */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] animate-component-fade-in">
        
        {/* The container that holds the logo and has the animation applied */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-5 animate-shine">
          
          {/* The SVG icon, recreated from your image, with responsive sizing */}
          <svg
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L9.95 9.95L2 12L9.95 14.05L12 22L14.05 14.05L22 12L14.05 9.95L12 2Z M18 8L17.25 10.5L15 11.25L17.25 12L18 14.5L18.75 12L21 11.25L18.75 10.5L18 8Z M5 15L4.4 17.4L2 18L4.4 18.6L5 21L5.6 18.6L8 18L5.6 17.4L5 15Z"/>
          </svg>

          {/* The "SPARK" text, with responsive sizing */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans font-bold tracking-widest text-white uppercase">
            <span className="text-[#60a5fa]">SP</span>ARK
          </h1>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;