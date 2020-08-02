import React, { useState } from "react";

import HoverHeaderShop from "../HoverHeader/HoverHeaderShop";
import { Link } from "react-router-dom";
import { WIDTH375 } from "../../../Config";
import { WIDTH800 } from "../../../Config";
import styled from "styled-components";

const NavHeader = () => {
  const [menuShopState, setmenuShopState] = useState(true);

  const showShopMenu = () => {
    setmenuShopState(false);
  };
  const hideShopMenu = () => {
    setmenuShopState(true);
  };

  return (
    <div>
      <Navigation>
        <NavigationWrap>
          <MainLogoWrap onMouseEnter={hideShopMenu}>
            <Link to="/">
              <MainLogo
                viewBox="0 0 122.1 22.7"
                aria-labelledby="icon--logo-desc icon--logo-title"
                id="icon--logo"
                xmlns="http://www.w3.org/2000/svg"
                width="155"
              >
                <title id="icon--logo-title">logo</title>
                <desc id="icon--logo-desc">logo</desc>
                <path d="M37.5 15.2c0-.2-.2-.1-.2-.1-.3.2-.4.2-.8.2s-1.1-.2-1.1-1V6.6s0-.1.1-.1h1.8s.1.1.1-.1.4-1.9.4-1.9 0-.1-.1-.1h-2.3s-.1 0-.1-.1v-1c0-.6 0-1.4.2-2 0 0 .1-.1-.1-.1S34.1 1 34 1c-.1 0-.2.1-.2.1C32.9 3 31.1 4.4 29 5c0 0-.1 0-.1.1v1.2c0 .2.1.1.1.1h1.2c.1 0 .1.1.1.1v7.9c0 2.3 1 3.6 3.5 3.6 2.3 0 2.4-.1 4.2-1.3 0 0 .1 0 .1-.2-.1 0-.6-1.1-.6-1.3zM9.5 4c-1.2 0-2.1.5-3.3 1.3 0 0-.1.1-.1-.1v-1c-.1-.2-.2-.1-.2-.1L.1 5.6s-.1 0-.1.1v1.4c0 .2.1.1.1.1L.8 7s.2 0 .2.1V20s0 .2-.2.2H.2s-.2 0-.2.2v1.3c0 .2.2.2.2.2h7.5s.1 0 .1-.2v-1.3c0-.2-.2-.2-.2-.2H6.2C6 20.2 6 20 6 20v-2.3c0-.1.1-.1.1-.1.7.4 1.8.5 2.6.5 4.1 0 6.5-3.8 6.5-7.6 0-3.9-2.5-6.5-5.7-6.5zM7.8 16C6.4 16 6 15 6 13.8V7.2c0-.2.2-.2.2-.2l.7-.1c.9 0 3.3.2 3.3 5.1-.1 3-.8 4-2.4 4zm93.7-12c1.4 0 3.6-.6 3.6-2.3 0-1.4-1.3-1.7-2.5-1.7s-3 1-3 2.3c0 1.1.8 1.7 1.9 1.7z"></path>
                <path d="M29.3 16.1h-.6c-.1 0-.1-.3-.1-.2V8.5c0-3.2-2.1-4.5-5.2-4.5-1.1 0-2.1.2-3.2.6 0 0-.2.1-.1-.2.1-.1.1-.3.1-.3s.1-.1-.1-.2-1.2-.4-1.4-.5c-.1 0-.1.1-.1.1s-1.6 4-1.7 4.1c-.1.2 0 .2 0 .2s1.3.5 1.5.5c.1.1.2 0 .2 0 .7-.9 1.5-1.5 3-1.5 1.2 0 1.8.5 1.8 1.6V9l-3.8.1c-2.5 0-4.5 1.8-4.5 4.9 0 2.5 1.9 4.1 4.4 4.1 1.5 0 2.7-.6 3.7-1.5 0 0 .2-.3.2 0s.1.6.2 1c0 .2.1.1.1.1H29s.2.1.2-.1v-1.3c.3-.1.3-.2.1-.2zm-5.8-2.8c0 1-.2 2-1.5 2-1.4 0-1.7-1.2-1.7-2.2 0-1.4 1-2.3 2.4-2.3h.7c.2 0 .1.1.1.1v2.4zm98.1-11.5c-.4-.3-.8-.5-1.3-.5s-.9.2-1.2.5c-.3.3-.5.8-.5 1.2 0 .5.2.9.5 1.3s.8.5 1.2.5c.5 0 .9-.2 1.3-.5.3-.4.5-.8.5-1.3s-.1-.9-.5-1.2zm-.1 2.3c-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.3-.3-.4-.7-.4-1.1 0-.4.1-.8.4-1.1.3-.3.7-.4 1.1-.5.4 0 .8.2 1.1.5.3.3.4.7.4 1.1 0 .5-.1.8-.4 1.1zM52.2 16h-.6c-.1 0-.1-.2-.1-.2V8.5c0-3.2-2.1-4.5-5.2-4.5-1.1 0-2.1.2-3.2.6 0 0-.2.1-.1-.2.1-.1.1-.3.1-.3s.1-.1-.1-.2-1.2-.4-1.4-.5c-.1 0-.1.1-.1.1s-1.6 3.9-1.7 4.1c-.1.2 0 .2 0 .2s1.3.5 1.5.5c.1.1.2 0 .2 0 .7-.9 1.5-1.5 3-1.5 1.2 0 1.8.5 1.8 1.6V9l-3.8.1C40 9.1 38 10.9 38 14c0 2.5 1.9 4.1 4.4 4.1 1.5 0 2.7-.6 3.7-1.5 0 0 .2-.3.2 0s.1.6.2 1c0 .2.1.1.1.1h5.3s.2.1.2-.1v-1.3c.3-.1.3-.3.1-.3zm-5.8-5.2v2.5c0 1-.2 2-1.5 2-1.4 0-1.7-1.2-1.7-2.2 0-1.4 1-2.3 2.4-2.3h.7c.1-.1.1 0 .1 0zm73.5 5.2h-.6c-.1 0-.1-.2-.1-.2V8.5c0-3.2-2.1-4.5-5.2-4.5-1.1 0-2.1.2-3.2.6 0 0-.2.1-.1-.2.1-.1.1-.3.1-.3s.1-.1-.1-.2-1.2-.4-1.4-.5c-.1 0-.1.1-.1.1s-1.6 3.9-1.7 4.1c-.1.2 0 .2 0 .2s1.3.5 1.5.5c.1.1.2 0 .2 0 .7-.9 1.5-1.5 3-1.5 1.2 0 1.8.5 1.8 1.6V9l-3.8.1c-2.5 0-4.5 1.8-4.5 4.9 0 2.5 1.9 4.1 4.4 4.1 1.5 0 2.7-.6 3.7-1.5 0 0 .2-.3.2 0s.1.6.2 1c0 .2.1.1.1.1h5.3s.2.1.2-.1v-1.3c.3-.1.3-.3.1-.3zm-5.8-5.2v2.5c0 1-.2 2-1.5 2-1.4 0-1.7-1.2-1.7-2.2 0-1.4 1-2.3 2.4-2.3h.7c.1-.1.1 0 .1 0z"></path>
                <path d="M121.2 2.6c0-.2-.1-.4-.3-.5-.1 0-.3-.1-.5-.1h-.7v2h.3v-.8h.3c.2 0 .3 0 .4.1.1.1.2.2.2.4V4h.3v-.4c0-.1 0-.2-.1-.3-.1-.1-.2-.2-.3-.2.1 0 .2 0 .3-.1 0-.1.1-.2.1-.4zm-.6.3h-.6v-.6h.3c.2 0 .3 0 .4.1.1 0 .1.1.1.3 0 .1 0 .2-.2.2zm-14.8 13.3c0-.2-.1-.1-.1-.1h-.7c-.2 0-.1-.1-.1-.1V4.2c0-.2-.1-.1-.1-.1L99 5.7s-.1 0-.1.1v1.3c0 .2.2.1.2.1s.4-.1.7-.1c.2 0 .1.1.1.2v8.6s0 .1-.1.1H99s-.1 0-.1.1v1.4c0 .2.1.1.1.1h6.8c.2 0 .1-.1.1-.1v-1.3zm-8-.1H97c-.1 0-.1-.1-.1-.1V8c0-1.5-.5-3.8-4-3.8-1.9 0-3.2 1-4.6 2.1 0 0-.1.2-.1 0V4.2c-.1-.2-.2-.1-.2-.1l-5.9 1.6s-.1 0-.1.1v1.4c0 .1.1.1.1.1s.5-.1.7-.2c.3-.1.2 0 .2 0v8.8s0 .1-.1.1h-.8s-.1-.1-.1.1v1.4c0 .2.1.1.1.1H89s.1 0 .1-.1v-1.4c.1-.1-.1-.1-.1-.1h-.8c-.1 0-.1-.1-.1-.1V8.5c0-.1.1-.2.1-.2.6-.5 1.3-1 2.2-1 .7 0 1.5.4 1.5 1.2V16s0 .1-.1.1H91s-.1 0-.1.1v1.4c0 .1.1.1.1.1h6.8s.1 0 .2-.1v-1.4c-.1-.2-.2-.1-.2-.1zM65.9 9.4c0-3.2-2.6-4-2.6-4.5 0-.3.2-.6.5-.6.6 0 .6 0 .9.2 0 0 .1.1.1 0s.5-2.1.5-2.2c.1-.3-.1-.3-.1-.3h-.9c-1.5 0-2 .4-2.3 1.4 0 0-.2.7-.3.9 0 .2-.2.1-.2.1-.7-.1-1.5-.4-2.9-.4-3 0-6.2 1.7-6.2 5.5 0 2.7 2.2 4.3 4.6 4.7 0 0 .4 0 0 .2-.7.2-2.1 1.1-3.8 1.3 0 0-.2 0-.1.2 0 .1.5 1.3.6 1.4 0 .1.2.1.2.1.8-.2 3 0 3.4.1.3 0 0 .1 0 .1-1.1.2-2.5 1-2.5 2.3 0 2.2 2.5 2.7 4.9 2.7 1.7 0 5.7-.7 5.7-3.6 0-2.9-4.5-3.5-6.8-3.7-.4 0 0-.1 0-.1 3.4-.8 7.3-1.7 7.3-5.8zm-6.8 8.9c.1-.1.2-.1.2-.1.9.5 1.6 1 1.6 2.2 0 .7-.4 1-1.1 1-.8 0-1.1-.7-1.1-1.4 0-.6.2-1.5.4-1.7zM57 7.5c0-1.3.4-1.8 1.4-1.8 2.1 0 2.9 4.1 2.9 5.5 0 1.3-.4 1.8-1.4 1.8-2.1.1-2.9-4-2.9-5.5z"></path>
                <path d="M74.2 4c-4.4 0-7.8 2.7-7.8 7 0 4.4 3.4 7 7.8 7s7.9-2.7 7.9-7-3.4-7-7.9-7zm.9 12c-2.8 0-3.6-4.9-3.6-6.9 0-1 0-3 1.9-3C76.2 6.1 77 11 77 13c0 1.4-.4 3-1.9 3z"></path>
              </MainLogo>
            </Link>
          </MainLogoWrap>
          <ContentUlWrap onMouseEnter={hideShopMenu}>
            <ContentLi>
              <span onMouseEnter={showShopMenu}>Shop</span>
            </ContentLi>
            <ContentLi>
              <span onMouseEnter={hideShopMenu}>Activism</span>
            </ContentLi>
            <ContentLi>
              <span onMouseEnter={hideShopMenu}>Sports</span>
            </ContentLi>
            <ContentLi>
              <span onMouseEnter={hideShopMenu}>Stories</span>
            </ContentLi>
          </ContentUlWrap>
          <SearchWrap>
            {" "}
            <Search
              viewBox="0 0 40 40"
              aria-labelledby="icon--navigation-primary--search-desc icon--navigation-primary--search-title"
              id="icon--navigation-primary--search"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
            >
              <title id="icon--navigation-primary--search-title">
                navigation primary search
              </title>
              <desc id="icon--navigation-primary--search-desc">
                navigation primary search
              </desc>
              <path d="M29.7 27.5l-4.8-4.8c1-1.4 1.6-3.2 1.6-5 0-4.8-3.9-8.8-8.8-8.8S9 12.9 9 17.8c0 4.8 3.9 8.8 8.8 8.8 1.9 0 3.6-.6 5-1.6l4.8 4.8c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.5-.7.5-1.7-.1-2.3zM12 17.8c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8-5.8-2.7-5.8-5.8z"></path>
            </Search>
          </SearchWrap>
          <CartWrap>
            <Cart
              viewBox="0 0 40 40"
              aria-labelledby="icon--navigation-primary--cart-desc icon--navigation-primary--cart-title"
              id="icon--navigation-primary--cart"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
            >
              <title id="icon--navigation-primary--cart-title">
                navigation primary cart
              </title>
              <desc id="icon--navigation-primary--cart-desc">
                navigation primary cart
              </desc>
              <path d="M29 10h-5c0-2.2-1.8-4-4-4s-4 1.8-4 4h-5c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1zm-9-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"></path>
            </Cart>
          </CartWrap>
          <HamburgerWrap>
            <Hamburger
              viewBox="0 0 40 40"
              aria-labelledby="icon--navigation-primary--hamburger-desc icon--navigation-primary--hamburger-title"
              id="icon--navigation-primary--hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
            >
              <title id="icon--navigation-primary--hamburger-title">
                navigation primary hamburger
              </title>
              <desc id="icon--navigation-primary--hamburger-desc">
                navigation primary hamburger
              </desc>
              <path d="M11 18h18c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1zM29 22H11c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z"></path>
            </Hamburger>
          </HamburgerWrap>
        </NavigationWrap>
        <HoverHeaderShop isActive={menuShopState} onMouseLeave={showShopMenu} />
      </Navigation>
    </div>
  );
};

