import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
