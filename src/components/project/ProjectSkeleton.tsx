import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const baseColor = "#697565";
const highlightColor = "#4a5568";

export const ProjectSkeleton: React.FC = () => {
  return (
    <li className="relative bg-white/10 shadow-md p-3 border border-white/10 rounded-lg transition-all list-none theme-surface theme-primary-text">
      <div className="mb-2">
        <Skeleton
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={30}
          width={200}
        />
      </div>
      <div className="mb-2">
        <Skeleton
          style={{ marginRight: "0.5rem", borderRadius: "48px" }}
          highlightColor={highlightColor}
          baseColor={baseColor}
          inline={true}
          height={24}
          width={65}
        />
      </div>
      <div className="mb-4 w-1/2">
        <Skeleton
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={16}
          count={3}
        />
        <Skeleton
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={16}
          width={70}
        />
      </div>
      <div className="flex gap-2 mb-4">
        <Skeleton
          style={{ borderRadius: "12px" }}
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={180}
          width={148}
        />
        <Skeleton
          style={{ borderRadius: "12px" }}
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={180}
          width={148}
        />
        <Skeleton
          style={{ borderRadius: "12px" }}
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={180}
          width={148}
        />
        <Skeleton
          style={{ borderRadius: "12px" }}
          highlightColor={highlightColor}
          baseColor={baseColor}
          height={180}
          width={148}
        />
      </div>
      <div>
        <div className="flex gap-1">
          <div>
            <Skeleton
              highlightColor={highlightColor}
              baseColor={baseColor}
              height={27.5}
              width={125}
            />
            <Skeleton
              highlightColor={highlightColor}
              baseColor={baseColor}
              height={27.5}
              width={125}
            />
          </div>
          <div>
            <Skeleton
              highlightColor={highlightColor}
              baseColor={baseColor}
              height={27.5}
              width={125}
            />
          </div>
        </div>
        <div className="float-right">
          <Skeleton
            highlightColor={highlightColor}
            baseColor={baseColor}
            height={27.5}
            width={125}
          />
        </div>
      </div>
    </li>
  );
};
