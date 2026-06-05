import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ShoppingBag, Plus } from 'lucide-react';
import { menuData } from './MenuSection';

export default function CustomizeModal({ item, onClose, onConfirm, onAddSuggestion }) {
  const [spice, setSpice] = useState('Medium');
  const [addons, setAddons] = useState({
    'Chicken': false,
    'Pork': false,
    'Beef': false,
    'Extra Shrimp': false,
    'Fried Paneer/cottage Cheese': 0,
    'Soft Paneer/cottage Cheese': 0
  });
  const [requirements, setRequirements] = useState('');

  const spiceLevels = ['Mild', 'Medium', 'Spicy', 'More Spicy'];

  const getSelectedAddonsList = () => {
    const list = [];
    if (addons['Chicken']) {
      list.push({ name: 'Chicken', price: 2.00 });
    }
    if (addons['Pork']) {
      list.push({ name: 'Pork', price: 2.00 });
    }
    if (addons['Beef']) {
      list.push({ name: 'Beef', price: 3.50 });
    }
    if (addons['Extra Shrimp']) {
      list.push({ name: 'Extra Shrimp', price: 4.00 });
    }
    if (addons['Fried Paneer/cottage Cheese'] > 0) {
      const qty = addons['Fried Paneer/cottage Cheese'];
      list.push({
        name: `Fried Paneer/cottage Cheese (x${qty})`,
        price: 1.50 * qty
      });
    }
    if (addons['Soft Paneer/cottage Cheese'] > 0) {
      const qty = addons['Soft Paneer/cottage Cheese'];
      list.push({
        name: `Soft Paneer/cottage Cheese (x${qty})`,
        price: 1.00 * qty
      });
    }
    return list;
  };

  const getAddonsTotal = () => {
    return getSelectedAddonsList().reduce((sum, a) => sum + a.price, 0);
  };

  const currentPrice = Number((item.price + getAddonsTotal()).toFixed(2));

  // Extract suggestions dynamically
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

        {/* Add Extra */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
            Add Extra.
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* Checkbox options */}
            {[
              { id: 'Chicken', name: 'Chicken', price: 2.00 },
              { id: 'Pork', name: 'Pork', price: 2.00 },
              { id: 'Beef', name: 'Beef', price: 3.50 },
              { id: 'Extra Shrimp', name: 'Extra Shrimp', price: 4.00 }
            ].map((addon) => {
              const isSelected = addons[addon.id];
              return (
                <div
                  key={addon.id}
                  onClick={() => setAddons(prev => ({ ...prev, [addon.id]: !prev[addon.id] }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.75rem',
                    borderRadius: '6px',
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

            {/* Quantity-based options */}
            {[
              { id: 'Fried Paneer/cottage Cheese', name: 'Fried Paneer/cottage Cheese', price: 1.50 },
              { id: 'Soft Paneer/cottage Cheese', name: 'Soft Paneer/cottage Cheese', price: 1.00 }
            ].map((addon) => {
              const qty = addons[addon.id];
              const isSelected = qty > 0;
              return (
                <div
                  key={addon.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.75rem',
                    borderRadius: '6px',
                    backgroundColor: isSelected ? 'var(--gold-light)' : 'var(--canvas-secondary)',
                    border: `1px solid ${isSelected ? 'var(--gold-antique)' : 'var(--border-light)'}`,
                    userSelect: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAddons(prev => ({ ...prev, [addon.id]: Math.max(0, prev[addon.id] - 1) }));
                        }}
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'transparent',
                          color: 'var(--text-dark)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          lineHeight: 1,
                          fontWeight: 'bold',
                          outline: 'none'
                        }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', minWidth: '14px', textAlign: 'center' }}>
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAddons(prev => ({ ...prev, [addon.id]: prev[addon.id] + 1 }));
                        }}
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'transparent',
                          color: 'var(--text-dark)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          lineHeight: 1,
                          fontWeight: 'bold',
                          outline: 'none'
                        }}
                      >
                        +
                      </button>
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
              {suggestions.map((sug) => (
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
                  <button
                    type="button"
                    onClick={() => onAddSuggestion(sug)}
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
                </div>
              ))}
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
            onClick={() => onConfirm({ spice, addons: getSelectedAddonsList(), requirements })}
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
