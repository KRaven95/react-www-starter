import useDraggableScroll from "./useDraggableScroll";
import { TChildren } from "@library/frontend/interfaces/IChildren";

import "./DraggableScroll.scss";

interface IDragScroll {
  speedMultiplier?: number;
  children: TChildren;
}

const DraggableScroll = ({ children, speedMultiplier }: IDragScroll) => {
  const scrollContainerRef = useDraggableScroll<HTMLDivElement>({ speedMultiplier: speedMultiplier });

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      {children}
    </div>
  );
};

export default DraggableScroll;
