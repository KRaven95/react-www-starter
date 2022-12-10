import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }, index) => {
          return <Route path={path} element={<Component />} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
