"use client";

import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#videos", label: "Videos" },
  { href: "#course", label: "Course" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header" data-header>
      <a className="brand" href="#home" aria-label="Trading Kannada home">
        <span className="brand-mark">TK</span>
        <span>
          <strong>Trading Kannada</strong>
          <small>Learn trading in Kannada</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-nav" className={`site-nav${isOpen ? " is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="https://www.youtube.com/c/TRADINGKANNADA" target="_blank" rel="noreferrer">
        Watch YouTube
      </a>
    </header>
  );
}
