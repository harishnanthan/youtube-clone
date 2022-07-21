import React from "react";
import { Route, Routes } from "react-router-dom";
import CardGame from "./components/CardGame.component";
import YoutubeComponent from "./components/Youtube.component";


class App extends React.Component {
  // constructor(props){
  // super(props)
  // console.log(props)
  // }


  render() {
    return (
      <Routes>
        <Route index element={<YoutubeComponent />}/>
        <Route path="/cardgame" element={<CardGame/>}/>
      </Routes>
      
    );
  }
}


export default App;