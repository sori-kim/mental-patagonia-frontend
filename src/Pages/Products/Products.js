import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import ProductsMens from "./ProductsCategory/ProductsMens";
import ProductsSlideItems from "../Products/ProductsSlide/ProductsSlideItems";
import ProductsVideo from "./ProductsVideo/ProductsVideo";
import React from "react";
import SlideMens from "./ProductsSlide/SlideMens";

const Products = () => {
  return (
    <>
      <Header />
      <ProductsVideo />
      <SlideMens />
      <ProductsSlideItems />
      <ProductsMens />
      <Footer />
    </>
  );
};

export default Products;
