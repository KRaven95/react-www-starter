import React, { ReactNode } from "react";
import { IChildren } from "@components/interfaces/IChildren";
import { createPortal } from "react-dom";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface IPortalProps {
  wrapperId: string;
}

const Portal = ({ children, wrapperId = "react-portal-wrapper" }: IPortalProps & IChildren) => {
  const [wrapperElement, setWrapperElement] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children as ReactNode, wrapperElement);
};

export default Portal;
