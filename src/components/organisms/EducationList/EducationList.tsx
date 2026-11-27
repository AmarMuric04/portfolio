import React from "react";
import { education } from "@/assets/education";
import Education from "@/components/organisms/Education";
import { EducationType } from "@/types";

const EducationList: React.FC = () => {
  return (
    <ul>
      {education.map((edu: EducationType) => (
        <Education key={edu.name} edu={edu} />
      ))}
    </ul>
  );
};

export default EducationList;
