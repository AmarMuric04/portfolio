import { Helmet as ReactHelmet } from "react-helmet";

export const PageHelmet = () => {
	return (
		<ReactHelmet>
			<title>Amar Muric | Education</title>
			<meta
				content="Explore the educational background of Amar Muric, a MERN full-stack developer. Learn about his skills and the institutions that shaped his career."
				name="description"
			/>
			<meta
				content="Amar Muric, full-stack developer, MERN, education, learning journey, MongoDB, Express, React, Node.js"
				name="keywords"
			/>
			<meta content="Amar Muric | Education" property="og:title" />
			<meta
				content="Explore the educational background of Amar Muric, a MERN full-stack developer. Learn about his skills and the institutions that shaped his career."
				property="og:description"
			/>
			<meta property="og:type" content="website" />
			<meta content="/portfolio-logo.png" property="og:image" />
		</ReactHelmet>
	);
};
