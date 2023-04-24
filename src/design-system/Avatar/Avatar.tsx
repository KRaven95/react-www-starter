import React from "react";
import "./Avatar.scss";

interface IAvatar {}

const Avatar = React.forwardRef(({}: IAvatar, ref: any) => {
  return <div className="ds-avatar avatar" ref={ref}></div>;
});

export default Avatar;
