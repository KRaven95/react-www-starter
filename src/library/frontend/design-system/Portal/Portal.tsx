import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import { IChildren } from "@library/frontend/interfaces/IChildren";

interface IPortalProps {
  id: string;
  onClick?: () => void;
}

function createWrapperAndAppendToBody(wrapperId: string, onClick: () => void) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  wrapperElement.addEventListener("click", onClick);
  return wrapperElement;
}

const Portal = ({ children, onClick = () => {}, id }: IChildren & IPortalProps) => {
  const [wrapperElement, setWrapperElement] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(id, onClick);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.removeEventListener("click", onClick);
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (wrapperElement === null) return null;

  return <>{createPortal(children as ReactNode, wrapperElement)}</>;
};

export default Portal;
