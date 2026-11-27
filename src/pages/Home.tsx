import Myself from "/myself.webp";
import UnhideText from "@/components/atoms/UnhideText";
import { GithubSVG, LinkedInSVG, MailSVG } from "@/assets/svgs";
import { getAge } from "@/utils/getAge";
import { Helmet } from "react-helmet";
import React from "react";

const BIRTH_DATE = new Date(2004, 11, 27);

const Home: React.FC = () => {
  const age = getAge(BIRTH_DATE);

  return (
    <>
      <Helmet>
        <title>Amar Muric | About Me</title>
        <meta
          name="description"
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Amar Muric, full-stack developer, MERN, portfolio, developer journey, MongoDB, Express, React, Node.js"
        />
        <meta property="og:title" content="Amar Muric | About Me" />
        <meta
          property="og:description"
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-logo.png" />
      </Helmet>

      <section className="flex flex-col text-center sm:flex-row sm:text-start items-center gap-4 mt-8">
        <img
          className="h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-full"
          src={Myself}
          alt="Amar Murić"
        />
        <div>
          <h2 className="text-xl font-bold text-foreground transition-all sm:text-4xl">
            Amar Murić
          </h2>
          <p className="sm:text-xl">
            Fullstack Software Engineer based in Serbia
          </p>
        </div>
      </section>
      <section className="my-8 sm:text-lg leading-8">
        <p>
          I’m a {age}-year-old full-stack developer with a deep passion for
          building polished, impactful, and innovative products. My journey into
          programming began in 2022-2023
          <UnhideText>
            , and it’s been an exhilarating ride ever since
            <UnhideText>
              , captivated by the art of creating beautiful and responsive user
              interfaces
            </UnhideText>
          </UnhideText>
          , but my curiosity quickly led me to explore the backend, databases,
          and DevOps, transforming me into a well-rounded full-stack developer.
          <strong>
            <em>
              {" "}
              My primary stack is the MERN (MongoDB, Express.js, React, Node.js)
            </em>
          </strong>{" "}
          ecosystem{" "}
          <UnhideText>
            but I’m always experimenting with modern tools like{" "}
            <strong>
              {" "}
              Next.js for server-side rendering, WebSocket for real-time
              communication
            </strong>
            , and other cutting-edge technologies that push the boundaries of
            what’s possible on the web
          </UnhideText>
          .
        </p>
        <p className="mt-4">
          <UnhideText>
            {"Although I don’t have formal work experience yet, "}
          </UnhideText>
          I’ve spent countless hours building personal projects, contributing to
          open-source, and immersing myself in the developer community.{" "}
          <UnhideText>
            I thrive on taking rough, abstract ideas and turning them into fully
            functional, well-designed products
            <UnhideText>
              —whether it’s crafting intuitive user interfaces, designing
              scalable and efficient backends, optimizing databases, or
              automating deployment <strong>pipelines with CI/CD tools.</strong>
            </UnhideText>
          </UnhideText>{" "}
          I’m a <strong>quick learner</strong> and love diving into new
          frameworks, libraries, and tools to expand my skill set and stay ahead
          in the ever-evolving tech landscape.
        </p>
        <p className="mt-4">
          So far, I’ve built a variety of projects
          <UnhideText>
            , from dynamic web applications and e-commerce platforms to
            real-time chat systems and interactive dashboards
          </UnhideText>
          . Each project has been a learning experience, helping me refine my
          <strong> problem-solving skills</strong> and deepen my understanding
          of the full development lifecycle.{" "}
          <UnhideText>
            I’m particularly fascinated by the intersection of design and
            technology, and
          </UnhideText>{" "}
          I strive to create products that are <em>not</em>{" "}
          <strong>
            only functional and performant but also visually appealing,
            accessible, and user-friendly
          </strong>
          .{" "}
          <UnhideText>
            I believe that great software is a{" "}
            <strong>blend of technical excellence and thoughtful design</strong>
            .
          </UnhideText>
        </p>
        <p className="mt-4">
          While I’m still early in my career, I’m incredibly excited about the
          future and the opportunities to{" "}
          <UnhideText>
            grow <UnhideText>, collaborate,</UnhideText> and
          </UnhideText>{" "}
          make a meaningful impact in the tech world. I’m always{" "}
          <strong>
            eager to learn, share knowledge, and connect with like-minded
            developers
          </strong>{" "}
          who are passionate about building cool things and solving real-world
          problems.{" "}
          <UnhideText>
            Whether it’s through open-source contributions, hackathons, or
            personal projects,{" "}
            <UnhideText>
              I’m committed to continuously improving my craft and contributing
              to the developer community in meaningful ways.
            </UnhideText>
          </UnhideText>
        </p>
      </section>
      <section className="flex items-center gap-8 flex-wrap">
        <a
          target="_blank"
          href="https://github.com/AmarMuric04"
          className="flex cursor-pointer items-center gap-3 text-lg transition-all hover:text-primary"
        >
          <GithubSVG />
          <p>GitHub</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/"
          className="flex cursor-pointer items-center gap-3 text-lg transition-all hover:text-primary"
        >
          <LinkedInSVG />
          <p>LinkedIn</p>
        </a>
        <a
          href="mailto:muricamar2004@gmail.com"
          className="flex cursor-pointer items-center gap-3 text-lg transition-all hover:text-primary"
        >
          <MailSVG />
          <p>Email</p>
        </a>
      </section>
    </>
  );
};

export default Home;
