import styled, { css } from "styled-components";

import AccountPage from "./AccountPage";
import Footer from "../../Component/Footer/Footer";
import ProductDetailHeader from "../../Component/Header/ProductsDetailHeader";
import React from "react";

const Account = () => {
  return (
    <>
      <ProductDetailHeader />
      <AccountPage />
      <Footer />
    </>
  );
};

export default Account;
