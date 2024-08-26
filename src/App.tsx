// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import PopUP from "./components/modules/PopUP";
import Signup from "./components/modules/Signup";
import SocialMining from "./components/modules/SocialMining";
import DashBoard from "./components/modules/DashBoard";
import {useState } from "react";
import TitleUpdater from "./components/modules/Router";


const App = () => {

 const [titleHeader , setTitleHeader]= useState<string>(
  ''
 );
 
  return (
    <>
    <Router>
    <TitleUpdater setTitleHeader={setTitleHeader} />
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/dashboard" element={ <SocialMining DashBoardTitle={titleHeader}/>}>
        <Route index element= { <DashBoard/>}></Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
