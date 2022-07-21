import React, { Component } from 'react'
// import Box from './Box.compponent';

export default class CardGame extends Component {
    constructor(){
        super()
        this.state = {
            show: "",
            // toggle: false,
            // view: true
          };

        //   ref
        this.showref = React.createRef();
    }
    
    
      show = (e) => {
        // console.log("clicked");
        this.setState({ show: e.target.value });
        this.setState({toggle: true})
      };
    
      getSnapshotBeforeUpdate(prevstate, prevProps) {
        // console.log(prevstate);
        return prevProps.show;
      }
    
      componentDidUpdate(prevProps, prevstate, snopShot) {
        // console.log(prevProps);
        if (this.state.show === prevstate.show) {
            // using useRef
            this.showref.current.innerHTML = "NICE";
          console.log("you win");
        } else this.showref.current.innerHTML = "";
        // console.log(prevstate);
        // console.log(snopShot);
      }

      
    render() {
        // const cardValue = [1,1,2,2,3,3,4,4,5,5]
        return (
            <div className='card-game'>
                <h1>CARD GAME</h1>
                {/* <div className='card-container'>
                    {cardValue.map((el, index)=> <Box key={index} data={el}/> )}
                </div> */}
                <div className='card-container'>
                    <button onClick={this.show} value="1">
                        1
                    </button>
                    <button onClick={this.show} value="1" >
                        1
                    </button>
                    <button onClick={this.show} value="2">
                        2
                    </button>
                    <button onClick={this.show} value="2">
                        2
                    </button>
                    <button onClick={this.show} value="3">
                        3
                    </button>
                    <button onClick={this.show} value="3">
                        3
                    </button>
                    <button onClick={this.show} value="4">
                        4
                    </button>
                    <button onClick={this.show} value="4">
                        4
                    </button>
                    <button onClick={this.show} value="5">
                        5
                    </button>
                    <button onClick={this.show} value="5">
                        5
                    </button>
                </div>
                <h1 ref={this.showref}></h1>
            </div>
        );
    }
}

