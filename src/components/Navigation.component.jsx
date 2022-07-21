import React from "react";

import { ReactComponent as HambergerMenu } from "../assets/svg/Hamburger.svg";
import { ReactComponent as Youtube } from "../assets/svg/Youtube.svg";
import { ReactComponent as Search } from "../assets/svg/Search.svg";
import { ReactComponent as Apps } from "../assets/svg/Apps.svg";
import { ReactComponent as Settings } from "../assets/svg/Settings.svg";
import { ReactComponent as Person } from "../assets/svg/Person.svg";

import { Toggle, theme } from "../redux/actions/previewAction";
import { fetchVideos } from "../redux/actions/videosActions";
import { connect } from "react-redux";

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    console.log("NAVIGATION CONSTRUCTOR")
    this.state = { search: "" }
    // console.log("NAVIGATION_COMPONENT")
    // console.log(props)
  }

  // should component update have a two parameter (nextProps,nextState)
  // shouldComponentUpdate(nextProps) {
  //   // console.log(nextProps) //updated 
  //   // console.log(this.props) // prev
  //   console.log("NAVIGATION SHOULD COMPONENT UPDATE")
  //   if (this.props._preview || !this.props._preview)
  //     return false
  // }

  handleChange = e => {
    const { name, value } = e.target
    this.setState(
      { [name]: value }
    )
  }

  submitHandler = e => {
    e.preventDefault();
    // console.log(this.state.search)
    this.props.fetchVideos(this.state.search)
  }

  // componentDidUpdate(prevState){
  //   console.log("COPONNENT DID UPDATE")
  //   console.log(prevState)
  // }

  render() {
    console.log("NAV_RENDER")
    console.log("CHECK",this.props)
    // console.log(this.props._theme)
    return (
      <nav>
        <div className="container">
          <div className="left_container row ">
            <div className="small" onClick={() => this.props.Toggle()}>
              <HambergerMenu />
            </div>
            <div className="logo">
              <Youtube />
            </div>
          </div>
          <div className="center_container row">
            <div >
              <form className="search_box" action="" onSubmit={this.submitHandler}>
                <input placeholder="Search" name="search" onChange={this.handleChange} />
                <div className="small">
                  <Search />
                </div>
              </form>
            </div>
          </div>
          <div className="right_container row">
            <label className="switch">
              <input type="checkbox" onClick={() => this.props.theme()}/>
              <span className="slider round"></span>
            </label>
            <div className="small">
              <Apps />
            </div>
            <div className="small">
              <Settings />
            </div>
            <button>
              <div className="small">
                <Person />
              </div>
              <p>SIGN IN</p>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("NAVIGATION_MSTP")
  // console.log(state)
  return {
    _preview: state.preview.show,
    _theme: state.preview.theme
  }
}

export default connect(mapStateToProps, { Toggle, theme, fetchVideos })(Navigation);