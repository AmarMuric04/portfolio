import { Helmet } from "react-helmet";

import { SITE_URL } from "@/assets";

const PageHelmet: React.FC<{
	title: string;
	description: string;
	keywords: string;
	path: string;
}> = ({ title, description, keywords, path }) => {
	return (
		<Helmet>
			<title>{`Amar Muric | ${title}`}</title>
			<meta content={description} name="description" />
			<meta content={keywords} name="keywords" />
			<meta content={`Amar Muric | ${title}`} property="og:title" />
			<meta content={description} property="og:description" />
			<meta content="website" property="og:type" />
			<meta
				content={`${SITE_URL}/portfolio-logo.png`}
				property="og:image"
			/>
			<meta content={`${SITE_URL}${path}`} property="og:url" />
		</Helmet>
	);
};

export { PageHelmet };
