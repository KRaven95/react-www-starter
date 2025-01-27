import React from "react";
import { APP_STAGE } from "@library/project/envs";

const useLockCtxMenu = () => {
  React.useEffect(() => {
    const handleBlockCtxMenu = (e: MouseEvent) => {
      if (APP_STAGE === "production") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleBlockCtxMenu);

    return () => document.removeEventListener("contextmenu", handleBlockCtxMenu);
  }, []);
};

export default useLockCtxMenu;
