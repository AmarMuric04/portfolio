import ReactMarkdown from "react-markdown";

const Readme: React.FC<{ markdown: string }> = ({ markdown }) => {
	return (
		<div className="flex flex-col gap-3 text-body [&_a]:text-accent-text [&_a]:underline [&_code]:rounded [&_code]:bg-inset [&_code]:px-1 [&_code]:text-label [&_h3]:mt-2 [&_h3]:text-card-title [&_h3]:text-ink [&_h4]:mt-2 [&_h4]:text-label [&_h4]:text-ink [&_h5]:text-label [&_h5]:text-ink [&_hr]:border-hairline [&_li]:ml-5 [&_ol]:list-decimal [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-inset [&_pre]:p-3 [&_ul]:list-disc">
			<ReactMarkdown components={{ h1: "h3", h2: "h4", h3: "h5" }}>
				{markdown}
			</ReactMarkdown>
		</div>
	);
};

export { Readme };
