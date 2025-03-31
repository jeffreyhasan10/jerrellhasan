
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { getFeaturedProjects, categories } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero Section */}
      <Hero projects={featuredProjects} />

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Capturing Moments with Purpose
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Jerrell Hasan C is a medical student and freelance photographer based in the Philippines. With an eye for both science and art, he captures the human experience with technical precision and deep emotional storytelling.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-midnight text-white rounded hover:bg-opacity-90 transition-all font-montserrat text-sm uppercase tracking-wider animate-fade-in"
          >
            Learn More <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-8">
        <div className="container-custom">
          <Gallery 
            projects={featuredProjects} 
            title="Featured Work" 
            description="A selection of recent projects highlighting diverse photographic styles and subjects."
            showCategory
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-sand bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Photography Categories</h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Explore my work across different specializations, each with a unique approach and aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="image-hover group block"
              >
                <div className="relative rounded-md overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-midnight bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                        {category.title}
                      </h3>
                      <p className="hidden md:block text-sm text-white/80">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
