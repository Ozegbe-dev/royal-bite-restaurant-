import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import FoodCard from "../components/FoodCard";
import {
  categories,
  featuredItems,
  galleryImages,
  testimonials,
} from "../data";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const plateRotate = useTransform(scrollYProgress, [0, 1], [-3, 24]);
  const plateScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      <section className="home-hero" ref={heroRef}>
        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1800&q=84"
            alt="Elegant modern restaurant interior"
          />
        </div>
        <div className="hero-grain" />
        <div className="home-hero-shade" />
        <div className="container home-hero-content">
          <div className="hero-copy">
            <span className="eyebrow">THE ROYAL BITE EXPERIENCE</span>
            <h1>
              Where every bite becomes a <em>memory.</em>
            </h1>
            <p>
              From the warmth of Nigerian favourites to globally inspired
              plates, Royal Bite brings food, atmosphere and genuine hospitality
              to one unforgettable table.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn solid">
                Discover Menu <ArrowRight size={16} />
              </Link>
              <Link to="/reservation" className="btn light-outline">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          className="hero-plate"
          style={{ y: plateY, rotate: plateRotate, scale: plateScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1664993101841-036f189719b6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1200"
            alt="Royal Jollof and charred chicken"
          />
          <div className="plate-label">
            <small>ROYAL SPECIAL</small>
            <b>Jollof & Charred Chicken</b>
            <span>₦8,500</span>
          </div>
        </motion.div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <ChevronDown size={17} />
        </div>
        <div className="hero-note">
          <Sparkles size={16} />
          <span>Fresh from our kitchen · Every day</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-intro">
          <SectionHeading
            eyebrow="MORE THAN A MEAL"
            title="A table made for <em>good stories.</em>"
          />
          <div className="intro-copy">
            <p className="lead">
              At Royal Bite, a great restaurant should give you something to
              talk about long after the plates are cleared.
            </p>
            <p>
              Our kitchen celebrates familiar Nigerian flavours, globally
              inspired dishes, thoughtful sides, handcrafted drinks and desserts
              worth saving room for.
            </p>
            <Link to="/about" className="inline-link">
              Discover our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-section signature-section">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              dark
              eyebrow="FROM THE KITCHEN"
              title="Signature <em>moments.</em>"
            />
            <Link className="inline-link light" to="/menu">
              See full menu <ArrowRight size={16} />
            </Link>
          </div>
          <div className="featured-grid">
            {featuredItems.map((item, i) => (
              <FoodCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section category-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="SOMETHING FOR EVERY CRAVING"
            title="Choose your <em>moment.</em>"
          />
          <div className="category-grid">
            {categories.map((cat, i) => (
              <Link
                to={`/menu#${cat.id}`}
                className="category-tile"
                key={cat.id}
              >
                <img
                  src={featuredItems[i % featuredItems.length].image}
                  alt={cat.label}
                />
                <div>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  <h3>{cat.label}</h3>
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1752095809291-e183b49e1e4b?auto=format&fit=crop&w=1600&q=84"
            alt="Chef preparing a dish"
            loading="lazy"
          />
        </div>
        <div className="story-copy">
          <span className="eyebrow">CRAFTED WITH INTENTION</span>
          <h2>
            From our kitchen to your <em>table.</em>
          </h2>
          <p>
            We source with care, season boldly and cook with the patience that
            turns ingredients into experiences. Whether it is a milestone or a
            Tuesday night, we are here to make the moment feel special.
          </p>
          <Link to="/experience" className="btn solid">
            Discover the experience <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div>
            <strong>96</strong>
            <span>Menu choices</span>
          </div>
          <div>
            <strong>7</strong>
            <span>Days of hospitality</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Made with intention</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Memorable table</span>
          </div>
        </div>
      </section>

      <section className="section guest-section">
        <div className="container guest-layout">
          <div>
            <SectionHeading
              eyebrow="GUEST STORIES"
              title="Good food. <em>Better memories.</em>"
            />
            <Link to="/stories" className="inline-link">
              Read guest stories <ArrowRight size={16} />
            </Link>
          </div>
          <div className="featured-quote">
            <span className="quote-mark">“</span>
            <p>{testimonials[0].quote}</p>
            <div>
              <b>{testimonials[0].name}</b>
              <small>{testimonials[0].detail}</small>
              <strong>★★★★★</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="home-gallery">
        <div className="home-gallery-head container">
          <SectionHeading
            dark
            eyebrow="A GLIMPSE INSIDE"
            title="See the <em>table.</em>"
          />
          <Link to="/gallery" className="inline-link light">
            Explore gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gallery-strip">
          {galleryImages.slice(0, 6).map((img, i) => (
            <motion.div
              key={img.src}
              className={`gallery-strip-item item-${i + 1}`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <span>{img.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">YOUR TABLE IS WAITING</span>
          <h2>
            Make tonight <em>worth remembering.</em>
          </h2>
          <p>
            Bring someone you love, bring your appetite, or simply bring
            yourself. We will take care of the rest.
          </p>
          <div className="hero-actions">
            <Link to="/reservation" className="btn solid">
              Reserve a Table <ArrowRight size={16} />
            </Link>
            <Link to="/menu" className="btn light-outline">
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
