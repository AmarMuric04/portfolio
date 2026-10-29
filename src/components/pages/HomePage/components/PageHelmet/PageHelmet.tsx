import { Helmet } from "react-helmet";

export const PageHelmet = () => {
	return (
		<Helmet>
			<title>Amar Muric | About Me</title>
			<meta
				content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
				name="description"
			/>
			<meta
				content="Amar Muric, full-stack developer, MERN, portfolio, developer journey, MongoDB, Express, React, Node.js"
				name="keywords"
			/>
			<meta content="Amar Muric | About Me" property="og:title" />
			<meta
				content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
				property="og:description"
			/>
			<meta property="og:type" content="website" />
			<meta content="/portfolio-logo.png" property="og:image" />
		</Helmet>
	);
};
