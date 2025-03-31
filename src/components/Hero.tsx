import { useState, useEffect, useCallback } from "react";
import { Project } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  projects: Project[];
}

const Hero = ({ projects }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, projects.length]);
  
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, projects.length]);
  
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);
  
  if (!projects.length) return null;
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${project.thumbnail}')`,
              transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-in-out'
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white z-20 text-left">
            <div className="container-custom">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentIndex(index);
              setTimeout(() => setIsTransitioning(false), 600);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;