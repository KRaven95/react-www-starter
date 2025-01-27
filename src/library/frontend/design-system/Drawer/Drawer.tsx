import { ElementRef, forwardRef } from "react";

import { BaseProps } from "@library/frontend/interfaces/BaseProps";

import { classNames } from "@library/functions/utils";

import "./Drawer.scss";

type DrawerSide = "left" | "right";

interface Props extends BaseProps {
  isOpened: boolean;
  children: React.ReactNode;
  maxWidth: string;
  side: DrawerSide;
}

const Drawer = forwardRef<ElementRef<"div">, Props>(({ isOpened, children, maxWidth, side, ...rest }, ref) => {
  return (
    <div
      {...rest}
      className={classNames("drawer", isOpened ? "shown" : "hidden", side, rest.className)}
      style={{ ...rest.style, maxWidth }}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Drawer;
