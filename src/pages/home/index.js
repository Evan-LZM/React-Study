import React, { PureComponent } from "react";
import { HomeWrapper, HomeRight, HomeLeft, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="http://www.vivateachers.org/wp-content/uploads/2018/08/student-education-750x460.jpg"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>ToTop</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  handleScrollTop() {
    window.scrollTo(0, 0); //left position,top position
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapStateToProps = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.scrollToTopShow(true));
    } else {
      dispatch(actionCreators.scrollToTopShow(false));
    }
  }
});
export default connect(
  mapStateToProps,
  mapDispatch
)(Home);
