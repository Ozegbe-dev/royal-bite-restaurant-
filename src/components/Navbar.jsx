import { useState } from "react";
import {
  ChevronDown,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useApp } from "../store/AppContext";

const links = {
  discover: [
    ["Our Story", "/about"],
    ["Experience", "/experience"],
    ["Gallery", "/gallery"],
    ["Guest Stories", "/stories"],
  ],
  menu: [
    ["Full Menu", "/menu"],
    ["Main Meals", "/menu#main-meals"],
    ["Fast Food", "/menu#fast-food"],
    ["Drinks", "/menu#drinks"],
    ["Desserts", "/menu#desserts"],
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const { cartCount, setCartOpen } = useApp();
  const close = () => {
    setOpen(false);
    setDrop(null);
  };
  return (
    <header className="site-nav">
      <div className="top-strip">
        <span>rumu-dara, port Harcourt</span>
        <span>Open daily · 11:00 AM — 11:00 PM</span>
        <span>Reservations · +234 9061755010</span>
      </div>
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">RB</span>
          <span>
            <b>ROYAL</b>
            <small>BITE</small>
          </span>
        </Link>
        <button
          className="mobile-menu"
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
        <nav className={open ? "main-nav open" : "main-nav"}>
          <NavLink to="/" className="nav-link" onClick={close}>
            Home
          </NavLink>
          <div className={drop === "discover" ? "nav-drop open" : "nav-drop"}>
            <button
              type="button"
              onClick={() => setDrop(drop === "discover" ? null : "discover")}
              className="nav-link nav-button"
            >
              Discover <ChevronDown size={15} />
            </button>
            <div className="drop-menu">
              {links.discover.map(([label, url]) => (
                <Link to={url} key={url} onClick={close}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className={drop === "menu" ? "nav-drop open" : "nav-drop"}>
            <button
              type="button"
              onClick={() => setDrop(drop === "menu" ? null : "menu")}
              className="nav-link nav-button"
            >
              Menu <ChevronDown size={15} />
            </button>
            <div className="drop-menu">
              {links.menu.map(([label, url]) => (
                <Link to={url} key={url} onClick={close}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/reservation" className="nav-link" onClick={close}>
            Reservations
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={close}>
            Contact
          </NavLink>
          <Link to="/menu" className="nav-cta" onClick={close}>
            Order Online <ArrowUpRight size={15} />
          </Link>
          <button
            className="cart-button"
            type="button"
            onClick={() => {
              setCartOpen(true);
              close();
            }}
            aria-label="Open cart"
          >
            <ShoppingBag size={19} />
            <span>Bag</span>
            <b>{cartCount}</b>
          </button>
        </nav>
      </div>
    </header>
  );
}


