import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginForm, LoginTitle, FormLayout } from "./styled";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <FormLayout>Form</FormLayout>
        </LoginForm>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatch
)(Login);
