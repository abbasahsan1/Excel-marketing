import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold">Excel Marketing Pvt Ltd</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Your trusted partner in finding premium residential and commercial properties 
                across Pakistan. Making property dreams come true since 2008.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "All Projects", href: "/projects" },
                  { label: "Residential", href: "/residential" },
                  { label: "Commercial", href: "/commercial" },
                  { label: "Company Profile", href: "/company-profile" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <div className="space-y-2">
                {[
                  "Property Sales",
                  "Real Estate Investment",
                  "Property Management",
                  "Legal Documentation",
                  "Site Visits & Tours",
                  "Market Analysis",
                ].map((service) => (
                  <div key={service} className="text-background/80 text-sm">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Connected</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-background/80">
                  <Phone className="h-4 w-4" />
                  <a href="tel:03348737244" className="hover:text-background transition-colors">
                    03348737244
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-background/80">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:waheedfarooki@gmail.com" className="hover:text-background transition-colors">
                    waheedfarooki@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-sm text-background/80">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Pakistan</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-2">
                <h4 className="font-medium">Property Updates</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  />
                  <Button variant="luxury" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Excel Marketing Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <Link to="/privacy" className="hover:text-background transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-background transition-smooth">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-background transition-smooth">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;