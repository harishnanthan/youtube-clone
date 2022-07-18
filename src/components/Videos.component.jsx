import React from "react";

import { connect } from "react-redux";
import { fetchVideos } from "../redux/actions/videosActions";
import Card from "./Card.component";

class VideosContainer extends React.Component {
  //this is the constructor method which you can write your props, state are declare here...
  constructor(props) {
    super(props);
    console.log("VIDEO CONTAINER CONSTRUCTOR")
    // console.log(props.videosData)
  }

   // shouldComponentUpdata
  //  shouldComponentUpdate(nextProps){
  //   if(this.props.videosData.videos)
  //     return true
  //   else
  //     return false
  // }

  //once the component render method is rendered then this component did mount method is render...
  componentDidMount() {
    console.log("VIDEO CONTAINER COMPONENT_DID_MOUNT")
    this.props.fetchVideos();
  }

 

  render() {
    console.log("VIDEO CONTAINER RENDER")
    // console.log(this.props.videosData.videos)
    if(this.props.videosData.videos) {
      // here we need to render a card component
      return (<div className="hero_container">
        {this.props.videosData.videos.map((el, index) => (
          <Card data={el} key={index}/>
        ))}
      </div>)
    }else {
      return <div>LOADING...</div>
    }
  }
}

//get the state from the redux store
const mapStateToProps = (state) => {
  console.log("VIDEO_CONTENT_MSTP")
  // console.log(state);
  return {
    videosData: state.videos,
  };
};

//here the connet method pass store and dispatches to the videosContainer
export default connect(mapStateToProps, {fetchVideos}) (VideosContainer);
