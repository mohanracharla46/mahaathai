import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Mail, Phone } from 'lucide-react';

export default function CateringPage({ onOpenReservation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="about-page-wrapper" style={{ backgroundColor: 'var(--canvas-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Hero Section */}
      <section className="about-hero relative overflow-hidden" style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)', padding: '8rem 0' }}>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-25"
          style={{
            backgroundColor: 'var(--gold-light)',
            top: '-20%',
            right: '10%',
            zIndex: 0
          }}
        />
        <div className="container relative z-10" style={{ zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '48rem' }}
          >
            <a href="#home" className="careers-back-link" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--gold-antique)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: '2rem', transition: 'opacity 0.3s'
            }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <ArrowLeft size={14} />
              Back to Home
            </a>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.75rem', marginBottom: '1.5rem'
            }}>
              <MessageSquare size={18} style={{ color: 'var(--accent-jade)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-jade)'
              }}>
                Maha On-Location
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300,
              color: 'var(--text-dark)', lineHeight: 1.1, marginBottom: '1.5rem'
            }}>
              Bespoke Catering
            </h1>

            <div style={{
              width: '80px', height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--gold-antique), transparent)',
              margin: '0 auto 1.5rem'
            }} />

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1.05rem',
              color: 'var(--text-muted)', maxWidth: '540px',
              margin: '0 auto', lineHeight: 1.8, fontWeight: 300
            }}>
              Bring the culinary artistry and refined hospitality of Maha Thai directly to your estate, corporate workspace, or chosen luxury venue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact & Inquiry Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--canvas-primary)' }}>
        <div className="container" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--canvas-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: '16px',
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <motion.div variants={itemVariants}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300,
                color: 'var(--text-dark)', marginBottom: '1.25rem'
              }}>
                Plan Your Event
              </h2>
              
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.0rem',
                color: 'var(--text-muted)', fontWeight: 300,
                lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 2.5rem auto'
              }}>
                Please contact us with your catering needs. Our dedicated events team is ready to design a custom menu progression and guest experience tailored to your specific venue requirements.
              </p>
            </motion.div>

            {/* Quick Contact Grid */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem'
              }}
            >
              {/* Phone Card */}
              <a 
                href="tel:+6628887890"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'var(--canvas-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-antique)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(11,54,61,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'var(--gold-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-antique)', flexShrink: 0
                }}>
                  <Phone size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Call Us</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 400 }}>+66 2 888 7890</span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:dining@mahathai.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'var(--canvas-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-antique)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(11,54,61,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'var(--gold-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-antique)', flexShrink: 0
                }}>
                  <Mail size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email Us</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 400 }}>dining@mahathai.com</span>
                </div>
              </a>
            </motion.div>

            {/* Inquiry button */}
            <motion.div variants={itemVariants}>
              <button 
                onClick={() => onOpenReservation && onOpenReservation('reservation')}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.6rem', padding: '1rem 2.5rem',
                  border: '1px solid var(--gold-antique)',
                  backgroundColor: 'var(--gold-antique)',
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                  fontWeight: 700, letterSpacing: '0.2em',
                  textTransform: 'uppercase', borderRadius: '4px',
                  cursor: 'pointer', transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--text-dark)';
                  e.currentTarget.style.color = 'var(--gold-antique)';
                  e.currentTarget.style.borderColor = 'var(--text-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gold-antique)';
                  e.currentTarget.style.color = 'var(--text-dark)';
                  e.currentTarget.style.borderColor = 'var(--gold-antique)';
                }}
              >
                Start an Inquiry
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
