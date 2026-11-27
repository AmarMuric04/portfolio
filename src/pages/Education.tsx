import { Helmet } from "react-helmet";
import EducationList from "@/components/organisms/EducationList";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Amar Muric | Education</title>
        <meta
          name="description"
          content="Explore the educational background of Amar Muric, a MERN full-stack developer. Learn about his skills and the institutions that shaped his career."
        />
        <meta
          name="keywords"
          content="Amar Muric, full-stack developer, MERN, education, learning journey, MongoDB, Express, React, Node.js"
        />
        <meta property="og:title" content="Amar Muric | Education" />
        <meta
          property="og:description"
          content="Explore the educational background of Amar Muric, a MERN full-stack developer. Learn about his skills and the institutions that shaped his career."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-logo.png" />
      </Helmet>
      <h2 className="mb-8 text-2xl font-semibold text-foreground transition-all">
        My Education
      </h2>
      <p className="text-lg">
        I’m currently in my second year of university, where I’ve been actively
        exploring a mix of academic and hands-on projects. From coursework to
        personal initiatives, I’ve worked on everything from creative hobbies to
        practical solutions for everyday problems. These experiences are helping
        me build a strong foundation and develop skills that I’m excited to grow
        further.
      </p>
      <EducationList />
      <p className="text-lg my-4">
        But my education doesn’t stop there. Beyond formal courses, I’ve
        immersed myself in an uncountable amount of content related to
        programming, software development, and personal growth. From in-depth
        tutorials and technical deep dives to industry talks and
        self-improvement strategies,{" "}
        <span>
          I constantly seek new knowledge to refine my skills and expand my
          perspective
        </span>
        . Whether it{"'"}s staying up to date with the latest technologies ,
        exploring best practices, or improving problem-solving abilities,{" "}
        <strong>
          I believe in continuous learning as the key to growth and innovation.
        </strong>
      </p>
    </>
  );
}
