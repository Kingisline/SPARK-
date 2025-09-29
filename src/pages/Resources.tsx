import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Lightbulb, TrendingUp, FileText, Video } from "lucide-react";
import ComingSoonFeature from "@/components/ComingSoonFeature";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Learning Materials",
      description: "Comprehensive guides, articles, and tutorials on entrepreneurship fundamentals.",
      items: [
        "Startup Basics Guide",
        "Business Model Canvas Template",
        "Market Research Toolkit",
        "Financial Planning Workbook"
      ]
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with experienced entrepreneurs and industry professionals.",
      items: [
        "1-on-1 Mentor Matching",
        "Group Mentorship Sessions",
        "Industry Expert Network",
        "Peer Support Groups"
      ]
    },
    {
      icon: Lightbulb,
      title: "Idea Development",
      description: "Tools and frameworks to help refine and validate your business ideas.",
      items: [
        "Idea Validation Checklist",
        "Customer Discovery Framework",
        "Competitive Analysis Template",
        "Problem-Solution Fit Guide"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth & Scaling",
      description: "Resources for taking your startup to the next level.",
      items: [
        "Growth Hacking Strategies",
        "Funding Options Guide",
        "Team Building Resources",
        "Partnership Development"
      ]
    }
  ];

  const featuredResources = [
    {
      type: "Guide",
      title: "The Complete Startup Handbook",
      description: "A comprehensive 50-page guide covering everything from ideation to exit strategy.",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      type: "Video Series",
      title: "Entrepreneurship 101",
      description: "12-part video series featuring successful entrepreneurs sharing their stories.",
      icon: Video,
      downloadUrl: "#"
    },
    {
      type: "Template",
      title: "Pitch Deck Template",
      description: "Professional pitch deck template used by funded startups.",
      icon: FileText,
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in-up">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our curated collection of tools, guides, and resources designed to support your entrepreneurial journey from ideation to execution.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={resource.title} className="card-hover slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {resource.type}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <ComingSoonFeature>
                  <Button variant="hero" className="btn-animated">
                    Download Now
                  </Button>
                  </ComingSoonFeature>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={category.title} className="card-hover slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you find the right resources for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.gg/YKg6AYR5">
            <Button variant="hero" size="lg" className="btn-animated pulse-glow">
              Contact Our Team
            </Button>
            </a>
            <ComingSoonFeature>
            <Button variant="outline" size="lg" className="btn-animated">
              Browse All Resources
            </Button>
            </ComingSoonFeature>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;