import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Extend the Window interface to inform TypeScript about the emailjs property.
declare global {
    interface Window {
        emailjs: any;
    }
}

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    
    // Dynamically load the EmailJS script to avoid build errors.
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const contactInfo = [
        { icon: MapPin, title: "Location", details: ["12 N-BLOCK", "SVCET Campus", "Tiruvallur,Tamilnadu"] },
        { icon: Phone, title: "Phone", details: ["+91 6383424265", "Monday - Friday", "10:00 AM - 7:00 PM"] },
        { icon: Mail, title: "Email", details: ["spark@university.edu", "For general inquiries", "Response within 24h"] },
        { icon: Clock, title: "Office Hours", details: ["Monday - Friday: 10:30 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"] }
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your EmailJS credentials
        const serviceID = 'service_th7ci5g';
        const templateID = 'template_2880piu';
        const publicKey = 'YyjTMfx5GRWem6rUe';
        
        // Use window.emailjs since the script is loaded globally.
        if (window.emailjs) {
            window.emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    form.current.reset(); // Reset form fields
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                });
        } else {
            console.error('EmailJS SDK not loaded.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans">
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }
             `}</style>
            <Navigation />
            
            <main className="container mx-auto px-6 py-16">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have questions about SPARK or want to get involved? We'd love to hear from you. Reach out and let's start a conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="from_firstname">First Name</Label>
                                            <Input name="from_firstname" id="from_firstname" placeholder="Yuvaraj" className="mt-1" required />
                                        </div>
                                        <div>
                                            <Label htmlFor="from_lastname">Last Name</Label>
                                            <Input name="from_lastname" id="from_lastname" placeholder="R" className="mt-1" required />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="from_email">Email</Label>
                                        <Input name="from_email" id="from_email" type="email" placeholder="YuvarajYuvi@gmail.com" className="mt-1" required />
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input name="subject" id="subject" placeholder="What's this about?" className="mt-1" required />
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea name="message" id="message" placeholder="Tell us more about your inquiry..." className="mt-1 min-h-[120px]" required />
                                    </div>
                                    
                                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </Button>

                                    {status === 'success' && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
                                    {status === 'error' && <p className="text-red-500 mt-4 text-center">Failed to send message. Please try again later.</p>}
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-gray-300 mb-8">
                                Whether you're interested in joining SPARK, have questions about our programs, or want to collaborate with us, we're here to help.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div key={info.title} className="animate-fade-in-up" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <info.icon className="h-6 w-6 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-2">{info.title}</h3>
                                                    {info.details.map((detail, idx) => (
                                                        <p key={idx} className="text-sm text-gray-400">{detail}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;