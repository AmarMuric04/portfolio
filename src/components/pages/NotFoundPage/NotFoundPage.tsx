import { Link } from "@tanstack/react-router";

const NotFoundPage: React.FC = () => {
	return (
		<section className="flex flex-col items-start gap-4">
			<h1 className="text-page-title text-ink">Page not found</h1>
			<p className="text-lead">
				There’s nothing at this address. It may have moved, or the link
				has a typo.
			</p>
			<Link
				className="flex h-8 items-center rounded-lg bg-accent px-3 text-label text-on-accent hover:opacity-90"
				to="/"
			>
				Back to Home
			</Link>
		</section>
	);
};

export { NotFoundPage };
