import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import { testimonials } from "../data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () =>
    setActive((active - 1 + testimonials.length) % testimonials.length);
  return (
    <>
      <PageHero
        eyebrow="GUEST STORIES"
        title="What stays with you is <em>the feeling.</em>"
        text="Sample guest stories for the client-ready concept. Replace these with verified Royal Bite reviews before launch."
        image="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1600&q=84"
      />
      <section className="section testimonial-feature">
        <div className="container">
          <div className="testimonial-stage">
            <Quote className="testimonial-quote-icon" size={58} />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="big-quote"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <p>“{item.quote}”</p>
                <div className="guest-line">
                  <div>
                    <b>{item.name}</b>
                    <span>{item.detail}</span>
                  </div>
                  <div className="stars">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="carousel-controls">
              <button type="button" className="icon-btn" onClick={prev}>
                <ArrowLeft />
              </button>
              <div>
                {String(active + 1).padStart(2, "0")}{" "}
                <span>/ {String(testimonials.length).padStart(2, "0")}</span>
              </div>
              <button type="button" className="icon-btn" onClick={next}>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="testimonial-thumbs">
            {testimonials.map((t, i) => (
              <button
                type="button"
                className={i === active ? "active" : ""}
                key={t.name}
                onClick={() => setActive(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{t.name}</b>
                <small>{t.detail.split("·")[0].trim()}</small>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="quote-grid section">
        <div className="container">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="eyebrow">0{i + 1}</span>
              <p>“{t.quote}”</p>
              <footer>
                <b>{t.name}</b>
                <small>{t.detail}</small>
              </footer>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
