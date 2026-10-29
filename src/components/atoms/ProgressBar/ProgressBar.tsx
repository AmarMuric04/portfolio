import React from "react";

interface ProgressBarProps {
  currentProgression: number;
  takeAway: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgression,
  takeAway,
}) => {
  return (
    <div>
      <div
        style={{
          left: `${currentProgression - takeAway}%`,
        }}
        className="inline-flex relative mt-8 w-auto"
      >
        {currentProgression !== 100 ? (
          <p className="relative w-auto">
            {currentProgression}
            {currentProgression === currentProgression ? "%" : ""}
          </p>
        ) : (
          <p className="right-14 sm:right-10 relative w-auto">Completed</p>
        )}
      </div>

      <div className="h-[5px] w-full theme-surface-alt transition-all">
        <div
          style={{
            width: `${currentProgression}%`,
          }}
          className="h-full rounded-full theme-secondary-background"
        />
      </div>
    </div>
  );
};
