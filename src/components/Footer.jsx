import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-section">
              <div className="logo-box">S</div>
              <h2 className="logo-text">SHREEJI <span className="gold">FINANCE</span></h2>
            </div>
            <p className="footer-desc">
              Redefining financial accessibility across India with technology-driven lending solutions and local trust.
            </p>
            <div className="social-links">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="social-icon"><Icon size={20} /></a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>Loan Products</h3>
            <ul>
              {['Instant Loan', 'Personal Loan', 'Car Loan', 'Bike Loan', 'CV Loan'].map(link => {
                const pathStr = link.toLowerCase().replace(' ', '-');
                return (
                  <li key={link}><ArrowRight size={12} /> <Link to={`/${pathStr}`}>{link}</Link></li>
                );
              })}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Partner Program', path: '/partners' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Use', path: '/terms-of-use' }
              ].map(link => (
                <li key={link.name}>
                  <ArrowRight size={12} /> <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={18} /></div>
              <span>Main Office: Financial Hub, Bandra East, Mumbai - 400051</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={18} /></div>
              <span>Support: 1800-123-4567 (Toll Free)</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={18} /></div>
              <span>Email: support@shreejifinance.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Shreeji Finance Limited. All Rights Reserved.</p>
          <p className="nbfc-tag">NBFC Registration No. N-12.XXXXX | Subject to Credit Approval</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: #0F172A;
          color: white;
          padding-top: 100px;
          padding-bottom: 40px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 50px;
          margin-bottom: 60px;
          align-items: start;
        }
        
        .footer-brand .logo-section {
          margin-bottom: 20px;
        }

        .footer-brand .logo-box {
          background: white;
          color: #0F172A;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 18px;
          transform: rotate(45deg);
        }

        .footer-brand .logo-box::after {
          content: 'S';
          transform: rotate(-45deg);
        }
        
        .footer-brand .logo-text {
          color: white;
          font-size: 22px;
          font-weight: 900;
        }
        
        .footer-desc {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 15px;
          max-width: 320px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        
        .social-icon:hover {
          background: #D4AF37;
          border-color: #D4AF37;
          transform: translateY(-3px);
        }
        
        .footer-links h3, .footer-contact h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 30px;
        }
        
        .footer-links ul {
          list-style: none;
        }
        
        .footer-links li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: #94a3b8;
          transition: color 0.3s;
        }
        
        .footer-links li:hover {
          color: #D4AF37;
        }
        
        .footer-links a {
          font-size: 15px;
          font-weight: 500;
        }
        
        .contact-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4AF37;
          flex-shrink: 0;
        }
        
        .contact-item span {
          color: #94a3b8;
          font-size: 14px;
          line-height: 22px;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 30px;
          text-align: center;
        }
        
        .footer-bottom p {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .nbfc-tag {
          font-size: 12px !important;
          color: #475569 !important;
        }
        
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      ` }} />
    </footer>
  );
};

export default Footer;
