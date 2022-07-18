import React, { Component } from 'react'
import adImg from '../assets/images/ad.png'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default class AdImg extends Component {

    componentWillUnmount() {
        window.alert("Are you sure you want to close?")
    }
    render() {
        return (
            <div>
                <SkeletonTheme color="#5e6c77" highlightColor="#a9b7c1">
                    {/* {<Skeleton duration={3}/> || <img src={adImg} alt="ad-img" />} */}
                  <img src={adImg} alt="ad-img" />
                </SkeletonTheme>
            </div>
        )
    }
}