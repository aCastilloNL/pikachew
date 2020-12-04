import React, { Component } from 'react'
import './result.css'
import Test from './test'
import pikachuIngredients from '../images/pikachuIngredients.png'
import PokeBubbleText from './PokebubbleText'
import {stock} from './stockIngredients'



let stock2 = stock.join()

class Result extends Component {

    state = {
        showResult: true,
        
      }
     
    render() {
        console.log(stock2)
        return (
            this.state.showResult &&
            <div className="results">
                <div className="results-header">
                    <img className="pikachu-results" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-results">
                        <PokeBubbleText
                            stopCounter={120}
                            textData={["Pika-pi! Here we are Pika!", "Now choose what you want to cook in the list below!"]}
                        />
                    </div>
                </div>
                <Test
            superStock={stock2}
                />
                <div className="container-home">
                    <button className="home-button" onClick={this.props.toIngredients}>I forgot some ingredients</button>
                </div>
            </div>
        )
    }
}

export default Result;