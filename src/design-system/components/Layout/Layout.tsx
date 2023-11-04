import React from "react";
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
          <header className="navbar-part fixed">{Navbar && <Navbar />}</header>
          <main className="content-part">{children}</main>
          <footer className="footer-part">{Footer && <Footer />}</footer>
        </div>
      );
    }

    if (variant === "navbar-sidebar-content") {
      return (
        <div className="layout navbar-sidebar-content">
          <header className="navbar-part">{Navbar && <Navbar />}</header>
          <div className="bottom-part f">
            <aside className="sidebar-part">{Sidebar && <Sidebar />}</aside>
            <div className="content-part">
              <main className="content-part">{children}</main>
            </div>
          </div>
        </div>
      );
    }

    if (variant === "sidebar-navbar-content") {
      return (
        <div className="layout sidebar-navbar-content">
          <aside className="sidebar-part">{Sidebar && <Sidebar />}</aside>
          <div className="right-part">
            <header className="navbar-part">{Navbar && <Navbar />}</header>
            <div className="content-part">
              <main className="content-part">{children}</main>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{layoutInset()}</>;
};

export default Layout;
