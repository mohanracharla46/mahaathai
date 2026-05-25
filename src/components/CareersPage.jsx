import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Heart, Star, Clock, Users, Award, MapPin, ChevronRight, Send, Coffee, Sparkles, Mail } from 'lucide-react';

const openPositions = [
  {
    id: 'pos-1',
    title: 'Head Chef – Thai Cuisine',
    department: 'Kitchen',
    type: 'Full-Time',
    location: 'Bangkok, Thailand',
    description: 'Lead our culinary team in crafting authentic Thai dishes with modern flair. Minimum 8 years of professional kitchen experience required.',
    requirements: ['8+ years in Thai fine dining', 'Culinary degree or equivalent', 'Team leadership experience', 'Passion for authentic Thai cuisine']
  },
  {
    id: 'pos-2',
    title: 'Sous Chef',
    department: 'Kitchen',
    type: 'Full-Time',
    location: 'Bangkok, Thailand',
    description: 'Support the Head Chef in daily kitchen operations, menu development, and maintaining our exacting quality standards.',
    requirements: ['5+ years kitchen experience', 'Knowledge of Thai ingredients', 'Strong organizational skills', 'Food safety certification']
  },
  {
    id: 'pos-3',
    title: 'Restaurant Manager',
    department: 'Front of House',
    type: 'Full-Time',
    location: 'Bangkok, Thailand',
    description: 'Oversee the entire guest experience from arrival to departure. Manage reservations, staff scheduling, and guest relations.',
    requirements: ['5+ years in fine dining management', 'Exceptional communication skills', 'Proficiency in reservation systems', 'Fluent in English and Thai']
  },
  {
    id: 'pos-4',
    title: 'Sommelier',
    department: 'Beverage',
    type: 'Full-Time',
    location: 'Bangkok, Thailand',
    description: 'Curate and manage our wine and beverage program, offering expert pairings with Thai flavours to elevate the dining experience.',
    requirements: ['WSET Level 3 or equivalent', 'Experience with Asian cuisine pairing', '3+ years sommelier experience', 'Excellent palate and presentation']
  },
  {
    id: 'pos-5',
    title: 'Events Coordinator',
    department: 'Events',
    type: 'Full-Time',
    location: 'Bangkok, Thailand',
    description: 'Plan and execute private dining events, corporate functions, and special celebrations at our exclusive venue spaces.',
    requirements: ['3+ years event planning', 'Hospitality background', 'Strong client management', 'Creative problem-solving']
  },
  {
    id: 'pos-6',
    title: 'Line Cook',
    department: 'Kitchen',
    type: 'Full-Time / Part-Time',
    location: 'Bangkok, Thailand',
    description: 'Prepare dishes in a fast-paced fine-dining environment, working with premium ingredients to deliver consistent excellence.',
    requirements: ['2+ years cooking experience', 'Knowledge of Thai cooking techniques', 'Ability to work under pressure', 'Team-oriented mindset']
  }
];

