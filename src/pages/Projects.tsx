import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">All Projects</h1>
          <p className="text-center text-muted-foreground mb-12">
            Explore our complete portfolio of premium properties
          </p>
          {/* Projects content will be added here */}
          <div className="text-center py-20">
            <p className="text-muted-foreground">Projects listing coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;