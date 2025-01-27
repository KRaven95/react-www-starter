import { TChildren } from "@library/frontend/interfaces/IChildren";
import { ScreenSizes } from "@library/frontend/interfaces/ScreenSizes";
import useIsMobile from "@library/frontend/hooks/useIsMobile";

interface Props {
  onDesktop: TChildren;
  onMobile: TChildren;
  breakpoint: ScreenSizes;
}

const Responsive = ({ breakpoint, onDesktop, onMobile }: Props) => {
  const isMobile = useIsMobile(breakpoint);

  if (isMobile) return <>{onMobile}</>;

  return <>{onDesktop}</>;
};

export default Responsive;
