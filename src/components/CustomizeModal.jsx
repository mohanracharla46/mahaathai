import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ShoppingBag, Plus } from 'lucide-react';
import { menuData } from './MenuSection';

export default function CustomizeModal({ item, cart = {}, onClose, onConfirm, onAddSuggestion, onRemoveSuggestion }) {
  const [spice, setSpice] = useState('Medium');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [requirements, setRequirements] = useState('');
  const [suggestedQuantities, setSuggestedQuantities] = useState({});

  const spiceLevels = ['Mild', 'Medium', 'Spicy', 'More Spicy'];

  const addonOptions = [
    { name: 'Extra Vegetables', price: 1.50 },
    { name: 'Extra Tofu', price: 2.00 },
    { name: 'Extra Chicken', price: 2.50 },
    { name: 'Extra Beef', price: 3.00 },
    { name: 'Extra Shrimp', price: 3.50 },
    { name: 'Fried Egg', price: 1.50 },
    { name: 'Jasmine Rice', price: 2.00 }
  ];

  const handleToggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.name === addon.name);
      if (exists) {
        return prev.filter((a) => a.name !== addon.name);
      }
      return [...prev, addon];
    });
  };

  const getAddonsTotal = () => {
    return selectedAddons.reduce((sum, a) => sum + a.price, 0);
  };

  const handleAddSuggested = (sug) => {
    setSuggestedQuantities(prev => ({
      ...prev,
      [sug.id]: (prev[sug.id] || 0) + 1
    }));
  };

  const handleRemoveSuggested = (sugId) => {
    setSuggestedQuantities(prev => {
      const next = { ...prev };
      if (next[sugId] <= 1) {
        delete next[sugId];
      } else {
        next[sugId] -= 1;
      }
      return next;
    });
  };

  // Extract suggestions dynamically — must be defined BEFORE getSuggestionsTotal
  const getSuggestions = () => {
    const list = [];
    // 1. Appetizer (e.g., Spring Rolls)
    const app = menuData['Appetizers']?.find(i => i.name.toLowerCase().includes('spring roll') || i.name.toLowerCase().includes('dumpling')) || menuData['Appetizers']?.[0];
    if (app && app.id !== item.id) list.push(app);

    // 2. Dessert (e.g., Mango Sticky Rice)
    const dessert = menuData['Sweet Endings']?.find(i => i.name.toLowerCase().includes('mango') || i.name.toLowerCase().includes('banana')) || menuData['Sweet Endings']?.[0];
    if (dessert && dessert.id !== item.id) list.push(dessert);

    // 3. Drink
    const drink = menuData['Beverages & Sides']?.find(i => i.name.toLowerCase().includes('tea') || i.name.toLowerCase().includes('soda') || i.name.toLowerCase().includes('water')) || menuData['Beverages & Sides']?.[0];
    if (drink && drink.id !== item.id) list.push(drink);

    return list.slice(0, 3);
  };

  const suggestions = getSuggestions();

  const getSuggestionsTotal = () => {
    return suggestions.reduce((sum, sug) => {
      const qty = suggestedQuantities[sug.id] || 0;
      return sum + (sug.price * qty);
    }, 0);
  };

  const currentPrice = Number((item.price + getAddonsTotal() + getSuggestionsTotal()).toFixed(2));

  return (
    <div 
      className="luxury-modal-overlay" 
      style={{ zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(11, 54, 61, 0.4)' }}
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="luxury-modal-content"
        style={{
          width: '90%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          border: '1px solid var(--gold-antique)',
          padding: '2.5rem 2.25rem',
          backgroundColor: 'var(--canvas-primary)',
          boxShadow: 'var(--shadow-premium)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="luxury-modal-close"
          style={{ top: '1.5rem', right: '1.5rem', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'left', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          {item.image && (
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-light)' }}
            />
          )}
          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-antique)', fontWeight: 700 }}>
              Customize Item
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.1rem' }}>
              {item.name}
            </h3>
            <span style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 600, display: 'block', marginTop: '0.25rem' }}>
              ${item.price}
            </span>
          </div>
        </div>

        {/* Spice Level */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
            Spice Level
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            {spiceLevels.map((lvl) => {
              const active = spice === lvl;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSpice(lvl)}
                  style={{
                    padding: '0.6rem 0.5rem',
                    borderRadius: '6px',
                    border: `1.5px solid ${active ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                    backgroundColor: active ? 'var(--gold-light)' : 'transparent',
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: active ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
            Add-ons (Optional)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {addonOptions.map((addon) => {
              const isSelected = selectedAddons.some((a) => a.name === addon.name);
              return (
                <div
                  key={addon.name}
                  onClick={() => handleToggleAddon(addon)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'var(--gold-light)' : 'var(--canvas-secondary)',
                    border: `1px solid ${isSelected ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '3px',
                      border: `1px solid ${isSelected ? 'var(--gold-antique)' : 'var(--border-medium)'}`,
                      backgroundColor: isSelected ? 'var(--gold-antique)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-dark)'
                    }}>
                      {isSelected && <Check size={10} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dark)', fontWeight: isSelected ? 600 : 400 }}>
                      {addon.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: isSelected ? 'var(--text-dark)' : 'var(--text-muted)', fontWeight: 600 }}>
                    +${addon.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
            Any More Requirements?
          </h4>
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="e.g. Allergy details, no peanuts, extra garlic, extra sauce, etc."
            style={{
              width: '100%',
              minHeight: '70px',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid var(--border-medium)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              resize: 'vertical',
              color: 'var(--text-dark)'
            }}
          />
        </div>

        {/* Suggested Items */}
        {suggestions.length > 0 && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-dark)', marginBottom: '0.85rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              Suggested Items
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {suggestions.map((sug) => {
                const qtySelected = suggestedQuantities[sug.id] || 0;
                return (
                  <div 
                    key={sug.id} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'rgba(204,164,83,0.03)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {sug.image && (
                        <img 
                          src={sug.image} 
                          alt={sug.name} 
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                      )}
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block' }}>{sug.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>${sug.price}</span>
                      </div>
                    </div>
                    {qtySelected > 0 ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                          type="button"
                          onClick={() => handleRemoveSuggested(sug.id)}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-medium)',
                            backgroundColor: 'transparent',
                            color: 'var(--text-dark)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            outline: 'none'
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', minWidth: '14px', textAlign: 'center' }}>
                          {qtySelected}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddSuggested(sug)}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-medium)',
                            backgroundColor: 'transparent',
                            color: 'var(--text-dark)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            outline: 'none'
                          }}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddSuggested(sug)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '4px',
                          border: '1px solid var(--text-dark)',
                          backgroundColor: 'transparent',
                          color: 'var(--text-dark)',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--text-dark)'; e.currentTarget.style.color = 'var(--canvas-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-dark)'; }}
                      >
                        <Plus size={10} /> Add
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              padding: '0.85rem',
              borderRadius: '4px',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'transparent',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--canvas-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onConfirm({ spice, addons: selectedAddons, requirements, suggestions: suggestedQuantities })}
            className="btn-filled"
            style={{
              flex: 2,
              padding: '0.85rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: 'var(--text-dark)',
              color: 'var(--canvas-primary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <ShoppingBag size={14} /> Add to Cart — ${currentPrice.toFixed(2)}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
