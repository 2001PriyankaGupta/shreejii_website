import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileSignature, Scale, Gavel, Globe } from 'lucide-react';
import { FadeIn } from '../components/Animations';

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-modern-page">
            <section className="lm-hero">
                <div className="lm-hero-bg"></div>
                <div className="container relative z-10">
                    <FadeIn direction="up">
                        <div className="lm-badge">
                            <FileSignature size={14} color="#D4AF37" />
                            <span>SYSTEM PROTOCOL</span>
                        </div>
                        <h1 className="lm-h1">Terms of <span className="text-gold">Use.</span></h1>
                        <p className="lm-sub">Defining the boundaries of our digital financial partnership.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="lm-content">
                <div className="container">
                    <div className="lm-card-wrap">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="lm-intro-text">
                                <p>Effective Date: October 15, 2026</p>
                                <p>These terms govern your access to the platforms and services provided by Shreeji Finance. By using our site, you agree to these legal parameters.</p>
                            </div>

                            <div className="lm-item">
                                <div className="lm-icon-box"><Scale size={24} /></div>
                                <h3>1. Acceptance of Mandate</h3>
                                <p>Your engagement with our digital interfaces constitutes a formal acceptance of these terms. If you do not agree with any clause, you must terminate your session immediately.</p>
                            </div>

                            <div className="lm-item">
                                <div className="lm-icon-box"><Gavel size={24} /></div>
                                <h3>2. User Responsibilities</h3>
                                <p>You agree to provide authentic documentation and maintain the confidentiality of your credentials. Any misrepresentation is grounds for immediate account suspension.</p>
                            </div>

                            <div className="lm-item">
                                <div className="lm-icon-box"><FileSignature size={24} /></div>
                                <h3>3. Intellectual Dominion</h3>
                                <p>All algorithms, UI designs, and brand motifs remain the exclusive intellectual property of Shreeji Finance. Unauthorized reproduction is strictly prohibited.</p>
                            </div>

                            <div className="lm-item">
                                <div className="lm-icon-box"><Globe size={24} /></div>
                                <h3>4. Jurisdictional Authority</h3>
                                <p>All legal transactions and disputes are governed by Indian law and fall under the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .legal-modern-page { background: #fdfdfd; font-family: 'Inter', sans-serif; padding-bottom: 100px; }
                .text-gold { color: #D4AF37; }
                .relative { position: relative; }
                .z-10 { z-index: 10; }

                .lm-hero { 
                    position: relative;
                    padding: 160px 0 100px; 
                    background: #020617; 
                    overflow: hidden;
                    text-align: center;
                }
                .lm-hero-bg {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 50% 120%, rgba(212, 175, 55, 0.1), transparent);
                    opacity: 0.8;
                }
                .lm-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(212, 175, 55, 0.1);
                    padding: 8px 16px;
                    border-radius: 30px;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    color: #D4AF37;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    margin-bottom: 25px;
                }
                .lm-h1 { font-size: 64px; font-weight: 950; color: #fff; letter-spacing: -3px; margin-bottom: 20px; }
                .lm-sub { font-size: 20px; color: #94a3b8; max-width: 600px; margin: 0 auto; }

                .lm-content { margin-top: -60px; position: relative; z-index: 20; }
                .lm-card-wrap { 
                    max-width: 900px; 
                    margin: 0 auto; 
                    background: #fff; 
                    border-radius: 32px; 
                    padding: 60px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
                    border: 1px solid #f1f5f9;
                }

                .lm-intro-text { border-bottom: 1px solid #f1f5f9; padding-bottom: 30px; margin-bottom: 40px; }
                .lm-intro-text p:first-child { font-weight: 800; color: #D4AF37; font-size: 14px; margin-bottom: 10px; }
                .lm-intro-text p:last-child { font-size: 18px; color: #475569; line-height: 1.6; }

                .lm-item { margin-bottom: 50px; }
                .lm-icon-box { 
                    width: 50px; height: 50px; 
                    background: #fdfaf0; 
                    border-radius: 14px; 
                    display: flex; align-items: center; justify-content: center; 
                    color: #D4AF37;
                    margin-bottom: 20px;
                }
                .lm-item h3 { font-size: 24px; font-weight: 800; color: #0F172A; margin-bottom: 15px; letter-spacing: -1px; }
                .lm-item p { font-size: 17px; color: #475569; line-height: 1.8; }

                @media(max-width: 768px) {
                    .lm-card-wrap { padding: 30px; border-radius: 20px; }
                    .lm-h1 { font-size: 42px; }
                    .lm-hero { padding: 120px 0 80px; }
                }
            ` }} />
        </div>
    );
};

export default TermsOfUse;
