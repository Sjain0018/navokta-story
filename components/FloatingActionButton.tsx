'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const FloatingActionButton: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  // Handle scroll with useCallback for optimization
  const handleScroll = useCallback((): void => {
    setShowTopBtn(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Toggle FAB menu
  const toggleFab = (): void => setIsActive(!isActive);

  // Scroll to top smoothly
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div 
        className={`fixed right-6 z-50 transition-all duration-300 ${
          showTopBtn ? 'bottom-[80px]' : 'bottom-6'
        }`}
      >
        {/* FAB Options */}
        <div 
          className={`flex flex-col items-end gap-3 mb-4 transition-all duration-300 ${
            isActive 
              ? 'opacity-100 scale-100 pointer-events-auto' 
              : 'opacity-0 scale-75 pointer-events-none'
          }`}
        >
          <Link
            href="/add-story"
            className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            onClick={() => setIsActive(false)}
          >
            <span className="text-lg">📝</span>
            Add a Story
          </Link>
          
          <a
            href="tel:+918307233996"
            className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            onClick={() => setIsActive(false)}
          >
            <span className="text-lg">📞</span>
            Call
          </a>
        </div>

        {/* Main FAB Button */}
        <button
          className={`w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-white text-3xl font-light focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 ${
            isActive ? 'rotate-45' : 'rotate-0'
          }`}
          onClick={toggleFab}
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          aria-expanded={isActive}
        >
          <span className="block leading-none">+</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-pink-600 text-white shadow-lg hover:shadow-xl hover:bg-pink-700 hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Go to top"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default FloatingActionButton;