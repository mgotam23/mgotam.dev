import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Maximize,
  X,
} from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { useCallback, useEffect, useState } from "react";

type Project = {
  title: string;
  techStack: string[];
  details: string[];
  github?: string;
  type: string;
  shotPosition: { x: string; y: string };
  demo?: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset the image index to 0 whenever a new project is opened.
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const images = project?.images || [];
  const hasImages = images.length > 0;

  const openLightbox = () => {
    if (hasImages) {
      setIsLightboxOpen(true);
    }
  };

  // Memoized functions for navigating to the next or previous image.
  const nextImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [hasImages, images.length]);

  const prevImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [hasImages, images.length]);

  // Effect to handle keyboard navigation for the image gallery.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (isLightboxOpen) {
        // Only allow arrow navigation when lightbox is open
        if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts or dependencies change.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, nextImage, prevImage, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[100] p-4 transition-opacity duration-300"
        onClick={onClose}
      >
        <div
          className="bg-[#1F2937] border-2 border-orange-500/50 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 animate-modal-enter"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-orange-500 transition-colors z-20"
            aria-label="Close project details"
          >
            <X size={28} />
          </button>

          {/* --- Image Gallery Section --- */}
          <div className="relative w-full">
            {hasImages ? (
              <>
                {/* Main Image Display */}
                <div className="relative w-full h-56 bg-[#111827] rounded-t-lg overflow-hidden group">
                  {images.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* Overlay with zoom button */}
                  <div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer"
                    onClick={openLightbox}
                  >
                    <Maximize size={48} className="text-white drop-shadow-lg" />
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded-md z-10">
                    {currentImageIndex + 1} / {images.length}
                  </div>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        disabled={currentImageIndex === 0 && !isLightboxOpen}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        disabled={
                          currentImageIndex === images.length - 1 &&
                          !isLightboxOpen
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="w-full bg-[#111827] p-2">
                    <div className="flex space-x-2 overflow-x-auto pb-1">
                      {images.map((image, index) => (
                        <button
                          key={`thumb-${image.src}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`cursor-pointer flex-shrink-0 w-24 h-16 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111827] focus:ring-orange-500 transition-all duration-300 ${
                            index === currentImageIndex
                              ? "border-2 border-orange-500 opacity-100"
                              : "opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`View image ${index + 1}`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <PlaceholderImage
                text={project.title}
                width={600}
                height={224}
                pattern="dynamic-hoops"
                bgColor="#111827"
                textColor="#F97316"
                className="w-full h-56 object-cover rounded-t-lg"
              />
            )}
          </div>
          {/* --- End Image Gallery Section --- */}

          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-orange-500 tracking-wide mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#111827] text-sm text-gray-300 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-gray-300 text-base">
              {project.details.map((point, index) => (
                <p key={index} className="leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
            {(project.github || project.demo) && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 mt-6 border-t border-gray-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-orange-600 hover:bg-orange-700 font-semibold px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    <Github size={20} /> View Game Film
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-gray-600 hover:bg-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    <ExternalLink size={20} /> See Live Action
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Lightbox Section --- */}
      {isLightboxOpen && hasImages && (
        <div
          className="fixed inset-0 bg-black/90 z-[120] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            className="cursor-pointer absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex flex-col">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              {images[currentImageIndex].alt && (
                <p className="text-white/80 text-center mt-2 bg-black/30 px-4 py-2 rounded-lg">
                  {images[currentImageIndex].alt}
                </p>
              )}
            </div>

            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { ProjectModal };
