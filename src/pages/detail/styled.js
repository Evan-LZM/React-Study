import styled from "styled-components";

export const DetailWrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
`;
export const HeaderWrapper = styled.div`
  font-family: serif;
  font-size: 34px;
  font-weight: bold;
  line-height: 44px;
  margin: 40px 0;
  color: #333;
  word-break: break-word !important;
`;

export const Content = styled.div`
  img {
    margin: 5px 0;
    width: 564px;
    height: 462px;
    overflow: hidden;
  }
  p {
    margin: 0 0 24px;
    font-size: 1.2rem;
    font-family: "Georgia", serif;
    font-weight: 400;
    line-height: 1.65em;
    padding: 0 0 8px;
    hyphens: none;
    color: #323232;
  }
  b {
    font-weight: bold;
  }
`;
