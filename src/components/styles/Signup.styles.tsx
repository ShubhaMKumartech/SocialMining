import styled from "styled-components";

export const ImageContainer = styled.div`
  display: block;
  float: right;
`;

export const Banner = styled.img`
  width: 600px;
  height: 650px;

  @media only screen and (max-width: 1200px) {
    width: 500px;
    height: 600px;
  }

  @media only screen and (max-width: 1000px) {
    width: 400px;
    height: 600px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 400px;
  }
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;
export const SignUpDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 190px;
  margin-top: 150px;
`;

export const SignUpTitle = styled.h1`
  width: 302px;
  height: 62px;
  top: 298px;
  left: 108px;
  gap: 0px;
  opacity: 0px;
  color: #fff;
  font-family: Kanit;
  font-size: 38px;
  font-weight: 300;
  line-height: 71.76px;
`;

export const SignUpText = styled.p`
  width: 370px;
  height: 36px;
  top: 374px;
  left: 108px;
  gap: 0px;
  opacity: 0px;

  color: #fff;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 250;
  line-height: 35.88px;
  text-align: center;
`;

export const SignUpButton = styled.button`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  opacity: 0px;
  color: #fff;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
`;

export const SignUpToken = styled.div`
  position: relative;
`;

export const SignUpTokens = styled.img`
  position: absolute;
  width: 253px;
  height: 214px;
  top: 10px;
  left: 240px;

  @media only screen and (max-width: 480px) {
    position: absolute;
    width: 283px;
    height: 244px;
    top: 50px;
    left: 10px;
  }
`;
