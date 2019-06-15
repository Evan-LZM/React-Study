import React, { Component } from "react";
import { DetailWrapper, HeaderWrapper, Content } from "./styled";

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <HeaderWrapper>
          Motivation: The Scientific Guide on How to Get and Stay Motivated
        </HeaderWrapper>
        <Content>
          <p>
            <b>Motivation</b> is a powerful, yet tricky beast. Sometimes it is
            really easy to get motivated, and you find yourself wrapped up in a
            whirlwind of excitement. Other times, it is nearly impossible to
            figure out how to motivate yourself and you're trapped in a death
            spiral of procrastination. This page contains the best ideas and
            most useful research on how to get and stay motivated.
          </p>

          <p>
            This isn't going to be some rah-rah, pumped-up motivational speech.
            (That's not my style.) Instead, we're going to break down the
            science behind how to get motivated in the first place and how to
            stay motivated for the long-run. Whether you're trying to figure out
            how to motivate yourself or how to motivate a team, this page should
            cover everything you need to know.
          </p>
          <p>
            You can click the links below to jump to a particular section or
            simply scroll down to read everything. At the end of this page,
            you'll find a complete list of all the articles I have written on
            motivation.
          </p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail;
