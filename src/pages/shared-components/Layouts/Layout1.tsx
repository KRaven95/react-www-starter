import React from "react";
import Layout from "@components/layoutElements/Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IChildren } from "@components/interfaces/IChildren";

const Layout1 = ({ children }: IChildren) => {
  return (
    <Layout variant={"navbar-content-footer"} Navbar={Navbar} Footer={Footer}>
      {children}
    </Layout>
  );
};

export default Layout1;
