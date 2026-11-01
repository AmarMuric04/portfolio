const ExternalLinkButton: React.FC<{
	icon: React.ElementType;
	href: string;
	opensInNewTab?: boolean;
	children: React.ReactNode;
}> = ({ icon: Icon, href, opensInNewTab = true, children }) => {
	return (
		<a
			className="flex h-8 items-center gap-2 rounded-lg text-label text-ink transition-colors duration-200 hover:text-accent-text"
			rel={opensInNewTab ? "noopener noreferrer" : undefined}
			target={opensInNewTab ? "_blank" : undefined}
			href={href}
		>
			<span className="grid size-5 shrink-0 place-items-center [&>svg]:size-5">
				<Icon />
			</span>
			{children}
		</a>
	);
};

export { ExternalLinkButton };
