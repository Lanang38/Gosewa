import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Recommendations from "./components/Recommendations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BestFeature from "./components/BestFeature";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Recommendations />
      <BestFeature />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
