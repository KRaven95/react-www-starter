import "./Checkbox.scss";

interface ICheckbox {
  isChecked: boolean;
  toggle: () => void;
  uncheckedImg: string;
  checkedImg: string;
  sizePx: number;
  classNames?: string;
  rest: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Checkbox = ({ isChecked, toggle, uncheckedImg, checkedImg, sizePx, ...rest }: ICheckbox) => {
  return (
    <button onClick={toggle} className="ds-checkbox" {...rest}>
      <img
        className="ds-checkbox-image"
        src={isChecked ? checkedImg : uncheckedImg}
        alt="check state"
        height={sizePx}
      />
    </button>
  );
};

export default Checkbox;
