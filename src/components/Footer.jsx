import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { restaurant } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link to="/" className="brand light">
            <span className="brand-mark">RB</span>
            <span>
              <b>ROYAL</b>
              <small>BITE</small>
            </span>
          </Link>
          <p>
            Generous hospitality, beautiful plates and the moments that happen
            when people gather around a table.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="#">TK</a>
            <a href="#">X</a>
            <a href="#" aria-label="YouTube">
              <Youtube size={17} />
            </a>
            <a href="#">WA</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/stories">Guest Stories</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Menu</h4>
          <Link to="/menu#main-meals">Main Meals</Link>
          <Link to="/menu#protein">Protein</Link>
          <Link to="/menu#fast-food">Fast Food</Link>
          <Link to="/menu#snacks">Snacks</Link>
          <Link to="/menu#desserts">Desserts</Link>
          <Link to="/menu#drinks">Drinks</Link>
        </div>
        <div>
          <h4>Guest Services</h4>
          <Link to="/menu">Order Online</Link>
          <Link to="/reservation">Reserve a Table</Link>
          <Link to="/checkout">Your Order</Link>
          <Link to="/contact">Delivery Information</Link>
          <Link to="/contact">Support</Link>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>{restaurant.address}</p>
          <a href={`tel:${restaurant.phone.replaceAll(" ", "")}`}>
            {restaurant.phone}
          </a>
          <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
          <p>{restaurant.hours}</p>
          <Link to="/contact" className="footer-map">
            Get directions <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Royal Bite. All rights reserved.</span>
          <span>
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </span>
          <span>Crafted for memorable moments.</span>
        </div>
      </div>
    </footer>
  );
}
