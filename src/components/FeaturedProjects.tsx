import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Royal Gardens Residency",
      location: "Islamabad, Pakistan",
      type: "Residential",
      priceRange: "PKR 50L - 1.5Cr",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      beds: "3-4",
      baths: "2-3",
      area: "1200-1800 sq ft",
      status: "Available",
      featured: true
    },
    {
      id: 2,
      title: "Metro Commercial Plaza",
      location: "Karachi, Pakistan",
      type: "Commercial", 
      priceRange: "PKR 2Cr - 5Cr",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      beds: "Office Spaces",
      baths: "Multiple",
      area: "800-2000 sq ft",
      status: "New Launch",
      featured: true
    },
    {
      id: 3,
      title: "Green Valley Plots", 
      location: "Lahore, Pakistan",
      type: "Plots",
      priceRange: "PKR 25L - 80L",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop",
      beds: "Build to Suit",
      baths: "N/A",
      area: "5-10 Marla",
      status: "Limited Available",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "success";
      case "New Launch": return "default";
      case "Limited Available": return "warning";
      default: return "secondary";
    }
  };

  return (
    <section className="py-20 bg-neutral-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Properties
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Premium Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of residential, commercial, and investment properties 
            across Pakistan's prime locations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elevated transition-smooth overflow-hidden border-0 bg-background">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant={getStatusColor(project.status)} className="shadow-sm">
                    {project.status}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-luxury-gold text-foreground shadow-sm">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="shadow-sm">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Details */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary mb-4">
                    {project.priceRange}
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-border">
                  <div className="text-center">
                    <Bed className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">Beds</div>
                    <div className="text-sm font-medium">{project.beds}</div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">Baths</div>
                    <div className="text-sm font-medium">{project.baths}</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">Area</div>
                    <div className="text-sm font-medium">{project.area}</div>
                  </div>
                </div>

                {/* Action Button */}
                <Button variant="outline" className="w-full group/btn">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Projects
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;