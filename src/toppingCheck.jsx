import React from 'react';
import ToppingListEntry from './toppingListEntry.jsx';

const ToppingCheck = ({ toppingsList }) => {
  return(
    <div>
      {
        toppingsList.map((topping, rank) => (
          <ToppingListEntry topping={topping} rank={rank} key={rank}/>
        ))}
    </div>
  )
}

export default ToppingCheck;