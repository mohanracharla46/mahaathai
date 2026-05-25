import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Calendar, 
  Users, 
  Edit, 
  Trash2, 
  Plus, 
  LogOut, 
  CheckCircle, 
  Clock, 
  X, 
  Menu, 
  Lock, 
  Mail, 
  ShieldAlert, 
  Search, 
  Filter, 
  Check, 
  AlertCircle,
  Eye,
  FileText
} from 'lucide-react';
import { menuData } from './MenuSection';

// Initial Mock Orders if none in localStorage
const defaultMockOrders = [
  {
    id: 'o-mock1',
    date: 'May 24, 2026',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+1 (555) 123-4567',
    items: '1x Royal Massaman Wagyu, 1x Lemongrass Lobster Soup',
    total: 82,
    type: 'Delivery',
    address: '123 Jade St, Apt 4B',
    status: 'Delivered'
  },
  {
    id: 'o-mock2',
    date: 'May 25, 2026',
    customerName: 'Sarah Connor',
    customerEmail: 'sarah@example.com',
    customerPhone: '+1 (555) 987-6543',
    items: '2x Maha Street Pad Thai, 1x Thai Iced Tea',
    total: 53,
    type: 'Pickup',
    address: 'Pickup Curbside',
    status: 'Preparing'
  },
  {
    id: 'o-mock3',
    date: 'May 25, 2026',
    customerName: 'Bruce Wayne',
    customerEmail: 'bruce@waynecorp.com',
    customerPhone: '+1 (555) 000-1939',
    items: '1x Coconut Shell Seafood (Hor Mok), 2x Northern Khao Soi',
    total: 92,
    type: 'Delivery',
    address: '1007 Mountain Drive, Gotham',
    status: 'Pending'
  }
];

