import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Lightbulb, TrendingUp, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollingImageColumn from "@/components/ScrollingImageColumn";
import { useEffect, useRef, useState } from "react";
import NeonSmokeyCursor from "@/components/NeonSmokeyCursor";
import yuvaraj from "../../public/yuvaraj.jpg"
import srini from '../../public/srinivasan.jpg'



// --- CARD COMPONENT (Renamed to SparkCard to fix TypeScript error) ---
interface SparkCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  onClick?: () => void;
}

interface SparkCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface SparkCardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SparkCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface SparkCardIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

const SparkCard: React.FC<SparkCardProps> & {
  Header: React.FC<SparkCardHeaderProps>;
  Content: React.FC<SparkCardContentProps>;
  Footer: React.FC<SparkCardFooterProps>;
  Icon: React.FC<SparkCardIconProps>;
} = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'md',
  clickable = false,
  onClick 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    outlined: 'bg-transparent border-2 border-gray-300 hover:border-gray-400',
    elevated: 'bg-white shadow-lg hover:shadow-xl border-0',
    filled: 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 hover:from-blue-100 hover:to-indigo-200'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const clickableClasses = clickable 
    ? 'cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]' 
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${clickableClasses}
    ${className}
  `.trim();

  return (
    <div 
      className={combinedClasses}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === 'Enter' && onClick?.() : undefined}
    >
      {children}
    </div>
  );
};

const SparkCardHeader: React.FC<SparkCardHeaderProps> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const SparkCardContent: React.FC<SparkCardContentProps> = ({ children, className = '' }) => (
  <div className={`mb-4 last:mb-0 ${className}`}>
    {children}
  </div>
);

const SparkCardFooter: React.FC<SparkCardFooterProps> = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

const SparkCardIcon: React.FC<SparkCardIconProps> = ({ icon: Icon, className = '', size = 24 }) => (
  <Icon size={size} className={`text-gray-600 ${className}`} />
);

SparkCard.Header = SparkCardHeader;
SparkCard.Content = SparkCardContent;
SparkCard.Footer = SparkCardFooter;
SparkCard.Icon = SparkCardIcon;


const Avatar = ({ children, className = '' }) => <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>;
const AvatarImage = ({ src, alt }) => <img src={src} alt={alt} className="aspect-square h-full w-full object-cover" />;
const AvatarFallback = ({ children, className = '' }) => <span className={`flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white font-bold ${className}`}>{children}</span>;

const Index = () => {
  const [activeOffering, setActiveOffering] = useState(0);
  const offerSectionRef = useRef(null);

  const offerings = [
    {
      title: "Workshops & Seminars",
      description: "Learn from industry experts and experienced entrepreneurs through interactive workshops and seminars.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3"
    },
    {
      title: "Networking Events",
      description: "Connect with fellow students, alumni, and potential investors at our regular networking events.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib-rb-4.0.3"
    },
    {
      title: "Idea Incubator",
      description: "Develop your ideas into viable businesses with guidance from mentors and access to resources.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3"
    }
  ];

  // Effect for handling the scroll-based animation of the "What We Offer" section
  useEffect(() => {
    const handleScroll = () => {
        const section = offerSectionRef.current;
        if (!section) return;

        const { top, height } = section.getBoundingClientRect();
        // Start progress when the top of the section is a third of the way down the viewport
        const start = window.innerHeight * 0.33;
        // End progress when the bottom of the section is a third of the way up the viewport
        const end = height - window.innerHeight * 0.66;
        
        const effectiveTop = top - start;
        const scrollableHeight = end + start;

        let progress = -effectiveTop / scrollableHeight;
        progress = Math.max(0, Math.min(1, progress));

        const newIndex = Math.floor(progress * (offerings.length));
        
        if (newIndex < offerings.length) {
            setActiveOffering(newIndex);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offerings.length]);


  const testimonials = [
    {
      name: "Senthilrajan PR",
      role: "Staff coorinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      // image: yuvaraj,
      quote: "The Entrepreneurship Club has been instrumental in helping me develop my business idea. The workshops and mentoring were invaluable.",
      initials: "PR"
    },
    {
      name: "Gokul",
      role: "AIDS Student",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
      quote: "I've met so many inspiring people and learned so much about entrepreneurship through the club's events and activities.",
      initials: "GG"
    },
    {
      name: "Srinivasan M",
      role: "Student Entrepreneurs",
      image: srini,
      quote: "The Idea Incubator program provided us with the resources and support we needed to launch our startup. We're incredibly grateful.",
      initials: "TI"
    }
  ];

  const galleryImages = {
    col1: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60",
    ],
    col2: [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1531297484001-80022131c5a9?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60",
    ],
    col3: [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600880292210-f78a72a49755?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60",
    ],
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <NeonSmokeyCursor />
      <style>{`
        body, html {
          cursor: none;
        }
        .cursor-glow {
          position: fixed;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, rgba(96, 165, 250, 0) 65%);
          filter: blur(12px);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.1s ease-out;
        }
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        .perspective-container {
            perspective: 1000px;
        }
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>

      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-auto md:h-[calc(100vh-4rem)] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10"></div>
          <div className="container mx-auto px-6 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                  <div className="z-20 text-center lg:text-left py-16 lg:py-0">
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                          Ignite Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Entrepreneurial</span> Spirit
                      </h1>
                      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                          Join a vibrant community of student innovators, creators, and leaders. Learn, collaborate, and launch your ideas.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                          <a href="https://discord.gg/YKg6AYR5"><Button variant="hero" size="lg">Join Us Now</Button></a>
                          <Button variant="outline" size="lg"><Link to="/events">Explore Events</Link></Button>
                      </div>
                  </div>
                  <div className="hidden lg:flex absolute top-0 right-0 h-full w-1/2 overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10"></div>
                      <div className="flex gap-4 h-full w-full p-4">
                          <div className="w-1/3 animate-scroll-up" style={{ animationDuration: '40s' }}>
                              <ScrollingImageColumn images={galleryImages.col1} />
                          </div>
                          <div className="w-1/3 animate-scroll-up" style={{ animationDuration: '50s' }}>
                              <ScrollingImageColumn images={galleryImages.col2} />
                          </div>
                          <div className="w-1/3 animate-scroll-up" style={{ animationDuration: '35s' }}>
                              <ScrollingImageColumn images={galleryImages.col3} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To foster a culture of innovation and entrepreneurship among students by providing resources, mentorship, and a supportive community to help them develop and launch their ventures.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer - REDESIGNED SCROLL SECTION */}
        <section ref={offerSectionRef} className="relative bg-black/20" style={{ height: `${(offerings.length + 1) * 100}vh` }}>
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
             <div className="text-center mb-16 px-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
             </div>
            <div className="container mx-auto px-6 flex-grow flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
                    {/* Left side: List of offerings */}
                    <div className="relative h-96 flex items-center">
                        <div className="w-full">
                             {offerings.map((offering, index) => (
                                <div key={offering.title} className={`absolute w-full transition-all duration-700 ${activeOffering === index ? 'opacity-100 translate-y-0' : activeOffering > index ? 'opacity-0 -translate-y-12' : 'opacity-0 translate-y-12'}`} style={{transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'}}>
                                    <h3 className="text-4xl font-bold text-white mb-4 flex items-center">
                                        <span className="text-gray-600 mr-4">0{index + 1}</span>
                                        {offering.title}
                                    </h3>
                                    <p className="text-gray-400 pl-12">{offering.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right side: Image stack */}
                    <div className="relative h-[32rem] w-full perspective-container hidden lg:flex items-center justify-center">
                       {offerings.map((offering, index) => {
                            const offset = index - activeOffering;
                            const isPast = index < activeOffering;

                            const style = {
                                transform: `rotateY(10deg) rotateX(-10deg) translateZ(${offset * -4}rem) translateX(${offset * 2}rem)`,
                                zIndex: offerings.length - index,
                                opacity: isPast ? 0 : 1,
                                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                            };
                            
                            if(isPast) {
                                style.transform = `rotateY(10deg) rotateX(-10deg) translateY(-100%) translateX(${offset * 2}rem) scale(0.9)`;
                            }

                            return (
                                <img
                                    key={offering.title}
                                    src={offering.image}
                                    alt={offering.title}
                                    className="absolute w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/10"
                                    style={style}
                                />
                            );
                       })}
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Hear From Our Members</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <SparkCard variant="default" className="!bg-white/5 !border !border-white/10 !shadow-lg h-full" size="sm">
                      <SparkCard.Content className="!p-6 !mb-0 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
                      </SparkCard.Content>
                    </SparkCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default Index;
