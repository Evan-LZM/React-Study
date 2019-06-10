import styled from "styled-components";
import LogoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  margin-top: 0px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 50px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  margin-top: -10px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 20px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search..."
})`
  width: 160p;
  height: 38px;
  padding: 0 20px;
  border: none;
  box-sizing: border-box;
  margin-left: 20px;
  outline: none;
  border-radius: 19px;
  background: #eeeeee;
  margin-top: 9px;
  font-size: 13px;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Btn = styled.div`
  margin-top: 9px;
  float: right;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
