import React, { PureComponent, Fragment } from "react";
import {
  WriterList,
  WriterTitle,
  WriterNext,
  WriterItem,
  WriterConcern
} from "../style";
import { connect } from "react-redux";
class Writer extends PureComponent {
  render() {
    return (
      <Fragment>
        <WriterTitle>
          Recommended Author
          <WriterNext>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe601;
            </i>
            Next
          </WriterNext>
        </WriterTitle>

        <WriterList>
          <img
            className="pic"
            src="https://articles.leetcode.com/wp-content/uploads/2015/03/touxiang.png"
          />
          <WriterItem>
            <a className="author">Title</a>
            <p className="content">Content</p>
          </WriterItem>
          <WriterConcern>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe6ff;
            </i>
            Follow
          </WriterConcern>
        </WriterList>
        <WriterList>
          <img
            className="pic"
            src="https://articles.leetcode.com/wp-content/uploads/2015/03/touxiang.png"
          />
          <WriterItem>
            <a className="author">Title</a>
            <p className="content">Content</p>
          </WriterItem>
          <WriterConcern>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe6ff;
            </i>
            Follow
          </WriterConcern>
        </WriterList>
        <WriterList>
          <img
            className="pic"
            src="https://articles.leetcode.com/wp-content/uploads/2015/03/touxiang.png"
          />
          <WriterItem>
            <a className="author">Title</a>
            <p className="content">Content</p>
          </WriterItem>
          <WriterConcern>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe6ff;
            </i>
            Follow
          </WriterConcern>
        </WriterList>
        <WriterList>
          <img
            className="pic"
            src="https://articles.leetcode.com/wp-content/uploads/2015/03/touxiang.png"
          />
          <WriterItem>
            <a className="author">Title</a>
            <p className="content">Content</p>
          </WriterItem>
          <WriterConcern>
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe6ff;
            </i>
            Follow
          </WriterConcern>
        </WriterList>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"])
});

export default connect(
  mapStateToProps,
  null
)(Writer);
