import { Sparkles } from "lucide-react";
import Button from "./Button";

const Navigation = () => (
  <nav className="bg-[#020617]/80 backdrop-blur-sm sticky top-0 z-[60]">
    <div className="container mx-auto h-16 flex items-center justify-between px-6">
      <a href="#" className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-[#60a5fa]" />
        <span className="font-bold text-xl text-white">SPARK</span>
      </a>
      <div className="hidden md:flex gap-6 items-center text-sm text-gray-300">
        <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Home</a>
        <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">About</a>
        <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Events</a>
        <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Resources</a>
        <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Contact</a>
      </div>
      <Button variant="primary">Join Us</Button>
    </div>
  </nav>
);


export default Navigation;