import React, { PureComponent } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map(item => {
          return (
            <Link key={item.get("id")} to={"/detail/" + item.get("id")}>
              <ListItem key={item.get("id")}>
                <img alt="" className="pic" src={item.get("imgUrl")} />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"])
});

export default connect(
  mapStateToProps,
  null
)(List);
