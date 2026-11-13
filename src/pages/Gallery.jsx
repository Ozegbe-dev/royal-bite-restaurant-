import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { galleryImages } from "../data";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <PageHero
        eyebrow="THE GALLERY"
        title="Come for the food. <em>Stay for the feeling.</em>"
        text="A visual tour through the room, the kitchen and the plates that make Royal Bite feel alive."
        image="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1600&q=84"
      />
      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-mosaic">
            {galleryImages.map((img, i) => (
              <motion.button
                type="button"
                className={`gallery-card g-${i + 1}`}
                key={img.src}
                onClick={() => setSelected(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.015 }}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <span className="gallery-card-overlay">
                  <small>{img.tag}</small>
                  <b>{img.title}</b>
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className="lightbox-close icon-btn"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <button
              type="button"
              className="lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(
                  (selected - 1 + galleryImages.length) % galleryImages.length,
                );
              }}
            >
              <ArrowLeft />
            </button>
            <motion.div
              className="lightbox-frame"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].title}
              />
              <div>
                <small>{galleryImages[selected].tag}</small>
                <h3>{galleryImages[selected].title}</h3>
              </div>
            </motion.div>
            <button
              type="button"
              className="lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                setSelected((selected + 1) % galleryImages.length);
              }}
            >
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
