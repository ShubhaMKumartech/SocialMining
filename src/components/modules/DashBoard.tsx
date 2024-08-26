// import React from 'react'
import {
  Button,
  Card,
  CardContainer,
  ParagraphDashBorad,
} from "../styles/DashBoard.styles";

import PopUP from "./PopUP";
import { useState } from "react";

const DashBoard:React.FC = () => {

  
  const[isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);


  const handleConnectClick = () => {
    setIsPopUpVisible(true);
  }

  const handleClosePopUp = () =>{
    setIsPopUpVisible(false);
  }

  return (
    <>
    {isPopUpVisible && <PopUP onClose = {handleClosePopUp}/>}
      <CardContainer>
        <Card>
          <ParagraphDashBorad>
            Link Your Social Media to Start Mining Rewards
          </ParagraphDashBorad>
          <Button onClick={handleConnectClick}>Connect</Button>
        </Card>
        <Card>
          <ParagraphDashBorad>
          Browse the Task List, Complete Challenges, and Earn Rewards!
          </ParagraphDashBorad>
          <Button>View Tasks</Button>
        </Card>
        <Card>
          <ParagraphDashBorad>
          View Top Contributors in the Community
          </ParagraphDashBorad>
          <Button>View</Button>
        </Card>
        <Card>
          <ParagraphDashBorad>
          Link Your Wallet to Receive Your Social Mining Rewards
          </ParagraphDashBorad>
          <Button>Get Rewards</Button>
        </Card>
      </CardContainer>
      
      
    </>
  );
};

export default DashBoard;
