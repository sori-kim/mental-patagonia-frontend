import { Link, useParams, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import DetailsSection from "../ProductDetails/DetailsSection";
import Footer from "../../../Component/Footer/Footer";
import Modal from "./Modal/Modal";
import ProductsDetailHeader from "../../../Component/Header/ProductsDetailHeader";
import Similarity from "./Similarity";
import SlideCarousel from "../../Products/ProductDetails/SlideCarousel";
import { connect } from "react-redux";

const ProductDetails = ({ handleModal, match }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const id = match.params.id;

  useEffect((props, match) => {
    fetch(`http://3.34.144.236:8080/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setFilteredProducts(res.data);
      });
  }, []);

  return (
    <>
      <ProductsDetailHeader />
      <Review> Reviews </Review>
      <Title>{filteredProducts.name}</Title>
      <SlideCarousel data={filteredProducts} />
      <Modal data={filteredProducts} handleModal={handleModal} />
      <DetailsSection data={filteredProducts} />
      <Similarity data={filteredProducts} />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    handleModal: state,
    selectSize: state.selectSize,
  };
};

export default connect(mapStateToProps)(ProductDetails);

const Review = styled.div`
  font-size: 80px;
  color: black;
  z-index: 999;
`;

const Title = styled.h1`
  height: 100px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  width: 40%;
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 7%;
`;
