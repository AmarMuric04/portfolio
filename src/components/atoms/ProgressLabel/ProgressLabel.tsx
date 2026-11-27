import React from "react";

interface ProgressLabelProps {
  type: string;
}

const ProgressLabel: React.FC<ProgressLabelProps> = ({ type }) => {
  if (type === "Online Course") {
    return (
      <div className="flex w-full justify-between">
        <p>0%</p>
        <p>20%</p>
        <p>40%</p>
        <p>60%</p>
        <p>80%</p>
        <p>100%</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <p>1st</p>
        <p>2nd</p>
        <p>3rd</p>
        <p>4th</p>
      </div>

      <div className="-mt-2 flex justify-between text-xs text-primary">
        <p>year</p>
        <p>year</p>
        <p>year</p>
        <p>year</p>
      </div>
    </>
  );
};

export default ProgressLabel;
