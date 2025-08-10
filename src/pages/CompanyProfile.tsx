import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, Mail, Building, Users, Target, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CompanyProfile = () => {
  const services = [
    {
      icon: Building,
      title: "High-Quality Properties",
      description: "Deliver high-quality residential and commercial properties"
    },
    {
      icon: Target,
      title: "Maximum Value",
      description: "Maximize client satisfaction and investment value"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Build long-term trust through transparency and service"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Innovate in property solutions and market strategies"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Ensure sustainable growth and strong market presence"
    }
  ];

  const directors = [
    {
      name: "Qaiser ul Haq",
      role: "Director Sales",
      image: "placeholder"
    },
    {
      name: "Farooq Sultan",
      role: "Director Marketing",
      image: "placeholder"
    },
    {
      name: "Ashraf Nazir",
      role: "Director Legal",
      image: "placeholder"
    },
    {
      name: "Abdullah Farooqui",
      role: "Director Technical",
      image: "placeholder"
    }
  ];

  const experiences = [
    { name: "DHA", logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop" },
    { name: "Bahria Town", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop" },
    { name: "Capital Smart City", logo: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=200&h=200&fit=crop" },
    { name: "Rudn Enclave", logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop" },
    { name: "New City", logo: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=200&fit=crop" },
    { name: "New City Paradise", logo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=200&fit=crop" },
    { name: "Faisal Town", logo: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&h=200&fit=crop" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Company Profile | Excel Marketing Pvt Ltd</title>
        <meta name="description" content="Excel Marketing Pvt Ltd - We don't just sell, we connect, create, and convert potential into performance. Leading property management, sales, marketing, and leasing services." />
      </Helmet>

      <Navigation />

      {/* Hero Section with Contact */}
      <section className="bg-gradient-hero py-20 text-primary-foreground relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-4xl mb-8 lg:mb-0">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link to="/" className="hover:text-primary-foreground/80 transition-colors">
                      <Button variant="link" className="text-primary-foreground p-0">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Home
                      </Button>
                    </Link>
                  </li>
                  <li className="text-primary-foreground/60">/</li>
                  <li className="text-primary-foreground/60">Company Profile</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">Excel Marketing Pvt Ltd</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
                "WE DON'T JUST SELL — WE CONNECT, CREATE, AND CONVERT POTENTIAL INTO PERFORMANCE."
              </p>
            </div>

            {/* Contact Details */}
            <Card className="lg:w-80 bg-background/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:03348737244" className="text-foreground hover:text-primary transition-colors">
                      03348737244
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:waheedfarooki@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      waheedfarooki@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Waheed ur Rehman Farooqui, CEO of Excel Marketing Pvt Ltd, leads a specialized team in property management, sales, marketing, and leasing. The company is dedicated to exceptional results, seamless transactions, and building long-term relationships with property owners, tenants, and buyers. Whether the client is buying, selling, renting, or managing property, Excel Marketing provides full guidance to achieve their real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Leadership Team</h2>
          </div>

          {/* CEO Card */}
          <Card className="mb-12 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-80 bg-muted flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
              <CardContent className="md:w-2/3 p-8">
                <Badge className="mb-4 bg-luxury-gold text-foreground">Chief Executive Officer</Badge>
                <h3 className="text-3xl font-bold mb-4">Waheed ur Rehman Farooqui</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Leading Excel Marketing Pvt Ltd with a vision for excellence in property management, sales, marketing, and leasing. Dedicated to building long-term relationships and delivering exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:03348737244" className="flex items-center text-primary hover:underline">
                    <Phone className="h-4 w-4 mr-2" />
                    03348737244
                  </a>
                  <a href="mailto:waheedfarooki@gmail.com" className="flex items-center text-primary hover:underline">
                    <Mail className="h-4 w-4 mr-2" />
                    waheedfarooki@gmail.com
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Directors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elevated transition-smooth">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{director.role}</Badge>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{director.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-20 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have extensive experience working with Pakistan's premier residential and commercial developments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth cursor-pointer overflow-hidden">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={experience.logo} 
                    alt={experience.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {experience.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
