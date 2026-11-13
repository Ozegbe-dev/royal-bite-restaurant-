import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  compact = false,
}) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <div
        className="page-hero-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          {text}
        </motion.p>
        <ArrowDownRight className="hero-arrow" size={36} />
      </div>
    </section>
  );
}
