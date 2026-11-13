import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { menuItems } from '../data';

const AppContext = createContext(null);
const CART_KEY = 'royal_bite_cart_v2';
const FAV_KEY = 'royal_bite_favorites_v2';

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  });
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem(FAV_KEY, JSON.stringify(favorites)), [favorites]);
  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const getItem = (id) => menuItems.find((item) => String(item.id) === String(id));
  const addToCart = (id) => {
    setCart((current) => {
      const found = current.find((row) => row.id === id);
      return found
        ? current.map((row) => row.id === id ? { ...row, qty: row.qty + 1 } : row)
        : [...current, { id, qty: 1 }];
    });
    setCartOpen(true);
    const item = getItem(id);
    setToast(`${item?.name || 'Item'} added to your order`);
  };
  const updateQty = (id, delta) => {
    setCart((current) => current
      .map((row) => row.id === id ? { ...row, qty: row.qty + delta } : row)
      .filter((row) => row.qty > 0));
  };
  const removeFromCart = (id) => setCart((current) => current.filter((row) => row.id !== id));
  const clearCart = () => setCart([]);
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  const cartRows = useMemo(() => cart.map((row) => ({ ...row, item: getItem(row.id) })).filter((row) => row.item), [cart]);
  const cartCount = cart.reduce((sum, row) => sum + row.qty, 0);
  const subtotal = cartRows.reduce((sum, row) => sum + row.item.price * row.qty, 0);
  const formatMoney = (value) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);

  const value = {
    cart, cartRows, cartCount, subtotal, favorites, cartOpen, toast, lastOrder,
    setCartOpen, addToCart, updateQty, removeFromCart, clearCart, toggleFavorite,
    formatMoney, setToast, setLastOrder,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp must be used within AppProvider');
  return value;
}
