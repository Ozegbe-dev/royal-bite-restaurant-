import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Store,
  CreditCard,
  LockKeyhole,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../store/AppContext";

export default function Checkout() {
  const {
    cartRows,
    subtotal,
    updateQty,
    formatMoney,
    clearCart,
    lastOrder,
    setLastOrder,
  } = useApp();
  const [fulfilment, setFulfilment] = useState("delivery");
  const [placed, setPlaced] = useState(Boolean(lastOrder));
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const deliveryFee =
    fulfilment === "delivery" ? (subtotal > 50000 ? 0 : 2500) : 0;
  const total = subtotal + deliveryFee;
  const orderNo = useMemo(
    () => `RB-${Math.floor(100000 + Math.random() * 900000)}`,
    [],
  );
  const submit = (e) => {
    e.preventDefault();
    if (!cartRows.length) return;
    const order = {
      number: orderNo,
      name: form.name,
      total,
      fulfilment,
      items: cartRows.length,
    };
    setLastOrder(order);
    clearCart();
    setPlaced(true);
  };
  if (placed || lastOrder)
    return (
      <section className="confirmation-page">
        <div className="confirmation-inner">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="confirmation-icon"
          >
            <CheckCircle2 size={48} />
          </motion.div>
          <span className="eyebrow">ORDER CONFIRMED</span>
          <h1>
            Your Royal Bite order is <em>on its way.</em>
          </h1>
          <p>
            {(lastOrder || { name: "Guest" }).name}, your order number is{" "}
            <b>{(lastOrder || { number: orderNo }).number}</b>. Keep it for your
            records.
          </p>
          <div className="confirmation-grid">
            <div>
              <small>FULFILMENT</small>
              <b>
                {(lastOrder || {}).fulfilment === "delivery"
                  ? "Delivery"
                  : "Pickup"}
              </b>
            </div>
            <div>
              <small>ITEMS</small>
              <b>{(lastOrder || {}).items || 0}</b>
            </div>
            <div>
              <small>TOTAL</small>
              <b>{formatMoney((lastOrder || {}).total || 0)}</b>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/menu" className="btn solid">
              Order something else <ArrowRight size={16} />
            </Link>
            <Link to="/" className="btn outline">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  return (
    <section className="checkout-page">
      <div className="container checkout-wrap">
        <Link to="/menu" className="back-link">
          <ArrowLeft size={16} /> Back to menu
        </Link>
        <div className="checkout-head">
          <span className="eyebrow">CHECKOUT</span>
          <h1>
            Finish your <em>order.</em>
          </h1>
          <p>
            Choose how you would like your food prepared for its journey to you.
          </p>
        </div>
        {cartRows.length === 0 ? (
          <div className="empty-state checkout-empty">
            <ShoppingBag size={30} />
            <h3>Your bag is empty.</h3>
            <p>There is nothing to check out yet.</p>
            <Link to="/menu" className="btn solid">
              Browse Menu <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="checkout-grid">
            <div className="checkout-form-panel">
              <div className="choice-grid">
                <button
                  type="button"
                  className={
                    fulfilment === "delivery" ? "choice active" : "choice"
                  }
                  onClick={() => setFulfilment("delivery")}
                >
                  <Truck />
                  <span>Delivery</span>
                  <small>To your address</small>
                </button>
                <button
                  type="button"
                  className={
                    fulfilment === "pickup" ? "choice active" : "choice"
                  }
                  onClick={() => setFulfilment("pickup")}
                >
                  <Store />
                  <span>Pickup</span>
                  <small>Collect from Royal Bite</small>
                </button>
              </div>
              <form onSubmit={submit}>
                <div className="form-row">
                  <label>
                    Full name
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+234 ..."
                    />
                  </label>
                </div>
                <label>
                  Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </label>
                {fulfilment === "delivery" && (
                  <label>
                    <span className="label-row">
                      <span>Delivery address</span>
                      <MapPin size={14} />
                    </span>
                    <textarea
                      required
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      rows="3"
                      placeholder="Street, area, city"
                    />
                  </label>
                )}
                <label>
                  Order notes
                  <textarea
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    rows="3"
                    placeholder="Extra spicy, birthday note, gate instructions..."
                  />
                </label>
                <div className="payment-note">
                  <LockKeyhole size={18} />
                  <div>
                    <b>Payment gateway ready to connect</b>
                    <p>
                      This build prepares the checkout flow but does not charge
                      a real card or bank account.
                    </p>
                  </div>
                </div>
                <button className="btn solid full" type="submit">
                  Place order · {formatMoney(total)} <ArrowRight size={17} />
                </button>
              </form>
            </div>
            <aside className="order-summary">
              <div className="drawer-head">
                <div>
                  <span className="eyebrow">ORDER SUMMARY</span>
                  <h3>{cartRows.reduce((s, r) => s + r.qty, 0)} items</h3>
                </div>
              </div>
              <div className="summary-items">
                {cartRows.map(({ item, qty, id }) => (
                  <div className="summary-row" key={id}>
                    <img src={item.image} alt="" />
                    <div>
                      <b>{item.name}</b>
                      <small>
                        {qty} × {formatMoney(item.price)}
                      </small>
                      <div className="summary-qty">
                        <button type="button" onClick={() => updateQty(id, -1)}>
                          <Minus size={13} />
                        </button>
                        <span>{qty}</span>
                        <button type="button" onClick={() => updateQty(id, 1)}>
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                    <strong>{formatMoney(item.price * qty)}</strong>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <span>Subtotal</span>
                <b>{formatMoney(subtotal)}</b>
                <span>{fulfilment === "delivery" ? "Delivery" : "Pickup"}</span>
                <b>{deliveryFee ? formatMoney(deliveryFee) : "Free"}</b>
                <hr />
                <span>Total</span>
                <strong>{formatMoney(total)}</strong>
              </div>
              <div className="summary-foot">
                <CreditCard size={17} />
                <span>Secure payment integration placeholder</span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
