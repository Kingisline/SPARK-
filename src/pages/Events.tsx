import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      type: "Workshop",
      title: "Startup Pitch Perfect",
      description: "Learn the art of crafting a compelling startup pitch that captivates investors and wins funding. This workshop covers storytelling, presentation skills, and Q&A strategies.",
      date: "Oct 26, 2024",
      time: "2:00 PM - 4:00 PM",
      category: "workshop"
    },
    {
      id: 2,
      type: "Speaker Session",
      title: "From Dorm Room to Boardroom",
      description: "Hear from Alex Chen, a successful entrepreneur who turned a college project into a thriving business. Gain insights into their journey, challenges, and key lessons learned.",
      date: "Nov 12, 2024",
      time: "6:00 PM - 7:00 PM",
      category: "speaker"
    },
    {
      id: 3,
      type: "Networking",
      title: "Connect & Collaborate Mixer",
      description: "Expand your network with fellow students, mentors, and industry professionals. This mixer is the perfect opportunity to exchange ideas, find collaborators, and explore potential ventures.",
      date: "Nov 28, 2024",
      time: "7:00 PM - 9:00 PM",
      category: "networking"
    },
    {
      id: 4,
      type: "Workshop",
      title: "Digital Marketing Mastery",
      description: "Master the fundamentals of digital marketing for startups. Learn about social media strategy, content creation, SEO basics, and building your brand online.",
      date: "Dec 5, 2024",
      time: "3:00 PM - 5:00 PM",
      category: "workshop"
    },
    {
      id: 5,
      type: "Speaker Session",
      title: "Funding Your Vision",
      description: "Join venture capitalist Maria Santos as she shares insights on securing investment, understanding equity, and what investors really look for in early-stage startups.",
      date: "Dec 15, 2024",
      time: "5:30 PM - 6:30 PM",
      category: "speaker"
    },
    {
      id: 6,
      type: "Workshop",
      title: "Building MVP in a Weekend",
      description: "Learn rapid prototyping techniques to build a minimum viable product quickly. This hands-on workshop covers lean methodology, user testing, and iterative development.",
      date: "Jan 18, 2025",
      time: "1:00 PM - 6:00 PM",
      category: "workshop"
    }
  ];

  const getEventColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "workshop":
        return "bg-blue-100 text-blue-800";
      case "speaker session":
        return "bg-green-100 text-green-800";
      case "networking":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in-up">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our exciting lineup of workshops, speaker sessions, and networking opportunities designed to fuel your entrepreneurial journey.
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search events..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Workshops</Button>
              <Button variant="outline" size="sm">Speakers</Button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <Card key={event.id} className="card-hover slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getEventColor(event.type)}>{event.type}</Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <Button variant="hero" className="btn-animated">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="default" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;