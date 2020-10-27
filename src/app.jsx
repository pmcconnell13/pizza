import React from 'react';
import ReactDOM from 'react-dom';
import PizzaList from './PizzaList.jsx'
import sampleData from '../sampleData.js';
import axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    // console.log('sending request')
    axios.get('/pizzas')
      .then((response)=>{console.log(response.data)})
      .catch((error)=>{console.log(error)})
  }

  render() {
    return (
      <div>
        {sampleData.pizzas.map((pizza, index) => <PizzaList pizza={pizza} key={index} />)}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));