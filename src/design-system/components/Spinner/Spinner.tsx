interface SpinnerProps {
  spinnerImgSrc: string;
  sizePx: number;
  rest?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const Spinner = ({ sizePx, spinnerImgSrc, ...rest }: SpinnerProps) => {
  return <img src={spinnerImgSrc} alt="spinner" height={sizePx} className="ds-spinner" {...rest} />;
};

export default Spinner;
