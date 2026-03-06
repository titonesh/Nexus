import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './assets/styles/global.css'

/**
 * App Component
 * Main application component that assembles all sections
 * Layout:
 * - Navbar (sticky at top)
 * - Hero section
 * - Features section
 * - About section
 * - Testimonials section
 * - Contact form
 * - Footer
 */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
