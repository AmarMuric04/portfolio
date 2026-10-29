import { Helmet } from "react-helmet";

export const PageHelmet = () => {
	return (
		<Helmet>
			<title>Amar Muric | Projects</title>
			<meta
				content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
				name="description"
			/>
			<meta
				content="Amar Muric, MERN full-stack developer, projects, MongoDB, Express, React, Node.js, portfolio"
				name="keywords"
			/>
			<meta content="Amar Muric | Projects" property="og:title" />
			<meta
				content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
				property="og:description"
			/>
			<meta property="og:type" content="website" />
			<meta content="/portfolio-logo.png" property="og:image" />
			<meta
				content="https://your-portfolio-url.com/projects"
				property="og:url"
			/>
		</Helmet>
	);
};
