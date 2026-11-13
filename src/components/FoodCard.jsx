import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../store/AppContext";

export default function FoodCard({ item, index = 0 }) {
  const { addToCart, favorites, toggleFavorite, formatMoney } = useApp();
  const fav = favorites.includes(item.id);
  return (
    <motion.article
      className="food-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 6) * 0.04 }}
      whileHover={{ y: -8 }}
    >
      <div className="food-image-wrap">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="#151511"/><circle cx="400" cy="300" r="180" fill="#23231f" stroke="#c9a25f" stroke-width="6"/><circle cx="400" cy="300" r="125" fill="#0e0e0c"/><text x="400" y="288" fill="#e8d6b0" font-size="24" text-anchor="middle" font-family="Georgia,serif">ROYAL BITE</text><text x="400" y="325" fill="#aaa096" font-size="16" text-anchor="middle" font-family="Arial,sans-serif">Image loading</text></svg>`,
              );
          }}
        />
        <div className="food-image-shade" />
        <span className="origin-chip">{item.origin}</span>
        <button
          type="button"
          className={fav ? "favorite active" : "favorite"}
          onClick={() => toggleFavorite(item.id)}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={17} fill={fav ? "currentColor" : "none"} />
        </button>
        <button
          type="button"
          className="quick-add"
          onClick={() => addToCart(item.id)}
          aria-label={`Add ${item.name}`}
        >
          <Plus size={19} />
        </button>
      </div>
      <div className="food-card-body">
        <div className="food-meta">
          <span>{item.category.replace("-", " ")}</span>
          <b>{formatMoney(item.price)}</b>
        </div>
        <Link to={`/menu?item=${item.id}`}>
          <h3>{item.name}</h3>
        </Link>
        <p>{item.description}</p>
        <button
          type="button"
          className="text-action"
          onClick={() => addToCart(item.id)}
        >
          Add to order <Plus size={15} />
        </button>
      </div>
    </motion.article>
  );
}
