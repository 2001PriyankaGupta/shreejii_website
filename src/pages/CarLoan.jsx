import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Key, ShieldCheck, Banknote, ArrowRight, GaugeCircle } from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const CarLoan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="car-loan-page">
            {/* CINEMATIC HERO */}
            <section className="cl-hero">
                <div className="cl-bg"></div>
                <div className="container cl-h-container">
                    <div className="cl-h-content text-center">
                        <FadeIn direction="up">
                            <GaugeCircle size={40} color="#e2e8f0" style={{ margin: '0 auto 20px' }} />
                        </FadeIn>
                        <div className="cl-title-wrap">
                            <TextReveal>
                                <h1 className="cl-h1 text-white">Drive Your Ambition.</h1>
                            </TextReveal>
                        </div>
                        <FadeIn delay={0.2} direction="up">
                            <p className="cl-desc mx-auto">
                                100% On-road financing for elite sedans, SUVs, and EVs. We clear the showroom hurdles so you can focus on the journey.
                            </p>
                            <button className="cl-btn" onClick={() => navigate('/')}>
                                Secure Funding <ArrowRight size={18} />
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* EXPANSIVE STATS */}
            <section className="cl-stats-sec">
                <div className="container">
                    <StaggerContainer>
                        <div className="cl-stats-grid">
                            <motion.div variants={StaggerChild} className="cl-stat-card">
                                <Key size={32} color="#0F172A" />
                                <h3>Zero Down</h3>
                                <p>Exclusive 100% ex-showroom and on-road funding. Preserve your liquidity.</p>
                            </motion.div>
                            <motion.div variants={StaggerChild} className="cl-stat-card cl-card-dark">
                                <Banknote size={32} color="#D4AF37" />
                                <h3>7-Year Tenure</h3>
                                <p>Flexible runway. Extended tenure ensures your monthly EMIs remain comfortably low.</p>
                            </motion.div>
                            <motion.div variants={StaggerChild} className="cl-stat-card">
                                <ShieldCheck size={32} color="#0F172A" />
                                <h3>Pre-Approved</h3>
                                <p>Walk into any dealership as a cash-buyer with our digital sanction letter.</p>
                            </motion.div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .car-loan-page { font-family: 'Inter', sans-serif; background: #cbd5e1; }
                
                .cl-hero { position: relative; height: 90vh; display: flex; align-items: flex-end; padding-bottom: 80px; }
                .cl-bg { position: absolute; inset: 0; background-image: url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop'); background-size: cover; background-position: center; z-index: 1; }
                .cl-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,23,42,1) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.1) 100%); }
                .cl-h-container { position: relative; z-index: 2; width: 100%; }
                
                .cl-h1 { font-size: clamp(48px, 7vw, 96px);color: #cbd5e1; font-weight: 950; letter-spacing: -3px; line-height: 1; margin-bottom: 25px; }
                .cl-desc { font-size: 22px; color: #cbd5e1; max-width: 800px; line-height: 1.6; margin-bottom: 40px; font-weight: 400; }
                
                .cl-btn { background: #ffffff; color: #0F172A; padding: 18px 40px; border-radius: 40px; font-weight: 900; font-size: 16px; border: none; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; }
                .cl-btn:hover { background: #D4AF37; transform: translateY(-3px); }
                
                .cl-stats-sec { padding: 100px 0; background: #f8fafc; border-radius: 40px 40px 0 0; margin-top: -40px; position: relative; z-index: 5; }
                .cl-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
                .cl-stat-card { background: #fff; padding: 50px; border-radius: 32px; border: 1px solid #e2e8f0; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.03); transition: 0.3s; }
                .cl-stat-card:hover { transform: translateY(-10px); border-color: #cbd5e1; }
                .cl-stat-card svg { margin: 0 auto 25px; }
                .cl-stat-card h3 { font-size: 32px; font-weight: 900; color: #0F172A; margin-bottom: 15px; letter-spacing: -1px; }
                .cl-stat-card p { font-size: 16px; color: #64748b; line-height: 1.7; }
                
                .cl-card-dark { background: #0F172A; border: none; }
                .cl-card-dark h3 { color: #fff; }
                .cl-card-dark p { color: #94a3b8; }
                
                @media(max-width: 992px) { .cl-stats-grid { grid-template-columns: 1fr; } .cl-hero { height: auto; padding-top: 150px; } }
            `}} />
        </div>
    );
};

export default CarLoan;
