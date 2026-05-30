import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, Sun, Clock, Leaf } from 'lucide-react';
import { menuData } from './MenuSection';
import lunchImg from '../assets/lunchimg.png';

export default function LunchMenuPage({ onOpenReservation, cart = {}, addToCart, removeFromCart }) {
  const items = menuData['Lunch'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={{ backgroundColor: 'var(--canvas-primary)', paddingTop: '120px' }}>
      {/* Hero Banner */}
      <section
        className="menu-page-hero"
        style={{
          position: 'relative',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(rgba(11, 54, 61, 0.85), rgba(11, 54, 61, 0.88)), url(${lunchImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(186,155,95,0.08) 1px, transparent 0)',
          backgroundSize: '28px 28px', zIndex: 1
        }} />

        {/* Warm radial glow */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(186,155,95,0.12) 0%, transparent 70%)',
          zIndex: 1
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 3, padding: '6rem 2rem 4rem' }}
        >
          <a href="#home" style={{
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
            <Sun size={18} style={{ color: 'var(--gold-antique)' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-antique)'
            }}>
              MIDDAY OFFERINGS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300,
            color: 'var(--canvas-primary)', lineHeight: 1.1, marginBottom: '1.5rem'
          }}>
            Lunch Menu
          </h1>

          <div style={{
            width: '80px', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold-antique), transparent)',
            margin: '0 auto 1.5rem'
          }} />

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)', maxWidth: '520px',
            margin: '0 auto', lineHeight: 1.8, fontWeight: 300
          }}>
            Light, vibrant midday plates designed for a refined afternoon indulgence —
            each crafted with seasonal ingredients and served with artful precision.
          </p>
        </motion.div>
      </section>

      {/* Info Badges */}
      <section style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--canvas-secondary)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container menu-page-badges" style={{
          display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
        }}>
          {[
            { icon: <Clock size={18} />, label: 'Served 11:30 AM – 3:00 PM' },
            { icon: <Sun size={18} />, label: 'Fresh Seasonal Plates' },
            { icon: <Leaf size={18} />, label: 'Locally Sourced Ingredients' }
          ].map((badge, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 1.5rem', borderRadius: '8px',
                backgroundColor: 'var(--canvas-primary)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                fontWeight: 500, letterSpacing: '0.05em'
              }}
            >
              <span style={{ color: 'var(--gold-antique)' }}>{badge.icon}</span>
              {badge.label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Menu Grid */}
      <section className="menu-page-section" style={{ padding: '5rem 2rem', backgroundColor: 'var(--canvas-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300,
              color: 'var(--text-dark)', marginBottom: '0.5rem'
            }}>
              Complete Lunch Selection
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'var(--text-muted)', fontWeight: 300
            }}>
              {items.length} dishes available
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="menu-page-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem'
              }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{
                    overflow: 'hidden', position: 'relative', width: '100%',
                    aspectRatio: '4/3', borderRadius: '8px', marginBottom: '1.5rem'
                  }}>
                    <img src={item.image} alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute', bottom: '0.75rem', left: '0.75rem',
                      display: 'flex', alignItems: 'center', gap: '0.25rem',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      padding: '0.25rem 0.5rem', borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(11,54,61,0.05)'
                    }}>
                      <Star size={12} fill="var(--gold-antique)" color="var(--gold-antique)" />
                      <span style={{ fontSize: '10px', color: 'var(--text-dark)', fontWeight: 'bold' }}>
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div className="menu-leader-row">
                      <h3 className="menu-leader-title">{item.name}</h3>
                      <div className="menu-leader-dots" />
                      <span className="menu-leader-price">${item.price}</span>
                    </div>
                    <p className="menu-card-desc" style={{ flexGrow: 1 }}>{item.description}</p>

                    <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                      {(() => {
                        const cartItem = cart[item.id];
                        const quantity = cartItem ? cartItem.quantity : 0;
                        if (quantity > 0) {
                          return (
                            <div className="qty-controls" style={{ border: '1px solid var(--gold-antique)', borderRadius: '9999px', padding: '0.25rem 0.6rem' }}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFromCart(item.id);
                                }}
                                className="qty-btn"
                                style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}
                              >
                                -
                              </button>
                              <span className="qty-val" style={{ margin: '0 0.75rem', fontWeight: 700 }}>{quantity}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(item);
                                }}
                                className="qty-btn"
                                style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}
                              >
                                +
                              </button>
                            </div>
                          );
                        }
                        return (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item);
                            }}
                            className="card-btn"
                          >
                            + Add to Cart
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Cross-navigation to other menus */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'var(--canvas-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{
            display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.7rem',
            fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-antique)', marginBottom: '1rem'
          }}>
            EXPLORE MORE
          </span>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300,
            color: 'var(--text-dark)', marginBottom: '2rem'
          }}>
            Browse Our Other Menus
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Dinner Menu', href: '#/menu/dinner' },
              { name: 'Vegetarian Menu', href: '#/menu/vegetarian' }
            ].map((link) => (
              <a key={link.name} href={link.href} style={{
                padding: '0.85rem 2rem',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--canvas-primary)',
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                fontWeight: 600, letterSpacing: '0.15em',
                textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '4px', transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-antique)';
                  e.currentTarget.style.color = 'var(--gold-antique)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = 'var(--text-dark)';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section style={{
        padding: '5rem 2rem', textAlign: 'center',
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
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300,
            color: 'var(--canvas-primary)', marginBottom: '1.5rem'
          }}>
            Join Us for Lunch
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)', maxWidth: '450px',
            margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 300
          }}>
            Secure your midday table and experience the art of Thai cuisine at its finest.
          </p>
          <button
            onClick={() => onOpenReservation && onOpenReservation('reservation')}
            style={{
              padding: '1rem 2.5rem',
              border: '1px solid var(--gold-antique)',
              backgroundColor: 'var(--gold-antique)',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', borderRadius: '2px',
              cursor: 'pointer', transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--gold-antique)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-antique)';
              e.currentTarget.style.color = 'var(--text-dark)';
            }}
          >
            RESERVE A TABLE
          </button>
        </motion.div>
      </section>
    </div>
  );
}
