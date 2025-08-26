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
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to detect section type based on scroll position and section backgrounds
  const detectSectionType = () => {
    const currentScrollY = window.scrollY;
    const pathname = window.location.pathname;
    
    // For non-home pages, default to light background
    if (pathname !== '/') {
      setIsDarkBackground(false);
      return;
    }
    
    // First try selector-based detection
    const sectionSelectors = [
      // Hero section - dark gradient
      { 
        selector: 'section[class*="bg-gradient-to-br"][class*="from-gray-900"]', 
        isDark: true 
      },
      // Results section - gray background
      { 
        selector: 'section[class*="bg-gray-50"]', 
        isDark: false 
      },
      // Stats section - red background (CEV by the numbers)
      { 
        selector: 'section[class*="bg-red-600"]', 
        isDark: true 
      },
      // About section - white background
      { 
        selector: 'section[class*="bg-white"]:not([class*="min-h-screen"]), div[class*="bg-white"]:not([class*="min-h-screen"])', 
        isDark: false 
      },
      // CTA section - dark gradient (Excited to Join Us)
      { 
        selector: 'section[class*="bg-gradient-to-r"][class*="from-gray-900"], div[class*="bg-gradient-to-r"][class*="from-gray-900"]', 
        isDark: true 
      },
      // Footer - dark gray
      { 
        selector: 'footer[class*="bg-gray-900"], div[class*="bg-gray-900"]:not([class*="gradient"])', 
        isDark: true 
      }
    ];
    
    // Try to find which section we're currently in using selectors
    let currentSection = null;
    for (const sectionDef of sectionSelectors) {
      const element = document.querySelector(sectionDef.selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionTop = currentScrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        // Use a smaller offset for mobile to be more responsive to section changes
        const offset = isMobile ? 50 : 100;
        
        // Check if we're in this section (with some offset for the nav height)
        if (currentScrollY + offset >= sectionTop && currentScrollY + offset < sectionBottom) {
          currentSection = { element, isDark: sectionDef.isDark };
          console.log('Detected section via selector:', sectionDef.selector, currentSection.isDark ? 'dark' : 'light', 'at scrollY:', currentScrollY, 'mobile:', isMobile);
          break;
        }
      }
    }
    
    // If selector-based detection worked, use it
    if (currentSection) {
      setIsDarkBackground(currentSection.isDark);
      console.log('Detected section via selector:', currentSection.isDark ? 'dark' : 'light', 'at scrollY:', currentScrollY);
      return;
    }
    
    // Fallback to Y position-based detection since section heights are static
    // Use different heights for mobile vs desktop
    const sectionHeights = isMobile ? [
      { start: 0, end: 600, isDark: true },        // Hero section (shorter on mobile)
      { start: 600, end: 1200, isDark: false },    // Results section  
      { start: 1200, end: 1600, isDark: true },    // Stats section (CEV by numbers)
      { start: 1600, end: 2200, isDark: false },   // About section
      { start: 2200, end: 2600, isDark: true },    // CEV different section
      { start: 2600, end: 4740, isDark: false },  // Footer section
      { start: 4740, end: 999999, isDark: true }
    ] : [
      { start: 0, end: 800, isDark: true },        // Hero section
      { start: 800, end: 1600, isDark: false },    // Results section  
      { start: 1600, end: 2100, isDark: true },    // Stats section (CEV by numbers)
      { start: 2100, end: 2900, isDark: false },   // About section
      { start: 2900, end: 3400, isDark: true },    // CTA section (Excited to Join Us)
      { start: 3400, end: 9999999, isDark: true }  // Footer section
    ];
    
    for (const section of sectionHeights) {
      if (currentScrollY >= section.start && currentScrollY < section.end) {
        setIsDarkBackground(section.isDark);
        console.log('Detected section via Y position:', section.isDark ? 'dark' : 'light', 'at scrollY:', currentScrollY, 'mobile:', isMobile);
        return;
      }
    }
    
    // Ultimate fallback
    setIsDarkBackground(currentScrollY < 100);
    console.log('Using ultimate fallback detection, scrollY:', currentScrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Use appropriate selector based on mobile state
      const navSelector = isMobile ? '.mobile-nav-header' : '.nav-header';
      const navHeader = document.querySelector(navSelector);
      
      // Detect background color on scroll
      detectSectionType();
      
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
    setTimeout(() => detectSectionType(), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showScrollToTop, isFadingOut, isMobile]);

  // Update color detection when mobile menu opens/closes
  useEffect(() => {
    // Trigger color detection when mobile menu state changes
    detectSectionType();
  }, [isMobileMenuOpen]);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    // Update desktop navigation links
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.classList.contains('bg-red-600')) { // Don't change Apply button
        element.style.setProperty('color', textColor, 'important');
      }
    });
    
    // Update mobile navigation links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.classList.contains('bg-red-600') && !element.classList.contains('text-white')) { // Don't change Apply button
        element.style.setProperty('color', textColor, 'important');
      }
    });
    
    // Update mobile menu button and hamburger lines
    const mobileMenuButton = document.querySelector('.mobile-menu-button') as HTMLElement;
    if (mobileMenuButton) {
      mobileMenuButton.style.setProperty('color', textColor, 'important');
    }
    
    const hamburgerLines = document.querySelectorAll('.hamburger-lines span');
    hamburgerLines.forEach((line) => {
      const element = line as HTMLElement;
      element.style.setProperty('background-color', textColor, 'important');
    });
  }, [isDarkBackground, textColor]);

  return (
    <>
      {!isMobile ? (
        // Desktop Navigation
        <header className="nav-header">
          <div className="w-full flex items-center justify-center">
            <nav className="flex items-center justify-center gap-6">
              <Link 
                href="/team"
                className={`nav-link text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300`}
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
                Team
              </Link>
              <Link 
                href="/vehicles"
                className={`nav-link text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300`}
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
              
              <Link 
                href="/" 
                className={`nav-link flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 mx-2`}
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
                <div className="relative flex items-center justify-center" style={{ width: '50px', height: '32px' }}>
                  <Image 
                    src="/logo.png"
                    alt="Cornell Electric Vehicles Logo" 
                    width={80} 
                    height={36}
                    className={`object-contain transition-opacity duration-300 ease-in-out ${
                      isDarkBackground ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      width: 'auto', 
                      height: '32px',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    priority
                  />
                  <Image 
                    src="/logo-dark.png"
                    alt="Cornell Electric Vehicles Logo" 
                    width={80} 
                    height={36}
                    className={`object-contain transition-opacity duration-300 ease-in-out ${
                      isDarkBackground ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ 
                      width: 'auto', 
                      height: '32px',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    priority
                  />
                </div>
              </Link>
              
              <Link 
                href="/alumni"
                className={`nav-link text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300`}
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
                className="nav-link text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 bg-red-600/80 hover:bg-red-600 text-white"
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
              >
                Apply
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        // Mobile Navigation
        <>
          <header className="mobile-nav-header">
            <div className="flex items-center justify-between w-full">
              <Link 
                href="/" 
                className="flex items-center"
              >
                <div className="relative flex items-center" style={{ width: '80px', height: '28px' }}>
                  <Image 
                    src="/logo.png"
                    alt="Cornell Electric Vehicles Logo" 
                    width={80} 
                    height={36}
                    className={`object-contain absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      isDarkBackground ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ width: 'auto', height: '28px' }}
                    priority
                  />
                  <Image 
                    src="/logo-dark.png"
                    alt="Cornell Electric Vehicles Logo" 
                    width={80} 
                    height={36}
                    className={`object-contain absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      isDarkBackground ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ width: 'auto', height: '28px' }}
                    priority
                  />
                </div>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-button"
                style={{
                  color: textColor,
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
              >
                <div className="hamburger-lines">
                  <span style={{ backgroundColor: textColor }}></span>
                  <span style={{ backgroundColor: textColor }}></span>
                  <span style={{ backgroundColor: textColor }}></span>
                </div>
              </button>
            </div>
          </header>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <nav className="mobile-menu">
              <Link 
                href="/team"
                className="mobile-nav-link"
                style={{
                  color: textColor,
                  backgroundColor: isActive('/team') ? activeBg : 'transparent',
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/vehicles"
                className="mobile-nav-link"
                style={{
                  color: textColor,
                  backgroundColor: isActive('/vehicles') ? activeBg : 'transparent',
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vehicles
              </Link>
              <Link 
                href="/alumni"
                className="mobile-nav-link"
                style={{
                  color: textColor,
                  backgroundColor: isActive('/alumni') ? activeBg : 'transparent',
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Alumni
              </Link>
              <Link 
                href="/apply"
                className="mobile-nav-link bg-red-600/80 hover:bg-red-600 text-white"
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply
              </Link>
            </nav>
          )}
        </>
      )}

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