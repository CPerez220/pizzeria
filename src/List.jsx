import React from 'react';

const List = ({ pizzamenu }) => {
  return (
    <ul class="ul"> 
      {pizzamenu.map((currentpizza, index) => (
        <li key={index}>
          <strong class="name">{currentpizza.name}</strong>
          <ul class="ingredientes">
            <li>Pepperoni: {currentpizza.peperoni ? 'Yes' : 'No'}</li>
            <li>Cheese: {currentpizza.queso ? 'Yes' : 'No'}</li>
            <li>Stuffed Crust: {currentpizza.orilla ? 'Yes' : 'No'}</li>
            <li>Salsa: {currentpizza.salsa ? 'Yes' : 'No'}</li>
            <li>Meat: {currentpizza.meet ? 'Yes' : 'No'}</li>
            <li>Jalapeno: {currentpizza.jalapeno ? 'Yes' : 'No'}</li>
            <li>Pineapple: {currentpizza.pina ? 'Yes' : 'No'}</li>
          </ul>
          Price: ${currentpizza.price}
        </li>
      ))}
    </ul>
  );
};

export default List;
