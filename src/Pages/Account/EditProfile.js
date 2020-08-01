import styled, { css } from "styled-components";

import EditProfilePage from "./EditProfilePage";
import Footer from "../../Component/Footer/Footer";
import ProductDetailHeader from "../../Component/Header/ProductsDetailHeader";
import React from "react";

const Account = () => {
  return (
    <>
      <ProductDetailHeader />
      <EditProfilePage />
      <Footer />
    </>
  );
};

export default Account;
