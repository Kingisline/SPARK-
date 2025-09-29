import React, { useState, useEffect } from 'react';

/**
 * A wrapper component that shows a "coming soon" toast message when its children are clicked.
 * @param {{children: React.ReactNode}} props - The component's props.
 * @returns {React.ReactElement}
 */
const ComingSoonFeature = ({ children }) => {
    // State to control the visibility of the toast message.
    const [showToast, setShowToast] = useState(false);

    // This effect handles the timer to automatically hide the toast after 3 seconds.
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000); // The toast will be visible for 3000 milliseconds (3 seconds).
            
            // Cleanup function to clear the timer if the component unmounts.
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    /**
     * Handles the click event on the wrapped children, triggering the toast to show.
     */
    const handleClick = () => {
        setShowToast(true);
    };

    return (
        <>
            {/* Custom styles for the toast's slide-in and fade-out animations. */}
            <style>{`
                @keyframes slide-in-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-in-up {
                    animation: slide-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                }
            `}</style>

            {/* The wrapper div captures the click event. */}
            <div onClick={handleClick} className="cursor-pointer">
                {children}
            </div>

            {/* The Toast Notification */}
            {showToast && (
                <div 
                    className="fixed bottom-5 right-5 bg-[#0f172a] text-white p-4 rounded-lg shadow-2xl border border-blue-400/30 flex items-center gap-3 z-[100] animate-slide-in-up"
                    role="alert"
                    aria-live="assertive"
                >
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>This will be available soon!</span>
                </div>
            )}
        </>
    );
};

export default ComingSoonFeature;
