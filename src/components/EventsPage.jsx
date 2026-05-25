import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles, Clock, GlassWater } from 'lucide-react';
import eventsHeroImg from '../assets/events_hero.png';
import welcomeInteriorImg from '../assets/welcome_interior.png';

export default function EventsPage({ onOpenReservation }) {
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
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
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
            left: '10%',
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
              Private Celebrations
            </span>
            <h1 
              className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)', marginBottom: '1.5rem' }}
            >
              Elevated Dining & Events
            </h1>
            <p 
              className="font-sans text-base md:text-lg font-light text-muted leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 300, lineHeight: '1.8' }}
            >
              Whether hosting an intimate salon gather, a corporate dinner, or a grand wedding celebration, Maha Thai weaves gastronomy and heritage into a truly timeless memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Spaces Section */}
      <section className="section-padding relative overflow-hidden" style={{ borderBottom: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--gold-antique)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Our Spaces
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
              style={{ fontSize: 'clamp(2.0rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              Designed for Extraordinary Occasions
            </h2>
          </div>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6rem'
            }}
          >
            {/* Space 1: The Royal Room */}
            <div className="responsive-grid-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                style={{ position: 'relative' }}
                className="lg-col-span-6"
              >
                <div className="welcome-img-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
                  <div className="welcome-img-border-frame" style={{ borderColor: 'var(--gold-antique)' }} />
                  <img 
                    src={eventsHeroImg} 
                    alt="The Royal Room Private Dining" 
                    className="welcome-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="lg-col-span-6"
                style={{ textAlign: 'left' }}
              >
                <span 
                  className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-2"
                  style={{ color: 'var(--accent-jade)', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                >
                  Indoor Luxury
                </span>
                <h3 
                  className="font-serif text-3xl font-light mb-4"
                  style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '2rem' }}
                >
                  The Royal Room
                </h3>
                <p 
                  className="font-sans text-base font-light text-muted mb-6"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7', marginBottom: '1.5rem' }}
                >
                  Draped in hand-woven Thai silk paneling and accented with authentic teak wood carvings, The Royal Room provides absolute seclusion. Designed for corporate keynotes, high-profile summits, or celebratory family dinners, this room encapsulates the grandeur of royal Thai heritage.
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} style={{ color: 'var(--gold-antique)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>Capacity: 35 Guests</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} style={{ color: 'var(--gold-antique)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>Private Bar & Staff</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Space 2: The Lotus Garden */}
            <div className="responsive-grid-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="lg-col-span-6"
                style={{ textAlign: 'left' }}
              >
                <span 
                  className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-2"
                  style={{ color: 'var(--accent-jade)', fontSize: '0.75rem', letterSpacing: '0.2em' }}
                >
                  Al Fresco Sanctuary
                </span>
                <h3 
                  className="font-serif text-3xl font-light mb-4"
                  style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '2rem' }}
                >
                  The Lotus Garden
                </h3>
                <p 
                  className="font-sans text-base font-light text-muted mb-6"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7', marginBottom: '1.5rem' }}
                >
                  An enclosed, temperature-controlled glasshouse overlooking our lush outdoor sanctuary and tranquil Koi pond. Illuminated by glowing handcrafted hanging lanterns and framed by tropical palm foliage, it offers a magical, airy backdrop for cocktail receptions, product launches, or wedding gatherings.
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} style={{ color: 'var(--gold-antique)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>Capacity: 50 Guests</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GlassWater size={16} style={{ color: 'var(--gold-antique)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>Outdoor Koi Pond View</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                style={{ position: 'relative' }}
                className="lg-col-span-6 mobile-order-first"
              >
                <div className="welcome-img-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
                  <div className="welcome-img-border-frame" style={{ borderColor: 'var(--accent-jade)' }} />
                  <img 
                    src={welcomeInteriorImg} 
                    alt="The Lotus Garden Room" 
                    className="welcome-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bespoke Offerings Grid */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Tailored Luxury
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
              style={{ fontSize: 'clamp(2.0rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              The Maha Signature Service
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Service 1 */}
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
              <Calendar size={32} style={{ color: 'var(--gold-antique)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Personalized Planning</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Our dedicated event curators organize every details, from structural seating blueprints to custom menus, lighting states, and scheduling flow.
                </p>
              </div>
            </motion.div>

            {/* Service 2 */}
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
              <Sparkles size={32} style={{ color: 'var(--accent-jade)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Curated Menus</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Collaborate directly with Chef Thanachai to craft bespoke multicourse dinners, interactive live cooking counters, or premium passing appetizers.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
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
              <Clock size={32} style={{ color: 'var(--gold-antique)', marginBottom: '1.5rem' }} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Sensory Excellence</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Complete soundscapes, fine crystal stemware, custom floral arrays, and course-by-course pairings by our head sommelier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Inquiry CTA Banner */}
      <section className="reservation-banner-section" style={{ padding: '6rem 0' }}>
        <div className="reservation-banner-container">
          <span 
            className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
          >
            Create Memories
          </span>
          <h2 className="reservation-banner-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#FFFFFF', marginBottom: '1rem' }}>
            Host Your Event with Maha
          </h2>
          <p className="reservation-banner-desc" style={{ maxWidth: '36rem', margin: '0 auto 2.5rem auto', color: 'var(--gold-light)', opacity: 0.9 }}>
            Let our hospitality managers curate a tailored proposal for your next private affair. Reach out to schedule a walk-through or reserve your dates.
          </p>
          <button 
            onClick={() => onOpenReservation('reservation')}
            className="hero-cta-btn-gold"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            INQUIRE NOW
          </button>
        </div>
      </section>

    </div>
  );
}
