import React from "react";
import Content from "../Content/Content";
import "./Layout.scss";

export type LayoutVariant = "navbar-content-footer" | "navbar-sidebar-content" | "sidebar-navbar-content" | "no-layout";

export interface LayoutProps {
  variant: LayoutVariant;
  Navbar?: React.ReactNode | any;
  Sidebar?: React.ReactNode | any;
  Footer?: React.ReactNode | any;
  children: React.ReactNode;
}

const Layout = ({ variant, Navbar, Sidebar, Footer, children }: LayoutProps) => {
  const layoutInset = () => {
    if (variant === "no-layout") {
      return <>{children}</>;
    }

    if (variant === "navbar-content-footer") {
      return (
        <div className="layout navbar-content-footer">
          <div className="navbar-part fixed">{Navbar && <Navbar />}</div>
          <div className="content-part">{children}</div>
          <div className="footer-part">{Footer && <Footer />}</div>
        </div>
      );
    }

    if (variant === "navbar-sidebar-content") {
      return (
        <div className="layout navbar-sidebar-content">
          <div className="navbar-part">{Navbar && <Navbar />}</div>
          <div className="bottom-part f">
            <div className="sidebar-part">{Sidebar && <Sidebar />}</div>
            <div className="content-part">
              <Content>{children}</Content>
            </div>
          </div>
        </div>
      );
    }

    if (variant === "sidebar-navbar-content") {
      return (
        <div className="layout sidebar-navbar-content">
          <div className="sidebar-part">{Sidebar && <Sidebar />}</div>
          <div className="right-part">
            <div className="navbar-part">{Navbar && <Navbar />}</div>
            <div className="content-part">
              <Content>{children}</Content>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{layoutInset()}</>;
};

export default Layout;
