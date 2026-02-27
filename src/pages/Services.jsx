import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Briefcase,
    CarFront,
    Bike,
    Truck,
    Zap,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Lock,
    ArrowRight
} from 'lucide-react';
import { FadeIn, ScaleIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const Services = () => {
    const products = [
        {
            icon: Zap,
            title: "Instant Loan",
            tag: "Digital Credit",
            desc: "Pre-approved digital credit with instant clearing. Tailor-made workflows with 24-hour processing and zero collateral for your immediate needs.",
            features: ["No Collateral", "Digital KYC", "Instant Disbursal"],
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop"
        },
        {
            icon: Briefcase,
            title: "Personal Loan",
            tag: "Flexible Credit",
            desc: "Flexible unsecured credit for weddings, travel, or medical emergencies. Zero hidden fees and fast 2-hour digital disbursal directly to your account.",
            features: ["Easy Repayment", "Minimum Docs", "Low ROI"],
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
        },
        {
            icon: CarFront,
            title: "Car Loan",
            tag: "Drive Away",
            desc: "Fast-track financing for new and used cars. Drive your dream vehicle today with the industry's lowest interest rates and minimal documentation.",
            features: ["High LTV", "Tax Benefits", "Quick Approval"],
            img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop"
        },
        {
            icon: Bike,
            title: "Bike Loan",
            tag: "Ride Easy",
            desc: "Quick financing for two-wheelers. Minimal downpayment and attractive interest rates for salaried & self-employed individuals.",
            features: ["90% On-road Funding", "Fast Processing", "Zero Hidden Costs"],
            img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop"
        },
        {
            icon: Truck,
            title: "Commercial Vehicle (CV) Loan",
            tag: "Commercial Funding",
            desc: "Specialized commercial vehicle funding tailored to accelerate your transport and logistics business. Benefit from flexible repayment tenures.",
            features: ["Max Funding", "Custom Tenure", "Easy Processing"],
            img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <div className="services-page">

            {/* 🌌 NORMALIZED DARK HERO 🌌 */}
            <section className="s-hero-dark">
                <div className="s-hero-bg">
                    <div className="s-vignette"></div>
                </div>

                <div className="container s-hero-content text-center">
                    <FadeIn delay={0.2} direction="up">
                        <div className="s-badge-gold" style={{ marginTop: '80px' }}>
                            <ShieldCheck size={14} />
                            <span >COMPREHENSIVE FINANCIAL PORTFOLIO</span>
                        </div>
                    </FadeIn>

                    <div className="s-title-stack">
                        <TextReveal delay={0.3}>
                            <h1 className="s-hero-h1">The Future Of</h1>
                        </TextReveal>
                        <TextReveal delay={0.5}>
                            <h1 className="s-hero-h1">Digital <span className="s-gold-italic">Lending.</span></h1>
                        </TextReveal>
                    </div>

                    <FadeIn delay={0.7} direction="up">
                        <p className="s-hero-p mx-auto">
                            Explore our suite of premium lending protocols. Designed to provide deep liquidity with ultra-fast execution.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ⚪ LIGHT THEME: PREMIUM PRODUCT LIST (Asymmetric Layout) ⚪ */}
            <section className="s-products-light">
                <div className="technical-grid-bg"></div>

                <div className="container">
                    <div className="s-section-head">
                        <span className="mini-label">Offerings</span>
                        <h2 className="title-h2">Loan Variants</h2>
                    </div>

                    <div className="s-product-list">
                        {products.map((p, i) => {
                            // Alternate layout left/right based on index
                            const isEven = i % 2 === 0;
                            const pathStr = p.title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');
                            return (
                                <FadeIn key={i} direction={isEven ? "right" : "left"} delay={0.1}>
                                    <div className={`s-p-row ${isEven ? 'row-normal' : 'row-reverse'}`}>

                                        <div className="s-p-visual">
                                            <div className="s-p-glass-box">
                                                <div className="s-p-img-wrap">
                                                    <img src={p.img} alt={p.title} className="s-p-main-img" />
                                                </div>
                                                <div className="s-p-floating-badge">{p.tag}</div>
                                            </div>
                                        </div>

                                        <div className="s-p-info">
                                            <h3>{p.title}</h3>
                                            <p className="s-p-desc-text">{p.desc}</p>

                                            <div className="s-p-features-grid">
                                                {p.features.map(f => (
                                                    <div key={f} className="s-f-item">
                                                        <CheckCircle2 size={16} color="#10b981" />
                                                        <span>{f}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ marginTop: '35px' }}>
                                                <Link to={`/${pathStr}`} className="s-view-details-btn">
                                                    View Details <ArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 🌑 DARK THEME: SECURITY & PROCESS (Matching Home's Smoke section Vibe) 🌑 */}
            <section className="s-process-dark">
                <div className="container">
                    <div className="s-process-header text-center">
                        <FadeIn direction="up">
                            <h2 className="title-h2 text-white">The Processing Engine</h2>
                            <p className="s-p-sub">How our technology stack clears your capital in record time.</p>
                        </FadeIn>
                    </div>

                    <StaggerContainer>
                        <div className="s-process-grid">
                            <motion.div variants={StaggerChild} className="s-proc-card">
                                <div className="proc-icon-wrap"><Clock size={28} color="#3b82f6" /></div>
                                <h4>Instant Origination</h4>
                                <p>Digital onboarding utilizing high-speed parallel e-KYC pipelines, reducing data entry to merely seconds.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="s-proc-card">
                                <div className="proc-icon-wrap"><Zap size={28} color="#d946ef" /></div>
                                <h4>AI Underwriting</h4>
                                <p>Our proprietary AI evaluates thousands of risk data points instantly, returning a pre-approved credit limit.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="s-proc-card">
                                <div className="proc-icon-wrap"><Lock size={28} color="#10b981" /></div>
                                <h4>Vault Sub-System</h4>
                                <p>Military-grade AES-256 encryption secures your documents while the smart contract triggers instant digital escrow disbursal.</p>
                            </motion.div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .services-page {
          background: #ffffff;
          overflow: hidden;
        }

        /* --- HERO DARK --- */
        .s-hero-dark {
          position: relative;
          background: #020617;
          min-height: 50vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 50px;
          overflow: hidden;
        }
        
        .s-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        
        .s-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top center, transparent 0%, #020617 80%);
          pointer-events: none;
        }

        .s-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .s-badge-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(212, 175, 55, 0.1);
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #D4AF37;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .s-title-stack { margin-bottom: 20px; }
        .s-hero-h1 {
          font-size: clamp(48px, 6vw, 84px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -3px;
          color: white;
        }
        
        .s-gold-italic {
          font-family: serif;
          font-style: italic;
          font-weight: 400;
          color: #D4AF37;
        }

        .s-hero-p {
          font-size: 20px;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 600px;
          margin-top: 20px;
        }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }


        /* --- PRODUCTS LIGHT (ASYMMETRIC) --- */
        .s-products-light {
          position: relative;
          padding: 120px 0;
          background: #ffffff;
          z-index: 5;
        }
        
        .technical-grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px);
          background-size: 30px 30px;
          z-index: 0;
          opacity: 0.8;
          pointer-events: none;
        }

        .s-section-head { text-align: center; margin-bottom: 80px; position: relative; z-index: 1; }
        .mini-label { color: #D4AF37; font-weight: 950; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; display: block; margin-bottom: 15px; }
        .title-h2 { font-size: 52px; font-weight: 950; color: #0F172A; letter-spacing: -2px; line-height: 1.1; }

        .s-product-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
          position: relative;
          z-index: 1;
        }

        .s-p-row {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .row-reverse { flex-direction: row-reverse; }

        .s-p-visual { flex: 1; display: flex; justify-content: center; }
        .s-p-info { flex: 1.2; }

        .s-p-glass-box {
          position: relative;
          width: 360px;
          height: 360px;
          background: #f8fafc;
          border-radius: 40px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          transition: transform 0.4s;
          /* No overflow hidden here so the badge can break out */
        }

        .s-p-img-wrap {
          position: absolute;
          inset: 0;
          border-radius: 38px;
          overflow: hidden;
        }
        
        .s-p-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .s-p-row:hover .s-p-glass-box { 
          transform: scale(1.05) rotate(2deg); 
          border-color: #cbd5e1; 
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
        }
        
        .s-p-row:hover .s-p-main-img { 
          transform: scale(1.15) rotate(-2deg); 
        }

        .s-p-floating-badge {
          position: absolute;
          bottom: -15px;
          right: -15px;
          background: #D4AF37;
          color: #0F172A;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
          box-shadow: 0 10px 20px rgba(212,175,55,0.3);
        }


        .s-p-info h3 {
          font-size: 36px;
          font-weight: 900;
          color: #0F172A;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        
        .s-p-desc-text {
          font-size: 18px;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 500px;
        }

        .s-p-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        
        .s-f-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 15px;
          color: #0F172A;
        }

        .s-view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #D4AF37;
          font-weight: 800;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s;
        }
        
        .s-view-details-btn:hover {
          background: #D4AF37;
          color: #0F172A;
          transform: translateX(5px);
        }


        /* --- PROCESS ENGINE DARK --- */
        .s-process-dark {
          padding: 100px 0 120px;
          background: #050a1f; 
          position: relative;
        }

        .text-white { color: white !important; }
        .s-process-header { margin-bottom: 60px; }
        .s-p-sub { color: #94a3b8; font-size: 18px; margin-top: 15px; }

        .s-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .s-proc-card {
           background: rgba(15, 23, 42, 0.4);
           border: 1px solid rgba(255,255,255,0.05);
           padding: 40px;
           border-radius: 24px;
           transition: transform 0.3s, background 0.3s;
        }
        .s-proc-card:hover {
           transform: translateY(-5px);
           background: rgba(30, 41, 59, 0.8);
           border-color: rgba(255,255,255,0.1);
        }

        .proc-icon-wrap {
           width: 60px; height: 60px;
           background: rgba(255,255,255,0.03);
           border-radius: 16px;
           display: flex; align-items: center; justify-content: center;
           margin-bottom: 25px;
        }

        .s-proc-card h4 {
           color: white;
           font-size: 22px;
           font-weight: 800;
           margin-bottom: 15px;
        }

        .s-proc-card p {
           color: #94A3B8;
           font-size: 15px;
           line-height: 1.7;
        }

        @media (max-width: 992px) {
          .s-p-row, .row-reverse { flex-direction: column; text-align: center; }
          .s-p-features-grid { text-align: left; }
          .s-process-grid { grid-template-columns: 1fr; }
          .s-hero-h1 { font-size: 42px; }
        }
      ` }} />
        </div>
    );
};

export default Services;
