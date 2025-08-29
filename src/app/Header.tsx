'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Use appropriate selector based on mobile state
      const navSelector = isMobile ? '.mobile-nav-header' : '.nav-header';
      const navHeader = document.querySelector(navSelector);
      
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
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showScrollToTop, isFadingOut, isMobile]);

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

  // Use consistent dark styling to match footer
  const textColor = '#ffffff';
  const hoverBg = 'rgba(255, 255, 255, 0.1)';
  const activeBg = 'rgba(255, 255, 255, 0.2)';

  // Update link colors
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
  }, [textColor]);

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
                    className="object-contain"
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
                    className="object-contain absolute inset-0"
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