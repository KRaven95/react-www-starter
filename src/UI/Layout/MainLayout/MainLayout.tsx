import React from "react";
import Footer from "../../Sections/Footer/Footer";
import Navbar from "../../Sections/Navbar/Navbar";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
