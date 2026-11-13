import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Experience from './pages/Experience';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import { useApp } from './store/AppContext';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const { cartOpen, setCartOpen, toast } = useApp();
  const overlayPage = location.pathname !== '/checkout';
  return (
    <div className="app-shell">
      <ScrollReset />
      <Navbar />
      <main className={overlayPage ? 'site-main' : 'site-main checkout-main'}>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/stories" element={<Testimonials />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      {overlayPage && <Footer />}
      <AnimatePresence>{cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}</AnimatePresence>
      <Toast message={toast} />
    </div>
  );
}
