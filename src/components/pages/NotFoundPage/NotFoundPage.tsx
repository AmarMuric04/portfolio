import { Link } from "@tanstack/react-router";

import { ActionButton } from "@/components/shared";

const NotFoundPage: React.FC = () => {
	return (
		<section className="flex flex-col items-start gap-4">
			<h1 className="text-page-title text-ink">Page not found</h1>
			<p className="text-lead">
				There’s nothing at this address. It may have moved, or the link
				has a typo.
			</p>

			<ActionButton variant="primary" asChild>
				<Link to="/">Back to home</Link>
			</ActionButton>
		</section>
	);
};

export { NotFoundPage };
