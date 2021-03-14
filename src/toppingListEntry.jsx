import React from 'react';

const ToppingListEntry = ({ topping, rank }) => {
  return(
    <div className="card">
      <h3>
        Topping:
      </h3>
          {`${topping[0]}`}
      <h4>
        Rank:
      </h4>
          {rank + 1}
      <h4>
        # of Orders:
      </h4>
          {`${topping[1]}`}
    </div>
  )
}

export default ToppingListEntry;