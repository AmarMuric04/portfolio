import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

import type { IImage } from "@/types";

import { ActionButton } from "@/components/atoms";
import { MiniArrowDownSVG } from "@/assets";
import { cn } from "@/lib/utils";

interface HighlightsProps {
	handleClick: (direction: "prev" | "next") => void;
	setSection: (index: number) => void;
	images: IImage[];
	section: number;
	title: string;
}

export const Highlights: React.FC<HighlightsProps> = ({
	handleClick,
	setSection,
	section,
	images,
	title,
}) => {
	return (
		<section aria-labelledby="highlights-heading" className="mt-4">
			<h2 id="highlights-heading" className="sr-only">
				{title} Highlights
			</h2>
			<div className="flex items-center justify-between">
				<ul
					className="my-4 flex items-center gap-1 text-xs"
					role="list"
				>
					{images.map((image, index) => {
						const isSelected = index === section;
						return (
							<button
								className={cn(
									"relative cursor-pointer rounded-full p-1.25 text-white",
									{
										"theme-secondary-background":
											isSelected,
										"theme-accent-background": !isSelected,
									},
								)}
								aria-label={`Select ${image.description}`}
								onClick={() => setSection(index)}
								aria-pressed={isSelected}
								key={image.image + "dot"}
							>
								{isSelected && (
									<span className="relative z-50">
										{image.description}
									</span>
								)}
							</button>
						);
					})}
				</ul>

				<div className="flex gap-1">
					<ActionButton
						onClick={() => handleClick("prev")}
						aria-label="Previous"
					>
						<div className="rotate-90">
							<MiniArrowDownSVG />
						</div>
					</ActionButton>
					<ActionButton
						onClick={() => handleClick("next")}
						aria-label="Next"
					>
						<div className="-rotate-90">
							<MiniArrowDownSVG />
						</div>
					</ActionButton>
				</div>
			</div>
			{images.map((image, index) => {
				if (index !== section) return null;

				return (
					<picture key={image.image + "image"}>
						<source srcSet={image.image} type="image/webp" />
						<LazyLoadImage
							className="showAnimation rounded-lg lg:min-h-[21rem]"
							alt={image.description}
							src={image.image}
							visibleByDefault
							effect="blur"
						/>
					</picture>
				);
			})}
		</section>
	);
};
