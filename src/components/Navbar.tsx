
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { categories } from "@/data/projects";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-montserrat font-bold tracking-tight">
          <span className="text-midnight">JH</span>
          <span className="text-gold">C</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`font-montserrat text-sm uppercase tracking-wider hover:text-gold transition-colors ${
                location.pathname.includes(`/category/${category.id}`)
                  ? "text-gold"
                  : "text-midnight"
              }`}
            >
              {category.title}
            </Link>
          ))}
          <Link
            to="/about"
            className={`font-montserrat text-sm uppercase tracking-wider hover:text-gold transition-colors ${
              location.pathname === "/about" ? "text-gold" : "text-midnight"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`font-montserrat text-sm uppercase tracking-wider hover:text-gold transition-colors ${
              location.pathname === "/contact" ? "text-gold" : "text-midnight"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-midnight hover:text-gold transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`font-montserrat text-sm uppercase tracking-wider py-2 hover:text-gold transition-colors ${
                  location.pathname.includes(`/category/${category.id}`)
                    ? "text-gold"
                    : "text-midnight"
                }`}
              >
                {category.title}
              </Link>
            ))}
            <Link
              to="/about"
              className={`font-montserrat text-sm uppercase tracking-wider py-2 hover:text-gold transition-colors ${
                location.pathname === "/about" ? "text-gold" : "text-midnight"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-montserrat text-sm uppercase tracking-wider py-2 hover:text-gold transition-colors ${
                location.pathname === "/contact" ? "text-gold" : "text-midnight"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
