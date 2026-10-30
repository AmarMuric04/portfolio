import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
	ChevronLeftSVG,
	ChevronRightSVG,
	type WORK_HIGHLIGHTS,
} from "@/assets";
import { ActionButton } from "@/components/shared";
import { cn } from "@/lib/utils";

const SLIDE_VARIANTS = {
	enter: (direction: number) => ({ x: `${direction * 100}%` }),
	center: { x: 0 },
	exit: (direction: number) => ({ x: `${direction * -100}%` }),
};

const EASE_OUT_TRANSITION = { ease: "easeOut", duration: 0.3 } as const;

const HighlightIndicator: React.FC<{
	label: string;
	isSelected: boolean;
	onClick: () => void;
}> = ({ label, isSelected, onClick }) => {
	return (
		<motion.button
			className={cn(
				"relative grid h-6 cursor-pointer place-items-center overflow-hidden rounded-md text-caption transition-colors duration-300 ease-out",
				isSelected
					? "bg-accent text-on-accent"
					: "hover:bg-accent-tint",
			)}
			animate={{ width: isSelected ? "auto" : 20 }}
			transition={EASE_OUT_TRANSITION}
			aria-pressed={isSelected}
			aria-label={label}
			onClick={onClick}
			initial={false}
			type="button"
		>
			<motion.span
				className="px-2 whitespace-nowrap"
				animate={{ opacity: isSelected ? 1 : 0 }}
				transition={EASE_OUT_TRANSITION}
				initial={false}
			>
				{label}
			</motion.span>

			{!isSelected && (
				<span className="absolute size-2 rounded-xs bg-border-strong" />
			)}
		</motion.button>
	);
};

const Highlights: React.FC<{
	images: NonNullable<(typeof WORK_HIGHLIGHTS)[string]>;
	title: string;
}> = ({ images, title }) => {
	const [slide, setSlide] = useState({ index: 0, direction: 1 });

	const selectedImage = images[slide.index];

	useEffect(() => {
		[slide.index - 1, slide.index + 1].forEach((index) => {
			const neighbour = images[(index + images.length) % images.length];

			if (neighbour) {
				new Image().src = neighbour.image;
			}
		});
	}, [images, slide.index]);

	const handlePreviousClick = () =>
		setSlide((current) => ({
			index: (current.index - 1 + images.length) % images.length,
			direction: -1,
		}));

	const handleNextClick = () =>
		setSlide((current) => ({
			index: (current.index + 1) % images.length,
			direction: 1,
		}));

	const handleIndicatorClick = (index: number) =>
		setSlide((current) => ({
			index,
			direction: index > current.index ? 1 : -1,
		}));

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			handlePreviousClick();
		}

		if (event.key === "ArrowRight") {
			event.preventDefault();
			handleNextClick();
		}
	};

	return (
		<section className="flex flex-col gap-3" onKeyDown={handleKeyDown}>
			<h3 className="sr-only">{title} highlights</h3>

			<div className="flex items-center justify-between gap-4">
				<ul className="flex flex-wrap items-center gap-1">
					{images.map((image, index) => (
						<li key={image.image}>
							<HighlightIndicator
								onClick={() => handleIndicatorClick(index)}
								isSelected={index === slide.index}
								label={image.description}
							/>
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

			<div
				className="relative aspect-[1.9] overflow-hidden rounded-xl border border-hairline bg-inset"
				aria-label={`${title} screenshots, use the arrow keys to browse`}
				aria-roledescription="carousel"
				tabIndex={0}
			>
				<AnimatePresence custom={slide.direction} initial={false}>
					{selectedImage && (
						<motion.img
							className="absolute inset-0 size-full object-cover object-top"
							transition={EASE_OUT_TRANSITION}
							alt={selectedImage.description}
							custom={slide.direction}
							key={selectedImage.image}
							variants={SLIDE_VARIANTS}
							src={selectedImage.image}
							decoding="async"
							initial="enter"
							animate="center"
							exit="exit"
						/>
					)}
				</AnimatePresence>
			</div>

			<p className="sr-only" aria-live="polite">
				{selectedImage?.description}
			</p>
		</section>
	);
};

export { Highlights };
