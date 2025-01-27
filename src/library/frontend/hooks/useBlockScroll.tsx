import React from "react";

interface Props {
  condition: boolean;
}

const useBlockScroll = ({ condition }: Props) => {
  React.useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflowY = "initial";
    };
  }, [condition]);
};

export default useBlockScroll;
