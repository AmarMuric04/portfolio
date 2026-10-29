const ExternalLinkButton: React.FC<{
	icon: React.ElementType;
	href: string;
	children: React.ReactNode;
}> = ({ icon: Icon, href, children }) => {
	return (
		<a
			className="flex cursor-pointer items-center gap-2 transition-all hover:text-white"
			rel="noopener noreferrer"
			target="_blank"
			href={href}
		>
			<Icon />
			<p>{children}</p>
		</a>
	);
};

export { ExternalLinkButton };
