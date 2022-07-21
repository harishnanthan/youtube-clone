import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
  render() {
    const {data } = this.props
    console.log(this.props)
    return (
      <div className='box-btn'>{data}</div>
    )
  }
}
