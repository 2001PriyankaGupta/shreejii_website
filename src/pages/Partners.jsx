import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Handshake,
    BarChart3,
    Settings,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Briefcase,
    Shield,
    Users
} from 'lucide-react';
import { FadeIn, ScaleIn } from '../components/Animations';

const Partners = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Register & Connect",
            desc: "Sign up through our digital partner portal with basic business details. No complex paperwork required.",
            icon: Users,
            img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=800&auto=format&fit=crop" // Women talking / Registration
        },
        {
            title: "Rapid Empanelment",
            desc: "Our verification team validates your profile and activates your personalized dashboard within 24 hours.",
            icon: Shield,
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" // Secure / Dashboard
        },
        {
            title: "Lead Generation",
            desc: "Start submitting loan applications from your customers directly into our high-speed processing engine.",
            icon: TrendingUp,
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" // Data / Leads
        },
        {
            title: "Automated Earnings",
            desc: "Receive automated commission payouts deposited straight into your nodal account for every successful lead.",
            icon: BarChart3,
            img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" // Money / Earnings
        }
    ];

    return (
        <div className="partners-page" style={{ paddingTop: '80px' }}>

            {/* 🌟 PREMIUM HERO WITH IMAGE BACKGROUND 🌟 */}
            <section className="partner-hero-premium">
                <div className="p-hero-overlay"></div>
                <div className="container">
                    <div className="p-hero-content">
                        <FadeIn direction="up">
                            <div className="p-badge">
                                <Handshake size={14} />
                                <span>SHREEJA PARTNER NETWORK</span>
                            </div>
                            <h1 className="p-h1">Accelerate Your <br /><span className="p-gold-text">Financial Business.</span></h1>
                            <p className="p-hero-desc">
                                Join India's most elite network of DSAs and financial advisors. Access unlimited liquidity, track leads in real-time, and earn industry-leading commissions.
                            </p>
                            <button className="p-join-btn">
                                Become a Partner <ArrowRight size={20} />
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 🌟 SPLIT LAYOUT: WHY PARTNER WITH US 🌟 */}
            <section className="p-benefits-section">
                <div className="container p-benefits-grid">

                    <div className="p-b-image-side">
                        <ScaleIn>
                            <div className="p-b-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" alt="Corporate Team" className="p-b-img" />
                                <div className="p-b-floating-stat">
                                    <div className="p-stat-icon"><TrendingUp size={24} color="#D4AF37" /></div>
                                    <div>
                                        <div className="p-stat-num">Upto 3.5%</div>
                                        <div className="p-stat-text">Highest Payouts</div>
                                    </div>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>

                    <div className="p-b-text-side">
                        <FadeIn direction="left">
                            <span className="p-mini-title">The Advantage</span>
                            <h2 className="p-h2">Why Top DSA Networks Choose Us</h2>
                            <p className="p-b-desc">We don't just offer capital; we provide a complete technological and financial ecosystem designed specifically to scale your operations rapidly.</p>

                            <div className="p-b-points">
                                <div className="p-point-item">
                                    <div className="p-p-icon"><BarChart3 size={20} /></div>
                                    <div className="p-p-text">
                                        <h4>Advanced Glass-UI Portal</h4>
                                        <p>Track every application's live status and analytics instantly.</p>
                                    </div>
                                </div>
                                <div className="p-point-item">
                                    <div className="p-p-icon"><Settings size={20} /></div>
                                    <div className="p-p-text">
                                        <h4>Automated Friday Payouts</h4>
                                        <p>Zero follow-ups. Commissions settled weekly automatically.</p>
                                    </div>
                                </div>
                                <div className="p-point-item">
                                    <div className="p-p-icon"><Briefcase size={20} /></div>
                                    <div className="p-p-text">
                                        <h4>Dedicated RM Support</h4>
                                        <p>24/7 priority resolution from an assigned Relationship Manager.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>

            {/* 🌟 INTERACTIVE HORIZONTAL TIMELINE 🌟 */}
            <section className="p-process-section">
                <div className="container">
                    <div className="p-process-header">
                        <FadeIn direction="up">
                            <h2 className="p-h2 text-center text-white">4 Simple Steps to Start</h2>
                            <p className="text-center p-sub-white">Seamless onboarding engineered for speed and compliance.</p>
                        </FadeIn>
                    </div>

                    <div className="p-process-interactive">
                        <div className="p-steps-nav">
                            {steps.map((s, i) => (
                                <button
                                    key={i}
                                    className={`p-step-btn \${activeStep === i ? 'p-active' : ''}`}
                                    onClick={() => setActiveStep(i)}
                                >
                                    <div className="p-step-num">0{i + 1}</div>
                                    <span>{s.title}</span>
                                </button>
                            ))}
                        </div>

                        <div className="p-step-content-area">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-active-card-glass"
                                >
                                    <div className="p-card-grid">
                                        <div className="p-card-info">
                                            <div className="p-card-icon">
                                                {React.createElement(steps[activeStep].icon, { size: 40, color: "#D4AF37" })}
                                            </div>
                                            <h3>{steps[activeStep].title}</h3>
                                            <p>{steps[activeStep].desc}</p>

                                            <div className="p-card-features">
                                                <div className="p-cf-item"><CheckCircle2 size={16} color="#10b981" /> 100% Digital</div>
                                                <div className="p-cf-item"><CheckCircle2 size={16} color="#10b981" /> Free Setup</div>
                                            </div>
                                        </div>
                                        <div className="p-card-visual">
                                            <img
                                                src={steps[activeStep].img}
                                                alt={steps[activeStep].title}
                                                className="p-card-img"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .partners-page {
          background: #ffffff;
          overflow: hidden;
        }

        /* --- PREMIUM HERO --- */
        .partner-hero-premium {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 120px 0;
          background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .p-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(5,10,31,0.95) 0%, rgba(5,10,31,0.7) 50%, rgba(5,10,31,0.4) 100%);
          z-index: 1;
        }

        .p-hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
          color: white;
        }

        .p-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(212, 175, 55, 0.15);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #D4AF37;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .p-h1 {
          font-size: clamp(48px, 6vw, 76px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -2px;
          margin-bottom: 25px;
        }

        .p-gold-text {
          color: #D4AF37;
        }

        .p-hero-desc {
          font-size: 20px;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .p-join-btn {
          background: white;
          color: #050a1f;
          padding: 20px 40px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all 0.3s;
        }

        .p-join-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          background: #D4AF37;
        }

        /* --- BENEFITS SPLIT SECTION --- */
        .p-benefits-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .p-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .p-b-image-side { position: relative; }
        
        .p-b-img-wrapper {
          position: relative;
          height: 600px;
        }

        .p-b-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .p-b-floating-stat {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          padding: 25px 30px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid #f1f5f9;
          z-index: 2;
        }

        .p-stat-icon {
          width: 50px; height: 50px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }

        .p-stat-num { font-size: 24px; font-weight: 900; color: #0F172A; line-height: 1; margin-bottom: 4px; }
        .p-stat-text { font-size: 13px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 1px; }

        .p-mini-title { color: #D4AF37; font-weight: 950; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; display: block; margin-bottom: 15px; }
        .p-h2 { font-size: 46px; font-weight: 950; color: #0F172A; letter-spacing: -2px; margin-bottom: 25px; line-height: 1.1; }
        .p-b-desc { color: #64748B; font-size: 18px; line-height: 1.7; margin-bottom: 40px; }

        .p-b-points { display: flex; flex-direction: column; gap: 30px; }
        .p-point-item { display: flex; gap: 20px; }
        
        .p-p-icon {
          width: 50px; height: 50px; flex-shrink: 0;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #0F172A;
        }

        .p-p-text h4 { font-size: 20px; font-weight: 900; color: #0F172A; margin-bottom: 8px; }
        .p-p-text p { color: #64748B; font-size: 15px; line-height: 1.6; }


        /* --- PROCESS INTERACTIVE (DARK) --- */
        .p-process-section {
          padding: 120px 0;
          background: #050a1f; 
        }

        .text-center { text-align: center; }
        .text-white { color: white !important; }
        .p-sub-white { color: #94A3B8; font-size: 18px; margin-top: 15px; margin-bottom: 60px; }

        .p-steps-nav {
          display: flex;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 10px;
          margin-bottom: 40px;
          overflow-x: auto;
        }

        .p-step-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: transparent;
          border: none;
          color: #94A3B8;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
        }

        .p-step-btn:hover { background: rgba(255,255,255,0.05); }
        .p-step-btn.p-active { background: #ffffff; color: #0F172A; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }

        .p-step-num { font-size: 24px; font-weight: 950; font-family: monospace; opacity: 0.5; transition: opacity 0.3s; }
        .p-step-btn.p-active .p-step-num { opacity: 1; color: #D4AF37; }

        .p-step-btn span { font-size: 16px; font-weight: 800; white-space: nowrap; }

        .p-active-card-glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 40px;
        }

        .p-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .p-card-info { color: white; }
        .p-card-icon { margin-bottom: 30px; }
        .p-card-info h3 { font-size: 36px; font-weight: 950; margin-bottom: 20px; letter-spacing: -1px; }
        .p-card-info p { font-size: 18px; color: #94A3B8; line-height: 1.7; margin-bottom: 30px; }

        .p-card-features { display: flex; gap: 20px; }
        .p-cf-item { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 14px; background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 8px 16px; border-radius: 30px; }

        .p-card-visual { height: 350px; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .p-card-img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 992px) {
          .p-benefits-grid { grid-template-columns: 1fr; }
          .p-b-img-wrapper { height: 400px; }
          .p-b-floating-stat { right: 20px; bottom: 20px; }
          
          .p-step-btn { padding: 15px; }
          .p-steps-nav { flex-direction: column; }
          .p-card-grid { grid-template-columns: 1fr; }
          .p-card-visual { height: 250px; }
          .p-h1 { font-size: 42px; }
        }
      ` }} />
        </div>
    );
};

export default Partners;
