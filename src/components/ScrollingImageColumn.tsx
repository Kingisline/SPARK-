const Link = ({ to, children }) => <a href={to}>{children}</a>;

// --- New Hero Section Image Grid ---
const ScrollingImageColumn = ({ images }) => (
    <div className="flex flex-col gap-4">
      {[...images, ...images].map((src, index) => (
        <img
          key={index}
          src={src}
          alt="" 
          className="w-full h-auto object-cover rounded-lg shadow-lg opacity-60"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ))}
    </div>
);

// --- Main Page Component ---

export default ScrollingImageColumn;