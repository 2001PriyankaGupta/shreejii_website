import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Navigation, Settings2, BarChart4, ArrowRight } from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const CVLoan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cv-page">
            {/* HERO - HEAVY INDUSTRY */}
            <section className="cv-hero">
                <div className="container">
                    <FadeIn direction="up">
                        <div className="cv-system-tag">B2B LOGISTICS FINANCE</div>
                    </FadeIn>
                    <div className="cv-h-grid">
                        <div className="cv-h-left">
                            <TextReveal>
                                <h1 className="cv-h1">Scale The</h1>
                            </TextReveal>
                            <TextReveal delay={0.2}>
                                <h1 className="cv-h1" style={{ color: '#3b82f6' }}>Fleet.</h1>
                            </TextReveal>
                            <FadeIn direction="up" delay={0.4}>
                                <p className="cv-desc">
                                    Commercial Vehicles generate revenue. We provide aggressive, structured capital solutions tailored for transporters and logistics firms to acquire heavy and light commercial assets without disrupting operational cash flows.
                                </p>
                                <button className="cv-btn" onClick={() => navigate('/contact')}>
                                    Discuss Deployment <ArrowRight size={18} />
                                </button>
                            </FadeIn>
                        </div>
                        <div className="cv-h-right">
                            <FadeIn delay={0.5}>
                                <div className="cv-img-box">
                                    <div className="cv-scan-line"></div>
                                    <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                                        alt="Commercial Fleet Logistics" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B METRICS */}
            <section className="cv-metrics-sec">
                <div className="container">
                    <div className="cv-m-header">
                        <h2>Heavy Duty<br />Financing.</h2>
                    </div>

                    <StaggerContainer>
                        <div className="cv-metrics-grid">
                            <motion.div variants={StaggerChild} className="cv-m-card dark-var">
                                <Truck size={40} color="#3b82f6" />
                                <h3>HCV / LCV</h3>
                                <ul>
                                    <li>Heavy Trucks (Multi-axle)</li>
                                    <li>Light Delivery Vans</li>
                                    <li>Buses & Shuttles</li>
                                </ul>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="cv-m-card">
                                <Navigation size={40} color="#0F172A" />
                                <h3>Route Specific</h3>
                                <p>We underwrite based on contract validity and route profitability, ensuring the loan aligns with accurate revenue forecasts.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="cv-m-card">
                                <BarChart4 size={40} color="#0F172A" />
                                <h3>Seasonal EMIs</h3>
                                <p>Structured repayment schedules that adjust to the cyclical highs and lows of the transport industry.</p>
                            </motion.div>

                            <motion.div variants={StaggerChild} className="cv-m-card dark-var">
                                <Settings2 size={40} color="#3b82f6" />
                                <h3>Refinancing</h3>
                                <ul>
                                    <li>Top-up Loans</li>
                                    <li>Debt Restructuring</li>
                                    <li>Working Capital Injection</li>
                                </ul>
                            </motion.div>
                        </div>
                    </StaggerContainer>

                    {/* REQUIREMENTS ACCORDION (Visual only for now) */}
                    <FadeIn direction="up">
                        <div className="cv-requirements">
                            <div className="cv-req-box">
                                <h3>Compliance & Documents</h3>
                                <div className="cv-req-list">
                                    <div className="c-req"><span>01</span> Fleet List & Valid Permits (RTO)</div>
                                    <div className="c-req"><span>02</span> Audited Financials & Last 2 ITRs</div>
                                    <div className="c-req"><span>03</span> Transport Contracts / Work Orders</div>
                                    <div className="c-req"><span>04</span> 12-Month Banking Analysis</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .cv-page { background: #e2e8f0; font-family: 'Inter', sans-serif; overflow: hidden; }
                
                .cv-hero { padding: 160px 0 100px; background: #020617; border-bottom: 1px solid #1e293b; }
                .cv-system-tag { color: #3b82f6; font-size: 13px; font-weight: 800; letter-spacing: 3px; border: 1px solid rgba(59,130,246,0.3); display: inline-block; padding: 6px 14px; margin-bottom: 40px; background: rgba(59,130,246,0.1); }
                
                .cv-h-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; }
                .cv-h1 { font-size: clamp(60px, 8vw, 120px); font-weight: 950; letter-spacing: -4px; line-height: 1; color: #fff; text-transform: uppercase; }
                .cv-desc { font-size: 18px; color: #94a3b8; line-height: 1.8; margin: 30px 0 40px; max-width: 500px; font-family: monospace; }
                
                .cv-btn { background: #3b82f6; color: #fff; border: none; padding: 18px 40px; font-weight: 800; font-size: 15px; text-transform: uppercase; letter-spacing: 1px; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; }
                .cv-btn:hover { background: #2563eb; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(59,130,246,0.3); }
                
                .cv-img-box { position: relative; width: 100%; height: 500px; border: 1px solid #1e293b; overflow: hidden; }
                .cv-img-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(50%) contrast(1.2); }
                .cv-scan-line { position: absolute; top: 0; left: 0; right: 0; height: 100%; background: linear-gradient(to bottom, transparent 48%, rgba(59,130,246,0.2) 50%, transparent 52%); background-size: 100% 4px; pointer-events: none; z-index: 2; }
                
                .cv-metrics-sec { padding: 120px 0; background: #e2e8f0; }
                .cv-m-header { margin-bottom: 60px; }
                .cv-m-header h2 { font-size: 72px; font-weight: 950; color: #0F172A; line-height: 1; letter-spacing: -3px; text-transform: uppercase; }
                
                .cv-metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
                .cv-m-card { background: #ffffff; padding: 50px; border: 1px solid #cbd5e1; display: flex; flex-direction: column; }
                .cv-m-card h3 { font-size: 32px; font-weight: 900; color: #0F172A; margin: 25px 0 15px; letter-spacing: -1px; text-transform: uppercase; }
                .cv-m-card p { font-size: 16px; color: #475569; line-height: 1.6; }
                
                .dark-var { background: #0F172A; border-color: #1e293b; }
                .dark-var h3 { color: #fff; }
                .dark-var ul { list-style: none; padding: 0; margin: 0; color: #94a3b8; font-family: monospace; font-size: 16px; }
                .dark-var ul li { padding: 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.1); }
                
                .cv-requirements { margin-top: 80px; }
                .cv-req-box { background: #ffffff; border: 1px solid #cbd5e1; padding: 60px; }
                .cv-req-box h3 { font-size: 28px; font-weight: 900; color: #0F172A; margin-bottom: 40px; text-transform: uppercase; }
                .cv-req-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
                .c-req { display: flex; align-items: center; gap: 20px; font-size: 16px; font-weight: 700; color: #1e293b; padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; }
                .c-req span { background: #0F172A; color: #3b82f6; padding: 5px 10px; font-family: monospace; font-size: 14px; font-weight: bold; }
                
                @media(max-width: 992px) { 
                    .cv-h-grid, .cv-metrics-grid, .cv-req-list { grid-template-columns: 1fr; } 
                    .cv-img-box { height: 350px; }
                    .cv-h1 { font-size: 52px; }
                }
            `}} />
        </div>
    );
};

export default CVLoan;
