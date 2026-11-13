import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  return (
    <>
      <PageHero
        eyebrow="OUR STORY"
        title="Rooted in Nigeria. <em>Made for the world.</em>"
        text="Royal Bite is a dining room built around generous hospitality, fearless flavour and the belief that a good meal should become part of your story."
        image="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1600&q=84"
      />

      <section className="section story-intro">
        <div className="container story-intro-grid">
          <SectionHeading
            eyebrow="THE BEGINNING"
            title="A restaurant with <em>something to say.</em>"
          />
          <div>
            <p className="lead">
              Royal Bite started with a simple idea: bring the warmth and
              abundance of Nigerian hospitality to a modern table where every
              guest feels expected.
            </p>

            <p>
              That means familiar dishes are treated with respect, international
              influences are welcomed without losing identity, and service feels
              thoughtful without ever feeling stiff.
            </p>

            <p>
              We cook for the conversation after the first bite — the pause, the
              smile, the “you have to try this.”
            </p>
          </div>
        </div>
      </section>
      <section className="parallax-story" ref={storyRef}>
        <div className="container parallax-canvas">
          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1752095809291-e183b49e1e4b?auto=format&fit=crop&w=1600&q=84"
            alt="Chef preparing food"
          />

          <motion.div className="parallax-story-card" style={{ y: y2 }}>
            <span className="eyebrow">THE ROYAL STANDARD</span>

            <h3>Bold enough to be memorable. Warm enough to feel like home.</h3>

            <p>
              Our menu moves from jollof and suya to pasta, steak, burgers and
              handcrafted drinks — because cravings do not speak only one
              language.
            </p>
          </motion.div>
          <motion.img
            className="story-small-img"
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?auto=format&fit=crop&w=1600&q=84"
            alt="Nigerian dish"
          />
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="A FEW MILESTONES"
            title="Built around <em>the table.</em>"
          />
          <div className="timeline">
            <div>
              <span>01</span>
              <h3>The idea</h3>
              <p>
                A modern Nigerian dining concept shaped around hospitality
                first.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>The kitchen</h3>
              <p>
                Recipes were tested through familiar favourites and global
                techniques.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>The room</h3>
              <p>
                Textures, light and music were chosen to keep people lingering.
              </p>
            </div>
            <div>
              <span>04</span>
              <h3>The table</h3>
              <p>Royal Bite becomes complete when guests make memories here.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="container values-grid">
          <div className="value-feature">
            <Quote size={38} />
            <h2>“Every plate should have a point of view.”</h2>
            <p>— The Royal Bite kitchen</p>
          </div>
          <div className="value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Hospitality</h3>
                <p>
                  Warm service, clear communication and a table that feels
                  prepared for you.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Flavour</h3>
                <p>
                  Big seasoning, balanced textures and honest ingredients are
                  the house language.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Intention</h3>
                <p>
                  Every interaction earns its place — from the menu wording to
                  the final spoonful.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">COME EXPERIENCE IT</span>
          <h2>
            The story continues at <em>your table.</em>
          </h2>
          <Link to="/reservation" className="btn solid">
            Reserve a Table <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
