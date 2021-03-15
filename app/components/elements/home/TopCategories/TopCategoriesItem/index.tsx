import React from "react";

export default function TopCategoriesItem() {
  return (
    <div className="skill-card">
      <header className="skill-card__header">
        <img
          className="skill-card__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
          alt="HTML5 Logo"
        />
      </header>
      <section className="skill-card__body">
        <h2 className="skill-card__title">html</h2>
        <ul className="skill-card__knowledge">
          <li>HTML5</li>
          <li>Sémantique</li>
          <li>SVG</li>
          <li>Canvas</li>
        </ul>
      </section>
    </div>
  );
}
