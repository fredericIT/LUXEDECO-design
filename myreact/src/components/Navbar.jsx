import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = ['Home', 'Designs', 'Products', 'Services', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" id="nav-logo">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">
            LUXE<span className="gold-text">DECO</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" id="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="navbar__link" id={`nav-link-${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#designs" className="navbar__cta" id="nav-cta">Book a Consultation</a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} id="nav-mobile-menu">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#designs" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
          Book a Consultation
        </a>
      </div>
    </nav>
  );
}
