import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SNav, SNavLink, SNavLinkContainer } from "./NavbarElements";
import { VscMenu, VscClose } from "react-icons/vsc";
import { Library } from "../Library/Library";

import './MobileNav.css';

const MobileMenu = styled.div`
  /* display: block;
  background-color: grey; */
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  /* width: 100%;
  height: 100%; */
`;
const UL = styled.ul`
  @media screen and (max-width: 768px) {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
  }

  /* @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  } */
`;

const LI = styled.li`
  @media screen and (max-width: 768px) {
    padding: 35px 10px;
    color: red;
    list-style: none;
    display: block;
  }
`;
const Navvv = styled.div`
  /* background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1em 3.5em;
  z-index: 10;
  position: relative; */
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: relative;
`;

// const Logo = styled.h1`
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   color: white;
// `;

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // const windowSize = window.addEventListener("resize", () => {
  //   if (document.body.clientWidth > 768) {
  //     setOpen(false);
  //   }
  // });

  return (
    <>
      {/* {open ? (
        <>
          <Navvv>
            <Logo>CGTV Test</Logo>
            <VscCloseStyled open={open} onClick={() => setOpen(!open)} />
          <MobileMenu>
            <LI>About</LI>
            <LI>Contact</LI>
            <LI>Services</LI>
          </MobileMenu>
          </Navvv>
        </>
      ) : (
        <VscMenuStyled open={open} onClick={() => setOpen(!open)} />
      )} */}
      {/* <MobileMenu>
        <i open={open} onClick={() => setOpen(!open)}>
          {icon}
        </i>
      </MobileMenu> */}
       <SNav>
         {Library.routeName.map((route, index) => {
           return <SNavLinkContainer>
             <SNavLink to={route.path} key={index}>
               {route.name}
             </SNavLink>
           </SNavLinkContainer>
         })}
       </SNav>
    </>
  );
};

export default MobileNav;
