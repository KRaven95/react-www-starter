import React from "react";
import "./Skeleton.css";

type SkeletonProps = {
  width?: string;
  height?: string;
  type?: "default" | "avatar" | "text";
  className?: string;
  textLines?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "100%",
  type = "default",
  className = "",
  textLines = 1
}) => {
  let skeletonClass = "ds-skeleton";
  if (className) {
    skeletonClass += ` ${className}`;
  }

  if (type === "avatar") {
    skeletonClass += " ds-skeleton-avatar";
  } else if (type === "text") {
    skeletonClass += " ds-skeleton-text";
  }

  const textLineElements: JSX.Element[] = [];
  for (let i = 0; i < textLines; i++) {
    textLineElements.push(<div key={i} className="ds-skeleton-text-line"></div>);
  }

  return (
    <div className={skeletonClass} style={{ width, height }}>
      {type === "text" && textLineElements}
    </div>
  );
};

export default Skeleton;
