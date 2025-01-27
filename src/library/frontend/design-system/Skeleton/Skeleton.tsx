import React from "react";

type SkeletonProps = {
  type: {
    default?: {
      width: string;
      height: string;
    };
    circular?: {
      sizePx: number;
    };
    text?: {
      linesNumber: number;
      rowGapPx: number;
      lineHeight: number;
    };
  };
  roundness?: number;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ type, className, roundness }) => {
  const baseClass = `ds-skeleton`;
  let baseClassWithExtension = `${baseClass}${className ? ` ${className}` : ""}`;

  const getSkeletonType = () => {
    if (!!type?.circular) return "circular";
    else if (!!type?.text) return "text";
    else if (!!type?.default) return "default";
    else throw new Error("Skeleton must be type one of type: `default`, `circular`, `text`");
  };

  const skeletonType = getSkeletonType();

  if (skeletonType === "circular") baseClassWithExtension += ` ${baseClass}-avatar`;
  if (skeletonType === "default") baseClassWithExtension += ` ${baseClass}-animation`;
  if (skeletonType === "text") baseClassWithExtension += ` ${baseClass}-text`;

  const getSkeletonWidth = () => {
    switch (skeletonType) {
      case "circular":
        return type!.circular!.sizePx;
      case "text":
        return "100%";
      case "default":
        return type!.default!.width;
    }
  };

  const skeletonWidth = getSkeletonWidth();
  const skeletonHeight = skeletonType === "default" ? type!.default!.height : undefined;
  const textRowGap = skeletonType === "text" ? type!.text!.rowGapPx : undefined;
  const textLineStyles = { width: "100%", height: type?.text?.lineHeight, borderRadius: roundness };
  const skeletonStyles = { height: skeletonHeight, width: skeletonWidth, rowGap: textRowGap, borderRadius: roundness };

  const textLineElements: JSX.Element[] = [];
  if (skeletonType === "text") {
    for (let i = 0; i < type!.text!.linesNumber; i++) {
      textLineElements.push(<div className="text-line" style={textLineStyles}></div>);
    }
  }

  return (
    <div className={baseClassWithExtension} style={skeletonStyles}>
      {textLineElements.length > 0 &&
        textLineElements.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>)}
    </div>
  );
};

interface RectangleSkeletonProps {
  height: string;
  width: string;
  className?: string;
  roundness?: number;
}

const RectangleSkeleton = ({ height, width, className, roundness }: RectangleSkeletonProps) => {
  return <Skeleton type={{ default: { height, width } }} className={className} roundness={roundness} />;
};

interface ManyLinesSkeletonProps {
  rowGapPx: number;
  lineHeight: number;
  linesNumber: number;
  roundness: number;
  className?: string;
}

const ManyLinesSkeleton = ({ lineHeight, linesNumber, rowGapPx, roundness, className }: ManyLinesSkeletonProps) => {
  return (
    <Skeleton
      type={{
        text: { lineHeight, linesNumber, rowGapPx }
      }}
      roundness={roundness}
      className={className}
    />
  );
};

interface CircularSkeletonProps {
  sizePx: number;
  className?: string;
}

const CircularSkeleton = ({ sizePx, className }: CircularSkeletonProps) => {
  return <Skeleton type={{ circular: { sizePx } }} className={className} />;
};

export { RectangleSkeleton, ManyLinesSkeleton, CircularSkeleton };
