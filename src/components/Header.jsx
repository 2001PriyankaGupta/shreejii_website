import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, User, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Partners', path: '/partners' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar - Hidden on mobile */}
      {!scrolled && (
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              <span className="info-text">RBI Licensed NBFC • Secure & Trusted Banking Partner</span>
              <div className="contact-links">
                <a href="tel:18001234567"><Phone size={14} /> 1800-123-4567</a>
                <a href="mailto:contact@shreejifinance.com"><Mail size={14} /> contact@shreejifinance.com</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main-nav">
        <div className="container">
          <div className="nav-container">
            {/* LOGO */}
            <NavLink to="/" className="logo-section">
              <div className="logo-box">S</div>
              <span className="logo-text">SHREEJI <span className="gold">FINANCE</span></span>
            </NavLink>

            {/* DESKTOP NAV */}
            <nav className="desktop-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* ACTIONS */}

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="mobile-overlay"
          >
            <div className="mobile-menu">
              <div className="mobile-header">
                <span className="logo-text">SHREEJI <span className="gold">FINANCE</span></span>
                <button onClick={() => setMobileMenuOpen(false)}><X size={28} /></button>
              </div>
              <div className="mobile-links">
                {navLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className="m-link">
                    {link.name}
                    <ChevronRight size={18} />
                  </NavLink>
                ))}
              </div>
              <div className="mobile-footer">
                <button className="btn-mega">Login to Portal</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .top-bar {
                    background: #020617;
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }

                .top-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .info-text {
                    color: #94a3b8;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .contact-links {
                    display: flex;
                    gap: 20px;
                }

                .contact-links a {
                    color: #94a3b8;
                    font-size: 11px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-weight: 600;
                }

                .main-nav {
                    background: rgba(255,255,255,0.8);
                    backdrop-filter: blur(20px);
                    padding: 15px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    transition: all 0.3s;
                }

                .header.scrolled .main-nav {
                    padding: 10px 0;
                    background: rgba(255,255,255,0.95);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }

                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo-section {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                }

                .logo-box {
                    width: 32px;
                    height: 32px;
                    background: #0F172A;
                    color: #D4AF37;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 950;
                    border-radius: 8px;
                    transform: rotate(45deg);
                }

                .logo-text {
                    font-size: 22px;
                    font-weight: 900;
                    color: #0F172A;
                    letter-spacing: -1px;
                }

                .gold { color: #D4AF37; }

                .desktop-links {
                    display: flex;
                    gap: 30px;
                }

                .nav-item {
                    color: #475569;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 700;
                    transition: all 0.3s;
                }

                .nav-item:hover, .nav-item.active {
                    color: #0F172A;
                }

                .nav-item.active {
                    position: relative;
                }

                .nav-item.active::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 15px;
                    height: 2px;
                    background: #D4AF37;
                }

                .header-actions {
                    display: flex;
                    gap: 15px;
                }

                .btn-portal {
                    background: #0F172A;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 800;
                    font-size: 13px;
                }

                .mobile-toggle {
                    display: none;
                    background: none;
                    color: #0F172A;
                }

                @media (max-width: 900px) {
                    .desktop-links { display: none; }
                    .mobile-toggle { display: block; }
                    .top-bar-content .contact-links { display: none; }
                }

                /* MOBILE MENU STYLES */
                .mobile-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(2,6,23,0.5);
                    z-index: 2000;
                }

                .mobile-menu {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 85%;
                    max-width: 400px;
                    background: white;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                }

                .mobile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                }

                .mobile-links {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    flex: 1;
                }

                .m-link {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-decoration: none;
                    color: #0F172A;
                    font-size: 20px;
                    font-weight: 900;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #f1f5f9;
                }

                .btn-mega {
                    width: 100%;
                    background: #0F172A;
                    color: white;
                    padding: 20px;
                    border-radius: 16px;
                    font-weight: 900;
                    font-size: 16px;
                }
            ` }} />
    </header>
  );
};

export default Header;
