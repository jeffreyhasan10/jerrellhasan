
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-sand bg-opacity-30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/9008fdf1-19a7-4042-90a1-9134e094eeae.png"
              alt="Jerrell Hasan C"
              className="rounded-md shadow-md w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              Jerrell Hasan C is a medical student and freelance photographer based in the Philippines. With an eye for both science and art, he captures the human experience with technical precision and deep emotional storytelling.
            </p>
            <p className="text-lg mb-8">
              His unique perspective bridges healthcare and artistic expression, creating images that resonate with authenticity and purpose.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-midnight text-white rounded hover:bg-opacity-90 transition-all font-montserrat text-sm uppercase tracking-wider"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
