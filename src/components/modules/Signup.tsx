
import token from "../../assets/TenexToken.svg";
import twitter from "../../assets/Twitter.svg";
import Image from '../../assets/image.svg'
import TokenTitle from '../../assets/logo.svg';

import { useNavigate } from "react-router-dom";
import { Banner, Data, ImageContainer, Paragraph, SignButton, Title, Token, Token1} from "../styles/Signup.styles";

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
          <Data>
            <div>
            <Title>Become a TENEX</Title>
            <Paragraph>Join our mission to spread TenEx Message</Paragraph>
            <SignButton onClick={handleTwitterSignIn}><img src={twitter}/>Sigh In Twitter</SignButton>
            </div>
          </Data>


          <Token>
          <Token1 src={token} alt="" />
        </Token>
      
    </>
  );
};

export default Signup;
