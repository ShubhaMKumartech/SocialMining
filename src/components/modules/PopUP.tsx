import {
  ConnectionButton,
  Data,
  FirstLine,
  MainDiv,
  Table,
  Table1,
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
    <MainDiv onClick={handleOverlayClick}>
      <FirstLine>Link you accounts</FirstLine>
      <Table>
        <Table1>
          <img src={twitter} alt="Image of Twitter" />
          <Data>Connect with Twitter</Data>
        </Table1>
        <div>
          <ConnectionButton>Connected</ConnectionButton>
        </div>
      </Table>
      <Table>
        <Table1>
          <img src={reddit} alt="Reddit Image" />
          <Data>Connect with Reddit</Data>
        </Table1>
        <div>
          <ConnectionButton>Connect</ConnectionButton>
        </div>
      </Table>
      <Table>
        <Table1>
          <img src={discord} alt="Discord Image" />
          <Data>Connect with Discord</Data>
        </Table1>
        <div>
          <ConnectionButton>Connect</ConnectionButton>
        </div>
      </Table>
      <Table>
        <Table1>
          <img src={telegram} alt="Telegram Image" />
          <Data>Connect with $TENEX</Data>
        </Table1>
        <div>
          <ConnectionButton>Connect</ConnectionButton>
        </div>
      </Table>
    </MainDiv>
  );
};

export default PopUP;
