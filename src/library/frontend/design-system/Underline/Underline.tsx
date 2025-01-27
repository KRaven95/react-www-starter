import "./Underline.scss";

interface Props {
  width: number; // width can be in percentages or pixels
  leftOffset: number; // horizontal offset from the left in percentages or pixels
  height: string;
}

const Underline = ({ leftOffset, width, height }: Props) => {
  return <div className="underline-comp" style={{ width: width, left: leftOffset, height }} />;
};

export default Underline;
