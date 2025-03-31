
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, X } from "lucide-react";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) return null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back link */}
        <Link
          to={`/category/${project.category}`}
          className="inline-flex items-center mb-8 text-midnight hover:text-gold transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to {project.category}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg max-w-3xl text-muted-foreground">
            {project.description}
          </p>
          <p className="text-sm font-roboto-mono uppercase tracking-wider mt-4 text-gold">
            {project.category}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="image-hover cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white z-20 p-2 rounded-full bg-black bg-opacity-50"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Enlarged view`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation arrows within the lightbox */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
                onClick={goToPrevImage}
                aria-label="Previous image"
              >
                <ArrowLeft size={24} className="text-white" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all rotate-180"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                <ArrowLeft size={24} className="text-white" />
              </button>
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
