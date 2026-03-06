/* Company Information */
export const COMPANY_NAME = "Nexus";
export const LOGO_TEXT = "NEXUS";

/* Navigation Links */
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" }
];

/* Hero Section Content */
export const HERO_CONTENT = {
  headline: "Build Better Products Faster",
  subheadline: "Empower your team with cutting-edge tools and seamless workflows designed for modern product development.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Learn More",
  image: "/hero-image.svg"
};

/* Features */
export const FEATURES = [
  {
    id: 1,
    icon: "FaRocket",
    title: "Lightning Fast Performance",
    description: "Deploy your product in seconds with our optimized infrastructure. Your users will never wait."
  },
  {
    id: 2,
    icon: "FaShield",
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, SOC 2, and ISO 27001 standards built-in."
  },
  {
    id: 3,
    icon: "FaChartLine",
    title: "Real-time Analytics",
    description: "Track every metric that matters with intuitive dashboards and detailed reporting capabilities."
  },
  {
    id: 4,
    icon: "FaUsers",
    title: "Team Collaboration",
    description: "Bring your team together with real-time collaboration features and seamless integrations."
  },
  {
    id: 5,
    icon: "FaCog",
    title: "Easy Integration",
    description: "Connect with 500+ apps using our powerful API and pre-built integrations."
  },
  {
    id: 6,
    icon: "FaHeadset",
    title: "24/7 Support",
    description: "Get help whenever you need it from our dedicated support team available round the clock."
  }
];

/* About Section */
export const ABOUT_CONTENT = {
  title: "Our Story",
  description: "Founded in 2015, Nexus has been at the forefront of digital transformation, helping thousands of companies build better products and serve their customers more effectively.",
  highlights: [
    "500+ happy clients worldwide",
    "10+ years of industry experience",
    "99.9% uptime guarantee",
    "Award-winning platform"
  ],
  stats: [
    { label: "Clients Served", value: "500+" },
    { label: "Team Members", value: "150+" },
    { label: "Years Active", value: "10+" },
    { label: "Countries", value: "45+" }
  ],
  ctaLabel: "Start Free Trial"
};

/* Testimonials */
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO at TechFlow",
    quote: "Nexus transformed how our team works. We increased productivity by 40% within the first month.",
    rating: 5,
    image: "/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager at DataViz",
    quote: "The best platform I've ever used. Customer support is exceptional, and the features are incredibly intuitive.",
    rating: 5,
    image: "/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Founder of DevTools Inc",
    quote: "Outstanding solution. It's reliable, scalable, and has all the features we need to grow.",
    rating: 5,
    image: "/avatar-3.jpg"
  }
];

/* Contact Information */
export const CONTACT_INFO = {
  email: "hello@nexus.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Street, San Francisco, CA 94102",
  supportEmail: "support@nexus.com"
};

/* Social Links */
export const SOCIAL_LINKS = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com",
    icon: "FaTwitter"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "FaLinkedin"
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    icon: "FaGithub"
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com",
    icon: "FaFacebook"
  }
];

/* Footer Links */
export const FOOTER_LINKS = {
  product: [
    { label: "Features", url: "#features" },
    { label: "Pricing", url: "#pricing" },
    { label: "Security", url: "#" },
    { label: "Roadmap", url: "#" }
  ],
  resources: [
    { label: "Documentation", url: "#" },
    { label: "Blog", url: "#" },
    { label: "Support", url: "#" },
    { label: "Community", url: "#" }
  ],
  company: [
    { label: "About", url: "#about" },
    { label: "Careers", url: "#" },
    { label: "Press", url: "#" },
    { label: "Contact", url: "#contact" }
  ],
  legal: [
    { label: "Privacy Policy", url: "#" },
    { label: "Terms of Service", url: "#" },
    { label: "Cookie Policy", url: "#" },
    { label: "GDPR", url: "#" }
  ]
};

/* Form Validation Messages */
export const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  minLength: "Must be at least {min} characters",
  pattern: "Invalid format"
};

/* API Endpoints */
export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter"
};
