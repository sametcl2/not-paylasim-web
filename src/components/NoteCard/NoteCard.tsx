import { useState } from "react";
import { useNavigate } from "react-router";
import { Star, Download, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Note } from "@/types/note";

type NoteCardProps = {
  note: Note;
  className?: string;
};

export const NoteCard = ({ note, className = "" }: NoteCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? note.imageUrls.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === note.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageIndicatorClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleCardClick = () => {
    navigate(`/note/${note._id}`);
  };

  // Normalize data between different structures
  const displayData = {
    rating: note.rating || note.rating || 0,
    downloads: note.downloadCount || note.downloadCount || 0,
    category: note.courseName || "",
  };

  if (!note.imageUrls || note.imageUrls.length === 0) {
    return Array(3)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={`bg-accent/10 h-48 rounded-2xl animate-pulse ${className}`}
        />
      ));
  }

  return (
    <div
      onClick={handleCardClick}
      className={`relative bg-white border border-accent/50 hover:border-primary/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${className}`}
    >
      {/* Image Carousel */}
      <div className="relative group/carousel">
        <div className="relative h-48 bg-accent/10 overflow-hidden">
          <img
            src={note.imageUrls[currentImageIndex]}
            alt={`${note.title} - Sayfa ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Navigation arrows */}
          {note.imageUrls.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-heading rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-heading rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Price badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-primary text-white px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-sm font-bold">₺{}</span>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center bg-white/90 text-heading px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {displayData.category}
            </span>
          </div>
        </div>

        {/* Image indicators */}
        {note.imageUrls.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {note.imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={(e) => handleImageIndicatorClick(e, index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-heading text-base leading-tight group-hover:text-primary transition-colors flex-1 pr-2">
            {note.title}
          </h3>
          <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 text-accent fill-current" />
            <span className="text-sm font-semibold text-accent">
              {displayData.rating}
            </span>
          </div>
        </div>

        {/* University and Professor */}
        <div className="mb-4">
          <p className="text-sm font-medium text-primary/80 mb-1">
            {note.university}
          </p>
          <p className="text-xs text-heading/60">{note.professor}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 bg-accent/10 text-heading/70 text-xs font-medium rounded-lg border border-accent/20"
            >
              {tag}
            </span>
          ))}
          {note.tags.length > 3 && (
            <span className="inline-flex items-center px-2.5 py-1 text-xs text-heading/50 font-medium bg-accent/10 rounded-lg">
              +{note.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-accent/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-heading/60">
              <Download className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {displayData.downloads.toLocaleString()}
              </span>
            </div>
            {note.pageCount && (
              <div className="flex items-center gap-1.5 text-heading/60">
                <span className="text-sm font-medium">
                  {note.pageCount} sayfa
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
