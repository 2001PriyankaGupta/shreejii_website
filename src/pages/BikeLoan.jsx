import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BatteryCharging, Coins, BadgePercent, MapPin, ArrowRight } from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const BikeLoan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bk-page">
            <section className="bk-hero">
                <div className="bk-split-layout">
                    <div className="bk-left">
                        <FadeIn direction="up">
                            <h4 className="bk-tag">TWO-WHEELER FINANCE</h4>
                            <TextReveal>
                                <h1 className="bk-h1">Command</h1>
                            </TextReveal>
                            <TextReveal delay={0.2}>
                                <h1 className="bk-h1">The Streets.</h1>
                            </TextReveal>

                            <p className="bk-p">
                                Commute smart. Ride hard. We offer unparalleled LTV ratios that make acquiring
                                your next motorbike or premium EV scooter effortless. Low EMIs tailored to your monthly cashflow.
                            </p>

                            <div className="bk-actions">
                                <button className="bk-btn-primary" onClick={() => navigate('/')}>Calculate Custom EMI</button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="bk-right">
                        <FadeIn direction="left" delay={0.3}>
                            <div className="bk-img-mask">
                                <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop"
                                    alt="Motorcycle" className="bk-img" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="bk-features">
                <div className="container">
                    <div className="bk-feat-grid">
                        <FadeIn direction="up">
                            <div className="bk-feat-header">
                                <h2>Why Ride<br />With Us?</h2>
                                <p>We dissect the cost of ownership to engineer the most affordable two-wheeler credit lines in the sector.</p>
                            </div>
                        </FadeIn>

                        <StaggerContainer>
                            <div className="bk-cards-wrap">
                                <motion.div variants={StaggerChild} className="bk-card bk-card-ev">
                                    <BatteryCharging size={40} color="#0F172A" />
                                    <h3>EV Subsidies</h3>
                                    <p>Deep discounts and highly aggressive ROI exclusively for green mobility and electric scooters.</p>
                                </motion.div>

                                <motion.div variants={StaggerChild} className="bk-card">
                                    <Coins size={40} color="#eab308" />
                                    <h3>Micro Downpayment</h3>
                                    <p>Start your engine instantly. Keep your savings intact with downpayments as low as 5%.</p>
                                </motion.div>

                                <motion.div variants={StaggerChild} className="bk-card">
                                    <BadgePercent size={40} color="#eab308" />
                                    <h3>Fixed ROI</h3>
                                    <p>Zero floating rate anxiety. Lock in your interest rate for the entire tenure of the loan.</p>
                                </motion.div>
                            </div>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .bk-page { background: #0F172A; font-family: 'Inter', sans-serif; overflow: hidden; }
                
                .bk-hero { padding: 140px 0 80px 5%; min-height: 90vh; display: flex; align-items: center; }
                .bk-split-layout { display: flex; align-items: center; justify-content: space-between; gap: 50px; width: 100%; }
                
                .bk-left { flex: 1; max-width: 650px; padding-right: 40px; }
                .bk-tag { color: #eab308; font-size: 14px; font-weight: 900; letter-spacing: 4px; border-left: 3px solid #eab308; padding-left: 15px; margin-bottom: 30px; }
                .bk-h1 { font-size: clamp(56px, 7vw, 110px); color: #fff; font-weight: 950; letter-spacing: -4px; line-height: 1; text-transform: uppercase; }
                .bk-p { font-size: 20px; color: #94a3b8; line-height: 1.7; margin: 40px 0; }
                
                .bk-btn-primary { background: #eab308; color: #0F172A; border: none; padding: 20px 45px; border-radius: 0; font-weight: 950; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: 0.3s; transform: skewX(-10deg); }
                .bk-btn-primary:active { transform: skewX(-10deg) scale(0.95); }
                .bk-btn-primary:hover { background: #fef08a; box-shadow: -10px 10px 0 rgba(234, 179, 8, 0.2); }
                
                .bk-right { flex: 1.2; position: relative; }
                .bk-img-mask { clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%); width: 100%; height: 75vh; }
                .bk-img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.1) saturate(1.2); }
                
                .bk-features { background: #ffffff; padding: 120px 0; border-top-left-radius: 80px; position: relative; z-index: 5; margin-top: -60px; }
                .bk-feat-grid { display: grid; grid-template-columns: 0.8fr 1.5fr; gap: 80px; align-items: center; }
                
                .bk-feat-header h2 { font-size: 72px; font-weight: 950; color: #0F172A; line-height: 1; letter-spacing: -3px; margin-bottom: 30px; }
                .bk-feat-header p { font-size: 20px; color: #64748b; line-height: 1.6; border-left: 4px solid #0F172A; padding-left: 20px; }
                
                .bk-cards-wrap { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
                .bk-card { background: #f8fafc; padding: 40px; border-radius: 0; border: 1px solid #e2e8f0; transition: 0.3s; }
                .bk-card:hover { transform: translateY(-5px); background: #0F172A; color: #fff !important; }
                .bk-card:hover h3 { color: #fff; } .bk-card:hover p { color: #94a3b8; }
                
                .bk-card-ev { background: #eab308; border-color: #eab308; grid-column: span 2; }
                .bk-card-ev:hover { background: #ca8a04; }
                .bk-card-ev p { color: #0F172A; }
                
                .bk-card h3 { font-size: 28px; font-weight: 900; color: #0F172A; margin: 25px 0 15px; letter-spacing: -1px; }
                .bk-card p { font-size: 16px; color: #475569; line-height: 1.6; }
                
                @media(max-width: 992px) { 
                    .bk-split-layout { flex-direction: column; } 
                    .bk-left { padding: 0 5%; text-align: center; max-width: 100%; } 
                    .bk-img-mask { clip-path: none; height: 50vh; } 
                    .bk-tag { border: none; text-align: center; }
                    .bk-feat-grid { grid-template-columns: 1fr; }
                    .bk-cards-wrap { grid-template-columns: 1fr; }
                    .bk-card-ev { grid-column: auto; }
                }
            `}} />
        </div>
    );
};

export default BikeLoan;
