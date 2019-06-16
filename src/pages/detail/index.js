import React, { PureComponent } from "react";
import { DetailWrapper, HeaderWrapper, Content } from "./styled";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators.js";

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <HeaderWrapper>{this.props.title}</HeaderWrapper>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetailInfo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Detail);
