import React from "react";

// import "./Button.scss";

interface IButton {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  rest?: React.ComponentProps<"button"> | React.ComponentProps<"a">;
}

const Button = React.forwardRef(({ onClick, href, children, ...rest }: IButton, ref: any) => {
  if ((!!onClick && !!href) || (!onClick && !href)) {
    throw new Error("Component should have only one prop from onClick and href");
  }

  const classes = "btn ds-btn";

  if (!!onClick) {
    return (
      <button className={classes} ref={ref} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  if (!!href) {
    return (
      <a className={classes} ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  }

  throw new Error("Wrong call of an component. Component need to have provided onClick function or href string");
});

export default Button;
