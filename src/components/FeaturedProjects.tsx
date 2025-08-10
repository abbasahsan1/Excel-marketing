import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

const FeaturedProjects = () => {
  // Get featured projects (first 6 projects)
  const featuredProjects = projectsData.slice(0, 6);

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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/projects">
            <Button variant="hero" size="lg">
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;