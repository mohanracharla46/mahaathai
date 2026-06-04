import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, SlidersHorizontal, X, ChevronDown, Search } from 'lucide-react';
import { menuData } from './MenuSection';

const ALL_CATEGORIES = ['Lunch', 'Dinner', 'Vegetarian'];

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $15',  min: 0, max: 15 },
  { label: '$15 – $25',  min: 15, max: 25 },
  { label: '$25 – $40',  min: 25, max: 40 },
  { label: 'Above $40',  min: 40, max: Infinity }
];

const SORT_OPTIONS = [
  { label: 'Featured',          value: 'default' },
  { label: 'Price: Low → High', value: 'price_asc' },
  { label: 'Price: High → Low', value: 'price_desc' },
  { label: 'Top Rated',         value: 'rating_desc' }
];

const CATEGORY_META = {
  'Lunch':       { emoji: '☀️', color: '#BA9B5F' },
  'Dinner':      { emoji: '🍽️', color: '#0B363D' },
  'Vegetarian':  { emoji: '🌿', color: '#6B9E3A' }
};

export default function MenuPage({ onOpenReservation, cart = {}, addToCart, removeFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Dinner');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy]                         = useState('default');
  const [isSortOpen, setIsSortOpen]                 = useState(false);
  const [filtersVisible, setFiltersVisible]          = useState(true);
  const [searchQuery, setSearchQuery]               = useState('');

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };

  // ── Source items from selected category ─────────────────────────────────────
  const categoryItems = useMemo(() => menuData[selectedCategory] || [], [selectedCategory]);

  // ── Search & Price filter ───────────────────────────────────────────────────
  const priceFiltered = useMemo(() => {
    let result = categoryItems;

    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    // Price filter
    const { min, max } = PRICE_RANGES[selectedPriceRange];
    return result.filter(item => item.price >= min && item.price < max);
  }, [categoryItems, searchQuery, selectedPriceRange]);

  // ── Sort ─────────────────────────────────────────────────────────────────────
  const displayedItems = useMemo(() => {
    const copy = [...priceFiltered];
    if (sortBy === 'price_asc')   copy.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc')  copy.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating_desc') copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return copy;
  }, [priceFiltered, sortBy]);

  const hasActiveFilters = selectedPriceRange !== 0 || sortBy !== 'default' || searchQuery.trim() !== '';
  const currentSort      = SORT_OPTIONS.find(o => o.value === sortBy);
  const meta             = CATEGORY_META[selectedCategory];

  function clearFilters() {
    setSelectedPriceRange(0);
    setSortBy('default');
    setSearchQuery('');
  }

  return (
    <div style={{ backgroundColor: 'var(--canvas-primary)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
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
          background: 'linear-gradient(180deg,rgba(11,54,61,0.92) 0%,rgba(11,54,61,0.7) 50%,rgba(11,54,61,0.96) 100%)',
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

          {/* Category pills inside hero */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {ALL_CATEGORIES.map(cat => {
              const m = CATEGORY_META[cat];
              const active = selectedCategory === cat;
              return (
                <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.65rem 1.5rem', borderRadius: '9999px',
                  border: `1.5px solid ${active ? 'var(--gold-antique)' : 'rgba(255,255,255,0.25)'}`,
                  backgroundColor: active ? 'var(--gold-antique)' : 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  color: active ? '#0B363D' : 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  fontWeight: active ? 700 : 500, letterSpacing: '0.1em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: active ? '0 4px 20px rgba(186,155,95,0.4)' : 'none'
                }}>
                  <span>{m.emoji}</span> {cat}
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── Menu Section ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--canvas-primary)' }}>
        <div className="container">

          {/* Active category heading */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '1.6rem' }}>{meta.emoji}</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.4rem)',
                fontWeight: 300, color: 'var(--text-dark)', margin: 0
              }}>{selectedCategory} Menu</h2>
            </div>
            <div style={{ width: '60px', height: '2px', background: `linear-gradient(90deg,${meta.color},transparent)`, marginLeft: '2.4rem' }} />
          </motion.div>

          {/* ── Filter Bar ────────────────────────────────────────────────────── */}
          <div style={{
            backgroundColor: 'var(--canvas-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '12px', padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem'
          }}>
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexGrow: 1, flexWrap: 'wrap' }}>
                <button
                  onClick={() => setFiltersVisible(v => !v)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: 'none', border: '1px solid var(--border-light)',
                    borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--text-dark)', transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-antique)'; e.currentTarget.style.color = 'var(--gold-antique)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-dark)'; }}
                >
                  <SlidersHorizontal size={13} />
                  {filtersVisible ? 'Hide Filters' : 'Filters'}
                </button>

                {/* Search Bar */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                  <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem 0.5rem 2.2rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--canvas-primary)',
                      color: 'var(--text-dark)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-antique)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                  />
                  <Search size={14} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')} 
                      style={{
                        position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)',
                        background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                        padding: '2px', display: 'flex', alignItems: 'center'
                      }}
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{displayedItems.length}</strong> dish{displayedItems.length !== 1 ? 'es' : ''}
                </span>

                {/* Sort dropdown */}
                <div style={{ position: 'relative' }}>
                  <button onClick={() => setIsSortOpen(v => !v)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    background: 'var(--canvas-primary)', border: '1px solid var(--border-light)',
                    borderRadius: '6px', padding: '0.5rem 0.9rem', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                    fontWeight: 600, color: 'var(--text-dark)', whiteSpace: 'nowrap',
                    transition: 'border-color 0.3s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold-antique)'}
                    onMouseLeave={e => { if (!isSortOpen) e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                  >
                    Sort: {currentSort.label}
                    <ChevronDown size={11} style={{ transform: isSortOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                  </button>
                  <AnimatePresence>
                    {isSortOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 50,
                          backgroundColor: 'var(--canvas-primary)',
                          border: '1px solid var(--border-light)', borderRadius: '8px',
                          minWidth: '200px', boxShadow: '0 8px 32px rgba(11,54,61,0.12)', overflow: 'hidden'
                        }}
                      >
                        {SORT_OPTIONS.map(opt => (
                          <button key={opt.value} onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }} style={{
                            display: 'block', width: '100%', textAlign: 'left',
                            padding: '0.7rem 1rem', border: 'none', cursor: 'pointer',
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
                        background: 'rgba(186,155,95,0.08)', border: '1px solid var(--gold-antique)',
                        borderRadius: '6px', padding: '0.5rem 0.9rem', cursor: 'pointer',
                        fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                        fontWeight: 600, color: 'var(--gold-antique)',
                        letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-antique)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(186,155,95,0.08)'; e.currentTarget.style.color = 'var(--gold-antique)'; }}
                    >
                      <X size={11} /> Clear
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Price filter (collapsible) */}
            <AnimatePresence>
              {filtersVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', marginTop: '1.25rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'var(--gold-antique)', marginBottom: '0.85rem'
                    }}>Price Range</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {PRICE_RANGES.map((range, i) => {
                        const active = selectedPriceRange === i;
                        return (
                          <button key={range.label} onClick={() => setSelectedPriceRange(i)} style={{
                            padding: '0.4rem 1rem', borderRadius: '9999px',
                            border: `1px solid ${active ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                            backgroundColor: active ? 'var(--gold-antique)' : 'var(--canvas-primary)',
                            color: active ? '#fff' : 'var(--text-dark)',
                            fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                            fontWeight: active ? 700 : 400, cursor: 'pointer',
                            transition: 'all 0.25s', whiteSpace: 'nowrap'
                          }}>
                            {range.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Item Grid ─────────────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {displayedItems.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '5rem 2rem' }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  No dishes match this filter.
                </p>
                <button onClick={clearFilters} className="card-btn">Clear Filters</button>
              </motion.div>
            ) : (
              <motion.div
                key={`${selectedCategory}-${selectedPriceRange}-${sortBy}`}
                variants={containerVariants} initial="hidden" animate="visible"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '2rem' }}
              >
                {displayedItems.map(item => (
                  <motion.div key={item.id} variants={itemVariants} whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '8px', marginBottom: '1.5rem' }}>
                      <img src={item.image} alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      {/* Rating */}
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

      {/* ── Pickup & Delivery CTA ─────────────────────────────────────────────── */}
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
