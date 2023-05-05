import { ChildrenProp } from "src/design-system/types/ChildrenProp";

const Message = ({ children }: ChildrenProp) => {
  return <div className="message">{children}</div>;
};

export default Message;
