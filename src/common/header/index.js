import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Btn
} from "./style";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch />
          <Addition>
            <Btn className="writing">Write Article</Btn>
            <Btn className="reg">Register</Btn>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}
export default Header;
