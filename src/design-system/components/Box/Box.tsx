import React from "react";
import "./Box.scss";
import Button from "../Button/Button";

interface IBox {
  children: React.ReactNode;
}

const Box = React.forwardRef(({ children }: IBox, ref: any) => {
  return (
    <div className="ds-box box" ref={ref}>
      {children}
      <Button as="button" onClick={() => {}}>
        dupa
      </Button>
    </div>
  );
});

export default Box;
