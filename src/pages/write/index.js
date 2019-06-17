import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginStates } = this.props;
    if (loginStates) {
      return <div>Write Article Here...</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  loginStates: state.getIn(["loginReducer", "login"])
});

export default connect(
  mapStateToProps,
  null
)(Write);
