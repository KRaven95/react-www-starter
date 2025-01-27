import { ReactNode } from "react";

export interface IChildren {
  children: TChildren;
}

export type TChildren = React.ReactNode | React.ReactElement | ReactNode | JSX.Element;
