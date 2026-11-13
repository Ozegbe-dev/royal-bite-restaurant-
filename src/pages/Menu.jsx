import { useEffect, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import FoodCard from "../components/FoodCard";
import { categories, menuItems } from "../data";
import { useApp } from "../store/AppContext";
import { div } from "framer-motion/client";

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const { formatMoney, favorites, toggleFavorite, addToCart } = useApp();
  const [filter, setFilter] = useState(params.get("cat") || "all");
  const [query, setQuery] = useState(params.get("q") || "");
  const [showFavs, setShowFavs] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setFilter(hash);
      setTimeout(
        () =>
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        80,
      );
    }
  }, [location.hash]);
  useEffect(() => {
    const id = Number(params.get("item"));
    if (id) setSelected(menuItems.find((item) => item.id === id) || null);
  }, [params]);

  const items = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          (filter === "all" || item.category === filter) &&
          (!showFavs || favorites.includes(item.id)) &&
          (!query ||
            `${item.name} ${item.description} ${item.origin}`
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [filter, query, showFavs, favorites],
  );
  const setFilterAndParams = (value) => {
    setFilter(value);
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value === "all") next.delete("cat");
      else next.set("cat", value);
      return next;
    });
  };

  return (
    <>
      <PageHero
        eyebrow="THE COMPLETE TABLE"
        title="Choose your <em>royal.</em>"
        text="Nigerian classics, international favourites and Royal Bite signatures — prepared for dine-in, pickup or delivery."
        image="https://images.unsplash.com/photo-1664993101841-036f189719b6?auto=format&fit=crop&w=1600&q=84"
        compact  
      />
      <section className="menu-page section">
        <div className="container">
          <div className="menu-toolbar">
            <div className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setParams((prev) => {
                    const n = new URLSearchParams(prev);
                    e.target.value ? n.set("q", e.target.value) : n.delete("q");
                    return n;
                  });
                }}
                placeholder="Search dishes, ingredients or style..."
                aria-label="Search menu"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setParams((prev) => {
                      const n = new URLSearchParams(prev);
                      n.delete("q");
                      return n;
                    });
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              type="button"
              className={showFavs ? "filter-btn active" : "filter-btn"}
              onClick={() => setShowFavs(!showFavs)}
            >
              <Heart size={16} fill={showFavs ? "currentColor" : "none"} />{" "}
              Favorites <span>{favorites.length}</span>
            </button>
          </div>
          <div className="category-pills" id="main-meals">
            {[
              ["all", "All dishes"],
              ...categories.map((c) => [c.id, c.label]),
            ].map(([id, label]) => (
              <button
                type="button"
                key={id}
                className={filter === id ? "active" : ""}
                onClick={() => setFilterAndParams(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="menu-intro-line">
            <div>
              <span className="eyebrow">
                {filter === "all"
                  ? "OUR FULL COLLECTION"
                  : categories
                      .find((c) => c.id === filter)
                      ?.eyebrow?.toUpperCase()}
              </span>
              <h2>
                {showFavs
                  ? "Your favourites"
                  : filter === "all"
                    ? "96 ways to make the table memorable."
                    : categories.find((c) => c.id === filter)?.label}
              </h2>
            </div>
            <p>
              {items.length} {items.length === 1 ? "dish" : "dishes"} available
            </p>
          </div>
          {items.length ? (
            <div className="menu-grid">
              {items.map((item, i) => (
                <FoodCard item={item} key={item.id} index={i} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Sparkles size={28} />
              <h3>Nothing on this shelf yet.</h3>
              <p>
                Try another search or category. Your favourites appear here once
                you save a dish.
              </p>
              <button
                type="button"
                className="btn solid"
                onClick={() => {
                  setShowFavs(false);
                  setFilterAndParams("all");
                  setQuery("");
                }}
              >
                Reset menu
              </button>
            </div>
          )}
        </div>
      </section>
      {selected && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="dish-modal"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close icon-btn"
              type="button"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <img src={selected.image} alt={selected.name} />
            <div className="dish-modal-content">
              <span className="eyebrow">
                {selected.origin} · {selected.category.replace("-", " ")}
              </span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <strong>{formatMoney(selected.price)}</strong>
              <button
                type="button"
                className="btn solid"
                onClick={() => {
                  addToCart(selected.id);
                  setSelected(null);
                }}
              >
                <Plus size={17} /> Add to order
              </button>
              <button
                type="button"
                className={
                  favorites.includes(selected.id)
                    ? "favorite-line active"
                    : "favorite-line"
                }
                onClick={() => toggleFavorite(selected.id)}
              >
                <Heart
                  size={16}
                  fill={
                    favorites.includes(selected.id) ? "currentColor" : "none"
                  }
                />{" "}
                {favorites.includes(selected.id)
                  ? "Saved to favourites"
                  : "Save to favourites"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

