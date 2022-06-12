import React from "react";

interface INoLayout {
  children: React.ReactNode;
}

const NoLayout = ({ children }: INoLayout) => {
  return <>{children}</>;
};

export default NoLayout;
