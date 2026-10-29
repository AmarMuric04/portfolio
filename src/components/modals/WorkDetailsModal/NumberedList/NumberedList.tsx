const NumberedList: React.FC<{ items: readonly string[] }> = ({ items }) => {
	return (
		<ol className="mb-4">
			{items.map((item, index) => (
				<li key={item}>
					<pre className="whitespace-pre-wrap">
						{index + 1}. {item}
					</pre>
				</li>
			))}
		</ol>
	);
};

export { NumberedList };
