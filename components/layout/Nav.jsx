"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Améliorer le menu burger (utiliser un Portal pour l'overlay, bloquer le scroll du body)
  // TODO: Harmoniser la langue entre la Nav (en) et les titres de sections (fr)

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#about", label: "About me" },
    { href: "#projets", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-row gap-5 items-center">
        {navLinks.map((link, index) => (
          <div key={link.href} className="flex flex-row gap-5 items-center">
            <a href={link.href} className="hover:opacity-70 transition-opacity">
              {link.label}
            </a>
            {index < navLinks.length - 1 && (
              <p className="text-0.1xl">•</p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-black dark:text-white relative z-110"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Background overlay to close menu */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-100" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="lg:hidden fixed top-16 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col gap-6 z-105 animate-in fade-in zoom-in duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-black dark:text-white border-b border-black/5 dark:border-white/5 pb-2 active:opacity-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
