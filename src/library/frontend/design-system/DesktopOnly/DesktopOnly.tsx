import { ScreenSizes } from "@library/frontend/interfaces/ScreenSizes";
import { TChildren } from "@library/frontend/interfaces/IChildren";
import useIsMobile from "@library/frontend/hooks/useIsMobile";

interface Props {
  breakpoint: ScreenSizes;
  children: TChildren;
}

const DesktopOnly = ({ breakpoint, children }: Props) => {
  const isMobile = useIsMobile(breakpoint);

  if (isMobile) return <></>;

  return <>{children}</>;
};

export default DesktopOnly;
