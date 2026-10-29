import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const ProjectSkeleton: React.FC = () => {
	return (
		<SkeletonTheme
			highlightColor="var(--color-skeleton-highlight)"
			baseColor="var(--color-sage)"
		>
			<li className="theme-surface relative list-none rounded-lg border border-white/10 bg-white/10 p-3 shadow-md transition-all">
				<div className="mb-2">
					<Skeleton height={30} width={200} />
				</div>

				<div className="mb-2">
					<Skeleton
						borderRadius={48}
						className="mr-2"
						height={24}
						width={65}
						inline
					/>
				</div>

				<div className="mb-4 w-1/2">
					<Skeleton height={16} count={3} />
					<Skeleton height={16} width={70} />
				</div>

				<div className="mb-4 flex gap-2">
					{Array.from({ length: 4 }, (_, index) => (
						<Skeleton
							borderRadius={12}
							height={180}
							width={148}
							key={index}
						/>
					))}
				</div>

				<div>
					<div className="flex gap-1">
						<div>
							<Skeleton height={27.5} width={125} />
							<Skeleton height={27.5} width={125} />
						</div>

						<div>
							<Skeleton height={27.5} width={125} />
						</div>
					</div>

					<div className="float-right">
						<Skeleton height={27.5} width={125} />
					</div>
				</div>
			</li>
		</SkeletonTheme>
	);
};

export { ProjectSkeleton };
