import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.hanldeInputBlur = this.hanldeInputBlur.bind(this);
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
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={this.handleInputFocus}
                onBlur={this.hanldeInputBlur}
                className={this.state.focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={this.state.focused ? "focused iconfont" : "iconfont"}>
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
  handleInputFocus() {
    this.setState({
      focused: true
    });
  }

  hanldeInputBlur() {
    this.setState({
      focused: false
    });
  }
}
export default Header;
