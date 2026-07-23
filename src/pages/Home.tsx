import HeroSection from "../components/home/HeroSection";
import Statistics from "../components/home/Statistics";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Statistics />

      <WhyChooseUs />

      <HowItWorks />

      <CTASection />

      <Footer />
    </>
  );
};

export default Home;