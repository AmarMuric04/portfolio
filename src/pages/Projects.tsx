import React from "react";
import { Helmet } from "react-helmet";
import ProjectList from "@/components/organisms/ProjectList";
import SmallProjectList from "@/components/organisms/SmallProjectList";

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Amar Muric | Projects</title>
        <meta
          name="description"
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Amar Muric, MERN full-stack developer, projects, MongoDB, Express, React, Node.js, portfolio"
        />
        <meta property="og:title" content="Amar Muric | Projects" />
        <meta
          property="og:description"
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-logo.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-url.com/projects"
        />
      </Helmet>

      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Over the past two years I've built a mix of projects. Some were made
          just for the fun of it, some to explore an idea I was curious about,
          and a few to solve a specific problem I kept running into. Here is a
          look at the work I'm most proud of.
        </p>
      </header>

      <ProjectList />

      <section className="mt-12 border-t border-border pt-8">
        <h3 className="text-lg font-semibold text-foreground">More projects</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A few smaller things I've built. For the full collection, take a look
          at my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AmarMuric04"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            GitHub profile
          </a>
          .
        </p>

        <SmallProjectList />
      </section>
    </>
  );
};

export default Projects;
