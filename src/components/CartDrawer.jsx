import { motion } from "framer-motion";
import { Minus, Plus, Trash2, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../store/AppContext";

export default function CartDrawer({ onClose }) {
  const { cartRows, subtotal, updateQty, removeFromCart, formatMoney } =
    useApp();
  return (
    <motion.div
      className="cart-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="cart-backdrop"
        type="button"
        onClick={onClose}
        aria-label="Close cart"
      />
      <motion.aside
        className="cart-drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="drawer-head">
          <div>
            <span className="eyebrow">YOUR ORDER</span>
            <h3>Royal Table</h3>
          </div>
          <button className="icon-btn" type="button" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="drawer-content">
          {cartRows.length ? (
            cartRows.map(({ item, qty, id }) => (
              <div className="drawer-row" key={id}>
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;charset=UTF-8," +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#151511"/><circle cx="400" cy="300" r="180" fill="#23231f" stroke="#c9a25f" stroke-width="6"/><circle cx="400" cy="300" r="125" fill="#0e0e0c"/><text x="400" y="295" fill="#e8d6b0" font-size="26" text-anchor="middle">ROYAL BITE</text><text x="400" y="328" fill="#aaa096" font-size="16" text-anchor="middle">Image loading</text></svg>`,
                      );
                  }}
                />
                <div className="drawer-info">
                  <small>{item.category.replace("-", " ")}</small>
                  <h4>{item.name}</h4>
                  <strong>{formatMoney(item.price)}</strong>
                  <div className="qty-control">
                    <button type="button" onClick={() => updateQty(id, -1)}>
                      <Minus size={14} />
                    </button>
                    <b>{qty}</b>
                    <button type="button" onClick={() => updateQty(id, 1)}>
                      <Plus size={14} />
                    </button>
                    <button
                      type="button"
                      className="remove"
                      onClick={() => removeFromCart(id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                <b className="line-total">{formatMoney(item.price * qty)}</b>
              </div>
            ))
          ) : (
            <div className="drawer-empty">
              <span>✦</span>
              <h3>Your order is waiting.</h3>
              <p>
                Choose something delicious from the menu and we'll build the
                table around it.
              </p>
              <Link to="/menu" onClick={onClose} className="btn solid">
                Browse Menu <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
        {cartRows.length > 0 && (
          <div className="drawer-foot">
            <div>
              <span>Subtotal</span>
              <strong>{formatMoney(subtotal)}</strong>
            </div>
            <p>Delivery, taxes and final fees are confirmed at checkout.</p>
            <Link to="/checkout" onClick={onClose} className="btn solid full">
              Continue to Checkout <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </motion.aside>
    </motion.div>
  );
}
