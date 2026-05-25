import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, UtensilsCrossed, Award, Wine, ShieldCheck } from 'lucide-react';
import cateringHeroImg from '../assets/catering_hero.png';
import welcomeInteriorImg from '../assets/welcome_interior.png';

export default function CateringPage({ onOpenReservation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
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
            className="max-w-3xl mx-auto text-center"
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '48rem' }}
          >
            <span 
              className="block font-sans text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.4em', marginBottom: '1.25rem' }}
            >
              Maha On-Location
            </span>
            <h1 
              className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)', marginBottom: '1.5rem' }}
            >
              Bespoke Catering
            </h1>
            <p 
              className="font-sans text-base md:text-lg font-light text-muted leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 300, lineHeight: '1.8' }}
            >
              Bring the culinary artistry and refined hospitality of Maha Thai directly to your estate, corporate workspace, or chosen luxury venue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Concept Split Section */}
      <section className="section-padding relative overflow-hidden" style={{ borderBottom: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div className="responsive-grid-12">
            {/* Left Column: Description */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg-col-span-6"
              style={{ textAlign: 'left' }}
            >
              <span 
                className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
              >
                The Gastronomic Canvas
              </span>
              <h2 
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-dark)' }}
              >
                An immersive restaurant experience at your door.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p 
                  className="font-sans text-base font-light text-muted"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7' }}
                >
                  Our off-site catering service is designed for those who demand culinary absolute perfection outside the walls of our dining rooms. From intimate residential dinners to grand-scale corporate opening receptions, our kitchen team duplicates the precise temperature, textures, and aromas of our signature dishes in any environment.
                </p>
                <p 
                  className="font-sans text-base font-light text-muted"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7' }}
                >
                  Under the coordination of our master chefs and service directors, we deliver a seamless experience incorporating elegant setups, white-glove table service, sommelier guidance, and complete post-event coordination.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Culinary Showcase Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              style={{ position: 'relative' }}
              className="lg-col-span-6 mobile-order-first"
            >
              <div className="welcome-img-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
                {/* Offset Frame */}
                <div className="welcome-img-border-frame" style={{ borderColor: 'var(--gold-antique)' }} />
                
                <img 
                  src={cateringHeroImg} 
                  alt="Maha Thai Catering Presentation" 
                  className="welcome-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars of Catering */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--gold-antique)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Our Commitments
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
              style={{ fontSize: 'clamp(2.0rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              Impeccable execution, anywhere.
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Pillar 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-primary)',
                borderRadius: '8px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--accent-jade)' }}
            >
              <UtensilsCrossed size={32} style={{ color: 'var(--accent-jade)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Tailored Menus</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Choose from interactive food bars, elegant family-style passing formats, or course-by-course custom degustation plates.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-primary)',
                borderRadius: '8px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--gold-antique)' }}
            >
              <Award size={32} style={{ color: 'var(--gold-antique)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Premium Setup</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Option to supply hand-painted bone china plates, heavy brass silverware, crystal glassware, and custom table linen styling.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-primary)',
                borderRadius: '8px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--accent-jade)' }}
            >
              <ShieldCheck size={32} style={{ color: 'var(--accent-jade)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Hospitality Staff</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  A dedicated team of experienced service captains, head servers, chefs, and bartenders manage every moment flawlessly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Signature Packages List */}
      <section className="section-padding relative overflow-hidden" style={{ borderBottom: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Curated Packages
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
              style={{ fontSize: 'clamp(2.0rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              Signature Catering Formats
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Package 1 */}
            <div 
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-jade)', display: 'block', marginBottom: '0.5rem' }}>Format 01</span>
                <h3 className="font-serif text-2xl font-light mb-4" style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>The Siam Banquet</h3>
                <p className="font-sans text-xs font-light text-muted mb-6" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  A sophisticated, family-style sharing menu. Showcases a selection of aromatic starters, curries, and traditional side dishes meant for sharing and communal celebration.
                </p>
              </div>
              <span className="font-serif text-lg" style={{ color: 'var(--gold-antique)', fontWeight: 500 }}>communal sharing format</span>
            </div>

            {/* Package 2 */}
            <div 
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-jade)', display: 'block', marginBottom: '0.5rem' }}>Format 02</span>
                <h3 className="font-serif text-2xl font-light mb-4" style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Royal Degustation</h3>
                <p className="font-sans text-xs font-light text-muted mb-6" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  An exquisite, individually-plated multi-course tasting progression. Each dish is meticulously constructed on-site and paired course-by-course with selected fine wines.
                </p>
              </div>
              <span className="font-serif text-lg" style={{ color: 'var(--gold-antique)', fontWeight: 500 }}>plated tasting menu</span>
            </div>

            {/* Package 3 */}
            <div 
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-jade)', display: 'block', marginBottom: '0.5rem' }}>Format 03</span>
                <h3 className="font-serif text-2xl font-light mb-4" style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Heritage Canapés</h3>
                <p className="font-sans text-xs font-light text-muted mb-6" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  A refined selection of passing gourmet finger-foods and hors d'oeuvres. Paired with custom lemongrass-infused cocktails and craft premium mocktails.
                </p>
              </div>
              <span className="font-serif text-lg" style={{ color: 'var(--gold-antique)', fontWeight: 500 }}>interactive cocktail service</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inquiry CTA Banner */}
      <section className="reservation-banner-section" style={{ padding: '6rem 0' }}>
        <div className="reservation-banner-container">
          <span 
            className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
          >
            Indulge Anywhere
          </span>
          <h2 className="reservation-banner-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#FFFFFF', marginBottom: '1rem' }}>
            Plan Your Catering Experience
          </h2>
          <p className="reservation-banner-desc" style={{ maxWidth: '36rem', margin: '0 auto 2.5rem auto', color: 'var(--gold-light)', opacity: 0.9 }}>
            Connect with our culinary consultants to design a menu progression and guest experience tailored to your specific venue requirements.
          </p>
          <button 
            onClick={() => onOpenReservation('reservation')}
            className="hero-cta-btn-gold"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            START PLANNING
          </button>
        </div>
      </section>

    </div>
  );
}
