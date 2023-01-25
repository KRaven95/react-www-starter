import { IChildren } from "@components/interfaces/IChildren";
import { paths } from "@data/paths";
import Development from "@pages/Development/Development";
import Main from "@pages/Main/Main";
import NotFound from "@pages/NotFound/NotFound";
import Layout1 from "@pages/shared-components/Layouts/Layout1";
import NoLayout from "@pages/shared-components/Layouts/NoLayout";

interface IRoute {
  path: string;
  component: () => JSX.Element;
  layout: ({ children }: IChildren) => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: paths.main.path,
    component: Main,
    layout: Layout1
  },
  {
    path: paths.development.path,
    component: Development,
    layout: Layout1
  },
  {
    path: paths.notFound.path,
    component: NotFound,
    layout: NoLayout
  }
];