const benefits = [
  { icon: <Heart size={22} />, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and wellness benefits for you and your family.' },
  { icon: <Coffee size={22} />, title: 'Staff Meals', desc: 'Enjoy complimentary daily meals prepared by our talented culinary team.' },
  { icon: <Award size={22} />, title: 'Growth & Training', desc: 'Ongoing professional development, workshops, and international training opportunities.' },
  { icon: <Users size={22} />, title: 'Team Culture', desc: 'Join a passionate, collaborative team that celebrates creativity and heritage.' },
  { icon: <Star size={22} />, title: 'Performance Rewards', desc: 'Competitive salary with quarterly bonuses, tips, and recognition programs.' },
  { icon: <Clock size={22} />, title: 'Work-Life Balance', desc: 'Flexible scheduling, paid time off, and a supportive management approach.' }
];

export default function CareersPage({ onOpenReservation }) {
  const [expandedJob, setExpandedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', experience: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    border: '1px solid var(--border-light)',
    borderRadius: '6px',
    backgroundColor: 'var(--canvas-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontWeight: 300
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-dark)',
    marginBottom: '0.5rem'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="about-page-wrapper" style={{ backgroundColor: 'var(--canvas-primary)', minHeight: '100vh', paddingTop: '80px' }}>

      {/* ══════════════════════════════════════════
          HERO SECTION (About Us Style)
      ══════════════════════════════════════════ */}
      <section className="about-hero relative overflow-hidden" style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)', padding: '8rem 0' }}>
        {/* Soft background ambient glow */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-25"
          style={{
            backgroundColor: 'var(--gold-light)',
            top: '-20%',
            left: '10%',
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
              <Briefcase size={18} style={{ color: 'var(--accent-jade)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-jade)'
              }}>
                JOIN OUR FAMILY
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300,
              color: 'var(--text-dark)', lineHeight: 1.1, marginBottom: '1.5rem'
            }}>
              Careers at Maha Thai
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
              Build your career with one of Bangkok's most distinguished Thai dining destinations.
              We're always looking for passionate individuals who share our love for culinary excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY JOIN US
      ══════════════════════════════════════════ */}
      <section style={{
        padding: '5rem 2rem',
        backgroundColor: 'var(--canvas-secondary)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-antique)', marginBottom: '0.75rem'
            }}>
              <Sparkles size={14} />
              WHY MAHA THAI
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300,
              color: 'var(--text-dark)', marginTop: '0.5rem'
            }}>
              Benefits & Perks
            </h2>
          </div>

          <motion.div
            className="careers-benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="careers-benefit-card"
                style={{
                  backgroundColor: 'var(--canvas-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  transition: 'box-shadow 0.4s ease, transform 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(11,54,61,0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  backgroundColor: 'var(--gold-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem', color: 'var(--gold-antique)'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem', fontWeight: 500,
                  color: 'var(--text-dark)', marginBottom: '0.5rem'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.6
                }}>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OPEN POSITIONS
      ══════════════════════════════════════════ */}
      <section style={{
        padding: '5rem 2rem',
        backgroundColor: 'var(--canvas-primary)'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-antique)', marginBottom: '0.75rem'
            }}>
              CURRENT OPENINGS
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300,
              color: 'var(--text-dark)', marginBottom: '0.5rem'
            }}>
              Open Positions
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'var(--text-muted)', fontWeight: 300
            }}>
              {openPositions.length} roles available
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openPositions.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="careers-job-card"
                style={{
                  backgroundColor: 'var(--canvas-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 24px rgba(11,54,61,0.06)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Job Header — clickable */}
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="careers-job-header"
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem', fontWeight: 500,
                      color: 'var(--text-dark)', marginBottom: '0.35rem'
                    }}>
                      {job.title}
                    </h3>
                    <div className="careers-job-meta" style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                        fontWeight: 600, letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-antique)',
                        backgroundColor: 'var(--gold-light)',
                        padding: '0.2rem 0.6rem', borderRadius: '4px'
                      }}>
                        {job.department}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                        color: 'var(--text-muted)', fontWeight: 300,
                        display: 'flex', alignItems: 'center', gap: '0.3rem'
                      }}>
                        <Clock size={12} /> {job.type}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                        color: 'var(--text-muted)', fontWeight: 300,
                        display: 'flex', alignItems: 'center', gap: '0.3rem'
                      }}>
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    style={{
                      color: 'var(--gold-antique)', flexShrink: 0,
                      transform: expandedJob === job.id ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>

                {/* Expandable Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedJob === job.id ? 'auto' : 0,
                    opacity: expandedJob === job.id ? 1 : 0
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                      color: 'var(--text-muted)', fontWeight: 300,
                      lineHeight: 1.7, marginTop: '1.25rem', marginBottom: '1rem'
                    }}>
                      {job.description}
                    </p>

                    <h4 style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                      fontWeight: 700, letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: 'var(--text-dark)',
                      marginBottom: '0.6rem'
                    }}>
                      Requirements
                    </h4>
                    <ul style={{
                      listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0',
                      display: 'flex', flexDirection: 'column', gap: '0.4rem'
                    }}>
                      {job.requirements.map((req, j) => (
                        <li key={j} style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                          color: 'var(--text-muted)', fontWeight: 300,
                          display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                          <span style={{
                            width: '5px', height: '5px', borderRadius: '50%',
                            backgroundColor: 'var(--gold-antique)', flexShrink: 0
                          }} />
                          {req}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#careers-apply"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData(prev => ({ ...prev, position: job.title }));
                        document.getElementById('careers-apply')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.7rem 1.5rem',
                        border: '1px solid var(--gold-antique)',
                        backgroundColor: 'var(--gold-antique)',
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                        fontWeight: 700, letterSpacing: '0.15em',
                        textTransform: 'uppercase', textDecoration: 'none',
                        borderRadius: '4px', cursor: 'pointer',
                        transition: 'all 0.3s ease'
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
                      Apply Now
                      <Send size={12} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          APPLICATION FORM
      ══════════════════════════════════════════ */}
      <section id="careers-apply" style={{
        padding: '5rem 2rem',
        backgroundColor: 'var(--canvas-secondary)',
        borderTop: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-antique)', marginBottom: '0.75rem'
            }}>
              START YOUR JOURNEY
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 300,
              color: 'var(--text-dark)', marginBottom: '0.75rem'
            }}>
              Apply to Join Us
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'var(--text-muted)', fontWeight: 300,
              lineHeight: 1.7, maxWidth: '500px', margin: '0 auto'
            }}>
              Fill out the form below and our HR team will review your application
              within 5 business days.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '3rem',
                backgroundColor: 'var(--canvas-primary)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                backgroundColor: 'var(--gold-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}>
                <Send size={24} style={{ color: 'var(--gold-antique)' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem', fontWeight: 500,
                color: 'var(--text-dark)', marginBottom: '0.5rem'
              }}>
                Application Submitted!
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.7
              }}>
                Thank you for your interest in joining Maha Thai. Our team will
                review your application and contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
                backgroundColor: 'var(--canvas-primary)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                padding: '2.5rem'
              }}
            >
              {/* Name + Email */}
              <div className="careers-form-row" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem'
              }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your full name" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              {/* Phone + Position */}
              <div className="careers-form-row" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem'
              }}>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+66 XX XXX XXXX" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Position of Interest</label>
                  <select name="position" required
                    value={formData.position} onChange={handleChange}
                    style={{
                      ...inputStyle, cursor: 'pointer', appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23577377' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos) => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                    <option value="other">Other / General Application</option>
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label style={labelStyle}>Years of Experience</label>
                <select name="experience" required
                  value={formData.experience} onChange={handleChange}
                  style={{
                    ...inputStyle, cursor: 'pointer', appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23577377' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0 – 1 years</option>
                  <option value="2-3">2 – 3 years</option>
                  <option value="4-6">4 – 6 years</option>
                  <option value="7+">7+ years</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Tell Us About Yourself</label>
                <textarea name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Share your experience, motivation, and why you'd be a great fit..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--gold-antique)'; e.target.style.boxShadow = '0 0 0 3px rgba(204,164,83,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Submit */}
              <button type="submit" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.6rem', padding: '1rem 2.5rem',
                border: '1px solid var(--gold-antique)',
                backgroundColor: 'var(--gold-antique)',
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', borderRadius: '4px',
                cursor: 'pointer', transition: 'all 0.4s ease',
                alignSelf: 'flex-start'
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
                <Send size={14} />
                Submit Application
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 2rem', textAlign: 'center',
        backgroundColor: 'var(--text-dark)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(186,155,95,0.06) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 300,
            color: 'var(--canvas-primary)', marginBottom: '1rem'
          }}>
            Don't See the Right Role?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)', maxWidth: '480px',
            margin: '0 auto 2rem', lineHeight: 1.8, fontWeight: 300
          }}>
            We're always open to meeting talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@mahathai.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2rem',
            border: '1px solid var(--gold-antique)',
            backgroundColor: 'transparent',
            color: 'var(--gold-antique)',
            fontFamily: 'var(--font-body)', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', transition: 'all 0.4s ease'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-antique)';
              e.currentTarget.style.color = 'var(--text-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--gold-antique)';
            }}
          >
            <Mail size={14} />
            Email Your Resume
          </a>
        </motion.div>
      </section>
    </div>
  );
}
