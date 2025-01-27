import { ReactNode, useEffect, useRef } from "react";

interface Props {
  idToSelect: string;
  tagToAttach: ReactNode;
}

const useAttachTag = ({ idToSelect, tagToAttach }: Props) => {
  const parentTag = useRef(null as any);
  parentTag.current = document.getElementById(idToSelect);

  const attachTag = () => {
    if (!parentTag.current) return;

    // parentTag.current.style.position = "relative";
    parentTag.current.appendChild(tagToAttach);
  };
  const detachTag = () => {
    if (!parentTag.current) return;

    parentTag.current.removeChild(tagToAttach);
  };

  return { attachTag, detachTag };
};

export default useAttachTag;
