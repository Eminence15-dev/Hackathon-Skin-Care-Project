import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import SiteFooter from "./components/SiteFooter";
import SkinAnalysis from "./components/SkinAnalysis";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="home">
        <HeroSection />
        <SkinAnalysis />
        <ProductsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
