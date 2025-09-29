const Button = ({ variant = 'default', size = 'md', className = '', children }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020617] transform active:scale-95";
  const variants = {
    primary: "bg-[#60a5fa] text-black hover:bg-blue-300",
    outline: "border border-white/30 bg-transparent text-white hover:bg-white/10",
    hero: "bg-gradient-to-r from-blue-400 to-cyan-400 text-black shadow-lg hover:shadow-blue-400/50 hover:scale-105"
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>{children}</button>;
};

export default Button;