import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const executives = [
    {
      name: "Yuvaraj R",
      role: "President",
      image: "/api/placeholder/150/150",
      initials: "YR"
    },
    {
      name: "Maha Lakshmi K",
      role: "Vice President",
      image: "/api/placeholder/150/150",
      initials: "ML"
    },
    {
      name: "Gokul",
      role: "Marketing Director",
      image: "/api/placeholder/150/150",
      initials: "GG"
    },
    {
      name: "SenthilRajan PR",
      role: "Staff Co-Ordinator",
      image: "/api/placeholder/150/150",
      initials: "SR"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in-up">
          <h1 className="text-5xl font-bold mb-6">About <span className="gradient-text">SPARK</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fostering the next generation of entrepreneurs through collaboration, innovation, and hands-on experience.
          </p>
        </div>

        {/* Story, Vision, Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="card-hover">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2025, SPARK began as a small student group at SVCET. We envisioned a vibrant community for aspiring entrepreneurs to learn, connect, and grow. Today, we're a thriving hub of innovation, empowering students to transform their bold ideas into impactful ventures.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the premier catalyst for student-led innovation at SVCET, cultivating a dynamic ecosystem where every student has the opportunity to explore their entrepreneurial potential.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To equip students with the essential resources, expert mentorship, and supportive community needed to develop their skills, build their networks, and successfully launch their own ventures.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Executive Board */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Meet the Executive Board</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executives.map((exec, index) => (
            <Card key={exec.name} className="text-center card-hover" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={exec.image} alt={exec.name} />
                  <AvatarFallback className="text-lg bg-primary text-primary-foreground">{exec.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{exec.name}</h3>
                <p className="text-primary font-medium">{exec.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community of driven individuals. Gain access to exclusive workshops, mentorship from industry leaders, and the resources you need to bring your vision to life.
          </p>
          <a href="https://discord.gg/YKg6AYR5">
          <Button variant="hero" size="lg" className="btn-animated pulse-glow">
            Become a Member
          </Button>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;