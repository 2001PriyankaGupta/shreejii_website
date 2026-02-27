import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { FadeIn } from './Animations';

const LoanPageLayout = ({ data }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.title]);

    if (!data) return null;

    return (
        <div className="loan-product-page">
            {/* HERO SECTION */}
            <section className="lp-hero">
                <div className="lp-hero-bg" style={{ backgroundImage: `url(${data.heroImage})` }}>
                    <div className="lp-overlay"></div>
                </div>

                <div className="container relative z-10">
                    <div className="lp-hero-content">
                        <FadeIn direction="up">
                            <div className="lp-tagline">
                                {data.icon && <data.icon size={16} />} <span>{data.tag.toUpperCase()}</span>
                            </div>
                            <h1 className="lp-title">{data.title}</h1>
                            <p className="lp-desc">{data.heroDesc}</p>

                            <div className="lp-hero-actions">
                                <button className="lp-btn-primary" onClick={() => navigate('/')}>
                                    Apply Now <ArrowRight size={20} />
                                </button>
                                <button className="lp-btn-outline" onClick={() => navigate('/')}>
                                    Calculate EMI
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CONTENT SPLIT SECTION */}
            <section className="lp-content-section">
                <div className="container">
                    <div className="lp-grid">

                        <div className="lp-left-col">
                            <FadeIn direction="up">
                                <h2 className="lp-h2">Overview</h2>
                                <p className="lp-text-body">{data.content}</p>

                                <div className="lp-benefits-wrapper">
                                    <h3 className="lp-h3">Key Benefits</h3>
                                    <div className="lp-features-grid">
                                        {data.features.map((f, i) => (
                                            <div key={i} className="lp-f-item">
                                                <div className="lp-f-icon"><CheckCircle2 size={20} color="#D4AF37" /></div>
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="lp-right-col">
                            <FadeIn direction="left" delay={0.2}>
                                <div className="lp-info-card">
                                    <div className="lp-card-header">
                                        <ShieldCheck size={24} color="#0F172A" />
                                        <h4>Eligibility Criteria</h4>
                                    </div>
                                    <ul className="lp-list">
                                        {data.eligibility.map((el, index) => (
                                            <li key={index}>• {el}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lp-info-card lp-card-dark">
                                    <div className="lp-card-header">
                                        <Lock size={24} color="#D4AF37" />
                                        <h4>Required Documents</h4>
                                    </div>
                                    <ul className="lp-list">
                                        {data.documents.map((doc, index) => (
                                            <li key={index}>• {doc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .loan-product-page {
            background: #f8fafc;
            min-height: 100vh;
        }

        .relative { position: relative; }
        .z-10 { z-index: 10; }

        /* --- HERO --- */
        .lp-hero {
            position: relative;
            min-height: 75vh;
            display: flex;
            align-items: center;
            padding: 150px 0 100px;
        }

        .lp-hero-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            z-index: 1;
        }

        .lp-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.8) 50%, rgba(15,23,42,0.3) 100%);
        }

        .lp-hero-content {
            max-width: 650px;
            color: #ffffff;
        }

        .lp-tagline {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(212, 175, 55, 0.2);
            backdrop-filter: blur(10px);
            padding: 8px 16px;
            border-radius: 30px;
            border: 1px solid rgba(212, 175, 55, 0.4);
            color: #D4AF37;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 25px;
        }

        .lp-title {
            font-size: clamp(48px, 6vw, 72px);
            font-weight: 950;
            line-height: 1.1;
            letter-spacing: -2px;
            margin-bottom: 25px;
        }

        .lp-desc {
            font-size: 20px;
            color: #e2e8f0;
            line-height: 1.6;
            margin-bottom: 40px;
        }

        .lp-hero-actions {
            display: flex;
            gap: 20px;
        }

        .lp-btn-primary {
            background: #D4AF37;
            color: #0F172A;
            padding: 16px 36px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s;
        }
        .lp-btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(212, 175, 55, 0.3);
            background: #eab308;
        }

        .lp-btn-outline {
            background: transparent;
            color: #ffffff;
            padding: 16px 36px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 16px;
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.3s;
        }
        .lp-btn-outline:hover {
            background: rgba(255,255,255,0.1);
            border-color: #ffffff;
        }

        /* --- CONTENT SECTION --- */
        .lp-content-section {
            padding: 100px 0;
            background: #f8fafc;
        }

        .lp-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 80px;
            align-items: flex-start;
        }

        .lp-h2 {
            font-size: 42px;
            font-weight: 950;
            color: #0F172A;
            letter-spacing: -2px;
            margin-bottom: 30px;
        }

        .lp-text-body {
            font-size: 18px;
            color: #475569;
            line-height: 1.8;
            margin-bottom: 50px;
        }

        .lp-benefits-wrapper {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 24px;
            padding: 40px;
        }

        .lp-h3 {
            font-size: 24px;
            font-weight: 800;
            color: #0F172A;
            margin-bottom: 30px;
        }

        .lp-features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }

        .lp-f-item {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .lp-f-icon {
            width: 44px; height: 44px;
            background: #f8fafc;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
            border: 1px solid #e2e8f0;
        }

        .lp-f-item span {
            font-size: 16px;
            font-weight: 700;
            color: #1e293b;
        }

        /* --- INFO CARDS --- */
        .lp-info-card {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 24px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.03);
        }

        .lp-card-dark {
            background: #0F172A;
            border-color: #1e293b;
            color: #ffffff;
        }

        .lp-card-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        .lp-card-dark .lp-card-header { border-bottom-color: rgba(255,255,255,0.1); }

        .lp-card-header h4 {
            font-size: 22px;
            font-weight: 800;
            color: inherit;
        }

        .lp-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .lp-list li {
            font-size: 16px;
            color: #475569;
            margin-bottom: 15px;
            line-height: 1.6;
        }
        .lp-card-dark .lp-list li { color: #cbd5e1; }

        @media (max-width: 992px) {
            .lp-grid { grid-template-columns: 1fr; gap: 50px; }
            .lp-hero-actions { flex-direction: column; }
            .lp-features-grid { grid-template-columns: 1fr; }
            .lp-title { font-size: 48px; }
        }
        ` }} />
        </div>
    );
};

export default LoanPageLayout;
