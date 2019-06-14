import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const AdvertisementList = styled.div`
  margin-top: 30px;
  width: 280px;
  height: 208px;
`;

export const AdvertisementItem = styled.a`
  width: 280px;
  height: 50px;
  margin: 0 0 6px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 6px;
  .pic {
    display: block;
    width: 280px;
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const WriterTitle = styled.span`
  margin-top: 18px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const WriterNext = styled.div`
  margin-top: 8px;
  line-height: 20px;
  float: right;
  font-size: 14px;
  cursor: pointer;
  color: #969696;
  .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 3px;
    transition: all 0.3s ease-in;
    transform-origin: center center;
  }
`;

export const WriterList = styled.div`
  overflow: hidden;
  width: 280px;
  height: 60px;
  .pic {
    margin-top: 5px;
    width: 48px;
    height: 48px;
    float: left;
    border-radius: 50%;
  }
`;

export const WriterItem = styled.div`
  float: left;
  margin-top: 5px;
  padding-top: 0px;
  margin-right: 60px;
  font-size: 14px;
  display: block;
  .author {
    display: block;
    cursor: pointer;
  }
  .content {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;
export const WriterConcern = styled.div`
  float: right;
  margin-top: 5px;
  padding: 0;
  cursor: pointer;
  font-size: 13px;
  color: #42c02e;
  .spin {
    margin-right: 2px;
  }
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  background: #f7f7f7;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;
  }
  .desc {
    margin: 0 0 8 px;
    font-size: 13px;
    line-height: 24px;
    display: block;
    color: #999;
  }
`;
