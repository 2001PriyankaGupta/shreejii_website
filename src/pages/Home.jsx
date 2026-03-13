import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Shield,
    TrendingUp,
    Handshake,
    Star,
    PlayCircle,
    Gem,
    Send
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, TextReveal, Magnetic, StaggerContainer, StaggerChild } from '../components/Animations';
import LightBeams from '../components/LightBeams';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        inquiry_type: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        // Mobile number validation: only numbers and max 10 digits
        if (id === 'mobile') {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue.length <= 10) {
                setFormData({ ...formData, [id]: numericValue });
            }
            return;
        }

        setFormData({ ...formData, [id]: value });
    };

    const handleSelectChange = (e) => {
        setFormData({ ...formData, inquiry_type: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation check
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.mobile || !formData.inquiry_type || !formData.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Required Fields',
                text: 'Please fill in all mandatory fields before submitting.',
                confirmButtonColor: '#0F172A'
            });
            return;
        }

        if (formData.mobile.length !== 10) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Mobile Number',
                text: 'Please enter a valid 10-digit mobile number.',
                confirmButtonColor: '#0F172A'
            });
            return;
        }

        setFormState('sending');

        try {
            const response = await fetch('https://argosmob.site/shreeji-finance/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. Our expert will contact you within 60 minutes.',
                    confirmButtonColor: '#0F172A',
                    timer: 5000,
                    timerProgressBar: true,
                    background: '#ffffff',
                    color: '#0F172A'
                });

                setFormState('success');
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile: '',
                    inquiry_type: '',
                    message: ''
                });
                setTimeout(() => setFormState('idle'), 5000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while sending your message. Please try again.',
                    confirmButtonColor: '#0F172A'
                });
                setFormState('error');
                setTimeout(() => setFormState('idle'), 3000);
            }
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            Swal.fire({
                icon: 'error',
                title: 'Connection Error',
                text: 'Could not connect to the server. Please check your internet or try later.',
                confirmButtonColor: '#0F172A'
            });
            setFormState('error');
            setTimeout(() => setFormState('idle'), 3000);
        }
    };

    return (
        <div className="home-page-wrapper">

            {/* 🟢 TOP SECTION: DARK BANKING THEME WITH LIGHT BEAMS 🟢 */}
            <section className="hero-wrapper-dark">
                {/* BEAMS ONLY IN HERO */}
                <div className="hero-bg-canvas">
                    <LightBeams />
                    <div className="vignette-overlay"></div>
                </div>

                <div className="hero-banking">
                    <div className="container hero-banking-grid">
                        <div className="hero-banking-text">
                            <FadeIn delay={0.2} direction="left">
                                <div className="banking-badge">
                                    <Shield size={14} color="#D4AF37" />
                                    <span>RBI LICENSED INSTITUTION</span>
                                </div>
                            </FadeIn>

                            <div className="title-banking-stack">
                                <TextReveal delay={0.3}>
                                    <h1 className="h-banking">We create bright</h1>
                                </TextReveal>
                                <TextReveal delay={0.5}>
                                    <h1 className="h-banking">future <span className="italic-font">for Banking</span></h1>
                                </TextReveal>
                            </div>

                            <FadeIn delay={0.7} direction="left">
                                <p className="p-banking-desc">
                                    Empowering financial institutions with innovation, trust,
                                    and seamless digital experiences designed for India's growth.
                                </p>
                            </FadeIn>

                            <div className="banking-cta-row">
                                <Magnetic>
                                    <button className="btn-banking-start" onClick={() => navigate('/services')}>
                                        Learn more <ArrowRight size={20} />
                                    </button>
                                </Magnetic>
                            </div>
                        </div>

                        <div className="hero-banking-visual">
                            <motion.div style={{ y: yParallax }} className="parallax-hero">
                                <ScaleIn delay={0.6}>
                                    <div className="home-inquiry-card">
                                        <div className="h-form-head">
                                            <h3>Submit Inquiry</h3>
                                            <p>Our experts reach out within 60 mins.</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className="h-modern-form">
                                            <div className="h-form-row">
                                                <div className="h-input-group">
                                                    <input type="text" id="first_name" required placeholder=" " value={formData.first_name} onChange={handleChange} />
                                                    <label htmlFor="first_name">First Name</label>
                                                </div>
                                                <div className="h-input-group">
                                                    <input type="text" id="last_name" required placeholder=" " value={formData.last_name} onChange={handleChange} />
                                                    <label htmlFor="last_name">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="h-form-row">
                                                <div className="h-input-group">
                                                    <input type="email" id="email" required placeholder=" " value={formData.email} onChange={handleChange} />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                                <div className="h-input-group">
                                                    <input
                                                        type="tel"
                                                        id="mobile"
                                                        required
                                                        placeholder=" "
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        maxLength={10}
                                                    />
                                                    <label htmlFor="mobile">Mobile</label>
                                                </div>
                                            </div>
                                            <div className="h-input-group">
                                                <select id="inquiry_type" required value={formData.inquiry_type} onChange={handleSelectChange}>
                                                    <option value="" disabled hidden>Select Inquiry Type</option>
                                                    <option value="Loan Application Status">Loan Application Status</option>
                                                    <option value="DSA / Partner Program">DSA / Partner Program</option>
                                                    <option value="Technical Support">Technical Support</option>
                                                    <option value="Other Queries">Other Queries</option>
                                                </select>
                                            </div>
                                            <div className="h-input-group">
                                                <textarea id="message" rows="2" required placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                                                <label htmlFor="message">How can we help?</label>
                                            </div>
                                            <button type="submit" disabled={formState === 'sending' || formState === 'success'} className={`h-submit-btn ${formState}`}>
                                                {formState === 'idle' && <>Send Message <Send size={16} /></>}
                                                {formState === 'sending' && "Sending..."}
                                                {formState === 'success' && "Success!"}
                                                {formState === 'error' && "Fail!"}
                                            </button>
                                        </form>
                                    </div>
                                </ScaleIn>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="floating-orb blue-orb"
                                />
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="floating-orb gold-orb"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ⚪ BOTTOM SECTION: LIGHT & COMPACT DESIGN ⚪ */}
            <div className="light-theme-bottom">
                <div className="technical-grid-bg"></div>

                {/* HIGH-END 3D CENTERED LAYOUT FOR LOANS */}
                <section className="abstract-solutions-section">
                    <div className="container">
                        <div className="section-head-center">
                            <span className="mini-label">Portfolio</span>
                            <h2 className="title-h2">Premium Loan Solutions</h2>
                        </div>

                        <div className="cbdc-style-layout">
                            {/* Left Text */}
                            <div className="cbdc-side left-side">
                                <FadeIn delay={0.2} direction="right">
                                    <div className="s-block">
                                        <div className="s-num"></div>
                                        <h4>Instant Loan</h4>
                                        <p>Pre-approved digital credit with instant clearing. Tailor-made workflows with 24-hour processing and zero collateral for your immediate needs.</p>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.4} direction="right">
                                    <div className="s-block">
                                        <div className="s-num"></div>
                                        <h4>Personal Loan</h4>
                                        <p>Flexible unsecured credit for weddings, travel, or medical emergencies. Zero hidden fees and fast 2-hour digital disbursal directly to your account securely.</p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Center Visual (360 Hover) */}
                            <div className="cbdc-center">
                                <ScaleIn delay={0.3}>
                                    <Magnetic>
                                        <motion.div
                                            className="glass-core-object"
                                            whileHover={{ rotate: 360, scale: 1.05 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        >
                                            <div className="core-ring outer-ring"></div>
                                            <div className="core-ring inner-ring"></div>

                                            {/* Glass/Liquid Elements inspired by the image */}
                                            <div className="glass-bubble gb-1"></div>
                                            <div className="glass-bubble gb-2"></div>

                                            <div className="glass-bubble gb-3">
                                                <Gem size={46} color="#D4AF37" className="core-icon" />
                                            </div>
                                        </motion.div>
                                    </Magnetic>
                                </ScaleIn>
                            </div>

                            {/* Right Text */}
                            <div className="cbdc-side right-side">
                                <FadeIn delay={0.2} direction="left">
                                    <div className="s-block">
                                        <div className="s-num"></div>
                                        <h4>Car & Bike Loan</h4>
                                        <p>Fast-track financing for new and used cars or two-wheelers. Drive your dream vehicle today with the industry's lowest interest rates and minimal documentation.</p>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.4} direction="left">
                                    <div className="s-block">
                                        <div className="s-num"></div>
                                        <h4>CV Loan (Commercial)</h4>
                                        <p>Specialized commercial vehicle funding tailored to accelerate your transport and logistics business. Benefit from flexible repayment tenures and high loan amounts.</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🟣 NEW SMOKE & CUBES SECTION: WHY US 🟣 */}
                <section className="smoke-why-section">
                    <div className="container smoke-grid">
                        <div className="smoke-text">
                            <FadeIn direction="right">
                                <span className="mini-label" style={{ marginBottom: "20px", display: "inline-block", color: "#38bdf8" }}>Security & Tech-First Infrastructure</span>
                                <h2 className="title-h2 text-white">We Provide You With<br />A Safe And Reliable<br />Financial Solution</h2>

                                <div className="smoke-p-container">
                                    <p className="smoke-p">
                                        As a trusted NBFC licensed and regulated by the Reserve Bank of India, Shreeji Finance is fundamentally re-architecting the lending landscape. We merge deep liquidity pools with an ultra-secure, decentralized technology stack to provide risk-free capital access.
                                    </p>
                                    <p className="smoke-p">
                                        Our state-of-the-art encrypted gateways and proprietary AI underwriting ensure 100% data privacy and seamless end-to-end digital lifecycles. Experience 24/7 financial support designed primarily for unmatched transparency, speed, and massive scale.
                                    </p>
                                </div>

                                <div className="smoke-stats">
                                    <div className="stat-block">
                                        <span className="s-num">15K+</span>
                                        <span className="s-text">Satisfied<br />Partners</span>
                                    </div>
                                    <div className="stat-separator"></div>
                                    <div className="stat-block">
                                        <span className="s-num">99.9%</span>
                                        <span className="s-text">System<br />Uptime</span>
                                    </div>
                                    <div className="stat-separator"></div>
                                    <div className="stat-block">
                                        <span className="s-num">₹500Cr</span>
                                        <span className="s-text">Disbursed<br />Capital</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="smoke-visual">
                            <ScaleIn delay={0.3}>
                                {/* Smoke VFX */}
                                <div className="smoke-cluster">
                                    <div className="smoke s-blue"></div>
                                    <div className="smoke s-pink"></div>
                                    <div className="smoke-core-glow"></div>
                                </div>

                                {/* Track line & Moving Cubes */}
                                <div className="neon-track">
                                    <div className="cube-rider c1"></div>
                                    <div className="cube-rider c2"></div>
                                    <div className="cube-rider c3"></div>
                                    <div className="cube-rider c4"></div>
                                    <div className="cube-rider c5"></div>
                                </div>

                                {/* Floating Dashboard Card */}
                                <motion.div
                                    className="dash-panel"
                                    animate={{ y: [-15, 15, -15] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="dp-head">
                                        <h5>Loan Management</h5>
                                        <div className="add-btn">+</div>
                                    </div>
                                    <div className="dp-card">
                                        <div className="dp-card-top">
                                            <div className="card-logo">SHREEJI</div>
                                            <span className="card-tag">Active</span>
                                        </div>
                                        <div className="card-num">L/N **** **** 8545</div>
                                        <div className="card-bal">₹ 50,00,000</div>
                                    </div>
                                    <div className="dp-actions">
                                        <div className="dp-btn blue-g">Disbursal</div>
                                        <div className="dp-btn purp-g">Pay EMI</div>
                                    </div>
                                    <div className="dp-list">
                                        <div className="dp-li">
                                            <div className="dp-li-icon"><Zap size={12} /></div>
                                            <div className="dp-li-text">Fast Track Approved</div>
                                            <div className="dp-li-amt green">+ 2.5%</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScaleIn>
                        </div>
                    </div>
                </section>


                {/* 🏆 ENHANCED WHY US - PREMIUM BENTO LIST 🏆 */}
                <section className="why-premium">
                    <div className="container">
                        <div className="why-header-center">
                            <FadeIn direction="up">
                                <span className="gold-text-small">Trust Matters</span>
                                <h2 className="title-h2">Why Leading Brands <br />Partner With Us.</h2>
                                <p className="why-sub">We don't just provide capital; we provide a robust ecosystem. Join India's top-tier DSA networks backed by an elite financial infrastructure, offering speed, transparency, and high volume disbursals.</p>
                            </FadeIn>
                        </div>

                        <StaggerContainer>
                            <div className="why-bento-grid">

                                <motion.div variants={StaggerChild} className="why-bento-card col-span-2 bg-gradient">
                                    <div className="why-bento-content">
                                        <Shield size={38} color="#D4AF37" className="mb-icon" />
                                        <h3>RBI Registered Legacy & Compliance</h3>
                                        <p>Operating under stringent guidelines of the Reserve Bank of India. Over 15 years of uninterrupted excellence, strict auditing, and clean financial track records ensuring maximum safety and peace of mind for our partners.</p>
                                    </div>
                                    <div className="watermark-icon"><Shield size={180} color="rgba(212,175,55,0.05)" /></div>
                                </motion.div>

                                <motion.div variants={StaggerChild} className="why-bento-card">
                                    <div className="why-bento-content">
                                        <Zap size={38} color="#38bdf8" className="mb-icon" />
                                        <h3>2-Hour Disbursal</h3>
                                        <p>Proprietary tech stack evaluating credit risk in massive parallel processing for instant clearing and approval workflows.</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={StaggerChild} className="why-bento-card">
                                    <div className="why-bento-content">
                                        <Handshake size={38} color="#10b981" className="mb-icon" />
                                        <h3>Dedicated RM Support</h3>
                                        <p>A specialized Relationship Manager assigned to your portal, providing 24/7 priority case resolution and bridging.</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={StaggerChild} className="why-bento-card col-span-2 flex-row-card">
                                    <div className="stat-circle-mini">
                                        <span className="n-giant">10K+</span>
                                        <span className="n-label">Active DSAs</span>
                                    </div>
                                    <div className="why-bento-content">
                                        <h3>Highest Payout Modules</h3>
                                        <p>We believe in collective growth. Our partners enjoy the industry's most competitive commission percentages, backed by an automated same-day payout system deposited directly into their registered nodal bank accounts.</p>
                                    </div>
                                </motion.div>

                            </div>
                        </StaggerContainer>
                    </div>
                </section>



            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .home-page-wrapper {
          background: #ffffff;
          overflow: hidden;
        }

        /* ----- TOP DARK SECTION (HERO) ----- */
        .hero-wrapper-dark {
          position: relative;
          background: #020617;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-bg-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .vignette-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #020617 90%);
          pointer-events: none;
        }

        .hero-banking {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          padding: 160px 0 100px;
          display: flex;
          align-items: center;
        }

        .hero-banking-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .banking-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .h-banking {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -4px;
          margin-bottom: 10px;
          color: white;
        }

        .italic-font {
          font-family: serif;
          font-style: italic;
          font-weight: 400;
          color: #e2e8f0;
          text-decoration: underline;
          text-decoration-color: #D4AF37;
          text-underline-offset: 10px;
        }

        .p-banking-desc {
          font-size: 20px;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 500px;
          margin: 40px 0 50px;
        }

        .banking-cta-row { display: flex; gap: 20px; align-items: center; }

        .btn-banking-start {
          background: white;
          color: #020617;
          padding: 22px 45px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: none;
          box-shadow: 0 10px 40px rgba(255,255,255,0.1);
          cursor: pointer;
        }

        .btn-banking-ghost {
          background: none;
          border: none;
          color: white;
          font-weight: 800;
          font-size: 16px;
          padding: 20px;
          cursor: pointer;
        }

        .banking-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.3);
          position: relative;
          z-index: 2;
          color: white;
        }

        .card-top { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .card-tag { display: flex; align-items: center; gap: 8px; font-weight: 800; color: #94a3b8; font-size: 13px; text-transform: uppercase; }
        .card-dots { color: #475569; font-weight: 950; }
        .card-amount { font-size: 64px; font-weight: 950; letter-spacing: -2px; margin-bottom: 5px; }
        .card-sub { color: #94a3b8; font-weight: 700; font-size: 14px; margin-bottom: 30px; }
        
        .card-footer-stats { display: flex; align-items: center; gap: 15px; }
        .percent-pill { background: white; color: #020617; padding: 6px 14px; border-radius: 40px; font-weight: 900; font-size: 14px; }
        .card-footer-stats span { color: #64748b; font-weight: 700; font-size: 12px; text-transform: uppercase; }

        .floating-orb {
          position: absolute;
          width: 250px;
          height: 250px;
          filter: blur(100px);
          border-radius: 50%;
          opacity: 0.5;
          z-index: 0;
        }
        .blue-orb { top: -80px; left: -80px; background: #3b82f6; }
        .gold-orb { bottom: -80px; right: -80px; background: #D4AF37; }

        /* HOME INQUIRY CARD */
        .home-inquiry-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 24px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
          width: 100%;
          max-width: 500px;
        }

        .h-form-head h3 { color: white; font-size: 24px; font-weight: 900; margin-bottom: 5px; letter-spacing: -1px; }
        .h-form-head p { color: #94A3B8; font-size: 13px; font-weight: 700; margin-bottom: 25px; }

        .h-modern-form { display: flex; flex-direction: column; gap: 18px; }
        .h-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

        .h-input-group { position: relative; }
        .h-input-group input, .h-input-group select, .h-input-group textarea {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255,255,255,0.03);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s;
        }
        .h-input-group select option {
          background-color: #ffffff;
          color: #000000;
        }
        .h-input-group textarea { resize: none; }
        .h-input-group label {
          position: absolute;
          left: 15px;
          top: 12px;
          color: #64748B;
          font-size: 14px;
          pointer-events: none;
          transition: all 0.3s;
        }

        .h-input-group input:focus, .h-input-group select:focus, .h-input-group textarea:focus {
          border-color: #D4AF37;
          background: rgba(255,255,255,0.08);
        }

        .h-input-group input:focus ~ label, .h-input-group input:not(:placeholder-shown) ~ label,
        .h-input-group textarea:focus ~ label, .h-input-group textarea:not(:placeholder-shown) ~ label {
          top: -8px;
          left: 10px;
          font-size: 11px;
          font-weight: 900;
          color: #D4AF37;
          background: #020617;
          padding: 0 5px;
        }

        .h-submit-btn {
          background: white;
          color: #020617;
          border: none;
          padding: 15px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 5px;
        }
        .h-submit-btn:hover { background: #D4AF37; transform: translateY(-2px); }
        .h-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .h-submit-btn.success { background: #10b981; color: white; }
        .h-submit-btn.error { background: #ef4444; color: white; }


        /* ----- BOTTOM LIGHT SECTION ----- */
        .light-theme-bottom {
          position: relative;
          background: #ffffff;
          color: #0F172A;
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

        .gold { color: #D4AF37; }

        /* ABSTRACT SOLUTIONS CBDC STYLE */
        .abstract-solutions-section { padding: 60px 0; position: relative; z-index: 1; }
        .section-head-center { text-align: center; margin-bottom: 80px; }
        .section-head-center .mini-label { color: #D4AF37; font-weight: 950; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; display: block; margin-bottom: 15px; }
        .section-head-center .title-h2 { font-size: 52px; font-weight: 950; color: #111; letter-spacing: -2px; }

        .cbdc-style-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .cbdc-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .left-side { text-align: right; }
        .right-side { text-align: left; }

        .s-block { max-width: 320px; }
        .left-side .s-block { margin-left: auto; }
        .right-side .s-block { margin-right: auto; }

        .s-num {
          font-size: 16px;
          font-weight: 900;
          color: #D4AF37;
          margin-bottom: 10px;
          font-family: monospace;
          background: rgba(212, 175, 55, 0.1);
          display: inline-block;
          padding: 6px 12px;
          border-radius: 8px;
        }
        .s-num:empty { display: none; }

        .s-block h4 { font-size: 26px; font-weight: 900; margin-bottom: 15px; color: #0F172A; letter-spacing: -0.5px; }
        .s-block p { font-size: 16px; color: #64748B; line-height: 1.7; font-weight: 500; }

        /* 360 ROTATING GLASS CORE */
        .cbdc-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glass-core-object {
          position: relative;
          width: 380px;
          height: 380px;
          cursor: pointer;
        }

        .core-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .outer-ring { width: 100%; height: 100%; border: 2px dashed rgba(15,23,42,0.1); animation: spin 30s linear infinite; }
        .inner-ring { width: 70%; height: 70%; border: 1px solid #D4AF37; opacity: 0.4; animation: spinReverse 20s linear infinite; }

        .glass-bubble {
          position: absolute;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(15,23,42,0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.05), inset 0 0 30px rgba(255,255,255,0.8);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: morphGlass 8s ease-in-out infinite alternate;
        }

        /* Simulating the complex 3D shape connected pieces */
        .gb-1 {
          width: 250px; height: 250px;
          top: 10%; left: 10%;
          background: linear-gradient(135deg, rgba(234, 246, 255, 0.6) 0%, rgba(255,255,255,0.1) 100%);
        }

        .gb-2 {
          width: 200px; height: 200px;
          bottom: 0; right: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.05) 100%);
          animation-direction: alternate-reverse;
          animation-delay: -2s;
        }

        .gb-3 {
          width: 140px; height: 140px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: #0F172A;
          border: 4px solid #D4AF37;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 20px 40px rgba(15,23,42,0.2);
          animation: none; /* center core stays solid but rotates on hover from parent */
        }

        @keyframes morphGlass {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
        }
        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes spinReverse { 100% { transform: translate(-50%, -50%) rotate(-360deg); } }

        /* ----- SMOKE & CUBES (WHY US) NEW DARK ----- */
        .smoke-why-section { padding: 120px 0; background: #050a1f; overflow: hidden; position: relative; color: white; }
        .smoke-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

        .text-white { color: white !important; }
        .smoke-text .title-h2 { font-size: 52px; font-weight: 900; line-height: 1.1; margin-bottom: 30px; letter-spacing: -2px; }
        .smoke-p-container { margin-bottom: 50px; }
        .smoke-p { font-size: 16px; color: #94a3b8; line-height: 1.6; margin-bottom: 20px; max-width: 480px; }
        
        .smoke-stats { display: flex; align-items: center; gap: 30px; }
        .stat-block { display: flex; flex-direction: column; }
        .s-num { font-size: 42px; font-weight: 950; color: white; letter-spacing: -1px; line-height: 1; margin-bottom: 5px; }
        .s-text { font-size: 12px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
        .stat-separator { width: 1px; height: 50px; background: rgba(255,255,255,0.1); }

        .smoke-visual { position: relative; height: 500px; width: 100%; }

        /* Smoke VFX */
        .smoke-cluster { position: absolute; top: 40%; left: 20%; transform: translate(-50%, -50%); width: 250px; height: 250px; z-index: 2; }
        .smoke { position: absolute; width: 100%; height: 100%; border-radius: 50%; filter: blur(60px); mix-blend-mode: screen; animation: pulseSmoke 4s ease-in-out infinite alternate; }
        .s-blue { background: #3b82f6; left: -30px; }
        .s-pink { background: #d946ef; right: -30px; animation-delay: -2s; }
        .smoke-core-glow { position: absolute; top: 30%; left: 30%; width: 40%; height: 40%; background: white; border-radius: 50%; filter: blur(30px); box-shadow: 0 0 50px white; }
        @keyframes pulseSmoke { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.2); opacity: 1; } }

        /* Neon Track */
        .neon-track {
           position: absolute; bottom: 10%; left: -30%; right: -10%;
           height: 4px;
           background: linear-gradient(90deg, transparent, #3b82f6, #d946ef, transparent);
           box-shadow: 0 0 20px #3b82f6;
           transform: rotate(-10deg);
           z-index: 1;
        }

        .cube-rider {
           position: absolute; top: -8px;
           width: 20px; height: 20px;
           background: #ffffff;
           border: 2px solid #d946ef;
           box-shadow: 0 0 15px #d946ef, 0 0 30px #d946ef;
           transform: rotate(45deg);
           animation: rideTrack 10s linear infinite;
        }
        .c1 { animation-delay: 0s; }
        .c2 { animation-delay: 2s; }
        .c3 { animation-delay: 4s; }
        .c4 { animation-delay: 6s; }
        .c5 { animation-delay: 8s; }
        
        @keyframes rideTrack {
           0% { left: 100%; opacity: 0; }
           5% { opacity: 1; }
           90% { opacity: 1; }
           100% { left: 0%; opacity: 0; }
        }

        /* Dash Panel Floating Card */
        .dash-panel {
           position: absolute; right: 0; top: 10%;
           width: 320px;
           background: rgba(15, 23, 42, 0.7);
           backdrop-filter: blur(20px);
           border: 1px solid rgba(255,255,255,0.05);
           border-radius: 20px;
           padding: 25px;
           z-index: 3;
           box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }
        .dp-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .dp-head h5 { color: white; font-weight: 800; font-size: 14px; }
        .add-btn { width: 24px; height: 24px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; cursor: pointer; }
        
        .dp-card { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 20px; }
        .dp-card-top { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .card-logo { font-weight: 900; font-size: 12px; letter-spacing: 1px; color: #94A3B8; }
        .card-tag { font-size: 10px; background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 8px; border-radius: 4px; font-weight: 800; }
        .card-num { font-family: monospace; font-size: 14px; color: white; margin-bottom: 15px; }
        .card-bal { font-size: 24px; font-weight: 900; color: white; }

        .dp-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
        .dp-btn { padding: 12px; text-align: center; border-radius: 12px; font-weight: 800; font-size: 13px; cursor: pointer; color: white; }
        .blue-g { background: linear-gradient(135deg, #3b82f6, #2563eb); }
        .purp-g { background: linear-gradient(135deg, #a855f7, #7e22ce); }

        .dp-list { border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; }
        .dp-li { display: flex; align-items: center; justify-content: space-between; }
        .dp-li-icon { width: 30px; height: 30px; background: rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .dp-li-text { flex: 1; margin: 0 10px; font-size: 13px; font-weight: 700; color: #E2E8F0; }
        .dp-li-amt { font-size: 13px; font-weight: 800; }
        .green { color: #10b981; }


        /* ----- WHY PREMIUM (ENHANCED BENTO) ----- */
        .why-premium { padding: 80px 0 120px; background: #ffffff; position: relative; z-index: 10; }
        .why-header-center { text-align: center; max-width: 700px; margin: 0 auto 60px; }
        .why-header-center .gold-text-small { color: #D4AF37; font-weight: 950; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; display: block; margin-bottom: 15px; }
        .why-header-center .title-h2 { font-size: 52px; font-weight: 950; color: #0F172A; letter-spacing: -2px; margin-bottom: 20px; }
        .why-sub { font-size: 18px; color: #64748B; line-height: 1.6; }

        .why-bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        
        .why-bento-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .why-bento-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); border-color: #cbd5e1; }

        .col-span-2 { grid-column: span 2; }
        
        .bg-gradient { background: linear-gradient(135deg, #0F172A 0%, #020617 100%); color: white; border: none; }
        .bg-gradient h3 { color: #D4AF37 !important; }
        .bg-gradient p { color: #94A3B8 !important; }
        .watermark-icon { position: absolute; right: -30px; bottom: -30px; pointer-events: none; z-index: 0; }
        
        .why-bento-content { position: relative; z-index: 1; text-align: left; }
        .mb-icon { margin-bottom: 25px; }
        .why-bento-content h3 { font-size: 24px; font-weight: 900; color: #0F172A; margin-bottom: 15px; letter-spacing: -0.5px; }
        .why-bento-content p { font-size: 15px; color: #64748B; line-height: 1.7; font-weight: 500; }

        .flex-row-card { display: flex; align-items: center; gap: 40px; }
        .stat-circle-mini { background: #f8fafc; border: 1px solid #e2e8f0; width: 160px; height: 160px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; }
        .n-giant { font-size: 42px; font-weight: 950; color: #0F172A; letter-spacing: -2px; line-height: 1; }
        .n-label { font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }

        @media (max-width: 992px) {
          .hero-banking-grid { grid-template-columns: 1fr; text-align: center; }
          .banking-cta-row { justify-content: center; }
          .hero-banking-visual { margin-top: 40px; }
          
          .cbdc-style-layout { flex-direction: column; text-align: center; }
          .cbdc-side { text-align: center; gap: 40px; }
          .left-side, .right-side { text-align: left; }
          .s-block { max-width: 100%; }
          .glass-core-object { width: 300px; height: 300px; margin: 40px 0; }
          .gb-1 { width: 180px; height: 180px; }
          .gb-2 { width: 150px; height: 150px; }
          
          .smoke-grid { grid-template-columns: 1fr; text-align: center; }
          .smoke-stats { justify-content: center; }
          .smoke-visual { height: 400px; }
          .smoke-cluster { left: 50%; }
          .dash-panel { position: relative; margin: 40px auto 0; top: 0; right: auto; width: 100%; max-width: 350px; }
          
          .why-bento-grid { grid-template-columns: 1fr; }
          .col-span-2 { grid-column: span 1; }
          .flex-row-card { flex-direction: column; text-align: center; }
          .why-header-center .title-h2 { font-size: 40px; }
          .why-bento-content { text-align: center; }
          .mb-icon { margin-left: auto; margin-right: auto; }
        }
      ` }} />
        </div>
    );
};

export default Home;
