
import { useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { X } from "lucide-react";

interface GalleryProps {
  projects: Project[];
  title?: string;
  description?: string;
  showCategory?: boolean;
  columns?: number;
}

const Gallery = ({ 
  projects, 
  title, 
  description, 
  showCategory = false,
  columns = 3
}: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="py-16">
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && (
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
        {projects.map((project) => (
          <div key={project.id} className="image-hover group">
            <Link to={`/project/${project.id}`} className="block relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-midnight bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="p-4 text-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {showCategory && (
                    <p className="text-sm font-roboto-mono uppercase tracking-wider mt-2">
                      {project.category}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 text-white z-20 p-2 rounded-full bg-black bg-opacity-50"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={currentImage}
            alt="Enlarged preview"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
