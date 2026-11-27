import React from "react";
import { MiniArrowDownSVG } from "@/assets/svgs";
import ActionButton from "@/components/atoms/ActionButton";
import { cw } from "@/utils/cw";
import { ImageType } from "@/types";

interface HighlightsProps {
  title: string;
  images: Array<ImageType>;
  section: number;
  setSection: (index: number) => void;
  handleClick: (direction: "prev" | "next") => void;
  onImageClick: () => void;
}

const Highlights: React.FC<HighlightsProps> = ({
  title,
  images,
  section,
  setSection,
  handleClick,
  onImageClick,
}) => {
  const activeImage = images[section];

  return (
    <section className="mt-4" aria-labelledby="highlights-heading">
      <h2 id="highlights-heading" className="sr-only">
        {title} Highlights
      </h2>

      <div className="flex items-center justify-between">
        <ul className="my-4 flex items-center gap-1 text-xs" role="list">
          {images.map((image, index) => {
            const isSelected = index === section;

            return (
              <button
                key={image.image + "dot"}
                onClick={() => setSection(index)}
                className={cw(
                  "relative cursor-pointer rounded-full p-1.25 text-primary-foreground",
                  isSelected ? "bg-primary" : "bg-muted-foreground"
                )}
                aria-pressed={isSelected}
                aria-label={`Select ${image.description}`}
              >
                {isSelected && (
                  <span className="relative z-50">{image.description}</span>
                )}
              </button>
            );
          })}
        </ul>

        <div className="flex gap-1">
          <ActionButton action={() => handleClick("prev")} aria-label="Previous">
            <div className="rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>

          <ActionButton action={() => handleClick("next")} aria-label="Next">
            <div className="-rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
        </div>
      </div>

      <button
        onClick={onImageClick}
        className="group block w-full cursor-pointer overflow-hidden rounded-lg"
        aria-label={`Open ${activeImage.description} in full view`}
      >
        <img
          className="rounded-lg bg-muted transition-all group-hover:scale-[1.02] lg:min-h-[21rem]"
          src={activeImage.image}
          alt={activeImage.description}
          decoding="async"
        />
      </button>
    </section>
  );
};

export default Highlights;
