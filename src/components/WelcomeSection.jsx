import React from 'react';
import { motion } from 'framer-motion';
import welcomeInterior from '../assets/welcome_interior.png';

export default function WelcomeSection() {
  const imageVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.2 + custom * 0.15,
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };

  return (
    <section 
      id="welcome" 
      className="section-padding welcome-section relative overflow-hidden"
      style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)' }}
    >
      {/* Soft ambient background radial gradient to make the section look premium */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{
          backgroundColor: 'var(--gold-light)',
          top: '10%',
          right: '5%',
          zIndex: 0
        }}
      />

      <div className="container relative z-10" style={{ zIndex: 10 }}>
        <div className="responsive-grid-12">
          {/* Left Column: Premium Gold-Framed Interior Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="lg-col-span-6 flex justify-center"
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <div className="welcome-img-container">
              {/* Offset Gold Border Frame */}
              <div className="welcome-img-border-frame" />
              
              <img 
                src={welcomeInterior} 
                alt="Maha Thai Luxury Dining Room" 
                className="welcome-img"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Key Pillars */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="lg-col-span-6 text-left"
            style={{ textAlign: 'left' }}
          >
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Sawasdee & Welcome
            </span>
            
            <h2 
              className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--text-dark)' }}
            >
              A Sanctuary of Royal Siamese Dining
            </h2>
            
            <p 
              className="font-sans text-base font-light text-muted mb-10 leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, marginBottom: '2.5rem' }}
            >
              Step into a space where every corner breathes elegance and every aroma whispers a centuries-old secret. Maha Thai brings the grandeur of the historic Siamese courts to life, offering a peaceful refuge of high culinary craftsmanship and warm, heartfelt hospitality.
            </p>

            {/* Core Pillars List */}
            <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              {/* Pillar 1 */}
              <motion.div 
                custom={0}
                variants={featureVariants}
                className="welcome-pillar-item"
              >
                <div className="welcome-pillar-number">I</div>
                <div>
                  <h4 className="welcome-pillar-title">Royal Lineage Recipes</h4>
                  <p className="welcome-pillar-desc">Inspired by the traditional menus of the Royal Court of Bangkok, balancing all five taste dimensions.</p>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div 
                custom={1}
                variants={featureVariants}
                className="welcome-pillar-item"
              >
                <div className="welcome-pillar-number">II</div>
                <div>
                  <h4 className="welcome-pillar-title">Heritage Sourcing</h4>
                  <p className="welcome-pillar-desc">Fresh, native herbs and cold-pressed botanical oils imported directly from local organic farms in Thailand.</p>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div 
                custom={2}
                variants={featureVariants}
                className="welcome-pillar-item"
              >
                <div className="welcome-pillar-number">III</div>
                <div>
                  <h4 className="welcome-pillar-title">The Twelve-Salon Intimacy</h4>
                  <p className="welcome-pillar-desc">A restricted layout of only twelve tables ensures that each guest receives bespoke, uncompromising service.</p>
                </div>
              </motion.div>

            </div>

            {/* Order Now Call to Action */}
            <a 
              href="#reservations" 
              className="btn-filled"
              style={{ textDecoration: 'none' }}
            >
              Order Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
