const ExternalLinkButton: React.FC<{
	icon: React.ElementType;
	href: string;
	children: React.ReactNode;
}> = ({ icon: Icon, href, children }) => {
	return (
		<a
			className="flex h-8 items-center gap-2 rounded-lg text-label text-ink transition-colors duration-200 hover:text-accent-text"
			rel="noopener noreferrer"
			target="_blank"
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
