import React, { Component } from 'react'
import './Cal.css'

export class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         answer: 0,
         weight: 0,
         height: 0,
         reFact: 0,
      }
    }
    
    newWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
    newHeight = (event) => {
        this.setState({
            height: event.target.value
        })
    }


    calculateBMI = (event) => {
        event.preventDefault()
        this.setState({
            reFact: this.state.height / 100
        })

       this.setState({
        answer: this.state.weight/this.state.reFact.toFixed(2)
       })
    }
  render() {
    return (
     <React.Fragment>
        <h2>BMI TRACKER</h2>

        <form>
      
      <div id='form__display'>
      <label>
            Weight (in KG)
            <input type='text' onChange={this.newWeight}/>
        </label>
   
        <label>
            Height (in CM)
            <input type='text' onChange={this.newHeight}/>
        </label>

      </div>
        <br></br>
        <button onClick={this.calculateBMI}>
            Calculate BMI
        </button>


        </form>

        <div>
            <p id='answer'>
                Answer: {this.state.answer} BMI 
            </p>
        </div>
     </React.Fragment>
    )
  }
}

export default Calculator