export default NavHeader;

const Navigation = styled.nav`
  width: 100vw;
  height: auto;
  position: absolute;
  top: 2.9rem;
  z-index: 100;
  color: #fff;
  fill: #fff;
  transition: all ease-in-out 0.35s;
  @media only screen and (min-width: ${WIDTH800}) {
    &:hover {
      transition: all ease-in-out 0.35s;
      background-color: #fff;
      color: #000;
      fill: #000;
    }
  }
`;

const NavigationWrap = styled.div`
  width: 100%;
  height: 6.8rem;
  display: flex;
  position: relative;
  padding: 0 4rem;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  @media only screen and (max-width: ${WIDTH800}) {
    padding: 0 2.3rem;
  }
`;

const MainLogoWrap = styled.div`
  cursor: pointer;
`;

const MainLogo = styled.svg`
  padding-left: 2%;
  @media only screen and (max-width: ${WIDTH800}) {
    fill: #fff;
  }
  /* fill: white; */
`;

const ContentUlWrap = styled.ul`
  display: flex;
  height: 100%;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  z-index: 5;
  @media only screen and (max-width: ${WIDTH800}) {
    display: none;
  }
`;

const ContentLi = styled.li`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    letter-spacing: -0.016rem;
    line-height: 1.33333;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 2.7rem;
    height: 100%;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Search = styled.svg`
  &:hover {
    transform: scale(1.05);
  }
`;

const Cart = styled.svg`
  &:hover {
    transform: scale(1.05);
  }
`;
const Hamburger = styled.svg`
  &:hover {
    transform: scale(1.05);
  }
`;
const SearchWrap = styled.div`
  cursor: pointer;
  @media only screen and (max-width: ${WIDTH800}) {
    position: absolute;
    flex: none;
    right: 5rem;
  }
`;
const HamburgerWrap = styled.div`
  margin-left: 0.7%;
  cursor: pointer;
`;
const CartWrap = styled.div`
  margin-left: 0.7%;
  cursor: pointer;
  @media only screen and (max-width: ${WIDTH800}) {
    order: -1;
  }
`;
