import React, { Component } from "react";
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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwift,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreators } from "./store";

class Header extends Component {
  getListArea() {
    const { list, focused } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Polular Searches
            <SearchInfoSwift>Next</SearchInfoSwift>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, handleInputFocus, hanldeInputBlur } = this.props;
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
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={hanldeInputBlur}
                className={focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe6cf;
            </i>
            {this.getListArea()}
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
const mapStateToProps = state => {
  return {
    focused: state.getIn(["headers", "focused"]),
    list: state.getIn(["headers", "list"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
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
