import React from "react";
import { connect } from "react-redux";
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
import { actionCreators } from "./store";

const Header = props => {
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
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.hanldeInputBlur}
              className={props.focused ? "focused" : ""}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
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
};

const mapStateToProps = state => {
  return {
    focused: state.headers.get("focused")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    hanldeInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
