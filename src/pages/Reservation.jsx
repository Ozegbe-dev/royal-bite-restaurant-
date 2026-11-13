import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { restaurant } from "../data";

export default function Reservation() {
  const [done, setDone] = useState(null);
  const today = new Date().toISOString().slice(0, 10);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = (f.get("name") || "Guest").toString();
    const date = f.get("date");
    const time = f.get("time");
    const guests = f.get("guests");
    if (!date || !time || !guests) {
      return;
    }
    setDone({ name, date, time, guests });
  };
  return (
    <>
      <PageHero
        compact
        eyebrow="RESERVATIONS"
        title="Set the table for <em>something memorable.</em>"
        text="Tell us when you are coming and how many seats you need. The frontend request is ready to connect to Royal Bite's real booking service."
        image="https://images.unsplash.com/photo-1468768649734-ddebcf0b0bc4?auto=format&fit=crop&w=1600&q=84"
      />
      <section className="section reservation-page">
        <div className="container reservation-grid">
          <div className="reservation-copy">
            <span className="eyebrow">THE ROYAL TABLE</span>
            <h2>
              Good evenings start with a <em>seat saved for you.</em>
            </h2>
            <p>
              For parties above 10, please contact the restaurant directly.
              Special occasions and dietary notes can be added below.
            </p>
            <div className="reservation-perks">
              <div>
                <CalendarDays />
                <span>Daily dining</span>
                <b>9 AM — 11 PM</b>
              </div>
              <div>
                <Users />
                <span>Table sizes</span>
                <b>1 — 18 guests</b>
              </div>
              <div>
                <Clock3 />
                <span>Recommended</span>
                <b>Book 24h ahead</b>
              </div>
            </div>
            <div className="contact-note">
              <span>Questions?</span>
              <a href={`tel:${restaurant.phone.replaceAll(" ", "")}`}>
                {restaurant.phone}
              </a>
            </div>
          </div>
          <div className="reservation-card">
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  First & last name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Phone number
                  <input name="phone" required placeholder="+234 ..." />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Preferred date
                  <input name="date" min={today} required type="date" />
                </label>
                <label>
                  Time
                  <select name="time" required defaultValue="">
                    <option value="" disabled>
                      Choose a time
                    </option>
                    <option>9:am</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:30 PM</option>
                    <option>7:30 PM</option>
                    <option>8:30 PM</option>
                    <option>9:30 PM</option>
                  </select>
                </label>
              </div>
              <label>
                Guests
                <select name="guests" required defaultValue="">
                  <option value="" disabled>
                    How many?
                  </option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1}>
                      {i + 1} {i ? "guests" : "guest"}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Special request
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Birthday, quiet corner, dietary note..."
                />
              </label>
              <button className="btn solid full" type="submit">
                Request this table <ArrowRight size={16} />
              </button>
              <small className="form-footnote">
                This demo does not yet confirm a real reservation. Connect the
                backend/booking channel before launch.
              </small>
            </form>
          </div>
        </div>
      </section>
      {done && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="success-modal"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <CheckCircle2 size={45} />
            <span className="eyebrow">REQUEST RECEIVED</span>
            <h2>Your table request is ready, {done.name}.</h2>
            <p>
              {done.guests} for {done.date} at {done.time}. A real booking
              service can now be wired to this flow.
            </p>
            <button
              className="btn solid"
              type="button"
              onClick={() => setDone(null)}
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
