import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { VscMenu, VscClose } from "react-icons/vsc";
import { standardSizing, breakPoint } from "../styles/variables";

// export const Nav = styled.nav`
//   background: #000;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   z-index: 10;
//   position: relative;
//   padding-left: 2rem;
//   padding-right: 2rem;

//   /* @media screen and (max-width: 768px) {
//     display: none;
//   } */
// `;

// export const Logo = styled.p`
//   justify-self: start;
//   margin-left: 20px;
//   cursor: pointer;
//   font-size: 20px;
//   font-weight: bold;
//   margin: 0;
// `;

// export const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   height: 100%;
//   cursor: pointer;
//   padding: 2rem 1rem;
//   font-size: 20px;

//   &.active {
//     color: #15cdfc;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const VscMenuStyled = styled(VscMenu)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-150%, 120%);
//     font-size: 1.5rem;
//     cursor: pointer;
//   }
// `;

// export const VscCloseStyled = styled(VscClose)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-0%, 80%);
//     font-size: 2rem;
//     cursor: pointer;
//   }
// `;

const btnStyles = css`
  cursor: pointer;
  /* background: none;
  border: none;
  outline: none;
  color: inherit; */
  padding: 0;
`;

export const SHeaderHeight = styled.div`
  height: ${standardSizing.headerHeight};
`;

export const SHeaderFixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: ${standardSizing.headerHeight};
  background-color: darkgrey;
  z-index: 10;
`;

export const SHeader = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;

  transition: 0.3s ease padding;
  padding: 0 ${standardSizing.mdSpacing};
  @media ${breakPoint.lg} {
    padding: 0 ${standardSizing.lgSpacing}
  }

  > div {
    flex: 1;
  }
`;

export const SLeft = styled.div``;

export const SCenter = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;
  @media ${breakPoint.md} {
    display: flex;
  }
`;

export const SRight = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: center;
`;

// Left Nav
export const SLogoLink = styled(Link)`
  display: flex;
  width: 40px;
  color: inherit;
  text-decoration: none;
`;

export const SLogo = styled.h1`
  color: black;
  display: block;
  width: 100%;
  height: 100%;
`;

// Center Nav

// Nav

//Right
// export const SCTAButton = styled.button`
//   ${btnStyles}
// `;

// export const SMenuToggleButton = styled.button`
//   ${btnStyles}  
// `;


const iconStyles = css`
  /* width: 100%;
  height: 100%; */
`;
export const SMenuIcon = styled(VscMenu)`
  ${btnStyles}
  width: 32px;
  position: relative;
  z-index: 100;
  top: 2px;
  @media ${breakPoint.md} {
    display: none;
  }
`;

export const SCloseIcon = styled(VscClose)`
  ${btnStyles}
  width: 32px;
  position: relative;
  z-index: 100;
  top: 2px;
  @media ${breakPoint.md} {
    display: none;
  }
`;

export const SMobileMenu = styled.div`
  position: fixed;
  top: ${standardSizing.headerHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  background: grey;

  width: 100vw;
  height: calc(100% - ${standardSizing.headerHeight});
  transition: 0.3s ease left;
  padding: ${standardSizing.lgSpacing};

  @media ${breakPoint.md} {
    display: none;
  }
`;

export const SNav = styled.nav`
  width: auto;
  padding: ${standardSizing.mdSpacing};
  background: yellow;
  border-radius: ${standardSizing.borderRadius};
  
  @media ${breakPoint.md} {
    background: red;
    background: none;
    padding: 0;
    height: 100%;
    display: flex;
  }
`;

export const SNavLinkContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  justify-content: space-between;

  :not(:last-of-type) {
    margin-bottom: ${standardSizing.mdSpacing}
  }

  @media ${breakPoint.md} {
    display: flex;
    align-items:center;
    :not(:last-of-type) {
      margin-bottom: 0;
      margin-right: ${standardSizing.mdSpacing}
    }
  }
`;

export const SNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    color: orange;
  }
`;