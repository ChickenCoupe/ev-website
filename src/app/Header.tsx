'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const pathname = usePathname();

  // Function to detect if background is dark or light
  const detectBackgroundColor = () => {
    const navHeader = document.querySelector('.nav-header') as HTMLElement;
    if (!navHeader) return;

    // Get the element behind the nav header
    const navRect = navHeader.getBoundingClientRect();
    const centerX = navRect.left + navRect.width / 2;
    const centerY = navRect.top + navRect.height + 10; // Look just below the nav
    
    // Temporarily hide the nav to sample the background
    navHeader.style.visibility = 'hidden';
    const elementBehind = document.elementFromPoint(centerX, centerY);
    navHeader.style.visibility = 'visible';
    
    if (elementBehind) {
      const computedStyle = window.getComputedStyle(elementBehind);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;
      
      // Check if there's a background image or gradient (likely dark)
      if (backgroundImage && backgroundImage !== 'none') {
        // Check for gradients containing dark colors
        if (backgroundImage.includes('gradient') && 
            (backgroundImage.includes('gray-900') || 
             backgroundImage.includes('red-900') || 
             backgroundImage.includes('gray-800'))) {
          setIsDarkBackground(true);
          return;
        }
      }
      
      // Parse RGB values from background color
      const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        
        // Calculate luminance using standard formula
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        // More sensitive threshold - switch to dark text on lighter backgrounds
        const isDark = luminance < 180; // Increased from 128 to 180
        setIsDarkBackground(isDark);
        
        // Debug logging
        console.log('Background detection:', { r, g, b, luminance, isDark, backgroundColor });
      } else {
        // If no background color is found, check the body or html element
        const bodyStyle = window.getComputedStyle(document.body);
        const htmlStyle = window.getComputedStyle(document.documentElement);
        
        // More sensitive detection for light backgrounds
        if (bodyStyle.backgroundColor.includes('255, 255, 255') || 
            htmlStyle.backgroundColor.includes('255, 255, 255') ||
            bodyStyle.backgroundColor === 'rgb(255, 255, 255)' ||
            bodyStyle.backgroundColor.includes('rgb(248') || // Very light grays like rgb(248, 248, 248)
            bodyStyle.backgroundColor.includes('rgb(250') || // Very light grays like rgb(250, 250, 250)
            bodyStyle.backgroundColor.includes('rgb(245')) {  // Light grays like rgb(245, 245, 245)
          setIsDarkBackground(false);
        } else {
          setIsDarkBackground(true);
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navHeader = document.querySelector('.nav-header');
      
      // Detect background color on scroll
      detectBackgroundColor();
      
      if (navHeader) {
        const navRect = navHeader.getBoundingClientRect();
        const isNavVisible = navRect.bottom > 0;
        const isScrollingUp = currentScrollY < lastScrollY;
        const isScrollingDown = currentScrollY > lastScrollY;
        
        // Show scroll to top when scrolling up and nav is not visible
        const shouldShow = isScrollingUp && !isNavVisible && currentScrollY > 100;
        
        if (shouldShow && !showScrollToTop && !isFadingOut) {
          setShowScrollToTop(true);
          setIsFadingOut(false);
        } else if ((!shouldShow || isScrollingDown) && showScrollToTop && !isFadingOut) {
          // Start fade out when scrolling down or when conditions change
          setIsFadingOut(true);
          // Hide after animation completes
          setTimeout(() => {
            setShowScrollToTop(false);
            setIsFadingOut(false);
          }, 400);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial background detection
    setTimeout(() => detectBackgroundColor(), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showScrollToTop, isFadingOut]);

  const scrollToTop = () => {
    setIsFadingOut(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide after fade-out animation
    setTimeout(() => {
      setShowScrollToTop(false);
      setIsFadingOut(false);
    }, 400);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Dynamic text color based on background
  const textColor = isDarkBackground ? '#ffffff' : '#1a1a1a';
  const hoverBg = isDarkBackground ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const activeBg = isDarkBackground ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)';

  // Update link colors when background changes
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.classList.contains('bg-red-600')) { // Don't change Apply button
        element.style.setProperty('color', textColor, 'important');
      }
    });
  }, [isDarkBackground, textColor]);

  return (
    <>
      <header className="nav-header">
        <div className="w-full flex items-center justify-center">
          <nav className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {/* Left navigation items */}
            <Link 
              href="/team"
              className={`nav-link text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 md:px-5 py-2 rounded-full transition-all duration-300`}
              style={{
                color: textColor,
                backgroundColor: isActive('/team') ? activeBg : 'transparent',
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/team')) {
                  e.currentTarget.style.backgroundColor = hoverBg;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/team')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              Our Team
            </Link>
            <Link 
              href="/vehicles"
              className={`nav-link text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 md:px-5 py-2 rounded-full transition-all duration-300`}
              style={{
                color: textColor,
                backgroundColor: isActive('/vehicles') ? activeBg : 'transparent',
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/vehicles')) {
                  e.currentTarget.style.backgroundColor = hoverBg;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/vehicles')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              Vehicles
            </Link>
            
            {/* Center logo (home) */}
            <Link 
              href="/" 
              className={`nav-link flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 rounded-lg transition-all duration-300 mx-2`}
              style={{
                color: textColor,
                backgroundColor: isActive('/') ? activeBg : 'transparent',
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/')) {
                  e.currentTarget.style.backgroundColor = hoverBg;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Image 
                src="/logo.png" 
                alt="Cornell Electric Vehicles Logo" 
                width={50} 
                height={50}
                className="object-contain"
                style={{ width: 'auto', height: '40px' }}
                priority
              />
            </Link>
            
            {/* Right navigation items */}
            <Link 
              href="/alumni"
              className={`nav-link text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 md:px-5 py-2 rounded-full transition-all duration-300`}
              style={{
                color: textColor,
                backgroundColor: isActive('/alumni') ? activeBg : 'transparent',
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/alumni')) {
                  e.currentTarget.style.backgroundColor = hoverBg;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/alumni')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              Alumni
            </Link>
            <Link 
              href="/apply"
              className="nav-link text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 md:px-5 py-2 rounded-full transition-all duration-300 bg-red-600/80 hover:bg-red-600 text-white"
              style={{
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
            >
              Apply
            </Link>
          </nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            zIndex: 9999,
            padding: '1rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '50px',
            color: 'var(--foreground)',
            fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: isFadingOut ? 'fadeOut 0.4s ease-out forwards' : 'fadeInUp 0.4s ease-out',
            opacity: isFadingOut ? 0 : 1,
            transform: isFadingOut ? 'translateX(-50%) translateY(20px)' : 'translateX(-50%) translateY(0)'
          }}
        >
          Return to top ↑
        </button>
      )}
    </>
  );
} 