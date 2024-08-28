import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = ({ loading }) => {
  return (
    <>
      <Header />
      <Outlet className="page" />
      <Footer />
    </>
  );
};

export default Layout;
