const NumberedList: React.FC<{ items: readonly string[] }> = ({ items }) => {
	return (
		<ol className="ml-5 flex list-decimal flex-col gap-1 text-body marker:text-text-muted">
			{items.map((item) => (
				<li className="whitespace-pre-wrap" key={item}>
					{item}
				</li>
			))}
		</ol>
	);
};

export { NumberedList };
