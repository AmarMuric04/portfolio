import React from "react";
import Skill from "@/components/atoms/Skill";

interface SkillListProps {
  skills: Array<string>;
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Skill key={skill + index}>{skill}</Skill>
      ))}
    </ul>
  );
};

export default SkillList;
