import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { MiniArrowDownSVG, type WORK_HIGHLIGHTS } from "@/assets";
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
		<section aria-labelledby="highlights-heading" className="mt-4">
			<h2 id="highlights-heading" className="sr-only">
				{title} Highlights
			</h2>

			<div className="flex items-center justify-between">
				<ul
					className="my-4 flex items-center gap-1 text-xs"
					role="list"
				>
					{images.map((image, index) => (
						<button
							className={cn(
								"relative cursor-pointer rounded-full p-1.25 text-white",
								{
									"theme-secondary-background":
										index === selectedIndex,
									"theme-accent-background":
										index !== selectedIndex,
								},
							)}
							aria-label={`Select ${image.description}`}
							aria-pressed={index === selectedIndex}
							onClick={() => setSelectedIndex(index)}
							key={image.image}
						>
							{index === selectedIndex && (
								<span className="relative z-50">
									{image.description}
								</span>
							)}
						</button>
					))}
				</ul>

				<div className="flex gap-1">
					<ActionButton
						onClick={handlePreviousClick}
						aria-label="Previous"
					>
						<div className="rotate-90">
							<MiniArrowDownSVG />
						</div>
					</ActionButton>

					<ActionButton onClick={handleNextClick} aria-label="Next">
						<div className="-rotate-90">
							<MiniArrowDownSVG />
						</div>
					</ActionButton>
				</div>
			</div>

			{selectedImage && (
				<picture key={selectedImage.image}>
					<source srcSet={selectedImage.image} type="image/webp" />
					<LazyLoadImage
						className="showAnimation rounded-lg lg:min-h-[21rem]"
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
