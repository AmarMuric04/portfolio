import React from "react";

interface SkillProps {
  children?: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ children }) => {
  return (
    <li className="rounded-md bg-primary px-2 py-1 text-primary-foreground transition-all">
      {children}
    </li>
  );
};

export default Skill;
