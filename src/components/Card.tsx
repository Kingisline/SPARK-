import { LucideIcon } from "lucide-react";

// --- NEW CARD COMPONENT ---
interface CardProps {
 children: React.ReactNode;
 className?: string;
 variant?: 'default' | 'outlined' | 'elevated' | 'filled';
 size?: 'sm' | 'md' | 'lg';
 clickable?: boolean;
 onClick?: () => void;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface CardIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
  Icon: React.FC<CardIconProps>;
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

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`mb-4 last:mb-0 ${className}`}>
    {children}
  </div>
);

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardIcon: React.FC<CardIconProps> = ({ icon: Icon, className = '', size = 24 }) => (
  <Icon size={size} className={`text-gray-600 ${className}`} />
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Icon = CardIcon;

export default Card;