import { useEffect, useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import NiceDialog from "@/components/molecules/NiceDialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageType } from "@/types";

interface HighlightsModalProps {
  title: string;
  images: Array<ImageType>;
  startIndex: number;
}

// Full-screen "car listing" style gallery: open a highlight to page through
// every screenshot with the arrows, keyboard, or a swipe (embla via shadcn).
const HighlightsModal = NiceModal.create(
  ({ title, images, startIndex }: HighlightsModalProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState<number>(startIndex);

    useEffect(() => {
      if (!api) return;

      const syncCurrent = () => {
        setCurrent(api.selectedScrollSnap());
      };

      syncCurrent();
      api.on("select", syncCurrent);

      return () => {
        api.off("select", syncCurrent);
      };
    }, [api]);

    // Warm the browser cache for the neighbouring slides so a swipe reveals an
    // already-decoded image instead of triggering a fresh network fetch.
    useEffect(() => {
      const neighbours = [current - 1, current + 1].map(
        (index) => (index + images.length) % images.length
      );

      neighbours.forEach((index) => {
        const preloaded = new Image();
        preloaded.src = images[index].image;
      });
    }, [current, images]);

    const activeImage = images[current];

    return (
      <NiceDialog title={`${title} Highlights`} contentClassName="sm:max-w-[56rem]">
        <Carousel
          setApi={setApi}
          opts={{ startIndex, loop: true }}
          className="mx-auto w-[calc(100%-5rem)]"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={image.image} className="flex justify-center">
                <img
                  className="max-h-[70vh] rounded-lg bg-muted object-contain"
                  src={image.image}
                  alt={image.description}
                  loading={index === startIndex ? "eager" : "lazy"}
                  decoding="async"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-1 text-foreground" />
          <CarouselNext className="right-1 text-foreground" />
        </Carousel>

        <div className="flex items-center justify-between gap-4 text-sm">
          <p className="font-medium text-foreground">{activeImage.description}</p>
          <p className="flex-shrink-0 text-muted-foreground">
            {current + 1} / {images.length}
          </p>
        </div>
      </NiceDialog>
    );
  }
);

export default HighlightsModal;
