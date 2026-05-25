import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, Sparkles, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { menuData, signatureDishes } from './MenuSection';

const ALL_CATEGORIES = [
  'Noodle Bar',
  'Curry Kitchen',
  'Rice & Wok',
  'Street Kitchen',
  'From the Sea',
  'Chef\'s Table',
  'Plant-Based',
  'Sweet Endings',
  'Beverages & Sides'
];

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $15',  min: 0, max: 15 },
  { label: '$15 – $25',  min: 15, max: 25 },
  { label: '$25 – $40',  min: 25, max: 40 },
  { label: 'Above $40',  min: 40, max: Infinity }
];

const SORT_OPTIONS = [
  { label: 'Featured',         value: 'default' },
  { label: 'Price: Low → High', value: 'price_asc' },
  { label: 'Price: High → Low', value: 'price_desc' },
  { label: 'Top Rated',        value: 'rating_desc' }
];

export default function MenuPage({ onOpenReservation, cart = {}, addToCart, removeFromCart }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0); // index into PRICE_RANGES
  const [sortBy, setSortBy] = useState('default');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };

  // ── Aggregate all items from selected categories (or everything) ──────────────
  const allItems = useMemo(() => {
    const cats = selectedCategories.length > 0 ? selectedCategories : ALL_CATEGORIES;
    const seen = new Set();
    const result = [];
    cats.forEach(cat => {
      (menuData[cat] || []).forEach(item => {
        if (!seen.has(item.id)) {
          seen.add(item.id);
          result.push({ ...item, category: cat });
        }
      });
    });
    return result;
  }, [selectedCategories]);

  // ── Apply price filter ────────────────────────────────────────────────────────
  const priceFilteredItems = useMemo(() => {
    const { min, max } = PRICE_RANGES[selectedPriceRange];
    return allItems.filter(item => item.price >= min && item.price < max);
  }, [allItems, selectedPriceRange]);

  // ── Apply sort ────────────────────────────────────────────────────────────────
  const displayedItems = useMemo(() => {
    const copy = [...priceFilteredItems];
    if (sortBy === 'price_asc')    copy.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc')   copy.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating_desc')  copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return copy;
  }, [priceFilteredItems, sortBy]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange !== 0 || sortBy !== 'default';

  function toggleCategory(cat) {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  }

  function clearFilters() {
    setSelectedCategories([]);
    setSelectedPriceRange(0);
    setSortBy('default');
  }

  const currentSort = SORT_OPTIONS.find(o => o.value === sortBy);

  return (
    <div style={{ backgroundColor: 'var(--canvas-primary)' }}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', minHeight: '52vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        overflow: 'hidden', backgroundColor: 'var(--text-dark)'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(186,155,95,0.08) 1px, transparent 0)',
          backgroundSize: '30px 30px', zIndex: 1
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(11,54,61,0.9) 0%, rgba(11,54,61,0.7) 50%, rgba(11,54,61,0.95) 100%)',
          zIndex: 2
        }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
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
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <ArrowLeft size={14} /> Back to Home
          </a>
          <span style={{
            display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-antique)', marginBottom: '1.5rem'
          }}>THE COMPLETE COLLECTION</span>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,5vw,4rem)',
            fontWeight: 300, color: 'var(--canvas-primary)', lineHeight: 1.1, marginBottom: '1.5rem'
          }}>Our Full Menu</h1>
          <div style={{
            width: '80px', height: '1px',
            background: 'linear-gradient(90deg,transparent,var(--gold-antique),transparent)',
            margin: '0 auto 1.5rem'
          }} />
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)',
            maxWidth: '500px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300
          }}>
            Explore every dish crafted by our chefs — from traditional Thai classics to modern culinary innovations.
          </p>
        </motion.div>
      </section>

      {/* ── Signature Dishes ─────────────────────────────────────────────── */}
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
              color: 'var(--gold-antique)', marginBottom: '1rem'
            }}>
              <Sparkles size={14} /> CHEF'S SIGNATURES
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.5rem)',
              fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.5rem'
            }}>Not To Be Missed</h2>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '2rem' }}
          >
            {signatureDishes.map(dish => (
              <motion.div key={dish.id} variants={itemVariants} whileHover={{ y: -6 }}
                style={{
                  backgroundColor: 'var(--canvas-primary)', borderRadius: '12px',
                  overflow: 'hidden', border: '1px solid var(--border-light)',
                  transition: 'box-shadow 0.4s ease', display: 'flex', flexDirection: 'column'
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(11,54,61,0.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={dish.image} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: '0.75rem', right: '0.75rem',
                    display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'flex-end'
                  }}>
                    {dish.tags.map(tag => (
                      <span key={tag} style={{
                        backgroundColor: 'rgba(11,54,61,0.85)', color: 'var(--gold-antique)',
                        padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.6rem',
                        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
                        backdropFilter: 'blur(8px)'
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-dark)' }}>{dish.name}</h3>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--gold-antique)' }}>${dish.price}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300, flexGrow: 1 }}>{dish.description}</p>
                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                    {(() => {
                      const qty = cart[dish.id]?.quantity || 0;
                      if (qty > 0) return (
                        <div className="qty-controls" style={{ border: '1px solid var(--gold-antique)', borderRadius: '9999px', padding: '0.25rem 0.6rem' }}>
                          <button type="button" onClick={e => { e.stopPropagation(); removeFromCart(dish.id); }} className="qty-btn" style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                          <span className="qty-val" style={{ margin: '0 0.75rem', fontWeight: 700 }}>{qty}</span>
                          <button type="button" onClick={e => { e.stopPropagation(); addToCart(dish); }} className="qty-btn" style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
                        </div>
                      );
                      return <button type="button" onClick={e => { e.stopPropagation(); addToCart(dish); }} className="card-btn">+ Add to Cart</button>;
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full Menu with Filters ────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--canvas-primary)' }}>
        <div className="container">

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.7rem',
              fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-antique)', marginBottom: '1rem'
            }}>BROWSE THE COLLECTION</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.5rem)',
              fontWeight: 300, color: 'var(--text-dark)'
            }}>Full Menu</h2>
          </div>

          {/* ── Filter Bar ────────────────────────────────────────────────── */}
          <div style={{
            backgroundColor: 'var(--canvas-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {/* Top row: toggle + sort */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: filtersVisible ? '1.5rem' : 0 }}>
              <button
                onClick={() => setFiltersVisible(v => !v)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'none', border: '1px solid var(--border-light)',
                  borderRadius: '6px', padding: '0.55rem 1rem', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                  fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-dark)', transition: 'all 0.3s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-antique)'; e.currentTarget.style.color = 'var(--gold-antique)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-dark)'; }}
              >
                <SlidersHorizontal size={14} />
                {filtersVisible ? 'Hide Filters' : 'Show Filters'}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Result count */}
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  color: 'var(--text-muted)', fontWeight: 300
                }}>
                  <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{displayedItems.length}</strong> dish{displayedItems.length !== 1 ? 'es' : ''} found
                </span>

                {/* Sort dropdown */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setIsSortOpen(v => !v)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'var(--canvas-primary)', border: '1px solid var(--border-light)',
                      borderRadius: '6px', padding: '0.55rem 1rem', cursor: 'pointer',
                      fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                      fontWeight: 600, color: 'var(--text-dark)', whiteSpace: 'nowrap',
                      transition: 'border-color 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold-antique)'}
                    onMouseLeave={e => !isSortOpen && (e.currentTarget.style.borderColor = 'var(--border-light)')}
                  >
                    Sort: {currentSort.label}
                    <ChevronDown size={12} style={{ transform: isSortOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                  </button>
                  <AnimatePresence>
                    {isSortOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 50,
                          backgroundColor: 'var(--canvas-primary)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '8px', minWidth: '200px',
                          boxShadow: '0 8px 32px rgba(11,54,61,0.12)',
                          overflow: 'hidden'
                        }}
                      >
                        {SORT_OPTIONS.map(opt => (
                          <button key={opt.value}
                            onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                            style={{
                              display: 'block', width: '100%', textAlign: 'left',
                              padding: '0.75rem 1rem', border: 'none', cursor: 'pointer',
                              fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                              fontWeight: sortBy === opt.value ? 700 : 400,
                              color: sortBy === opt.value ? 'var(--gold-antique)' : 'var(--text-dark)',
                              backgroundColor: sortBy === opt.value ? 'rgba(186,155,95,0.06)' : 'transparent',
                              transition: 'background 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(186,155,95,0.08)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = sortBy === opt.value ? 'rgba(186,155,95,0.06)' : 'transparent'}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Clear filters */}
                <AnimatePresence>
                  {hasActiveFilters && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.2 }}
                      onClick={clearFilters}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        background: 'rgba(186,155,95,0.1)', border: '1px solid var(--gold-antique)',
                        borderRadius: '6px', padding: '0.55rem 1rem', cursor: 'pointer',
                        fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                        fontWeight: 600, color: 'var(--gold-antique)', letterSpacing: '0.08em',
                        textTransform: 'uppercase', transition: 'all 0.3s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-antique)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(186,155,95,0.1)'; e.currentTarget.style.color = 'var(--gold-antique)'; }}
                    >
                      <X size={12} /> Clear All
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Collapsible filter panels */}
            <AnimatePresence>
              {filtersVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '0.5rem' }}>

                    {/* Category filter */}
                    <div style={{ flex: '1 1 340px' }}>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: 'var(--gold-antique)', marginBottom: '0.85rem'
                      }}>Category</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {ALL_CATEGORIES.map(cat => {
                          const active = selectedCategories.includes(cat);
                          return (
                            <button key={cat}
                              onClick={() => toggleCategory(cat)}
                              style={{
                                padding: '0.45rem 1rem',
                                borderRadius: '9999px',
                                border: `1px solid ${active ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                                backgroundColor: active ? 'var(--gold-antique)' : 'var(--canvas-primary)',
                                color: active ? '#fff' : 'var(--text-dark)',
                                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                                fontWeight: active ? 700 : 400,
                                cursor: 'pointer', transition: 'all 0.25s',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                      {selectedCategories.length > 0 && (
                        <button
                          onClick={() => setSelectedCategories([])}
                          style={{
                            marginTop: '0.6rem', background: 'none', border: 'none',
                            fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                            color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline',
                            textUnderlineOffset: '3px'
                          }}
                        >
                          Clear categories
                        </button>
                      )}
                    </div>

                    {/* Price filter */}
                    <div style={{ flex: '0 1 240px' }}>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: 'var(--gold-antique)', marginBottom: '0.85rem'
                      }}>Price Range</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {PRICE_RANGES.map((range, i) => {
                          const active = selectedPriceRange === i;
                          return (
                            <button key={range.label}
                              onClick={() => setSelectedPriceRange(i)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                padding: '0.45rem 0.75rem',
                                borderRadius: '6px',
                                border: `1px solid ${active ? 'var(--gold-antique)' : 'transparent'}`,
                                backgroundColor: active ? 'rgba(186,155,95,0.1)' : 'transparent',
                                color: active ? 'var(--gold-antique)' : 'var(--text-muted)',
                                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                                fontWeight: active ? 700 : 400,
                                cursor: 'pointer', transition: 'all 0.25s', textAlign: 'left'
                              }}
                              onMouseEnter={e => !active && (e.currentTarget.style.backgroundColor = 'rgba(186,155,95,0.05)')}
                              onMouseLeave={e => !active && (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                              <span style={{
                                width: '10px', height: '10px', borderRadius: '50%',
                                border: `2px solid ${active ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                                backgroundColor: active ? 'var(--gold-antique)' : 'transparent',
                                transition: 'all 0.25s', flexShrink: 0
                              }} />
                              {range.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Item Grid ─────────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {displayedItems.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '5rem 2rem' }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  No dishes match your selection.
                </p>
                <button onClick={clearFilters} className="card-btn">Clear Filters</button>
              </motion.div>
            ) : (
              <motion.div
                key={`${selectedCategories.join(',')}-${selectedPriceRange}-${sortBy}`}
                variants={containerVariants} initial="hidden" animate="visible"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: '2rem' }}
              >
                {displayedItems.map(item => (
                  <motion.div key={item.id} variants={itemVariants} whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Image */}
                    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '8px', marginBottom: '1.5rem' }}>
                      <img src={item.image} alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      {/* Category badge */}
                      {item.category && (
                        <span style={{
                          position: 'absolute', top: '0.75rem', left: '0.75rem',
                          backgroundColor: 'rgba(11,54,61,0.82)',
                          color: 'var(--gold-antique)', backdropFilter: 'blur(8px)',
                          padding: '0.2rem 0.55rem', borderRadius: '4px',
                          fontSize: '0.58rem', letterSpacing: '0.1em',
                          textTransform: 'uppercase', fontWeight: 700
                        }}>
                          {item.category}
                        </span>
                      )}
                      {/* Rating badge */}
                      <div style={{
                        position: 'absolute', bottom: '0.75rem', left: '0.75rem',
                        display: 'flex', alignItems: 'center', gap: '0.25rem',
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        padding: '0.25rem 0.5rem', borderRadius: '4px',
                        boxShadow: '0 2px 8px rgba(11,54,61,0.05)'
                      }}>
                        <Star size={12} fill="var(--gold-antique)" color="var(--gold-antique)" />
                        <span style={{ fontSize: '10px', color: 'var(--text-dark)', fontWeight: 'bold' }}>
                          {(item.rating || 0).toFixed(1)}
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
                          const qty = cart[item.id]?.quantity || 0;
                          if (qty > 0) return (
                            <div className="qty-controls" style={{ border: '1px solid var(--gold-antique)', borderRadius: '9999px', padding: '0.25rem 0.6rem' }}>
                              <button type="button" onClick={e => { e.stopPropagation(); removeFromCart(item.id); }} className="qty-btn" style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                              <span className="qty-val" style={{ margin: '0 0.75rem', fontWeight: 700 }}>{qty}</span>
                              <button type="button" onClick={e => { e.stopPropagation(); addToCart(item); }} className="qty-btn" style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
                            </div>
                          );
                          return <button type="button" onClick={e => { e.stopPropagation(); addToCart(item); }} className="card-btn">+ Add to Cart</button>;
                        })()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Pickup & Delivery CTA ─────────────────────────────────────────── */}
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
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <span style={{
            display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-antique)', marginBottom: '1rem'
          }}>MAHA AT HOME</span>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
            fontWeight: 300, color: 'var(--canvas-primary)', marginBottom: '1.5rem'
          }}>Order Pickup & Delivery</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)',
            maxWidth: '450px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 300
          }}>
            Savor our premium traditional and signature culinary creations at your convenience.
            Prompt insulated home deliveries and contact-free curbside valet pickups are available.
          </p>
          <button
            onClick={() => onOpenReservation && onOpenReservation('order')}
            style={{
              padding: '1rem 2.5rem', border: '1px solid var(--gold-antique)',
              backgroundColor: 'var(--gold-antique)', color: 'var(--text-dark)',
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: '2px',
              cursor: 'pointer', transition: 'all 0.4s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--gold-antique)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold-antique)'; e.currentTarget.style.color = 'var(--text-dark)'; }}
          >
            ORDER ONLINE NOW
          </button>
        </motion.div>
      </section>
    </div>
  );
}
