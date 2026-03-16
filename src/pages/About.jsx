import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Banknote,
    Activity,
    Scale,
    PieChart,
    Landmark,
    TrendingUp,
    FileSignature,
    Gem,
    Users
} from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild, ScaleIn } from '../components/Animations';

const About = () => {
    return (
        <div className="about-page-premium">

            {/* ⚪ ULTRA CLEAN LIGHT HERO ⚪ */}
            <section className="a-hero-light">
                <div className="a-hero-pattern"></div>
                <div className="container relative z-10">
                    <div className="a-hero-content text-center">

                        <FadeIn direction="up" delay={0.1}>
                            <div className="a-badge-outline">
                                <Landmark size={14} color="#D4AF37" />
                                <span>CORPORATE PROFILE</span>
                            </div>
                        </FadeIn>

                        <div className="a-title-wrap">
                            <TextReveal delay={0.2}>
                                <h1 className="a-heading-light">Engineering Financial</h1>
                            </TextReveal>
                            <TextReveal delay={0.4}>
                                <h1 className="a-heading-light"><span className="a-gold-text">Sovereignty.</span></h1>
                            </TextReveal>
                        </div>

                        <FadeIn delay={0.6} direction="up">
                            <div className="a-hero-desc-box mx-auto">
                                <p className="a-lead-text">
                                    Established with a singular mandate to democratize credit, <strong>Shreeja Finance</strong> operates at the intersection of deep liquidity and advanced underwriting technology.
                                </p>
                                <p className="a-sub-text">
                                    By stripping away legacy banking friction, we deliver institutional-grade capital directly to the consumer and SME sectors with unprecedented velocity and rigorous compliance.
                                </p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            {/* ⚪ THE STATISTICAL ADVANTAGE (LIGHT BENTO) ⚪ */}
            <section className="a-stats-section">
                <div className="container">
                    <FadeIn direction="up">
                        <div className="a-section-header text-center">
                            <h2 className="a-section-title">The Quantitative Edge</h2>
                            <p className="a-section-sub">Data-driven performance metrics that define our operational superiority.</p>
                        </div>
                    </FadeIn>

                    <StaggerContainer>
                        <div className="a-bento-grid">

                            <motion.div variants={StaggerChild} className="a-bento-card a-span-2">
                                <div className="a-b-icon-wrap"><Activity size={28} color="#D4AF37" /></div>
                                <div className="a-b-data">
                                    <h3>₹1,500+ Cr</h3>
                                    <span>Capital Disbursed</span>
                                </div>
                                <div className="a-b-divider"></div>
                                <p>Fueling over 10,000+ personal and micro-business growth trajectories across India with pure unsecured and secured credit lines.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="a-bento-card">
                                <div className="a-b-icon-wrap"><TrendingUp size={28} color="#3b82f6" /></div>
                                <div className="a-b-data">
                                    <h3>45 Mins</h3>
                                    <span>Average Approval TAT</span>
                                </div>
                                <div className="a-b-divider"></div>
                                <p>Our proprietary algorithmic rating engine processes 500+ data points instantly.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="a-bento-card a-card-gold">
                                <div className="a-b-icon-wrap"><Gem size={28} color="#0F172A" /></div>
                                <div className="a-b-data">
                                    <h3 style={{ color: '#0F172A' }}>Zero</h3>
                                    <span style={{ color: '#0F172A', opacity: 0.8 }}>Hidden Arbitrage</span>
                                </div>
                                <div className="a-b-divider" style={{ background: 'rgba(15,23,42,0.1)' }}></div>
                                <p style={{ color: '#0F172A' }}>Absolute transparency. What is printed on the sanction letter is exactly what is materialized.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="a-bento-card a-span-2">
                                <div className="a-b-icon-wrap"><ShieldCheck size={28} color="#10b981" /></div>
                                <div className="a-b-data">
                                    <h3>RBI Reg.</h3>
                                    <span>Compliance Standard</span>
                                </div>
                                <div className="a-b-divider"></div>
                                <p>Adhering to the strictest regulatory frameworks to ensure your capital is secure, transparent, and legally bulletproof at every stage.</p>
                            </motion.div>

                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* ⚪ THE DOCTRINE (CLEAN TYPOGRAPHY LIST) ⚪ */}
            <section className="a-doctrine-section">
                <div className="container">
                    <div className="a-doctrine-layout">

                        <div className="a-doc-sidebar">
                            <ScaleIn>
                                <div className="a-doc-sticky">
                                    <h2 className="a-doc-h2">Corporate<br />Doctrine.</h2>
                                    <p className="a-doc-p">The philosophical framework guiding our risk assessment and capital allocation.</p>
                                </div>
                            </ScaleIn>
                        </div>

                        <div className="a-doc-main">
                            <FadeIn direction="up">
                                <div className="a-doc-item">
                                    <div className="a-d-top">
                                        <Scale size={32} color="#0F172A" />
                                    </div>
                                    <h4 className="a-d-title">The Mission</h4>
                                    <p className="a-d-desc">To architect a friction-less lending ecosystem that injects liquidity into the Indian middle-class and SME sectors, catalyzing ground-level economic acceleration without traditional banking red tape.</p>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.2}>
                                <div className="a-doc-item">
                                    <div className="a-d-top">
                                        <PieChart size={32} color="#0F172A" />
                                    </div>
                                    <h4 className="a-d-title">The Vision</h4>
                                    <p className="a-d-desc">To transition from a traditional credit institution to India's most algorithmically efficient and customer-centric digital NBFC, setting an entirely new global benchmark for capital accessibility.</p>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.4}>
                                <div className="a-doc-item no-border">
                                    <div className="a-d-top">
                                        <Banknote size={32} color="#0F172A" />
                                    </div>
                                    <h4 className="a-d-title">Risk & Ethics</h4>
                                    <p className="a-d-desc">We deploy capital with prudence. Our underwriters are rigorously trained to prioritize the financial health of the borrower above all else, ensuring we provide credit that empowers rather than burdens.</p>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* ⚪ LIGHT FOOTER QUOTE ⚪ */}
            <section className="a-light-footer">
                <div className="container text-center">
                    <FadeIn direction="up">
                        <div className="a-sign-icon">
                            <FileSignature size={32} color="#0F172A" />
                        </div>
                        <h2 className="a-quote-text">
                            "Capital is the fuel of progress. We ensure the pump never runs dry for those who dare to dream."
                        </h2>
                        <div className="a-author">
                            BOARD OF DIRECTORS, SHREEJA FINANCE
                        </div>
                    </FadeIn>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .about-page-premium {
            background: #ffffff;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
        }
        
        /* Utils */
        .relative { position: relative; }
        .z-10 { z-index: 10; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        /* --- LIGHT HERO --- */
        .a-hero-light {
            position: relative;
            background: #f8fafc;
            min-height: 80vh;
            display: flex;
            align-items: center;
            padding: 180px 0 120px;
        }

        .a-hero-pattern {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
            background-size: 30px 30px;
            opacity: 0.6;
            z-index: 1;
        }

        .a-hero-content {
            max-width: 1000px;
            margin: 0 auto;
        }

        .a-badge-outline {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            color: #475569;
            padding: 10px 24px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 40px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.02);
        }

        .a-title-wrap { margin-bottom: 40px; }
        .a-heading-light {
            font-size: clamp(36px, 5vw, 68px);
            line-height: 1.1;
            font-weight: 800;
            color: #0F172A;
            letter-spacing: -2px;
        }

        .a-gold-text {
            color: #D4AF37;
        }

        .a-hero-desc-box {
            max-width: 800px;
            background: #ffffff;
            padding: 40px 50px;
            border-radius: 24px;
            border: 1px solid #f1f5f9;
            box-shadow: 0 20px 40px rgba(0,0,0,0.03);
            position: relative;
        }

        .a-lead-text {
            font-size: 19px;
            color: #0F172A;
            line-height: 1.6;
            margin-bottom: 20px;
            font-weight: 400;
        }

        .a-sub-text {
            font-size: 17px;
            color: #64748B;
            line-height: 1.6;
            padding-top: 20px;
            border-top: 1px solid #f1f5f9;
        }

        /* --- STATS SECTION --- */
        .a-stats-section {
            padding: 60px 0;
            background: #ffffff;
        }

        .a-section-header { margin-bottom: 80px; }
        .a-section-title { font-size: 52px; font-weight: 950; color: #0F172A; letter-spacing: -2px; margin-bottom: 15px; }
        .a-section-sub { font-size: 18px; color: #64748B; }

        .a-bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .a-bento-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 32px;
            padding: 35px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.02);
            transition: all 0.3s;
            position: relative;
        }

        .a-bento-card:hover { transform: translateY(-5px); border-color: #cbd5e1; box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
        .a-span-2 { grid-column: span 2; }
        
        .a-card-gold {
            background: linear-gradient(135deg, #fef08a 0%, #D4AF37 100%);
            border: none;
        }
        .a-card-gold:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3); }

        .a-b-icon-wrap {
            position: absolute;
            right: 35px;
            top: 35px;
            width: 60px; height: 60px;
            background: #f8fafc;
            border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            border: 1px solid #e2e8f0;
        }
        .a-card-gold .a-b-icon-wrap { background: rgba(255,255,255,0.4); border: none; }

        .a-b-data h3 { font-size: 40px; font-weight: 950; color: #0F172A; letter-spacing: -2px; line-height: 1; margin-bottom: 8px; }
        .a-b-data span { font-size: 14px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; }

        .a-b-divider { height: 1px; background: #e2e8f0; margin: 30px 0; }
        
        .a-bento-card p { font-size: 16px; color: #475569; line-height: 1.7; }

        /* --- DOCTRINE SECTION --- */
        .a-doctrine-section {
            padding: 70px 0;
            background: #f8fafc;
        }

        .a-doctrine-layout {
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 100px;
        }

        .a-doc-sticky { position: sticky; top: 120px; }
        .a-doc-h2 { font-size: 64px; font-weight: 950; line-height: 1; letter-spacing: -3px; color: #0F172A; margin-bottom: 30px; }
        .a-doc-p { font-size: 20px; color: #64748B; line-height: 1.6; border-left: 3px solid #D4AF37; padding-left: 20px; }

        .a-doc-item {
            background: #ffffff;
            padding: 50px;
            border-radius: 32px;
            border: 1px solid #e2e8f0;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.02);
            position: relative;
        }

        .a-d-top {
            position: absolute;
            right: 40px;
            top: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 0px;
        }
        
       .a-d-title {
        font-size: 28px;
        font-weight: 900;
        color: #0F172A;
        /* letter-spacing: -1px; */
        /* margin-bottom: 20px; */
    }
        .a-d-desc { font-size: 15px; color: #475569; line-height: 1.8; }

        /* --- LIGHT FOOTER --- */
        .a-light-footer {
            padding: 60px 0;
            background: #ffffff;
            border-top: 1px solid #f1f5f9;
        }

        .a-sign-icon {
            display: inline-flex;
            width: 80px; height: 80px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
        }

        .a-quote-text {
            font-family: inherit;
            font-style: italic;
            font-size: 37px;
            color: #0F172A;
            line-height: 1.4;
            max-width: 885px;
            margin: 0 auto 40px;
        }

        .a-author {
            font-size: 14px;
            font-weight: 900;
            color: #D4AF37;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 992px) {
            .a-heading-light { font-size: 48px; }
            .a-hero-desc-box { padding: 30px; }
            .a-bento-grid { display: flex; flex-direction: column; }
            .a-doctrine-layout { grid-template-columns: 1fr; gap: 60px; }
            .a-doc-h2 { font-size: 48px; }
            .a-quote-text { font-size: 32px; }
            .a-hero-light { padding: 140px 0 80px; }
        }
        ` }} />
        </div>
    );
};

export default About;
