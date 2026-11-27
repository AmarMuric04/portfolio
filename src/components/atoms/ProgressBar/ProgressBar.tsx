import React from "react";

interface ProgressBarProps {
  currentProgression: number;
  takeAway: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgression,
  takeAway,
}) => {
  const isComplete = currentProgression === 100;

  return (
    <div>
      <div
        className="relative mt-8 inline-flex w-auto"
        style={{ left: `${currentProgression - takeAway}%` }}
      >
        {isComplete ? (
          <p className="relative right-14 w-auto sm:right-10">Completed</p>
        ) : (
          <p className="relative w-auto">{currentProgression}%</p>
        )}
      </div>

      <div className="h-[5px] w-full bg-secondary transition-all">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${currentProgression}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
