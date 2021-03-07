import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>App!</div>
)


ReactDOM.render(<App />, document.getElementById('app'))

//component Hierarchy
/*
•Pizza app
  •Search bars (toppings and orders)
  •Pizza List
    •Pizza List Entry
      •Toppings
      •Rank
      •Order
*/