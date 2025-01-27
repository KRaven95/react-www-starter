import useIsMobile from "@library/frontend/hooks/useIsMobile";
import { TChildren } from "@library/frontend/interfaces/IChildren";
import { ScreenSizes } from "@library/frontend/interfaces/ScreenSizes";

interface Props {
  breakpoint: ScreenSizes;
  children: TChildren;
}

const MobileOnly = ({ breakpoint, children }: Props) => {
  const isMobile = useIsMobile(breakpoint);

  if (isMobile) return <>{children}</>;

  return <></>;
};

export default MobileOnly;
