import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Recommendations from './components/Recommendations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BestFeature from './components/BestFeature';
import VideoSection from './components/VideoSection';
import TopBar from './components/TopBar';
import NewsletterForm from './components/NewsletterForm';

function App() {
  return (
    <ReactLenis root>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <Features />
        <Recommendations />
        <BestFeature />
        <Testimonials />
        <VideoSection />
        <FAQ />
        <TopBar />
        <NewsletterForm />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
