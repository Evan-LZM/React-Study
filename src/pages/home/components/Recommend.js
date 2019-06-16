import React, { PureComponent, Fragment } from "react";
import { AdvertisementList, AdvertisementItem } from "../style";
import { connect } from "react-redux";
class Recommend extends PureComponent {
  render() {
    return (
      <Fragment>
        <AdvertisementList>
          {this.props.list.map(item => {
            return (
              <AdvertisementItem key={item.get("id")}>
                <img className="pic" src={item.get("imgUrl")} />
              </AdvertisementItem>
            );
          })}
        </AdvertisementList>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "advertisementList"])
});

export default connect(
  mapStateToProps,
  null
)(Recommend);
