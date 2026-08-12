"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  useCarousel,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images?: string[] | undefined;
  image?: string | undefined;
  title: string;
  slug: string;
}

function CarouselSlideList({
  uniqueImages,
  title,
  slug,
}: {
  uniqueImages: string[];
  title: string;
  slug: string;
}) {
  const { selectedIndex } = useCarousel();

  return (
    <CarouselContent>
      {uniqueImages.map((src, index) => {
        const isCurrent = index === selectedIndex;
        return (
          <CarouselItem key={`${src}-${index}`}>
            <div
              className="w-full overflow-hidden border border-border/60 rounded-xl aspect-[16/9] relative bg-muted/20 shadow-sm"
              style={{
                viewTransitionName: isCurrent
                  ? `project-image-${slug}`
                  : undefined,
              }}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
  );
}

export function ProjectCarousel({
  images,
  image,
  title,
  slug,
}: ProjectCarouselProps) {
  // Ensure the primary `image` (used as main thumbnail) is ALWAYS index 0
  const allImages: string[] = [];
  if (image) {
    allImages.push(image);
  }
  if (images) {
    allImages.push(...images);
  }

  // Deduplicate while preserving order (primary `image` remains at index 0)
  const uniqueImages = Array.from(new Set(allImages)).filter(
    (src): src is string => typeof src === "string" && src.length > 0
  );

  if (uniqueImages.length === 0) return null;

  const firstImage = uniqueImages[0];
  if (uniqueImages.length === 1 && firstImage) {
    return (
      <div
        className="w-full overflow-hidden border border-border/60 mb-12 rounded-xl shadow-sm bg-muted/20"
        style={{ viewTransitionName: `project-image-${slug}` }}
      >
        <Image
          src={firstImage}
          alt={`${title} screenshot`}
          width={1200}
          height={675}
          className="w-full object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="w-full mb-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          startIndex: 0,
        }}
        className="w-full relative group"
      >
        <CarouselSlideList
          uniqueImages={uniqueImages}
          title={title}
          slug={slug}
        />
        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselDots />
      </Carousel>
    </div>
  );
}
