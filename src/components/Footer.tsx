
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">
              <span className="text-white">JH</span>
              <span className="text-gold">C</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Medical student and freelance photographer based in the Philippines, capturing the human experience with technical precision and emotional depth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/jerrell.hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/visuals_of_jerrell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:jerrellhasan25@gmail.com"
                className="text-white hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+639765545869"
                className="text-white hover:text-gold transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-bold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/commercial" className="text-gray-300 hover:text-gold transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/category/events" className="text-gray-300 hover:text-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/category/portraits" className="text-gray-300 hover:text-gold transition-colors">
                  Portraits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jerrell Hasan C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