// Initial Mock Bookings if none in localStorage
const defaultMockBookings = [
  {
    id: 'b-mock1',
    date: 'May 30, 2026',
    time: '19:00 Seating',
    guests: 4,
    notes: 'Gluten allergy in party. Celebrating a promotion.',
    customerName: 'Alice Smith',
    customerEmail: 'alice@example.com',
    customerPhone: '+1 (555) 555-0199',
    status: 'Confirmed'
  },
  {
    id: 'b-mock2',
    date: 'Jun 02, 2026',
    time: '20:30 Seating',
    guests: 2,
    notes: 'Anniversary dinner. Quiet corner table requested.',
    customerName: 'Bob Jones',
    customerEmail: 'bob@gmail.com',
    customerPhone: '+1 (555) 444-3322',
    status: 'Confirmed'
  },
  {
    id: 'b-mock3',
    date: 'May 24, 2026',
    time: '18:00 Seating',
    guests: 6,
    notes: 'Chef\'s Table tasting menu.',
    customerName: 'VIP Patron',
    customerEmail: 'vip@mahathai.com',
    customerPhone: '+1 (555) 999-8888',
    status: 'Completed'
  }
];

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('maha_admin_auth') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard Sidebar & View State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'orders', 'bookings', 'menu', 'customers'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Global Lists States
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [localMenu, setLocalMenu] = useState({});
  const [usersList, setUsersList] = useState([]);

  // Search & Filter state for tab lists
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Menu Category state for Menu Tab
  const menuCategories = ['Noodle Bar', 'Curry Kitchen', 'Rice & Wok', 'Street Kitchen', 'From the Sea', 'Chef’s Table', 'Plant-Based', 'Sweet Endings', 'Beverages & Sides', 'Lunch', 'Normal', 'Vegetarian'];
  const [selectedMenuCategory, setSelectedMenuCategory] = useState('Noodle Bar');

  // Modal Dialog states
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishFormData, setDishFormData] = useState({
    id: '',
    name: '',
    price: 0,
    description: '',
    rating: 4.8,
    image: '',
    availability: true
  });

  const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Initialize Admin Data
  useEffect(() => {
    if (!isAuthenticated) return;

    // 1. Load Orders
    let savedOrders = localStorage.getItem('maha_global_orders');
    if (!savedOrders) {
      localStorage.setItem('maha_global_orders', JSON.stringify(defaultMockOrders));
      savedOrders = JSON.stringify(defaultMockOrders);
    }
    setOrders(JSON.parse(savedOrders));

    // 2. Load Bookings
    let savedBookings = localStorage.getItem('maha_global_bookings');
    if (!savedBookings) {
      localStorage.setItem('maha_global_bookings', JSON.stringify(defaultMockBookings));
      savedBookings = JSON.stringify(defaultMockBookings);
    }
    setBookings(JSON.parse(savedBookings));

    // 3. Load Menu Data (merge from original structure + localStorage overrides)
    const savedMenu = localStorage.getItem('maha_custom_menu');
    if (savedMenu) {
      try {
        setLocalMenu(JSON.parse(savedMenu));
      } catch (e) {
        setLocalMenu({ ...menuData });
      }
    } else {
      setLocalMenu({ ...menuData });
    }

    // 4. Load Users from LocalStorage (keys matching maha_user_*)
    const users = [];
    // Mock baseline customers
    users.push({
      name: 'Alexander Hamilton',
      email: 'alex@example.com',
      phone: '+1 (555) 019-2834',
      ordersCount: 2,
      bookingsCount: 1
    });
    users.push({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      ordersCount: 1,
      bookingsCount: 0
    });
    users.push({
      name: 'Sarah Connor',
      email: 'sarah@example.com',
      phone: '+1 (555) 987-6543',
      ordersCount: 1,
      bookingsCount: 0
    });

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('maha_user_')) {
        try {
          const userObj = JSON.parse(localStorage.getItem(key));
          if (userObj && userObj.email) {
            // Check if already in list to avoid duplications
            if (!users.some(u => u.email === userObj.email)) {
              users.push({
                name: userObj.name || userObj.email.split('@')[0],
                email: userObj.email,
                phone: userObj.phone || 'N/A',
                ordersCount: userObj.orders ? userObj.orders.length : 0,
                bookingsCount: userObj.bookings ? userObj.bookings.length : 0
              });
            }
          }
        } catch (e) {}
      }
    }
    setUsersList(users);
  }, [isAuthenticated]);

  // Handle Login Submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    // Simulate luxury authentication delay
    setTimeout(() => {
      if (loginEmail === 'admin@mahathai.com' && loginPassword === 'admin') {
        sessionStorage.setItem('maha_admin_auth', 'true');
        setIsAuthenticated(true);
      } else {
        setLoginError('Invalid credentials. Access to Siamese court registry denied.');
      }
      setIsLoggingIn(false);
    }, 1200);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('maha_admin_auth');
    setIsAuthenticated(false);
  };

  // Sync / Save dynamic menu edits
  const saveMenuOverrides = (newMenu) => {
    setLocalMenu(newMenu);
    localStorage.setItem('maha_custom_menu', JSON.stringify(newMenu));
    
    // Dynamically update the imported menuData in memory so pages don't need a full reload
    Object.keys(newMenu).forEach(key => {
      menuData[key] = newMenu[key];
    });
  };

  // --- ORDER OPERATIONS ---
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
    setOrders(updated);
    localStorage.setItem('maha_global_orders', JSON.stringify(updated));

    // Also attempt to update order inside specific user's profiles
    updateUserProfileData(orderId, 'orders', { status: newStatus });
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to remove this order from history?')) {
      const updated = orders.filter(o => o.id !== orderId);
      setOrders(updated);
      localStorage.setItem('maha_global_orders', JSON.stringify(updated));
    }
  };

  // --- RESERVATION OPERATIONS ---
  const handleUpdateBookingStatus = (bookingId, newStatus) => {
    const updated = bookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b);
    setBookings(updated);
    localStorage.setItem('maha_global_bookings', JSON.stringify(updated));

    // Also attempt to update booking inside specific user's profiles
    updateUserProfileData(bookingId, 'bookings', { status: newStatus });
  };

  const handleDeleteBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel and delete this reservation?')) {
      const updated = bookings.filter(b => b.id !== bookingId);
      setBookings(updated);
      localStorage.setItem('maha_global_bookings', JSON.stringify(updated));
    }
  };

  // Sync status edits back to target user localStorage key if applicable
  const updateUserProfileData = (recordId, type, fieldsToUpdate) => {
    // Find who owns the record
    const targetRecord = type === 'orders' ? orders.find(o => o.id === recordId) : bookings.find(b => b.id === recordId);
    if (!targetRecord || !targetRecord.customerEmail) return;

    const storageKey = `maha_user_${targetRecord.customerEmail}`;
    const userData = localStorage.getItem(storageKey);
    if (userData) {
      try {
        const userObj = JSON.parse(userData);
        if (userObj[type]) {
          userObj[type] = userObj[type].map(item => 
            item.id === recordId ? { ...item, ...fieldsToUpdate } : item
          );
          localStorage.setItem(storageKey, JSON.stringify(userObj));
        }
      } catch (e) {}
    }
  };

  // --- MENU EDITOR OPERATIONS ---
  const handleOpenEditDish = (dish) => {
    setSelectedDish(dish);
    setDishFormData({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      description: dish.description || '',
      rating: dish.rating || 4.8,
      image: dish.image || '',
      availability: dish.availability !== false
    });
    setShowEditItemModal(true);
  };

  const handleSaveEditDish = (e) => {
    e.preventDefault();
    if (!dishFormData.name || dishFormData.price <= 0) return;

    const updatedMenu = { ...localMenu };
    const items = updatedMenu[selectedMenuCategory] || [];
    const index = items.findIndex(item => item.id === dishFormData.id);
    
    if (index !== -1) {
      items[index] = {
        ...items[index],
        name: dishFormData.name,
        price: parseFloat(dishFormData.price),
        description: dishFormData.description,
        rating: parseFloat(dishFormData.rating),
        image: dishFormData.image,
        availability: dishFormData.availability
      };
      updatedMenu[selectedMenuCategory] = items;
      saveMenuOverrides(updatedMenu);
      setShowEditItemModal(false);
    }
  };

  const handleOpenAddDish = () => {
    setDishFormData({
      id: 'dish-' + Date.now(),
      name: '',
      price: '',
      description: '',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=400',
      availability: true
    });
    setShowAddItemModal(true);
  };

  const handleSaveAddDish = (e) => {
    e.preventDefault();
    if (!dishFormData.name || !dishFormData.price) return;

    const updatedMenu = { ...localMenu };
    const items = updatedMenu[selectedMenuCategory] || [];
    
    const newItem = {
      id: dishFormData.id,
      name: dishFormData.name,
      price: parseFloat(dishFormData.price),
      description: dishFormData.description,
      rating: parseFloat(dishFormData.rating),
      image: dishFormData.image || 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=400',
      availability: dishFormData.availability
    };

    items.push(newItem);
    updatedMenu[selectedMenuCategory] = items;
    saveMenuOverrides(updatedMenu);
    setShowAddItemModal(false);
  };

  const handleDeleteDish = (dishId) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      const updatedMenu = { ...localMenu };
      const items = updatedMenu[selectedMenuCategory] || [];
      const filtered = items.filter(item => item.id !== dishId);
      updatedMenu[selectedMenuCategory] = filtered;
      saveMenuOverrides(updatedMenu);
    }
  };

  // --- STATS COMPUTATIONS FOR OVERVIEW ---
  const stats = useMemo(() => {
    const totalRev = orders
      .filter(o => o.status !== 'Cancelled')
      .reduce((sum, o) => sum + parseFloat(o.total || 0), 0);
    const pendingOrders = orders.filter(o => o.status === 'Pending' || o.status === 'Preparing' || o.status === 'Out for Delivery').length;
    const confirmedBookings = bookings.filter(b => b.status === 'Confirmed').length;
    
    let totalItems = 0;
    Object.keys(localMenu).forEach(key => {
      // Don't double count computed menus
      if (key !== 'Normal' && key !== 'Vegetarian' && key !== 'Lunch') {
        totalItems += (localMenu[key] || []).length;
      }
    });

    return {
      revenue: totalRev,
      pendingOrders,
      activeBookings: confirmedBookings,
      menuCount: totalItems
    };
  }, [orders, bookings, localMenu]);

  // SVG Chart Computations (Simulated trajectory)
  const salesHistory = [350, 480, 620, 540, 890, 1100, stats.revenue];
  const chartPoints = useMemo(() => {
    const maxVal = Math.max(...salesHistory) * 1.15;
    const height = 150;
    const width = 500;
    return salesHistory.map((val, idx) => {
      const x = (idx / (salesHistory.length - 1)) * width;
      const y = height - (val / maxVal) * height;
      return `${x},${y}`;
    }).join(' ');
  }, [stats.revenue]);

  // Filters search queries
  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      const matchesSearch = 
        o.customerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.items?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = statusFilter === 'All' || o.status === statusFilter;
      return matchesSearch && matchesFilter;
    });
  }, [orders, searchQuery, statusFilter]);

  const filteredBookings = useMemo(() => {
    return bookings.filter(b => {
      const matchesSearch = 
        b.customerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.notes?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = statusFilter === 'All' || b.status === statusFilter;
      return matchesSearch && matchesFilter;
    });
  }, [bookings, searchQuery, statusFilter]);

  const filteredCustomers = useMemo(() => {
    return usersList.filter(u => 
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.phone?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [usersList, searchQuery]);

  return (
    <div style={{ backgroundColor: 'var(--canvas-secondary)', minHeight: '100vh', paddingTop: '100px' }}>
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          /* AUTHENTICATION WALL */
          <motion.div 
            key="login-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            style={{
              minHeight: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '440px',
                backgroundColor: 'var(--canvas-primary)',
                border: '1px solid var(--gold-antique)',
                borderRadius: '8px',
                padding: '3rem 2.5rem',
                boxShadow: 'var(--shadow-premium)',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              {/* Emblem */}
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--gold-light)', border: '1px solid var(--gold-antique)', color: 'var(--gold-antique)', marginBottom: '1.5rem' }}>
                <ShieldAlert size={28} />
              </div>

              <h2 className="font-serif" style={{ fontSize: '1.85rem', color: 'var(--text-dark)', fontWeight: 300, marginBottom: '0.5rem' }}>
                Siamese Registry Portal
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300 }}>
                Credentials required. Access restricted to certified curators of Maha Thai.
              </p>

              {loginError && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(219, 68, 85, 0.1)', border: '1px solid rgba(219, 68, 85, 0.3)', borderRadius: '4px', color: '#db4455', fontSize: '0.75rem', textAlign: 'left', marginBottom: '1.5rem' }}>
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.15em', marginBottom: '0.5rem' }}>
                    Admin Coordinate (Email)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                      <Mail size={16} />
                    </span>
                    <input 
                      type="email" 
                      required 
                      placeholder="admin@mahathai.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', fontSize: '0.85rem', backgroundColor: 'var(--canvas-secondary)', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.15em', marginBottom: '0.5rem' }}>
                    Private Seal (Password)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                      <Lock size={16} />
                    </span>
                    <input 
                      type="password" 
                      required 
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', fontSize: '0.85rem', backgroundColor: 'var(--canvas-secondary)', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoggingIn}
                  className="btn-filled"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '0.5rem' }}
                >
                  {isLoggingIn ? 'DECRYPTING SEAL...' : 'ENTER PORTAL'}
                </button>
              </form>

              <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Demo credentials: <strong style={{ color: 'var(--text-dark)' }}>admin@mahathai.com</strong> / <strong style={{ color: 'var(--text-dark)' }}>admin</strong>
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ADMIN PORTAL PANEL */
          <motion.div 
            key="dashboard-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              minHeight: '90vh',
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-dark)'
            }}
          >
            {/* COLLAPSIBLE SIDEBAR */}
            <aside 
              style={{
                width: isSidebarOpen ? '260px' : '70px',
                backgroundColor: 'var(--text-dark)',
                color: 'var(--canvas-primary)',
                transition: 'width 0.4s var(--ease-premium)',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid var(--gold-antique)',
                zIndex: 40,
                flexShrink: 0
              }}
            >
              {/* Sidebar Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center', padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', minHeight: '75px' }}>
                {isSidebarOpen && (
                  <span className="font-serif" style={{ fontSize: '1.2rem', color: 'var(--gold-antique)', tracking: '0.05em' }}>
                    MAHA STAFF
                  </span>
                )}
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  style={{ background: 'none', border: 'none', color: 'var(--gold-antique)', cursor: 'pointer', outline: 'none' }}
                >
                  <Menu size={20} />
                </button>
              </div>

              {/* Sidebar Profile Card */}
              {isSidebarOpen && (
                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'rgba(0,0,0,0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gold-antique)', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      M
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--canvas-primary)' }}>Maha Curator</h4>
                      <p style={{ fontSize: '0.7rem', color: 'var(--gold-antique)' }}>Level 1 Admin</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sidebar Nav Items */}
              <nav style={{ flexGrow: 1, padding: '1.5rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  { id: 'overview', label: 'Overview', icon: TrendingUp },
                  { id: 'orders', label: 'Orders Log', icon: ShoppingBag },
                  { id: 'bookings', label: 'Table Seating', icon: Calendar },
                  { id: 'menu', label: 'Menu Editor', icon: Edit },
                  { id: 'customers', label: 'VIP Registry', icon: Users }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSearchQuery('');
                        setStatusFilter('All');
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                        gap: '1rem',
                        padding: '0.85rem 1rem',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        width: '100%',
                        textAlign: 'left',
                        transition: 'all 0.3s',
                        backgroundColor: isActive ? 'var(--gold-antique)' : 'transparent',
                        color: isActive ? 'var(--text-dark)' : 'rgba(255,255,255,0.7)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Icon size={18} style={{ flexShrink: 0 }} />
                      {isSidebarOpen && <span>{item.label}</span>}
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Footer / Logout */}
              <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={handleLogout}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    width: '100%',
                    backgroundColor: 'rgba(219, 68, 85, 0.15)',
                    color: '#f8d7da',
                    textAlign: 'left',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                >
                  <LogOut size={16} />
                  {isSidebarOpen && <span>Exit Portal</span>}
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main style={{ flexGrow: 1, padding: '2.5rem', overflowX: 'hidden' }}>
              
              {/* TAB CONTAINER Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', tracking: '0.2em', color: 'var(--gold-antique)' }}>
                    Curator Salon Dashboard
                  </span>
                  <h1 className="font-serif" style={{ fontSize: '2.2rem', textTransform: 'capitalize', fontWeight: 300, marginTop: '0.25rem' }}>
                    {activeTab === 'menu' ? 'Live Menu Customization' : activeTab === 'bookings' ? 'Table Seating & Reservation' : activeTab === 'customers' ? 'VIP Guest Registry' : activeTab}
                  </h1>
                </div>

                {/* Optional Top Right Info */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Active User Database: <strong style={{ color: 'var(--text-dark)' }}>{usersList.length} Accounts</strong>
                  </div>
                </div>
              </div>

              {/* RENDER ACTIVE TAB */}
              {activeTab === 'overview' && (
                /* 1. OVERVIEW TAB */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {/* KPI Stats Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    
                    {/* Stat Card 1 */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-soft)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--gold-light)', color: 'var(--gold-antique)' }}>
                        <DollarSign size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Total Revenue</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.15rem' }}>${stats.revenue.toFixed(2)}</h3>
                      </div>
                    </div>

                    {/* Stat Card 2 */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-soft)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(14, 110, 86, 0.1)', color: 'var(--accent-jade)' }}>
                        <ShoppingBag size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Active Orders</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.15rem' }}>{stats.pendingOrders} Active</h3>
                      </div>
                    </div>

                    {/* Stat Card 3 */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-soft)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--gold-light)', color: 'var(--gold-antique)' }}>
                        <Calendar size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Confirmed Bookings</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.15rem' }}>{stats.activeBookings} Tables</h3>
                      </div>
                    </div>

                    {/* Stat Card 4 */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-soft)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(14, 110, 86, 0.1)', color: 'var(--accent-jade)' }}>
                        <Edit size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Menu Inventory</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-dark)', marginTop: '0.15rem' }}>{stats.menuCount} Items</h3>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Trajectory Widget */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    
                    {/* SVG Chart Panel */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column' }}>
                      <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '1.5rem' }}>Revenue Trajectory (Weekly)</h3>
                      
                      <div style={{ position: 'relative', height: '170px', width: '100%', marginTop: 'auto' }}>
                        <svg viewBox="0 0 500 150" style={{ width: '100%', height: '150px', overflow: 'visible' }}>
                          <defs>
                            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--gold-antique)" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="var(--gold-antique)" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          
                          {/* Grid Lines */}
                          <line x1="0" y1="0" x2="500" y2="0" stroke="var(--border-light)" strokeWidth="0.5" />
                          <line x1="0" y1="50" x2="500" y2="50" stroke="var(--border-light)" strokeWidth="0.5" />
                          <line x1="0" y1="100" x2="500" y2="100" stroke="var(--border-light)" strokeWidth="0.5" />
                          <line x1="0" y1="150" x2="500" y2="150" stroke="var(--border-medium)" strokeWidth="1" />

                          {/* Gradient Glow */}
                          <path 
                            d={`M 0,150 L ${chartPoints} L 500,150 Z`} 
                            fill="url(#chartGlow)" 
                          />
                          
                          {/* Trajectory Line */}
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            d={`M ${chartPoints}`} 
                            fill="none" 
                            stroke="var(--gold-antique)" 
                            strokeWidth="3.5" 
                            strokeLinecap="round"
                          />

                          {/* Data points dots */}
                          {salesHistory.map((val, idx) => {
                            const maxVal = Math.max(...salesHistory) * 1.15;
                            const x = (idx / (salesHistory.length - 1)) * 500;
                            const y = 150 - (val / maxVal) * 150;
                            return (
                              <circle 
                                key={idx}
                                cx={x} 
                                cy={y} 
                                r="5" 
                                fill="var(--text-dark)" 
                                stroke="var(--gold-antique)" 
                                strokeWidth="2" 
                              />
                            );
                          })}
                        </svg>
                      </div>

                      {/* X Axis Labels */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted)', marginTop: '0.75rem', fontWeight: 600 }}>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Operations Summary Feed */}
                    <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column' }}>
                      <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '1rem' }}>Active Service Logs</h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, overflowY: 'auto', maxHeight: '180px' }}>
                        {orders.slice(0, 3).map((o, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                            <div>
                              <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>Order {o.id}</p>
                              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{o.customerName} • {o.type}</p>
                            </div>
                            <span 
                              style={{ 
                                fontSize: '9px', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '12px',
                                textTransform: 'uppercase', height: 'fit-content',
                                backgroundColor: o.status === 'Delivered' ? 'rgba(14,110,86,0.1)' : 'var(--gold-light)',
                                color: o.status === 'Delivered' ? 'var(--accent-jade)' : 'var(--gold-antique)'
                              }}
                            >
                              {o.status}
                            </span>
                          </div>
                        ))}
                        {bookings.slice(0, 2).map((b, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                            <div>
                              <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>Booking Seating</p>
                              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{b.customerName} • {b.guests} Guests • {b.time}</p>
                            </div>
                            <span 
                              style={{ 
                                fontSize: '9px', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '12px',
                                textTransform: 'uppercase', height: 'fit-content',
                                backgroundColor: b.status === 'Confirmed' ? 'rgba(14,110,86,0.1)' : 'var(--gold-light)',
                                color: b.status === 'Confirmed' ? 'var(--accent-jade)' : 'var(--gold-antique)'
                              }}
                            >
                              {b.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                /* 2. ORDERS LOG TAB */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Search, Filter Bar */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyItems: 'center', justifyContent: 'space-between', gap: '1rem', backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '1rem' }}>
                    <div style={{ position: 'relative', flexGrow: 1, maxWidth: '350px' }}>
                      <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <Search size={16} />
                      </span>
                      <input 
                        type="text" 
                        placeholder="Search orders (ID, client name, items)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2.25rem', fontSize: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filter Status:</span>
                      <select 
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>

                  {/* Orders Table Panel */}
                  <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', boxShadow: 'var(--shadow-soft)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-light)', backgroundColor: 'var(--canvas-secondary)' }}>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Order ID</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Customer Coordinates</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Items Ordered</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total Cost</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Logistics</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Status State</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Action Seals</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.length === 0 ? (
                          <tr>
                            <td colSpan="7" style={{ padding: '3rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              No orders found matching search criteria.
                            </td>
                          </tr>
                        ) : (
                          filteredOrders.map((order) => (
                            <tr key={order.id} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--canvas-secondary)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>{order.id}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <div style={{ fontWeight: 600 }}>{order.customerName}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{order.customerPhone}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{order.customerEmail}</div>
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {order.items}
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>${parseFloat(order.total || 0).toFixed(2)}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <span style={{ fontWeight: 500 }}>{order.type}</span>
                                {order.address && order.type === 'Delivery' && (
                                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={order.address}>
                                    {order.address}
                                  </div>
                                )}
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <select 
                                  value={order.status}
                                  onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                                  style={{
                                    padding: '0.35rem 0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid var(--border-light)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    outline: 'none',
                                    backgroundColor: 
                                      order.status === 'Delivered' ? 'rgba(14, 110, 86, 0.1)' : 
                                      order.status === 'Cancelled' ? 'rgba(219, 68, 85, 0.1)' : 
                                      'var(--gold-light)',
                                    color: 
                                      order.status === 'Delivered' ? 'var(--accent-jade)' : 
                                      order.status === 'Cancelled' ? '#db4455' : 
                                      'var(--gold-antique)'
                                  }}
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Preparing">Preparing</option>
                                  <option value="Out for Delivery">Out for Delivery</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                  <button
                                    onClick={() => {
                                      setSelectedOrder(order);
                                      setShowOrderDetailsModal(true);
                                    }}
                                    style={{ background: 'none', border: 'none', color: 'var(--accent-jade)', cursor: 'pointer', padding: '0.25rem' }}
                                    title="View Ticket Details"
                                  >
                                    <Eye size={16} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteOrder(order.id)}
                                    style={{ background: 'none', border: 'none', color: '#db4455', cursor: 'pointer', padding: '0.25rem' }}
                                    title="Delete Order Log"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                /* 3. RESERVATIONS SEATING TAB */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Search, Filter Bar */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyItems: 'center', justifyContent: 'space-between', gap: '1rem', backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '1rem' }}>
                    <div style={{ position: 'relative', flexGrow: 1, maxWidth: '350px' }}>
                      <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <Search size={16} />
                      </span>
                      <input 
                        type="text" 
                        placeholder="Search reservations (guests, date, notes)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2.25rem', fontSize: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filter Status:</span>
                      <select 
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      >
                        <option value="All">All Bookings</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>

                  {/* Bookings Table Panel */}
                  <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', boxShadow: 'var(--shadow-soft)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-light)', backgroundColor: 'var(--canvas-secondary)' }}>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Seating Date</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Seating Hour</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Guests</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>VIP Patron Contacts</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Special Notes / Dietary</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Seating Status</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Action Seals</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredBookings.length === 0 ? (
                          <tr>
                            <td colSpan="7" style={{ padding: '3rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              No table reservations found.
                            </td>
                          </tr>
                        ) : (
                          filteredBookings.map((b) => (
                            <tr key={b.id} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--canvas-secondary)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>{b.date}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{b.time}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>{b.guests} Guests</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <div style={{ fontWeight: 600 }}>{b.customerName}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{b.customerPhone}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{b.customerEmail}</div>
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={b.notes}>
                                {b.notes || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>None</span>}
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <select 
                                  value={b.status}
                                  onChange={(e) => handleUpdateBookingStatus(b.id, e.target.value)}
                                  style={{
                                    padding: '0.35rem 0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid var(--border-light)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    outline: 'none',
                                    backgroundColor: 
                                      b.status === 'Completed' ? 'rgba(14, 110, 86, 0.1)' : 
                                      b.status === 'Cancelled' ? 'rgba(219, 68, 85, 0.1)' : 
                                      'var(--gold-light)',
                                    color: 
                                      b.status === 'Completed' ? 'var(--accent-jade)' : 
                                      b.status === 'Cancelled' ? '#db4455' : 
                                      'var(--gold-antique)'
                                  }}
                                >
                                  <option value="Confirmed">Confirmed</option>
                                  <option value="Completed">Completed</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <button
                                  onClick={() => handleDeleteBooking(b.id)}
                                  style={{ background: 'none', border: 'none', color: '#db4455', cursor: 'pointer', padding: '0.25rem' }}
                                  title="Cancel & Delete Booking"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'menu' && (
                /* 4. LIVE MENU CUSTOMIZER TAB */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Category selector menu */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div 
                      style={{ 
                        display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', maxWidth: '100%',
                        whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch'
                      }}
                    >
                      {menuCategories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedMenuCategory(cat)}
                          style={{
                            padding: '0.5rem 1rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            borderRadius: '24px',
                            border: '1px solid',
                            borderColor: selectedMenuCategory === cat ? 'var(--gold-antique)' : 'var(--border-light)',
                            backgroundColor: selectedMenuCategory === cat ? 'var(--gold-antique)' : 'var(--canvas-primary)',
                            color: selectedMenuCategory === cat ? 'var(--text-dark)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={handleOpenAddDish}
                      className="btn-filled"
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <Plus size={16} /> ADD DISH
                    </button>
                  </div>

                  {/* Dishes Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {((localMenu[selectedMenuCategory]) || []).map((dish) => (
                      <div 
                        key={dish.id} 
                        style={{ 
                          backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', 
                          overflow: 'hidden', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column',
                          position: 'relative'
                        }}
                      >
                        {/* Stock availability indicator tag */}
                        <div 
                          style={{
                            position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 10,
                            padding: '0.2rem 0.5rem', borderRadius: '12px', fontSize: '9px', fontWeight: 700,
                            textTransform: 'uppercase',
                            backgroundColor: dish.availability !== false ? 'rgba(14, 110, 86, 0.1)' : 'rgba(219, 68, 85, 0.1)',
                            color: dish.availability !== false ? 'var(--accent-jade)' : '#db4455',
                            border: '1px solid',
                            borderColor: dish.availability !== false ? 'rgba(14, 110, 86, 0.2)' : 'rgba(219, 68, 85, 0.2)'
                          }}
                        >
                          {dish.availability !== false ? 'In Stock' : 'Out of Stock'}
                        </div>

                        {/* Dish preview img */}
                        <div style={{ height: '140px', overflow: 'hidden', backgroundColor: 'var(--canvas-secondary)' }}>
                          <img 
                            src={dish.image || 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=400'} 
                            alt={dish.name} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=400';
                            }}
                          />
                        </div>

                        {/* Info details */}
                        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.5rem' }}>
                          <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
                            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>{dish.name}</h4>
                            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gold-antique)' }}>${dish.price}</span>
                          </div>

                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                            {dish.description}
                          </p>

                          <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ID: {dish.id}</span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button
                                onClick={() => handleOpenEditDish(dish)}
                                style={{ background: 'none', border: 'none', color: 'var(--gold-antique)', cursor: 'pointer', padding: '0.25rem' }}
                                title="Edit Item Details"
                              >
                                <Edit size={15} />
                              </button>
                              <button
                                onClick={() => handleDeleteDish(dish.id)}
                                style={{ background: 'none', border: 'none', color: '#db4455', cursor: 'pointer', padding: '0.25rem' }}
                                title="Delete Item"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {((localMenu[selectedMenuCategory]) || []).length === 0 && (
                      <div style={{ gridColumn: '1 / -1', padding: '4rem 2rem', textAlign: 'center', border: '1px dashed var(--border-medium)', borderRadius: '8px', color: 'var(--text-muted)' }}>
                        <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>No dishes found in category "{selectedMenuCategory}".</p>
                        <button 
                          onClick={handleOpenAddDish}
                          style={{ margin: '1rem auto 0', padding: '0.5rem 1rem', fontSize: '0.75rem', border: '1px solid var(--gold-antique)', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--gold-antique)', cursor: 'pointer' }}
                        >
                          Add the First Item
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'customers' && (
                /* 5. REGISTERED CUSTOMERS TAB */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Search Bar */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyItems: 'center', justifyContent: 'space-between', gap: '1rem', backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '1rem' }}>
                    <div style={{ position: 'relative', flexGrow: 1, maxWidth: '350px' }}>
                      <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <Search size={16} />
                      </span>
                      <input 
                        type="text" 
                        placeholder="Search patron database..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2.25rem', fontSize: '0.8rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>
                  </div>

                  {/* Customers VIP Table */}
                  <div style={{ backgroundColor: 'var(--canvas-primary)', border: '1px solid var(--border-light)', borderRadius: '8px', boxShadow: 'var(--shadow-soft)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-light)', backgroundColor: 'var(--canvas-secondary)' }}>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>VIP Patron Name</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email Coordinate</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Phone Number</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total Bookings</th>
                          <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total Orders</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCustomers.length === 0 ? (
                          <tr>
                            <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              No registered user profiles found.
                            </td>
                          </tr>
                        ) : (
                          filteredCustomers.map((user, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--canvas-secondary)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                              <td style={{ padding: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>{user.name}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{user.email}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{user.phone}</td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <span style={{ padding: '0.15rem 0.5rem', backgroundColor: 'var(--gold-light)', color: 'var(--gold-antique)', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                                  {user.bookingsCount} Seating
                                </span>
                              </td>
                              <td style={{ padding: '1rem', fontSize: '0.8rem' }}>
                                <span style={{ padding: '0.15rem 0.5rem', backgroundColor: 'rgba(14, 110, 86, 0.1)', color: 'var(--accent-jade)', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                                  {user.ordersCount} Orders
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADD DISH DIALOG MODAL --- */}
      <AnimatePresence>
        {showAddItemModal && (
          <div className="luxury-modal-overlay" onClick={() => setShowAddItemModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="luxury-modal-content"
              style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setShowAddItemModal(false)} className="luxury-modal-close">
                <X size={20} />
              </button>

              <div style={{ marginBottom: '1.5rem' }}>
                <span className="modal-subtitle">Live Menu Customizer</span>
                <h3 className="modal-title" style={{ fontSize: '1.5rem' }}>Add New Culinary Creation</h3>
              </div>

              <form onSubmit={handleSaveAddDish} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                      Dish Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Royal Curry"
                      value={dishFormData.name}
                      onChange={(e) => setDishFormData({ ...dishFormData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                      Price (USD)
                    </label>
                    <input 
                      type="number" 
                      required
                      placeholder="28"
                      value={dishFormData.price}
                      onChange={(e) => setDishFormData({ ...dishFormData, price: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                    Description
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Provide details about the ingredients, flavors, and allergens..."
                    value={dishFormData.description}
                    onChange={(e) => setDishFormData({ ...dishFormData, description: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none', fontFamily: 'var(--font-sans)', resize: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                    Visual Asset Link (Image URL)
                  </label>
                  <input 
                    type="text" 
                    placeholder="https://images.unsplash.com/photo..."
                    value={dishFormData.image}
                    onChange={(e) => setDishFormData({ ...dishFormData, image: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="dish-avail-add" 
                    checked={dishFormData.availability}
                    onChange={(e) => setDishFormData({ ...dishFormData, availability: e.target.checked })}
                    style={{ cursor: 'pointer' }}
                  />
                  <label htmlFor="dish-avail-add" style={{ fontSize: '0.8rem', color: 'var(--text-dark)', userSelect: 'none', cursor: 'pointer' }}>
                    Mark as Available in Inventory (In Stock)
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-filled"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }}
                >
                  ADD TO MENU
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- EDIT DISH DIALOG MODAL --- */}
      <AnimatePresence>
        {showEditItemModal && (
          <div className="luxury-modal-overlay" onClick={() => setShowEditItemModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="luxury-modal-content"
              style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setShowEditItemModal(false)} className="luxury-modal-close">
                <X size={20} />
              </button>

              <div style={{ marginBottom: '1.5rem' }}>
                <span className="modal-subtitle">Live Menu Customizer</span>
                <h3 className="modal-title" style={{ fontSize: '1.5rem' }}>Modify Dish Selections</h3>
              </div>

              <form onSubmit={handleSaveEditDish} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                      Dish Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={dishFormData.name}
                      onChange={(e) => setDishFormData({ ...dishFormData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                      Price (USD)
                    </label>
                    <input 
                      type="number" 
                      required
                      value={dishFormData.price}
                      onChange={(e) => setDishFormData({ ...dishFormData, price: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                    Description
                  </label>
                  <textarea 
                    rows="3"
                    value={dishFormData.description}
                    onChange={(e) => setDishFormData({ ...dishFormData, description: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none', fontFamily: 'var(--font-sans)', resize: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', tracking: '0.1em', marginBottom: '0.4rem' }}>
                    Visual Asset Link (Image URL)
                  </label>
                  <input 
                    type="text" 
                    value={dishFormData.image}
                    onChange={(e) => setDishFormData({ ...dishFormData, image: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.85rem', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="dish-avail-edit" 
                    checked={dishFormData.availability}
                    onChange={(e) => setDishFormData({ ...dishFormData, availability: e.target.checked })}
                    style={{ cursor: 'pointer' }}
                  />
                  <label htmlFor="dish-avail-edit" style={{ fontSize: '0.8rem', color: 'var(--text-dark)', userSelect: 'none', cursor: 'pointer' }}>
                    Mark as Available in Inventory (In Stock)
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-filled"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }}
                >
                  SAVE OVERRIDES
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- ORDER DETAILS DIALOG MODAL --- */}
      <AnimatePresence>
        {showOrderDetailsModal && selectedOrder && (
          <div className="luxury-modal-overlay" onClick={() => setShowOrderDetailsModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="luxury-modal-content"
              style={{ maxWidth: '460px', display: 'flex', flexDirection: 'column' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setShowOrderDetailsModal(false)} className="luxury-modal-close">
                <X size={20} />
              </button>

              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                <span className="modal-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FileText size={12} />
                  Ticket Order Receipt
                </span>
                <h3 className="modal-title" style={{ fontSize: '1.6rem' }}>{selectedOrder.id}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: 'var(--canvas-secondary)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Customer</strong>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{selectedOrder.customerName}</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Phone</strong>
                    <span>{selectedOrder.customerPhone || 'N/A'}</span>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <strong style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email</strong>
                    <span>{selectedOrder.customerEmail || 'N/A'}</span>
                  </div>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Logistics details</strong>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                    <span>Service Type:</span>
                    <strong style={{ color: 'var(--gold-antique)' }}>{selectedOrder.type}</strong>
                  </div>
                  {selectedOrder.type === 'Delivery' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.5rem' }}>
                      <span style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Address:</span>
                      <p style={{ lineHeight: '1.4' }}>{selectedOrder.address}</p>
                    </div>
                  )}
                </div>

                <div className="receipt-box" style={{ margin: '0.5rem 0' }}>
                  <div className="receipt-header">Aromatic Selection Items</div>
                  
                  {/* Parse individual items summary */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem 0' }}>
                    {selectedOrder.items.split(', ').map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="receipt-total-row" style={{ marginTop: '0.5rem' }}>
                    <span>Receipt Total (USD)</span>
                    <span>${parseFloat(selectedOrder.total || 0).toFixed(2)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Workflow:</span>
                    <select 
                      value={selectedOrder.status}
                      onChange={(e) => handleUpdateOrderStatus(selectedOrder.id, e.target.value)}
                      style={{ padding: '0.35rem 0.5rem', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '0.75rem' }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => setShowOrderDetailsModal(false)}
                    className="btn-filled"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}
                  >
                    CLOSE TICKET
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
