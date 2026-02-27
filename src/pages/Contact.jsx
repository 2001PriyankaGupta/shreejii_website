import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, HeadphonesIcon } from 'lucide-react';
import { FadeIn, ScaleIn } from '../components/Animations';

const Contact = () => {
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
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (e) => {
        setFormData({ ...formData, inquiry_type: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/inquiry', {
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
        <div className="contact-page-unique" style={{ paddingTop: '80px' }}>

            <div className="contact-split-layout">

                {/* 🔵 LEFT SIDE: BRANDED INFO PANEL 🔵 */}
                <div className="c-left-panel">
                    <div className="c-left-bg-pattern"></div>
                    <div className="c-left-content">
                        <FadeIn direction="right">
                            <div className="c-badge">24/7 Premium Support</div>
                            <h1 className="c-h1">Connection <br />Starts <span className="c-gold">Here.</span></h1>
                            <p className="c-p">Whether you're looking for high-volume capital, partnership details, or technical support, our team is stationed to assist you immediately.</p>

                            <div className="c-info-list">
                                <div className="c-info-item">
                                    <div className="c-icon"><HeadphonesIcon size={20} /></div>
                                    <div>
                                        <h5>Toll-Free Helpline</h5>
                                        <span>1800-123-4567</span>
                                    </div>
                                </div>
                                <div className="c-info-item">
                                    <div className="c-icon"><MessageSquare size={20} /></div>
                                    <div>
                                        <h5>Email Desk</h5>
                                        <span>support@shreejifinance.com</span>
                                    </div>
                                </div>
                                <div className="c-info-item">
                                    <div className="c-icon"><Building2 size={20} /></div>
                                    <div>
                                        <h5>Corporate HQ</h5>
                                        <span>Level 8, Financial Hub, Bandra East, Mumbai - 400051</span>
                                    </div>
                                </div>
                            </div>

                        </FadeIn>
                    </div>
                </div>

                {/* ⚪ RIGHT SIDE: MINIMAL FORM PANEL ⚪ */}
                <div className="c-right-panel">
                    <ScaleIn delay={0.2}>
                        <div className="c-form-container">

                            <div className="c-form-head">
                                <h2>Send a Message</h2>
                                <p>Fill out the details securely. An expert will reach out within 60 minutes.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="c-modern-form">
                                <div className="c-form-row">
                                    <div class="c-input-group">
                                        <input type="text" id="first_name" required placeholder=" " value={formData.first_name} onChange={handleChange} />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div class="c-input-group">
                                        <input type="text" id="last_name" required placeholder=" " value={formData.last_name} onChange={handleChange} />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>

                                <div className="c-form-row">
                                    <div class="c-input-group">
                                        <input type="email" id="email" required placeholder=" " value={formData.email} onChange={handleChange} />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div class="c-input-group">
                                        <input type="tel" id="mobile" required placeholder=" " value={formData.mobile} onChange={handleChange} />
                                        <label htmlFor="mobile">Mobile Number</label>
                                    </div>
                                </div>

                                <div class="c-input-group">
                                    <select id="inquiry_type" required value={formData.inquiry_type} onChange={handleSelectChange}>
                                        <option value="" disabled hidden>Select Inquiry Type</option>
                                        <option value="Loan Application Status">Loan Application Status</option>
                                        <option value="DSA / Partner Program">DSA / Partner Program</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Other Queries">Other Queries</option>
                                    </select>
                                </div>

                                <div class="c-input-group">
                                    <textarea id="message" rows="4" required placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                                    <label htmlFor="message">How can we help you?</label>
                                </div>

                                <button type="submit" disabled={formState === 'sending' || formState === 'success'} className={`c-submit-btn ${formState}`}>
                                    {formState === 'idle' && <>Submit Inquiry <Send size={18} /></>}
                                    {formState === 'sending' && "Processing..."}
                                    {formState === 'success' && "Message Received Successfully!"}
                                    {formState === 'error' && "Submission Failed. Try Again."}
                                </button>
                            </form>

                        </div>
                    </ScaleIn>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-page-unique {
            background: #ffffff;
            min-height: 100vh;
        }

        .contact-split-layout {
            display: flex;
            min-height: calc(100vh - 80px);
        }

        /* --- LEFT PANEL --- */
        .c-left-panel {
            flex: 1.1;
            position: relative;
            padding: 80px 60px;
            color: white;
            display: flex;
            align-items: center;
            overflow: hidden;
            background-color: #050a1f; /* fallback */
            background-image: linear-gradient(135deg, rgba(5,10,31,0.92) 0%, rgba(5,10,31,0.7) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }

        .c-left-bg-pattern {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(212, 175, 55, 0.2) 2px, transparent 2px);
            background-size: 40px 40px;
            opacity: 0.3;
            z-index: 0;
        }

        .c-left-content {
            position: relative;
            z-index: 2;
            max-width: 500px;
            margin-left: auto;
        }

        .c-badge {
            display: inline-block;
            background: rgba(212, 175, 55, 0.1);
            color: #D4AF37;
            padding: 8px 16px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 40px;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 30px;
        }

        .c-h1 {
            font-size: clamp(48px, 5vw, 72px);
            font-weight: 950;
            line-height: 1.1;
            letter-spacing: -2px;
            margin-bottom: 20px;
        }

        .c-gold { color: #D4AF37; font-family: serif; font-style: italic; font-weight: 400; }

        .c-p {
            font-size: 18px;
            color: #94a3b8;
            line-height: 1.7;
            margin-bottom: 50px;
        }

        .c-info-list {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .c-info-item {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .c-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #D4AF37;
        }

        .c-info-item h5 {
            font-size: 16px;
            font-weight: 800;
            color: #e2e8f0;
            margin-bottom: 4px;
        }

        .c-info-item span {
            font-size: 15px;
            color: #64748b;
        }

        /* --- RIGHT PANEL --- */
        .c-right-panel {
            flex: 1.2;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px 40px;
        }

        .c-form-container {
            background: #ffffff;
            width: 100%;
            max-width: 600px;
            padding: 50px;
            border-radius: 32px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.04);
            border: 1px solid #f1f5f9;
        }

        .c-form-head h2 {
            font-size: 36px;
            font-weight: 950;
            color: #0F172A;
            letter-spacing: -1px;
            margin-bottom: 15px;
        }

        .c-form-head p {
            font-size: 16px;
            color: #64748B;
            margin-bottom: 40px;
        }

        .c-modern-form {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .c-form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }

        /* Float Label Inputs */
        .c-input-group {
            position: relative;
        }

        .c-input-group input, 
        .c-input-group textarea,
        .c-input-group select {
            width: 100%;
            padding: 16px 20px;
            background: #ffffff;
            border: 2px solid #e2e8f0;
            border-radius: 14px;
            font-size: 16px;
            color: #0F172A;
            outline: none;
            transition: all 0.3s;
            font-family: inherit;
        }

        .c-input-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .c-input-group label {
            position: absolute;
            left: 20px;
            top: 18px;
            color: #94a3b8;
            font-size: 16px;
            transition: all 0.3s;
            pointer-events: none;
            background: #ffffff;
            padding: 0 4px;
        }

        .c-input-group input:focus, 
        .c-input-group textarea:focus {
            border-color: #0F172A;
        }

        .c-input-group input:focus ~ label,
        .c-input-group input:not(:placeholder-shown) ~ label,
        .c-input-group textarea:focus ~ label,
        .c-input-group textarea:not(:placeholder-shown) ~ label {
            top: -10px;
            font-size: 13px;
            font-weight: 800;
            color: #0F172A;
        }
        
        .c-input-group select {
             color: #64748B;
        }
        .c-input-group select:focus,
        .c-input-group select:valid {
             color: #0F172A;
             border-color: #0F172A;
        }


        .c-submit-btn {
            background: #0F172A;
            color: white;
            border: none;
            padding: 20px;
            border-radius: 14px;
            font-size: 16px;
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        .c-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            background: #020617;
        }

        .c-submit-btn.success { background: #10b981; }

        @media (max-width: 992px) {
            .contact-split-layout { flex-direction: column; }
            .c-left-content { max-width: 100%; margin: 0; }
            .c-left-panel { padding: 60px 30px; }
            .c-right-panel { padding: 60px 20px; }
            .c-form-container { padding: 30px; }
            .c-form-row { grid-template-columns: 1fr; }
        }
        ` }} />
        </div>
    );
};

export default Contact;
