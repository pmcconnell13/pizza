import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = {
  "pizzas": [
    {
      "toppings": [
        "sausage",
        "pepperoni"
      ],
      "rank": 2,
      "orders": 2
    },
    {
      "toppings": [
        "mozzarella cheese"
      ],
      "rank": 1,
      "orders": 3
    },
    {
      "toppings": [
        "mozzarella cheese",
        "bacon",
        "beef",
        "onions",
        "pineapple"
      ],
      "rank": 3,
      "orders": 1
    }
  ]
}

//////////////////////////Tried dynamic rendering but unsure how to do it for such specific tags
const PizzaList = (props) => {
  return(
    <div>
      {dummyData.pizzas
      .sort((a, b) => a.rank - b.rank)
      .map((pizza) => (
        <PizzaListEntry pizza={pizza} key={dummyData.pizzas.rank} />
      ))}
    </div>
  )
};

const PizzaListEntry = (props) => {
  console.log(props)
  const orders = props.pizza.orders;
  const rank = props.pizza.rank;
  const toppings = props.pizza.toppings
  return(
    <div className="card">
      {
        toppings.length === 1
        ? <h3>{`${toppings[0]} Pizza`}</h3>
        : null
      }
      {
        toppings.length === 2
        ? <h3>{`${toppings[0]} and ${toppings[1]} Pizza`}</h3>
        : null
      }
      {
        toppings.length > 2
        ? <h3>{`${toppings.map((topping, i) => (
          ' ' + topping
        ))} Combo Pizza`}</h3>
        : null
      }
        <div>{`${orders} Order`}</div>
      {
        rank === 1
        ?  <div>{`Most Popular`}</div>
        :  <div>{`#${rank} Popularity`}</div>
      }
    </div>
  )
};

const PizzaFilters = (props) => {
  return(
    <div>
      {/**The pizza filters are state because they change over time and they aren't computed from anything */}
      <h2>Pizza Filters</h2>
      <input type='text' placeholder="Topping"></input>
      <input type='number' min='0' placeholder='Orders'></input>
    </div>
  )
};

const App = () => (
  <div>
    <h1>Simple Pizza Tracker Mockup!</h1>
    <PizzaFilters />
    <PizzaList />
  </div>
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