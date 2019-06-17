import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  LoginWrapper,
  LoginForm,
  LoginTitle,
  FormLayout,
  Input,
  LoginSubmit,
  SocialClub,
  LoginInputWrapper
} from "./styled";
import { actionCreators } from "./store";

class Login extends PureComponent {
  render() {
    const { loginStates } = this.props;
    if (!loginStates) {
      return (
        <LoginWrapper>
          <LoginForm>
            <LoginTitle>Login</LoginTitle>
            <FormLayout>
              <LoginInputWrapper>
                <Input
                  placeholder="UserName"
                  ref={input => {
                    this.account = input;
                  }}
                />

                <Input
                  placeholder="Password"
                  type="password"
                  ref={input => {
                    this.password = input;
                  }}
                />
              </LoginInputWrapper>
              <LoginSubmit
                onClick={() => this.props.login(this.account, this.password)}
              >
                Login
              </LoginSubmit>
              <SocialClub />
            </FormLayout>
          </LoginForm>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  loginStates: state.getIn(["loginReducer", "login"])
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Login);
