import LogoIcon from "../../assets/logo.svg";

import {
  LogoImage,
  LogoWrapper,
  Main1container,
} from "../styles/SocialMining.styles";
import { Heading, MainContaier } from "../styles/DashBoard.styles";
import { Outlet } from "react-router-dom";

interface SocialMiningProps {
  DashBoardTitle: string;
}

const SocialMining: React.FC<SocialMiningProps> = ({ DashBoardTitle }) => {
  return (
    <>
      <Main1container>
        <LogoWrapper>
          <LogoImage src={LogoIcon} />
        </LogoWrapper>

        <MainContaier>
          <Heading>{DashBoardTitle}</Heading>
        </MainContaier>
      </Main1container>
      {<Outlet />}
    </>
  );
};

export default SocialMining;
