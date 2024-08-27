// import React from 'react'
import {
  Card,
  DashBoardButton,
  DashBoardCards,
  DashBoardFooterText,
  DashBoardText,
} from "../styles/DashBoard.styles";

import PopUP from "./PopUP";
import { useState } from "react";

const DashBoard: React.FC = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const handleConnectClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <>
      {isPopUpVisible && <PopUP onClose={handleClosePopUp} />}
      <DashBoardCards>
        <Card>
          <DashBoardText>
            Link Your Social Media to Start Mining Rewards
          </DashBoardText>
          <DashBoardButton onClick={handleConnectClick}>
            Connect
          </DashBoardButton>
        </Card>
        <Card>
          <DashBoardText>
            Browse the Task List, Complete Challenges, and Earn Rewards!
          </DashBoardText>
          <DashBoardButton>View Tasks</DashBoardButton>
        </Card>
        <Card>
          <DashBoardText>
            View Top Contributors in the Community
          </DashBoardText>
          <DashBoardButton>View</DashBoardButton>
        </Card>
        <Card>
          <DashBoardText>
            Link Your Wallet to Receive Your Social Mining Rewards
          </DashBoardText>
          <DashBoardButton>Get Rewards</DashBoardButton>
        </Card>
        <DashBoardFooterText>Airdrops will be distributed at the end of each month based on each user’s accrued points</DashBoardFooterText>
      </DashBoardCards>
      
    </>
  );
};

export default DashBoard;
