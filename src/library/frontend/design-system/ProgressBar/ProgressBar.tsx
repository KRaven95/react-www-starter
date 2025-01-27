import "./ProgressBar.scss";

type Percentage = `${number}%`;

interface Props {
  fillPercentage: Percentage;
}

const ProgressBar = ({ fillPercentage }: Props) => {
  return (
    <div className="progress-bar track">
      <div className="bar" style={{ width: fillPercentage }} />
    </div>
  );
};

export default ProgressBar;
