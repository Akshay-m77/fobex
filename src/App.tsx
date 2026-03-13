import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Features from './components/Features'
import Process from './components/Process'
import Results from './components/Results'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
// import Insights from './components/Insights'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { WhatsAppIcon } from './components/ui/Icons'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Vision />
        <Results />
        <Industries />
        <Testimonials />
        {/* <Insights /> */}
        <CTA />
        <FAQ />
      </main>
      <Footer />

      {/* Static Floating WhatsApp Button */}
      <a
        href="https://wa.me/+919539217426"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </>
  )
}

export default App
