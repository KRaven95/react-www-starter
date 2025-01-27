import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import "./Group.scss";

export interface IGroup extends BaseProps {
  children: React.ReactNode;
  colGap?: number;
  rowGap?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  fullSize?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  testid?: string;
  reff?: React.RefObject<HTMLDivElement>;
  byPass?: boolean;
}

const Group = ({
  colGap,
  rowGap,
  children,
  justifyContent = "flex-start",
  alignItems = "center",
  fullSize = false,
  fullWidth = false,
  fullHeight = false,
  testid,
  reff,
  byPass,
  ...rest
}: IGroup) => {
  if (byPass) return <>{children}</>;
  const classes = `group${rest.className ? ` ${rest.className}` : ""}${fullSize ? " full-size" : ""}${
    fullWidth ? " full-width" : ""
  }${fullHeight ? " full-height" : ""}`;

  const isGap = !!rowGap || !!colGap;

  return (
    <div
      {...rest}
      className={classes}
      data-testid={testid}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: isGap ? `${rowGap ? rowGap : `0`}px ${colGap ? colGap : "0"}px` : undefined,
        justifyContent,
        alignItems,
        ...rest.style
      }}
      ref={reff}
    >
      {children}
    </div>
  );
};

export default Group;
