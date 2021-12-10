import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";


export const DesktopContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 6em;
  z-index: 10;
`;

export const NavHeader = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  transition: 0.3s ease padding;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    transition: 0.3s ease padding;
  }

  > div {
    flex: 1;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// Left Nav
export const LogoLink = styled(Link)`
  display: flex;
  width: 40px;
  color: inherit;
  text-decoration: none;
  color: white;
`;

export const Logo = styled.h1`
  color: black;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0px 15px;
  :hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OpenMenu = styled(BiMenuAltRight)`
  display: none;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;
    color: white;
  }
`;

export const CloseMenu = styled(IoClose)`
  cursor: pointer;
  color: white;
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 65px);
`;

export const MobileLinks = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 24px;
  :hover {
    color: orange;
  }
`;

export const MobileContainer = styled.div`
  position: fixed;
  left: 100%;
  background: black;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: 0.3s ease left;
`;

export const MobileHeader = styled.header`
  margin: 0 .75rem;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6em;

  padding: 1.25rem 1.25rem;
`;

export const MobileLeft = styled.div``;

export const MobileRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MobileLogo = styled.div`
  display: flex;
  width: 40px;
  cursor: pointer;
  color: white;
`;