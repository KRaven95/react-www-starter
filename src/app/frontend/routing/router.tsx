import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@app/App";

const router = createBrowserRouter([App]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
