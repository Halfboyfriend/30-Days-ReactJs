import React, { Component } from 'react'
import './Mobile.css'
import './FlashMessages'


export class Mine extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mine: 0,
      }
    }

    appMining = () => {
        const btn = document.getElementById('mineBtn');
       setInterval(() => {
        btn.innerHTML = 'Mining'
        this.setState({
            mine: this.state.mine + 0.00000001
        })
       }, 5000)       
    }

   
    
  render() {
    return (
      <React.Fragment>
        <h2>Minning App</h2>

        <button id='mineBtn' onClick={this.appMining}>Start</button>

        <div id='mine'>
            {this.state.mine.toFixed(10)}
        </div>

      
      </React.Fragment>
    )
  }
}

export default Mine
