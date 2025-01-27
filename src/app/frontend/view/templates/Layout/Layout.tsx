import { classNames } from "@library/functions/utils";
import "./Layout.scss";
import { TChildren } from "@library/frontend/interfaces/IChildren";

const layoutVariants = ["fullscreen", "overscreen"] as const;
type LayoutVariants = (typeof layoutVariants)[number];

interface Props {
  variant: LayoutVariants;
  children: TChildren;
}

const Layout = (props: Props) => {
  return <div className={classNames("layout", props.variant)}>{props.children}</div>;
};

export default Layout;
