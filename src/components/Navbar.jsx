import { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_TEXT } from '../utils/constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

/**
 * Navbar Component
 * Responsive navigation bar with mobile hamburger menu
 * Features:
 * - Sticky positioning with scroll shadow
 * - Mobile hamburger menu that slides in from right
 * - Active section highlighting
 * - Smooth scroll to sections
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for sticky shadow and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setHasScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => {
        const element = document.getElementById(link.id);
        return { id: link.id, element };
      });

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when link is clicked
  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${hasScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <div className="navbar__logo">
          <a href="#home" onClick={() => handleNavClick('home')} className="navbar__logo-text">
            {LOGO_TEXT}
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <button className="btn btn-primary navbar__cta">Get Started</button>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="navbar__overlay" onClick={() => setIsMenuOpen(false)} />}
      <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
        <ul className="navbar__menu-links">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__menu-link ${activeSection === link.id ? 'navbar__menu-link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary navbar__menu-cta">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
