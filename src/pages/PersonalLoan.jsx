import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Heart, Home, GraduationCap, CheckCircle2 } from 'lucide-react';
import { FadeIn, TextReveal, StaggerContainer, StaggerChild } from '../components/Animations';

const PersonalLoan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pl-page-luxury">
            {/* LUXURY HERO */}
            <section className="pl-hero">
                <div className="container">
                    <div className="pl-hero-grid">
                        <div className="pl-h-content">
                            <FadeIn direction="up">
                                <span className="pl-badge">UNSECURED CAPITAL</span>
                            </FadeIn>
                            <div className="pl-title-stack">
                                <TextReveal>
                                    <h1 className="pl-h1">Fund Your</h1>
                                </TextReveal>
                                <TextReveal delay={0.2}>
                                    <h1 className="pl-h1">Milestones.</h1>
                                </TextReveal>
                            </div>
                            <FadeIn direction="up" delay={0.4}>
                                <p className="pl-desc">
                                    Life events shouldn't wait for liquidity. Secure up to ₹25 Lakhs with our premium personal credit line.
                                    We rely on your cash-flow strength, not collateral.
                                </p>
                                <button className="pl-btn-gold" onClick={() => navigate('/contact')}>
                                    Check Eligibility <ArrowRight size={18} />
                                </button>
                            </FadeIn>
                        </div>
                        <div className="pl-h-visual">
                            <FadeIn direction="left" delay={0.2}>
                                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop"
                                    alt="Premium Lifestyle" className="pl-hero-img" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="pl-usecases">
                <div className="container">
                    <div className="pl-uc-header text-center">
                        <h2 className="pl-h2">Universal Application</h2>
                        <p className="pl-sub">Deploy capital precisely where you need it.</p>
                    </div>
                    <StaggerContainer>
                        <div className="pl-uc-grid">
                            {[
                                { icon: Heart, title: "Wedding Finances", desc: "Celebrate without compromise. Cover venue, jewelry, and catering costs." },
                                { icon: Plane, title: "Global Travel", desc: "Fund your international itineraries and luxury accommodations seamlessly." },
                                { icon: Home, title: "Home Renovation", desc: "Upgrade your living space with the latest architectural refinements." },
                                { icon: GraduationCap, title: "Higher Education", desc: "Invest in your human capital with funding for premium certifications." }
                            ].map((item, i) => (
                                <motion.div variants={StaggerChild} key={i} className="pl-uc-card">
                                    <div className="pl-uc-icon"><item.icon size={28} color="#D4AF37" /></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .pl-page-luxury { background: #ffffff; font-family: 'Inter', sans-serif; overflow: hidden; }
                .pl-hero { padding: 160px 0 80px; }
                .pl-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                
                .pl-badge { display: inline-block; padding: 6px 16px; border: 1px solid #e2e8f0; border-radius: 30px; color: #64748b; font-weight: 800; font-size: 11px; letter-spacing: 2px; margin-bottom: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
                .pl-h1 { font-size: clamp(48px, 6vw, 84px); font-weight: 900; line-height: 1.1; letter-spacing: -3px; color: #0F172A; }
                .pl-desc { font-size: 20px; color: #475569; line-height: 1.7; margin: 30px 0; max-width: 500px; }
                .pl-btn-gold { background: linear-gradient(135deg, #fef08a 0%, #D4AF37 100%); color: #0F172A; padding: 18px 40px; border-radius: 12px; font-weight: 900; font-size: 16px; border: none; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(212,175,55,0.2); }
                .pl-btn-gold:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(212,175,55,0.4); }
                
                .pl-h-visual { position: relative; }
                .pl-hero-img { width: 100%; border-radius: 32px; box-shadow: 0 30px 60px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/5; }
                
                .pl-usecases { padding: 100px 0; background: #f8fafc; }
                .pl-uc-header { margin-bottom: 60px; text-align: center; }
                .pl-h2 { font-size: 52px; font-weight: 900; color: #0F172A; letter-spacing: -2px; margin-bottom: 15px; }
                .pl-sub { font-size: 20px; color: #64748b; }
                
                .pl-uc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
                .pl-uc-card { background: #fff; padding: 40px; border-radius: 24px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.02); transition: 0.3s; }
                .pl-uc-card:hover { transform: translateY(-5px); border-color: #cbd5e1; box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
                .pl-uc-icon { width: 60px; height: 60px; background: #fffbeb; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; border: 1px solid #fef3c7; }
                .pl-uc-card h4 { font-size: 24px; font-weight: 800; color: #0F172A; margin-bottom: 15px; letter-spacing: -0.5px; }
                .pl-uc-card p { font-size: 16px; color: #475569; line-height: 1.7; }
                
                @media(max-width: 992px) { .pl-hero-grid { grid-template-columns: 1fr; text-align: center; } .pl-desc { margin: 30px auto; } .pl-uc-grid { grid-template-columns: 1fr; } }
            `}} />
        </div>
    );
};

export default PersonalLoan;
