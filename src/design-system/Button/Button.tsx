import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Props = {
  as?: "button" | "a" | "link"; // Specify which element to use
  to?: string; // Only used when as='link'
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<Props> = ({ as = "button", to, className = "", children, ...restProps }) => {
  const baseClassName = "ds-button";
  const combinedClassName = `${baseClassName}${className ? ` ${className}` : ""}`;

  // Determine which element to render based on the "as" prop
  if (as === "button") {
    return (
      <button className={combinedClassName} type="button" {...restProps}>
        {children}
      </button>
    );
  } else if (as === "a") {
    return (
      <a className={combinedClassName} href="#" {...restProps}>
        {children}
      </a>
    );
  } else if (as === "link") {
    return (
      <Link className={combinedClassName} to={to ?? "#"} {...restProps}>
        {children}
      </Link>
    );
  } else {
    throw new Error(`Invalid Button "as" prop: ${as}`);
  }
};

export default Button;
