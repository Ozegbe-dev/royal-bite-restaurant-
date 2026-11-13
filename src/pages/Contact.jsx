import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { restaurant } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        compact
        eyebrow="CONTACT"
        title="Come say <em>hello.</em>"
        text="Reach Royal Bite for reservations, event enquiries, delivery questions or just to tell us what you loved."
        image="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1600&q=84"
      />
      <section className="section contact-page">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <span className="eyebrow">FIND US</span>
              <h2>
                Make your way to <em>Royal Avenue.</em>
              </h2>
              <p>
                {restaurant.address}. For launch, these contact details remain
                placeholders until the client supplies the final business
                information.
              </p>
              <div className="contact-cards">
                <a href={`tel:${restaurant.phone.replaceAll(" ", "")}`}>
                  <Phone />
                  <span>Phone</span>
                  <b>{restaurant.phone}</b>
                </a>
                <a href={`mailto:${restaurant.email}`}>
                  <Mail />
                  <span>Email</span>
                  <b>{restaurant.email}</b>
                </a>
                <div>
                  <MapPin />
                  <span>Address</span>
                  <b>{restaurant.address}</b>
                </div>
                <div>
                  <Clock3 />
                  <span>Opening hours</span>
                  <b>{restaurant.hours}</b>
                </div>
              </div>
            </div>
            <div className="map-card">
              <div className="map-grid-lines" />
              <div className="map-pin">
                <MapPin size={25} />
              </div>
              <div className="map-label">
                <small>ROYAL BITE</small>
                <b>Victoria Island, Lagos</b>
                <span>
                  Interactive map placeholder · connect a real map before
                  launch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section contact-form-section">
        <div className="container contact-form-grid">
          <div>
            <span className="eyebrow">SEND A MESSAGE</span>
            <h2>
              We are <em>listening.</em>
            </h2>
            <p>
              For real customer communication, connect this form to the
              restaurant inbox or CRM when the final business workflow is
              decided.
            </p>
          </div>
          <div className="form-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                e.currentTarget.reset();
              }}
            >
              <div className="form-row">
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Subject
                <select name="subject" defaultValue="General enquiry">
                  <option>General enquiry</option>
                  <option>Reservation</option>
                  <option>Private event</option>
                  <option>Delivery</option>
                  <option>Feedback</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  required
                  rows="6"
                  name="message"
                  placeholder="How can we help?"
                />
              </label>
              <button className="btn solid" type="submit">
                <Send size={16} /> Send message
              </button>
            </form>
            {sent && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={18} /> Message captured successfully.
                Connect your real inbox/backend before launch.
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
