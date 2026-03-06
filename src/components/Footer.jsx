import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY_NAME } from '../utils/constants';
import * as Icons from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component
 * Multi-column footer with links, social media, and back-to-top button
 * Features:
 * - Logo and company description
 * - 4 columns of links on desktop, stacked on mobile
 * - Social media icons
 * - Back to top button
 * - Copyright information
 */
function Footer() {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Column 1: Logo and Description */}
        <div className="footer__column">
          <h3 className="footer__logo">{COMPANY_NAME}</h3>
          <p className="footer__description">
            Empowering teams to build better products faster with cutting-edge tools and seamless workflows.
          </p>
          {/* Social Links */}
          <div className="footer__social">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                title={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Product Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Product</h4>
          <ul className="footer__links">
            {FOOTER_LINKS.product.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Resources</h4>
          <ul className="footer__links">
            {FOOTER_LINKS.resources.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Company</h4>
          <ul className="footer__links">
            {FOOTER_LINKS.company.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <div className="footer__copyright">
            <p>&copy; {getCurrentYear()} {COMPANY_NAME}. All rights reserved.</p>
            <div className="footer__legal-links">
              {FOOTER_LINKS.legal.map((link, index) => (
                <a key={index} href={link.url} className="footer__legal-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
