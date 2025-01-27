import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps<T extends keyof JSX.IntrinsicElements | "link"> = (T extends "link"
  ? LinkProps & { as: "link" }
  : T extends "a"
  ? Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick" | "type"> & { as: "a" }
  : { as: T } & (T extends keyof JSX.IntrinsicElements
      ? ButtonHTMLAttributes<HTMLButtonElement>
      : AnchorHTMLAttributes<HTMLAnchorElement>)) & {
  byPass?: boolean;
};

function Button<T extends keyof JSX.IntrinsicElements | "link">({ as, byPass, ...rest }: ButtonProps<T>) {
  if (byPass) return <>{rest.children}</>;

  const classes = `${rest.className || ""}`;
  if (as === "button") {
    return <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} />;
  }

  if (as === "a") {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} />;
  }

  if (as === "link") {
    return <Link {...(rest as unknown as LinkProps)} className={classes} />;
  }

  throw new Error(`Invalid element type: ${as}`);
}

export default Button;
