import React from 'react';

const PizzaList = ({pizza}) => {
  return (
    <div>
      <h5>
        {pizza.toppings[0]}
      </h5>
    </div>
  );
}

export default PizzaList;