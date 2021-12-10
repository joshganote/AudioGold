import React, { useState } from "react";
import {
  OpenMenu,
  CloseMenu,
  MobileLinks,
  MobileContainer,
  MobileHeader,
  MobileLeft,
  MobileRight,
  MobileLogo,
  DesktopContainer,
  NavHeader,
  LeftContainer,
  RightContainer,
  NavLink,
  Logo,
  LogoLink,
  MobileMenu
} from "./NavbarElements";
import { Library } from "../Library/Library";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (document.body.clientWidth > 768) {
      setOpen(false);
    }
  });

  return (
    <>
      <DesktopContainer>
        <NavHeader>
          <LeftContainer>
            <LogoLink to="/">
              <Logo>CGTV</Logo>
            </LogoLink>
          </LeftContainer>
          <RightContainer>
            <OpenMenu onClick={() => setOpen(true)} size={25} />
            {Library.routeName.map((route, index) => (
              <NavLink key={index} to={route.path}>
                {route.name}
              </NavLink>
            ))}
          </RightContainer>
        </NavHeader>
      </DesktopContainer>
      <MobileContainer style={ open ? { left: 0 } : {}}>
        <MobileHeader>
          <MobileLeft>
            <MobileLogo onClick={() => setOpen(false)}>
              <Logo>CGTV</Logo>
            </MobileLogo>
          </MobileLeft>
          <MobileRight>
            <CloseMenu onClick={() => setOpen(false)} size={25} />
          </MobileRight>
        </MobileHeader>
        <MobileMenu>
          {Library.routeName.map((route, index) => (
            <MobileLinks
              key={index}
              to={route.path}
              onClick={() => setOpen(false)}
            >
              {route.name}
            </MobileLinks>
          ))}
        </MobileMenu>
      </MobileContainer>
      
    </>
  );
};

export default Navbar;