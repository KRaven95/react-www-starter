import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import "./Positioner.scss";

type XCoord = "left" | "center" | "right";
type YCoord = "top" | "center" | "bottom";

const xMap = {
  left: "l",
  center: "c",
  right: "r"
};

const yMap = {
  top: "t",
  center: "c",
  bottom: "b"
};

interface Props extends BaseProps {
  xCoord: XCoord;
  yCoord: YCoord;
  zIndex?: number
}

const Positioner = ({ xCoord, yCoord, zIndex, children }: Props) => {
  return (
    <div className={"positioner " + `${xMap[xCoord]}-${yMap[yCoord]}`} style={{ zIndex }}>
      {children}
    </div>
  );
};

export default Positioner;
