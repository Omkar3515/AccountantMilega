import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import Statistics from "./components/home/Statistics";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HowItWorks from "./components/home/HowItWorks";
import CTASection from "./components/home/CTASection";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <>
      <Navbar />
      
      <HeroSection />

      <Statistics />

      <WhyChooseUs />

      <HowItWorks />

      <CTASection />

      <Footer />
    </>
  );
}

export default App;