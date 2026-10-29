import React from "react";

export const ExternalLinkButton: React.FC<
	React.PropsWithChildren<{ icon: React.ElementType; href: string }>
> = ({ icon: Icon, children, href }) => {
	return (
		<a
			className="flex cursor-pointer items-center gap-2 transition-all hover:text-white"
			rel="noopener noreferrer"
			target="_blank"
			href={href}
		>
			<Icon />
			{children && <p>{children}</p>}
		</a>
	);
};
