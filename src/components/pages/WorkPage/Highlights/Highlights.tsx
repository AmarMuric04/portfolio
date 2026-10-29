import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
	ChevronLeftSVG,
	ChevronRightSVG,
	type WORK_HIGHLIGHTS,
} from "@/assets";
import { ActionButton } from "@/components/shared";
import { cn } from "@/lib/utils";

const Highlights: React.FC<{
	images: NonNullable<(typeof WORK_HIGHLIGHTS)[string]>;
	title: string;
}> = ({ images, title }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImage = images[selectedIndex];

	const handlePreviousClick = () =>
		setSelectedIndex((index) =>
			index === 0 ? images.length - 1 : index - 1,
		);

	const handleNextClick = () =>
		setSelectedIndex((index) =>
			index === images.length - 1 ? 0 : index + 1,
		);

	return (
		<section className="flex flex-col gap-3">
			<h3 className="sr-only">{title} highlights</h3>

			<div className="flex items-center justify-between gap-4">
				<ul className="flex flex-wrap items-center gap-2">
					{images.map((image, index) => (
						<li key={image.image}>
							<button
								className={cn(
									"grid h-6 cursor-pointer place-items-center rounded-full text-caption transition-colors duration-200",
									index === selectedIndex
										? "bg-accent px-2 text-on-accent"
										: "w-6 before:size-2 before:rounded-full before:bg-border-strong before:content-[''] hover:bg-accent-tint",
								)}
								aria-label={image.description}
								aria-pressed={index === selectedIndex}
								onClick={() => setSelectedIndex(index)}
								type="button"
							>
								{index === selectedIndex && image.description}
							</button>
						</li>
					))}
				</ul>

				<div className="flex shrink-0 gap-2">
					<ActionButton
						onClick={handlePreviousClick}
						aria-label="Previous image"
						className="w-8 px-0"
					>
						<ChevronLeftSVG />
					</ActionButton>

					<ActionButton
						onClick={handleNextClick}
						aria-label="Next image"
						className="w-8 px-0"
					>
						<ChevronRightSVG />
					</ActionButton>
				</div>
			</div>

			{selectedImage && (
				<picture key={selectedImage.image}>
					<source srcSet={selectedImage.image} type="image/webp" />
					<LazyLoadImage
						className="rounded-xl fade-in lg:min-h-[21rem]"
						alt={selectedImage.description}
						src={selectedImage.image}
						visibleByDefault
						effect="blur"
					/>
				</picture>
			)}
		</section>
	);
};

export { Highlights };
