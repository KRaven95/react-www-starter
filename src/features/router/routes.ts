import { IChildren } from "@components/interfaces/IChildren";
import { paths } from "@data/paths";
import Development from "@pages/Development/Development";
import Main from "@pages/Main/Main";

interface IRoute {
  path: string;
  component: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: paths.main,
    component: Main
  },
  {
    path: paths.development,
    component: Development
  }
];
