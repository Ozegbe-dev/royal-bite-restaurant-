import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Utensils, Wine, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

const scenes = [
  {
    k: "01",
    title: "You arrive.",
    body: "Warm light, a composed room and the first cue that tonight can slow down.",
    image:
      "https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1800&q=84",
  },
  {
    k: "02",
    title: "The room changes pace.",
    body: "Conversation gets easier. Plates land when they should. Nothing feels rushed.",
    image:
      "https://images.unsplash.com/photo-1468768649734-ddebcf0b0bc4?auto=format&fit=crop&w=1600&q=84",
  },
  {
    k: "03",
    title: "The kitchen speaks.",
    body: "Smoke, spice, citrus and heat move from the pass to your table.",
    image:
      "https://images.unsplash.com/photo-1752095809291-e183b49e1e4b?auto=format&fit=crop&w=1600&q=84",
  },
  {
    k: "04",
    title: "You stay a little longer.",
    body: "Dessert, another pour and one last story before the night is done.",
    image:
      "https://images.unsplash.com/photo-1540337706094-da10342c93d8?auto=format&fit=crop&w=1600&q=84",
  },
];
export default function Experience() {
  const stage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 8]);
  return (
    <>
      <PageHero
        eyebrow="THE EXPERIENCE"
        title="Dinner should feel like <em>an occasion.</em>"
        text="A cinematic dining journey with a rhythm of arrival, discovery, flavour and the kind of ending that makes you check the calendar for your next visit."
        image="https://images.unsplash.com/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1800&q=84"
      />
      <section className="experience-stage" ref={stage}>
        <motion.div
          className="experience-still"
          style={{ scale, rotate, backgroundImage: `url(${scenes[0].image})` }}
        />
        <div className="experience-overlay">
          <span className="eyebrow">THE NIGHT IN FOUR MOVEMENTS</span>
          <h2>
            Arrive. <em>Discover.</em> Dine. Remember.
          </h2>
          <ArrowDown size={26} />
        </div>
      </section>
      <section className="scene-list">
        {scenes.map((scene, i) => (
          <section className="scene" key={scene.k}>
            <div className="scene-media">
              <img src={scene.image} alt={scene.title} loading="lazy" />
              <span>{scene.k}</span>
            </div>
            <div className="scene-copy">
              <span className="eyebrow">MOVEMENT {scene.k}</span>
              <h2>{scene.title}</h2>
              <p>{scene.body}</p>
              <div className="experience-detail">
                <span>
                  {i === 0 ? (
                    <Utensils size={17} />
                  ) : i === 1 ? (
                    <Sparkles size={17} />
                  ) : i === 2 ? (
                    <Wine size={17} />
                  ) : (
                    <Utensils size={17} />
                  )}
                </span>
                <p>
                  {i === 0
                    ? "Start with a welcome drink and let the menu set the pace."
                    : i === 1
                      ? "Our room is designed for long conversations and easy evenings."
                      : i === 2
                        ? "Explore bold Nigerian flavour alongside globally inspired plates."
                        : "Finish with a dessert, a final toast and a reason to come back."}
                </p>
              </div>
            </div>
          </section>
        ))}
      </section>
      <section className="section experience-close">
        <div className="container narrow">
          <SectionHeading
            align="center"
            eyebrow="MAKE IT YOURS"
            title="Choose your night. <em>We will set the table.</em>"
          />
          <div className="experience-actions">
            <Link to="/reservation" className="btn solid">
              Reserve a Table <ArrowRight size={16} />
            </Link>
            <Link to="/menu" className="btn outline">
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
