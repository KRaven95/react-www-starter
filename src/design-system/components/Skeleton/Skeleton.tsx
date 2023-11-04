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
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ type, className }) => {
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
  const textLineStyles = { width: "100%", height: type?.text?.lineHeight };
  const skeletonStyles = { height: skeletonHeight, width: skeletonWidth, rowGap: textRowGap };

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

export default Skeleton;
