import { useNavigate } from "@tanstack/react-router";

import { ActionButton } from "@/components/shared";

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<section className="flex flex-col items-start gap-4">
			<h1 className="text-page-title text-ink">Page not found</h1>
			<p className="text-lead">
				There’s nothing at this address. It may have moved, or the link
				has a typo.
			</p>

			<ActionButton
				onClick={() => navigate({ to: "/" })}
				variant="primary"
			>
				Back to Home
			</ActionButton>
		</section>
	);
};

export { NotFoundPage };
