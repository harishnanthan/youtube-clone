import React, { Component } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import AdImg from './AdImg.component'

export default class Ad extends Component {
  state = {
    show: true
  }

  showHandler = () => {
    this.setState({ show: false })
  }


  render() {
    // console.log(this.state)
    return (
      <>
        {this.state.show ?
          <div className='ad'>
            <div className="ad-container">
              <AdImg />
              <div>
                <AiOutlineClose onClick={this.showHandler} /></div>
            </div>
          </div> : null}
      </>
    )
  }
}
