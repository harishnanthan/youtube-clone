import React from "react";
import { connect } from "react-redux";
import Hero from "./components/Hero.component";
import Navigation from "./components/Navigation.component";
import Sidebar from "./components/Sidebar.component";

class App extends React.Component {
  // constructor(props){
    // super(props)
    // console.log(props)
  // }


  render() {

    return (
      <div>
        <Navigation />
        <main>
          <Sidebar />
          <Hero />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log("MSTP HOME")
  // console.log(state.preview)
  return {_preview : state.preview}
}

// console.log(App)
export default connect(mapStateToProps,null) (App);


