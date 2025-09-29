import { useEffect, useState } from "react";

const NeonSmokeyCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            className="cursor-glow"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default NeonSmokeyCursor;