import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Activity, Clock, FileCheck, Smartphone, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const InstantLoan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="instant-loan-page">
            {/* HERO NEON TECH */}
            <section className="il-hero">
                <div className="il-bg-glow"></div>
                <div className="container relative z-10 text-center">
                    <FadeIn direction="up">
                        <div className="il-badge">
                            <Zap size={14} color="#0bf4c8" />
                            <span>ALGORITHMIC CREDIT</span>
                        </div>
                    </FadeIn>
                    <div className="il-title-wrap">
                        <TextReveal>
                            <h1 className="il-title">Liquid Capital.</h1>
                        </TextReveal>
                        <TextReveal delay={0.2}>
                            <h1 className="il-title il-outline">Lightning Fast.</h1>
                        </TextReveal>
                    </div>
                    <FadeIn delay={0.4} direction="up">
                        <p className="il-desc mx-auto">
                            Bypass the banking bureaucracy. Our proprietary AI assesses your digital footprint to sanction unsecured credit lines in under 5 minutes.
                            100% paperless. Zero branch visits.
                        </p>
                        <div className="il-actions justify-center">
                            <button className="il-btn-primary" onClick={() => navigate('/')}>
                                Activate Credit Line <ArrowRight size={18} />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* THE ALGORITHM MATRIX */}
            <section className="il-matrix-section">
                <div className="container">
                    <div className="il-matrix-grid">
                        <div className="il-m-left">
                            <FadeIn direction="right">
                                <h2 className="il-h2">The Speed of<br /><span style={{ color: '#0bf4c8' }}>Trust.</span></h2>
                                <p className="il-p-text">
                                    We don't just look at a traditional CIBIL score. Our engine analyzes over 2,500 alternative data points—from SMS patterns to transactional velocity—to understand your true repayment capacity instantly.
                                </p>
                                <ul className="il-check-list">
                                    <li><CheckCircle2 size={20} color="#0bf4c8" /> Instant Bank Verification via Penny Drop</li>
                                    <li><CheckCircle2 size={20} color="#0bf4c8" /> e-Mandate Setup for automated EMI</li>
                                    <li><CheckCircle2 size={20} color="#0bf4c8" /> Digital KYC via UIDAI/DigiLocker</li>
                                </ul>
                            </FadeIn>
                        </div>
                        <div className="il-m-right">
                            <StaggerContainer>
                                <div className="il-feature-cards">
                                    <motion.div variants={StaggerChild} className="il-card">
                                        <Clock size={32} color="#0bf4c8" />
                                        <h4>5-Minute SLA</h4>
                                        <p>From application to bank account, our Service Level Agreement guarantees unprecedented speed.</p>
                                    </motion.div>
                                    <motion.div variants={StaggerChild} className="il-card">
                                        <Smartphone size={32} color="#3b82f6" />
                                        <h4>API-First Disbursal</h4>
                                        <p>Direct integration with IMPS/NEFT rails ensures capital drops into your account 24/7/365.</p>
                                    </motion.div>
                                    <motion.div variants={StaggerChild} className="il-card">
                                        <Shield size={32} color="#8b5cf6" />
                                        <h4>Data Sovereignity</h4>
                                        <p>End-to-end 256-bit encryption. Your financial data is parsed dynamically and purged immediately.</p>
                                    </motion.div>
                                </div>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .instant-loan-page { background: #020617; color: #fff; min-height: 100vh; overflow: hidden; font-family: 'Inter', sans-serif; }
                .il-hero { position: relative; padding: 180px 0 120px; display: flex; align-items: center; justify-content: center; min-height: 85vh; }
                .il-bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 30%, rgba(11, 244, 200, 0.15) 0%, transparent 60%); pointer-events: none; }
                .il-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(11,244,200,0.3); background: rgba(11,244,200,0.05); color: #0bf4c8; padding: 8px 16px; border-radius: 30px; font-weight: 800; font-size: 12px; letter-spacing: 2px; margin-bottom: 30px; }
                .il-title-wrap { margin-bottom: 30px; }
                .il-title { font-size: clamp(50px, 8vw, 100px); font-weight: 950; line-height: 1; letter-spacing: -3px; }
                .il-outline { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
                .il-desc { font-size: 20px; color: #94a3b8; max-width: 650px; line-height: 1.6; margin-bottom: 40px; }
                .il-actions { display: flex; gap: 15px; }
                .il-btn-primary { background: #0bf4c8; color: #020617; padding: 18px 40px; border-radius: 12px; font-weight: 900; font-size: 16px; display: inline-flex; align-items: center; gap: 10px; transition: 0.3s; }
                .il-btn-primary:hover { box-shadow: 0 0 30px rgba(11,244,200,0.4); transform: translateY(-3px); }
                
                .il-matrix-section { padding: 100px 0; border-top: 1px solid rgba(255,255,255,0.05); }
                .il-matrix-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
                .il-h2 { font-size: 56px; font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 30px; }
                .il-p-text { font-size: 18px; color: #94a3b8; line-height: 1.7; margin-bottom: 40px; }
                .il-check-list { list-style: none; padding: 0; }
                .il-check-list li { display: flex; align-items: center; gap: 15px; font-size: 16px; color: #e2e8f0; margin-bottom: 20px; font-weight: 600; }
                
                .il-feature-cards { display: grid; gap: 20px; grid-template-columns: repeat(2, 1fr); }
                .il-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; }
                .il-card h4 { font-size: 20px; font-weight: 800; color: #fff; margin: 20px 0 10px; }
                .il-card p { font-size: 15px; color: #64748b; line-height: 1.6; }
                @media(max-width: 992px) { .il-matrix-grid { grid-template-columns: 1fr; } .il-feature-cards { grid-template-columns: 1fr; } }
            `}} />
        </div>
    );
};

export default InstantLoan;
