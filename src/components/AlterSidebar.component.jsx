import React, { Component } from 'react'


import { AiOutlineHome} from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdSubscriptions } from "react-icons/md";

export default class AlterSidebar extends Component {

componentWillUnmount(){
    console.log("ALTERNATE SIDEBAR COMPONENT WILL UNMOUNT")
}

  render() {
    return (
      <div className='alter_sidebar'>
        <ul>
            <li>
                <AiOutlineHome />
                <p>Home</p>
            </li>
            <li>
                <FaWpexplorer />
                <p>Explore</p>
            </li>
            <li>
                <GiUnderwearShorts />
                <p>Shorts</p>
            </li>
            <li>
                <MdSubscriptions />
                <p>Subscription</p>
            </li>
        </ul>
      </div>
    )
  }
}
