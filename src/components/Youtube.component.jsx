import React, { Component } from 'react'
import { connect } from "react-redux";
import Hero from "./Hero.component";
import Navigation from "./Navigation.component";
import Sidebar from "./Sidebar.component";

class Youtube extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <main>
                    <Sidebar />
                    <Hero />
                </main>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log("MSTP HOME")
    // console.log(state.preview)
    return {
        _preview: state.preview,
        // _theme : state.theme
    }
}

// console.log(App)
export default connect(mapStateToProps, null)(Youtube);