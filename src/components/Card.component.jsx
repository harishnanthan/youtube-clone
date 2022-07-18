import React, { Component } from "react";



export default class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    //when you click a img or chennal name, it's redirect to the youtube 
    this.redirect = () => {
        window.open(
          `https://www.youtube.com/watch?v=${this.props.data.id.videoId}`,
          "_blank"
        );
      };
      this.redirectChennal = () => {
        window.open(
          `https://www.youtube.com/c/${this.props.data.snippet.channelTitle}`,
          "_blank"
        );
      };

  }
  render() {
    return (
      <div className="card">
      {/* <Skeleton count={5}/> */}
        <img className="thumbnail" aria-label="12:00" src={this.props.data.snippet.thumbnails.high.url} alt="" onClick={this.redirect} />    
        <div className="card_details">
            <div className="chennal-thumbnail">
                <img src="http://unsplash.it/50/50?gravity=center" alt=""/>
            </div>
            <div className="card_subdetails">
                <div className="title">{this.props.data.snippet.title ||  <Skeleton  count={2}/> }</div>
                <div className="chennal_name" onClick={this.redirectChennal}>{this.props.data.snippet.channelTitle ||  <Skeleton count={1} /> }</div>
            </div>
        </div>
      </div>
    );
  }
}