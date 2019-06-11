import React, { Component } from "react";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Btn,
  SearchWrapper
} from "./style";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch className={this.state.focus ? "focused" : ""} />
            <i className={this.state.focus ? "focused iconfont" : "iconfont"}>
              &#xe6cf;
            </i>
          </SearchWrapper>
          <Addition>
            <Btn className="writing">
              <i className="iconfont">&#xe600;</i>
              Write Article
            </Btn>
            <Btn className="reg">Register</Btn>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}
export default Header;
