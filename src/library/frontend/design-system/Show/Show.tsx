import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  when: boolean;
}

const Show = ({ children, when }: Props) => {
  return <>{when ? <>{children}</> : <></>}</>;
};

export default Show;
