import {
  ConnectionButton,
  ConnectionButtonWrapper,
  MainPopUpScreen,
  PopScreenText,
  PopUpScreenCard,
  PopUpScreenContainer,
  PopUpScreenTitle,
  PopUpScreenWrapper,
  SocialMediaIcon,
} from "../styles/PopUp.styles";

import twitter from "../../assets/Twitter.svg";
import reddit from "../../assets/Reddit.svg";
import discord from "../../assets/Discord.svg";
import telegram from "../../assets/TelegramLogo.svg";

interface PopUPProps {
  onClose: () => void;
}

const PopUP: React.FC<PopUPProps> = ({ onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopUpScreenContainer onClick={handleOverlayClick}>
      <MainPopUpScreen>
        <PopUpScreenTitle>Link you accounts</PopUpScreenTitle>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={twitter} alt="Image of Twitter" />
            <PopScreenText>Connect with Twitter</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <ConnectionButton>Connected</ConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={reddit} alt="Reddit Image" />
            <PopScreenText>Connect with Reddit</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <ConnectionButton>Connect</ConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={discord} alt="Discord Image" />
            <PopScreenText>Connect with Discord</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <ConnectionButton>Connect</ConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={telegram} alt="Telegram Image" />
            <PopScreenText>Connect with $TENEX</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <ConnectionButton>Connect</ConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
      </MainPopUpScreen>
    </PopUpScreenContainer>
  );
};

export default PopUP;
