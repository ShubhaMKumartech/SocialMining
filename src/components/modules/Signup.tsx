import token from "../../assets/TenexToken.svg";
import twitter from "../../assets/Twitter.svg";
import Image from "../../assets/image.svg";
import TokenTitle from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import {
  Banner,
  ImageContainer,
  SignUpButton,
  SignUpDetails,
  SignUpText,
  SignUpTitle,
  SignUpToken,
  SignUpTokens,
  
} from "../styles/Signup.styles";

const Signup = () => {
  const navigate = useNavigate();
  const handleTwitterSignIn = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <ImageContainer>
        <Banner src={Image} alt="" />
      </ImageContainer>

      <img src={TokenTitle}></img>
      <SignUpDetails>
        <div>
          <SignUpTitle>Become a TENEX</SignUpTitle>
          <SignUpText>Join our mission to spread TenEx Message</SignUpText>
          <SignUpButton onClick={handleTwitterSignIn}>
            <img src={twitter} />
            Sigh In Twitter
          </SignUpButton>
        </div>
      </SignUpDetails>

      <SignUpToken>
        <SignUpTokens src={token} alt="" />
      </SignUpToken>
    </>
  );
};

export default Signup;
