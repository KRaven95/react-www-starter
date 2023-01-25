import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component, layout: Layout }, index) => {
          return (
            <Route
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
              key={index}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
