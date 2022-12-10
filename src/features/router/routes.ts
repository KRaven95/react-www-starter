import { IChildren } from "@components/interfaces/IChildren";
import { paths } from "@data/paths";
import Development from "@pages/Development/Development";

interface IRoute {
  path: string;
  component: (() => React.ReactNode) | (({ children }: IChildren) => React.ReactNode);
}

export const routes: IRoute[] = [
  {
    path: paths.development,
    component: Development
  }
];
