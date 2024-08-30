import { useState, useEffect } from 'react';

const navItems = [
    { title: 'Home' },
    { title: 'About Us' },
    { title: 'Solution' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 50 to the number of pixels you want before making the navbar transparent
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed z-10 top-0 w-screen flex justify-end px-10 py-5 font-montserrat font-semibold transition-all duration-300 ${isScrolled && 'backdrop-blur-lg'} ${isScrolled && 'text-white'}`}
      style={{ backgroundColor: !isScrolled ? 'transparent' : 'rgba(0, 0, 0, 0.7)' }}
    >
        <ul className="list-none flex gap-20">
            {navItems.map((navItem, i) => (
                <li key={i}>{navItem.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default Navbar;
