import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ToppingCheck from './toppingCheck.jsx';

// import Pizzas from '../pizzas.json'

class PizzaApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toppingsList: [],
      toppingStorage: {},
      sortToppings: [],
    }
  }

  componentDidMount() {
    axios.get('/pizzas')
      .then((results) => {
        this.setState({
          toppingsList: results.data
        })
      })
      .catch((err) => {
        console.log('pizza request err', err)
      })
  }

  render() {
    const { toppingsList, toppingStorage, sortToppings } = this.state;

    toppingsList.forEach((topping) => {
      if (!toppingStorage[topping.toppings.join()]) {
        toppingStorage[topping.toppings.join()] = 1
      } else {
        toppingStorage[topping.toppings.join()]++
      }
    })


    for (var toppings in toppingStorage) {
      sortToppings.push([toppings, toppingStorage[toppings]])
    }

    sortToppings.sort((a, b) => (
      b[1] - a[1]
    ))

    return(
    <div>
      <h1>Top 20 toppings</h1>
      <ToppingCheck toppingsList={sortToppings.slice(0, 20)}/>
    </div>
    )
  }
}

ReactDOM.render(<PizzaApp />, document.getElementById('app2'))