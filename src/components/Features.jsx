import { FEATURES } from '../utils/constants';
import * as Icons from 'react-icons/fa';
import './Features.css';

/**
 * Features Component
 * Displays 3-column grid of feature cards on desktop, 1-column on mobile
 * Features:
 * - Icon from react-icons
 * - Feature title and description
 * - Hover animation effect
 * - Responsive grid layout
 */
function Features() {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : <Icons.FaCheck />;
  };

  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Section Header */}
        <div className="features__header">
          <h2 className="features__title">Why Choose Us</h2>
          <p className="features__intro">
            Discover the powerful features designed to boost your productivity and accelerate your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features__grid">
          {FEATURES.map(feature => (
            <div key={feature.id} className="features__card">
              <div className="features__icon">
                {getIcon(feature.icon)}
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
