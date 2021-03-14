import React from 'react';
//  import ReactDOM from 'react-dom';

// const dummyData = {
//   "pizzas": [
//     {
//       "toppings": [
//         "sausage",
//         "pepperoni"
//       ],
//       "rank": 2,
//       "orders": 2
//     },
//     {
//       "toppings": [
//         "mozzarella cheese"
//       ],
//       "rank": 1,
//       "orders": 3
//     },
//     {
//       "toppings": [
//         "mozzarella cheese",
//         "bacon",
//         "beef",
//         "onions",
//         "pineapple"
//       ],
//       "rank": 3,
//       "orders": 1
//     }
//   ]
// };

// const PizzaList = ({ pizzas, topping, order }) => {
//   const cards = [];
//   console.log(pizzas)

//   pizzas
//   .sort((a, b) => a.rank - b.rank)
//   .forEach((pizza) => {
//       pizza.toppings.forEach(top => {
//       if (top.indexOf(topping) !== -1) {
//         if (pizza.orders > order) {
//           if (cards.filter(card =>
//             card.rank === pizza.rank
//           ).length === 0)
//           cards.push(pizza)
//         }
//       }
//     })
//   })


//   console.log(cards)
//   return(
//     <div>
//       {cards.map(card => (
//         <PizzaListEntry pizza={card} key={card.rank} />
//       ))}
//     </div>
//   )
// }

// const PizzaListEntry = (props) => {
//   const orders = props.pizza.orders;
//   const rank = props.pizza.rank;
//   const toppings = props.pizza.toppings
//   return(
//     <div className="card">
//       {
//         toppings.length === 1
//         ? <h3>{`${toppings[0]} Pizza`}</h3>
//         : null
//       }
//       {
//         toppings.length === 2
//         ? <h3>{`${toppings[0]} and ${toppings[1]} Pizza`}</h3>
//         : null
//       }
//       {
//         toppings.length > 2
//         ? <h3>{`${toppings.map((topping, i) => (
//           ' ' + topping
//         ))} Combo Pizza`}</h3>
//         : null
//       }
//         <div>{`${orders} Order`}</div>
//       {
//         rank === 1
//         ?  <div>{`Most Popular`}</div>
//         :  <div>{`#${rank} Popularity`}</div>
//       }
//     </div>
//   )
// };

// class PizzaFilters extends React.Component {

//   render() {
//     const topping = this.props.topping;
//     const order = this.props.order;
//     const handleInputChange = this.props.handleInputChange;
//   return(
//     <form>
//       {/**The pizza filters are state because they change over time and they aren't computed from anything */}
//       <h2>Pizza Filters</h2>
//       <input type='text' name="topping" placeholder="Topping" value={topping} onChange={handleInputChange}></input>
//       <input type='number' name="order" min='0' placeholder='Order' value={order} onChange={handleInputChange}></input>
//     </form>
//   )
//   }
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       topping: '',
//       order: 0
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

// handleInputChange(e){
//   this.setState({
//     [e.target.name]: e.target.value
//   })
// }

//   render() {
//   return(
//   <div>
//     <h1>Simple Pizza Tracker Mockup!</h1>
//     <PizzaFilters topping={this.state.topping} order={this.state.order} handleInputChange={this.handleInputChange}/>
//     <PizzaList pizzas={this.props.dummyData.pizzas} topping={this.state.topping} order={this.state.order}/>
//   </div>
//   )
//   }
// }

////////////////////////////////////////////////////////////////


// class PizzaApp extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toppingsList: [],
//     }
//   }

//   // componentDidMount() {
//   //   axios.get('/pizzas')
//   //     .then((results) => {
//   //       this.setState({
//   //         toppingsList: results.data
//   //       })
//   //     })
//   //     .catch((err) => {
//   //       console.log('pizza request err', err)
//   //     })
//   // }

//   render() {

//     return(
//     <div>
//       hi
//       {/* {this.state.toppingsList} */}
//     </div>
//     )
//   }
// }



// ReactDOM.render(<PizzaApp />, document.getElementById('app2'))



//  ReactDOM.render(<App dummyData={dummyData}/>, document.getElementById('app'))

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