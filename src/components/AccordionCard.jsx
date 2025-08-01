import React from "react";

export default function 
AccordionCard({ title, description }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="accordion-card">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="arrow">{isOpen ? "▾" : "▸"}</span>
      </button>

      {isOpen && <p className="accordion-content">{description}</p>}
    </div>
  );
}
