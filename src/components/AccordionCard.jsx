import React, { useState } from "react";

export default function AccordionCard({ title, description }) {
  const [isOpen, setIsOpen] = useState(false); // 👈 LOCAL state

  return (
    <div className="accordion-card">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="arrow">{isOpen ? "⌄" : "›"}</span>
        <h4 className="title">{title}</h4>
      </button>

      {isOpen && (
        <p className="accordion-content">
          {description}
        </p>
      )}
    </div>
  );
}
