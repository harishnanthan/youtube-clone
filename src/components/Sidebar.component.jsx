import React from "react";

import { AiOutlineHome, AiOutlineHistory } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdSubscriptions } from "react-icons/md";
import { ImLibrary } from "react-icons/im";
import { connect } from "react-redux";
import AlterSidebar from "./AlterSidebar.component";

class Sidebar extends React.Component {
  constructor(props){
    super(props)
    console.log("SIDEBAR CONSTRUCTOR")
  //   // console.log(this.props.show)
  }

  // shouldComponentUpdate(this.props.sta)

  render() {
    console.log("SIDEBAR RENDER")
    // console.log(this.props.show)
    return (
      this.props._show ? <div className="sidebar">
      <div>
        <ul>
          <li>
            <AiOutlineHome />
            Home
          </li>
          <li>
            <FaWpexplorer />
            Explore
          </li>
          <li>
            <GiUnderwearShorts />
            Shorts
          </li>
          <li>
            <MdSubscriptions />
            Subscription
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <ImLibrary />
            Library
          </li>
          <li>
            <AiOutlineHistory />
            History
          </li>
        </ul>
      </div>
    </div> : <AlterSidebar/>
    );
  }
}

const mapStateToProps = state => {
  console.log("SIDEBAR_MSTP")
  // console.log(state)
  return {_show: state.preview.show}
}

export default connect(mapStateToProps, null) (Sidebar);
