// import { BaseProps } from "@library/frontend/interfaces/BaseProps";

import { BaseProps } from "@library/frontend/interfaces/BaseProps";

interface SpinnerProps extends BaseProps<HTMLImageElement> {
  spinnerImgSrc: string;
  sizePx: number;
}

const Spinner = ({ sizePx, spinnerImgSrc, ...rest }: SpinnerProps) => {
  return (
    <img
      {...rest}
      src={spinnerImgSrc}
      alt="spinner"
      height={sizePx}
      width={sizePx}
      className={`ds-spinner ${rest.className}`}
    />
  );
};

export default Spinner;
