import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">SPARK</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Igniting the next generation of entrepreneurs through collaboration, 
              innovation, and hands-on experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Workshops</span></li>
              <li><span className="text-muted-foreground">Networking Events</span></li>
              <li><span className="text-muted-foreground">Mentorship</span></li>
              <li><span className="text-muted-foreground">Startup Incubator</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">spark@university.edu</span></li>
              <li><span className="text-muted-foreground">+91 6383424265</span></li>
              <li><span className="text-muted-foreground">N BLOCK,</span></li>
              <li><span className="text-muted-foreground">SVCET Campus</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SPARK Entrepreneurship Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};