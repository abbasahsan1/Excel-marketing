import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedLocations from "@/components/FeaturedLocations";
import FeaturedLocationsWidget from "@/components/FeaturedLocationsWidget";
import FeaturedProjects from "@/components/FeaturedProjects";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedLocations />
      <FeaturedLocationsWidget />
      <FeaturedProjects />
      <CompanyProfileSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
