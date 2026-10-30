const DetailTile: React.FC<React.PropsWithChildren<{ title: string }>> = ({
	title,
	children,
}) => {
	return (
		<section className="flex flex-col gap-2 rounded-xl border border-hairline bg-inset p-3">
			<h3 className="text-label text-ink">{title}</h3>
			{children}
		</section>
	);
};

export { DetailTile };
