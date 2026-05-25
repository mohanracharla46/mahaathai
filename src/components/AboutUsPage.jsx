import React from 'react';
import { motion } from 'framer-motion';
import chefStoryImg from '../assets/chef_story.png';

export default function AboutUsPage() {
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
    hidden: { opacity: 0, scale: 0.98, x: -30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="about-page-wrapper" style={{ backgroundColor: 'var(--canvas-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Page Hero Banner */}
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
            className="max-w-3xl mx-auto text-center"
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '48rem' }}
          >
            <span 
              className="block font-sans text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.4em', marginBottom: '1.25rem' }}
            >
              Our Legacy
            </span>
            <h1 
              className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)', marginBottom: '1.5rem' }}
            >
              Philosophy & Heritage
            </h1>
            <p 
              className="font-sans text-base md:text-lg font-light text-muted leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 300, lineHeight: '1.8' }}
            >
              Step behind the curtain of Maha Thai. We honor the intricate culinary methodologies of ancient Siam, preserving the culinary disciplines of royal court kitchens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Heritage Narrative Split */}
      <section className="section-padding relative overflow-hidden" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="responsive-grid-12">
            {/* Left Column: Narrative Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg-col-span-7 text-left"
              style={{ textAlign: 'left' }}
            >
              <span 
                className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
              >
                The Royal Lineage
              </span>
              <h2 
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-dark)' }}
              >
                Artistry born from Royal culinary tradition.
              </h2>
              <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p 
                  className="font-sans text-base font-light text-muted"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7' }}
                >
                  In the royal courts of ancient Siam, dining was crafted as an offering of absolute equilibrium. Every dish was prepared to satisfy and balance the five fundamental flavors: salty, sweet, sour, spicy, and bitter. Spices were selected not only for their flavor profiles but for their natural therapeutic value.
                </p>
                <p 
                  className="font-sans text-base font-light text-muted"
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7' }}
                >
                  Our ancestors believed that food had the power to nurture the soul and harmonize the body. Each recipe was guardedly documented, handed down through generations of culinary masters who served the royal palaces. We carry this torch with pride, keeping the ancient flame of traditional Siamese cooking alive.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Editorial Quote Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg-col-span-5"
            >
              <div 
                className="p-8 border-l-4" 
                style={{ 
                  padding: '3rem', 
                  borderLeft: '4px solid var(--gold-antique)',
                  backgroundColor: 'var(--canvas-secondary)',
                  borderRadius: '0 12px 12px 0',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <p 
                  className="font-serif italic text-xl text-dark"
                  style={{ fontSize: '1.4rem', color: 'var(--text-dark)', lineHeight: '1.6', fontWeight: 300 }}
                >
                  "Cooking is a form of active meditation, where every herb must align to create a singular, transformative memory."
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <span 
                    className="font-sans text-xs font-semibold uppercase tracking-widest"
                    style={{ fontSize: '0.75rem', color: 'var(--gold-antique)', letterSpacing: '0.25em' }}
                  >
                    Chef Thanachai
                  </span>
                  <span 
                    className="font-sans text-[10px] text-muted uppercase tracking-wider mt-1"
                    style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginTop: '0.25rem' }}
                  >
                    Master Culinary Officer
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Chef's Culinary Canvas Section */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)' }}>
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
          style={{
            backgroundColor: 'var(--accent-jade)',
            bottom: '10%',
            right: '5%',
            zIndex: 0
          }}
        />

        <div className="container relative z-10" style={{ zIndex: 10 }}>
          <div className="responsive-grid-12" style={{ gap: '5rem' }}>
            {/* Left Column: Premium Granite Mortar Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              className="lg-col-span-5 flex justify-center"
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              <div className="welcome-img-container chef-canvas-card">
                {/* Offset Gold Border Frame */}
                <div className="welcome-img-border-frame" style={{ borderColor: 'var(--gold-antique)' }} />
                
                <img 
                  src={chefStoryImg} 
                  alt="Chef hand crushing ingredients in granite mortar" 
                  className="welcome-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }}
                />
              </div>
            </motion.div>

            {/* Right Column: Narrative Detail */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textVariants}
              className="lg-col-span-7 text-left"
              style={{ textAlign: 'left' }}
            >
              <span 
                className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--gold-antique)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
              >
                Culinary Integrity
              </span>
              
              <h2 
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-dark)' }}
              >
                The Rhythm of the Stone Mortar
              </h2>
              
              <p 
                className="font-sans text-base font-light text-muted mb-6 leading-relaxed"
                style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: '1.7' }}
              >
                Our Master Chef Thanachai firmly believes that electric food processors destroy the soul of Thai paste. High-speed steel blades heat the ingredients, causing delicate volatile oils in lemongrass, lime leaves, and wild galangal to evaporate prematurely.
              </p>
              
              <p 
                className="font-sans text-base font-light text-muted mb-6 leading-relaxed"
                style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: '1.7' }}
              >
                Instead, our paste is created with a heavy granite mortar. The heavy, rhythmic pressure crushes the cell walls of herbs, coaxing out deep aromas and bonding natural juices into a thick, emerald paste. It is a slow, physically demanding task—but it is the only way to achieve the intense, complex depth that defines our signature curries.
              </p>
              
              <p 
                className="font-sans text-base font-light text-muted leading-relaxed"
                style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.7' }}
              >
                From hand-pressed coconut milk to locally sourced bird's eye chilies and holy basil, we reject shortcuts. Every ingredient is treated as a sacred note in a larger, symphonic culinary masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="section-padding relative overflow-hidden" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span 
              className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent-jade)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
            >
              Our Foundations
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
              style={{ fontSize: 'clamp(2.0rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              The Pillars of Maha Thai
            </h2>
          </div>

          <div 
            className="values-horizontal-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Value 1: Purity */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '8px',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--gold-antique)' }}
            >
              <span className="font-serif text-4xl" style={{ color: 'var(--gold-antique)', display: 'block', marginBottom: '1.5rem', fontWeight: 300 }}>01</span>
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Purity</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Strictly organic herbs, fresh hand-pressed coconut milk, and zero artificial enhancers.
                </p>
              </div>
            </motion.div>

            {/* Value 2: Harmony */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '8px',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--accent-jade)' }}
            >
              <span className="font-serif text-4xl" style={{ color: 'var(--accent-jade)', display: 'block', marginBottom: '1.5rem', fontWeight: 300 }}>02</span>
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Harmony</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  A calibrated symphony of sweet, spicy, salty, sour, and bitter elements in every bite.
                </p>
              </div>
            </motion.div>

            {/* Value 3: Artistry */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '8px',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--gold-antique)' }}
            >
              <span className="font-serif text-4xl" style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '1.5rem', fontWeight: 300 }}>03</span>
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Artistry</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Bespoke, visual plated designs mirroring traditional royal palace presentation methods.
                </p>
              </div>
            </motion.div>

            {/* Value 4: Heritage */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--canvas-secondary)',
                borderRadius: '8px',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
              whileHover={{ y: -5, borderColor: 'var(--accent-jade)' }}
            >
              <span className="font-serif text-4xl" style={{ color: 'var(--gold-antique)', display: 'block', marginBottom: '1.5rem', fontWeight: 300 }}>04</span>
              <div>
                <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Heritage</h3>
                <p className="font-sans text-xs font-light text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Recipes preserved across four generations of Siamese culinary guilds and master chefs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
