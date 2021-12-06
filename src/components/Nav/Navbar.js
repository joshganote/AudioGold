import React, { useState } from "react";
import {
  SHeaderFixed,
  SHeader,
  SLeft,
  SRight,
  SLogo,
  SLogoLink,
  SMobileMenu,
  SNavLink,
  OpenMenu,
  CloseMenu,
  MobileLinks,
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
      <SHeaderFixed>
        <SHeader>
          <SLeft>
            <SLogoLink to="/">
              <SLogo>CGTV</SLogo>
            </SLogoLink>
          </SLeft>
          <SRight>
            <div onClick={() => setOpen(!open)}>
              {!open ? <OpenMenu  size={25} /> : <CloseMenu size={25} />}
            </div>
            {Library.routeName.map((route, index) => (
              <SNavLink key={index} to={route.path}>
                {route.name}
              </SNavLink>
            ))}
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMobileMenu style={open ? { left: 0 } : {}}>
        {Library.routeName.map((route, index) => (
          <MobileLinks key={index} to={route.path}>
            {route.name}
          </MobileLinks>
        ))}
      </SMobileMenu>
    </>
  );
};

export default Navbar;

// import "./Navbar.css";
// const Nav = styled.nav`
//   background: #000;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   z-index: 10;
//   position: relative;
//   padding-left: 3rem;
//   padding-right: 3rem;

//   /* @media screen and (max-width: 768px) {
//     display: none;
//   } */
// `;

// const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   height: 100%;
//   cursor: pointer;
//   padding: 2rem 1rem;
//   font-size: 25px;

//   &.active {
//     color: #15cdfc;
//   }
// `;

// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;

// @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavBar = styled.header`
//   background: black;
//   width: 100%;
//   position: relative;
//   z-index: 100;
//   padding: 0 1.5rem;

//   @media screen and (max-width: 768px) {
//     padding: 0 2rem;
//   }

//   transition: 0.3s ease all;
// `;

// const NavContainer = styled.div`
//   overflow: hidden;
//   color: white;
//   margin: 0 auto;
//   max-width: 1920px;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;
//   z-index: 100;
// `;

// const NavLogo = styled.div`
//   font-size: 2rem;
//   font-weight: bold;

//   &:active {
//     color: #15cdfc;
//   }
// `;

// const NavContent = styled.nav`
//   top: 0;
//   right: 100%;
//   bottom: 0;
//   width: 100%;
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background: rgba(29, 29, 29, 0.9);
//   backdrop-filter: blur(2px);
//   transform: translate(0);
//   transition: 0.3s ease transform;

//   @media screen and (max-width: 768px) {
//     transform: none;
//     flex-direction: row;
//     background: transparent;
//     width: auto;
//     height: 100%;
//     position: relative;
//   }
// `;

// const UL = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 32px;

//   @media screen and (max-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//     margin-bottom: 0;
//     margin-right: calc(0.5rem + 32px);
//   }
// `;

// const LI = styled.li`
//   text-decoration: none;
//   color: white;
//   padding: 0.75rem 1.25rem;
//   border-radius: 12px;
//   transition: 0.3s ease all;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
//   &:active {
//     border-radius: calc(12px + 6px);
//     background: linear-gradient(
//       rgba(255, 255, 255, 0.1),
//       rgba(255, 255, 255, 0.2)
//     );
//   }
// `;

// const MenuToggle = styled.div`
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: contents;
//     position:relative;
//   }

// `;

// <NavBar>
// <Nav>
//   <NavLink to="/">
//     <Logo>CGTV</Logo>
//   </NavLink>
//   <MobileNav />
//   <NavMenu>
//     <NavLink to="/about">About</NavLink>
//     <NavLink to="/contact">Contact</NavLink>
//     <NavLink to="/services">Services</NavLink>
//   </NavMenu>
// </Nav>

/* <Nav>
        <div className="logo">
          CGTV
        </div>
        <ul> 
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </Nav> */
//   <NavContainer>
//     <NavLink to="/">
//       <NavLogo>CGTV</NavLogo>
//     </NavLink>

//     <Nav>
//       <UL>
//         <LI>
//           <NavLink to="/about">About</NavLink>
//         </LI>
//         <LI>
//           <NavLink to="/contact">Contact</NavLink>
//         </LI>
//         <LI>
//           <NavLink to="/services">Services</NavLink>
//         </LI>
//       </UL>
//     </Nav>

//     <MenuToggle>
//       <VscMenu />
//     </MenuToggle>
//   </NavContainer>
// </NavBar>

// <div className="nav-container">
//   {/* Logo */}
//   <nav className="navbar">

//     <Link to="/" className='navbar-logo'>CGTV</Link>

// {/* Mobile Nav Icon */}
//   <div className="menu-icon" onClick={openMenu}>
//     <i>{menuIcon}</i>
//   </div>

// {/* Links */}
//   <ul className={open ? 'nav-menu active' : 'nav-menu'}>
//     {Library.routeName.map((route, index) => (
//       <li className='nav-item' key={index}>
//       <Link to={route.path} className='nav-links' onClick={closeMobileMenu}>{route.name}</Link>
//     </li>
//     ))}
//   </ul>
//   </nav>
// </div>
