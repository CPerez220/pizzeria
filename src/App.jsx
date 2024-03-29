import React, { useState } from 'react';
import List from "./List.jsx"
import './App.css'
import logo from "./mario-logo.png"
import phone from "./WhatsApp-logo.png"

function App() {
  const [pizzamenu, setpizzamenu] = useState([
    {
      name: "classic",
      peperoni: true,
      queso: true,
      orilla: true,
      salsa: true,
      meet: false,
      jalapeno: false,
      pina: false,
      price: 10,
    },
    {
      name: "3 meats",
      peperoni: true,
      queso: true,
      orilla: true,
      salsa: true,
      meet: true,
      jalapeno: false,
      pina: false,
      price: 15,
    },
    {
      name: "combinada",
      peperoni: true,
      queso: true,
      orilla: true,
      salsa: true,
      meet: false,
      jalapeno: true,
      pina: false,
      price: 15,
    },
    {
      name: "hawaian",
      peperoni: false,
      queso: true,
      orilla: true,
      salsa: true,
      meet: false,
      jalapeno: false,
      pina: true,
      price: 12,
    },
    {
      name: "detroit",
      peperoni: true,
      queso: true,
      orilla: false,
      salsa: true,
      meet: false,
      jalapeno: false,
      pina: false,
      price: 10,
    }
  ]);

  const [newPizzaMenu, setNewPizzaMenu] = useState({
    name: "",
    peperoni: false,
    queso: false,
    orilla: false,
    salsa: false,
    meet: false,
    jalapeno: false,
    pina: false,
    price: 15,
  });

  const [showCreateForm, setShowCreateForm] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    setpizzamenu([...pizzamenu, { ...newPizzaMenu }]);
  }

  const handleToppingChange = (topping) => {
    setNewPizzaMenu({ ...newPizzaMenu, [topping]: !newPizzaMenu[topping] });
  }

  const handleCreatePizza = (event) => {
    event.preventDefault();
    setpizzamenu([...pizzamenu, { ...newPizzaMenu }]);
    setShowCreateForm(false);
  };

  return (
    <>
      <nav className="navbar1">
        <img src={logo} width={100} height={100}></img>
        <h1 className="title1">La Pizzeria del Mario</h1>
        <ul className="nav-info">
          <li><img src={phone} width={50} height={50}></img></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <nav className="navbar2">
        <a className="backButton" href="./App.jsx">BACK</a>
        <button className="createButton" onClick={() => setShowCreateForm(true)}>Create Pizza</button>
      </nav>

      {showCreateForm && (
      <form onSubmit={handleCreatePizza}>
        <input
          placeholder="Pizza name"
          name="newPizza"
          onChange={(event) => setNewPizzaMenu({ ...newPizzaMenu, name: event.target.value })}
        />
        
        <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.peperoni}
              onChange={() => handleToppingChange("peperoni")}
            />
            Peperoni
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.queso}
              onChange={() => handleToppingChange("queso")}
            />
            Cheese
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.orilla}
              onChange={() => handleToppingChange("orilla")}
            />
            Stuffed Crust
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.salsa}
              onChange={() => handleToppingChange("salsa")}
            />
            Salsa
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.meet}
              onChange={() => handleToppingChange("meet")}
            />
            Meat
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.jalapeno}
              onChange={() => handleToppingChange("jalapeno")}
            />
            Jalapeno
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.pina}
              onChange={() => handleToppingChange("pina")}
            />
            Pineapple
          </label>
        
        <button type="submit">Add Pizza</button>
      </form>
    )}
      
      <section class="main">
      <h1 class="h1">Menu</h1>

      <List pizzamenu={pizzamenu} />

      </section>

      <form onSubmit={formSubmit}>
        <input
          placeholder="Pizza name"
          name="newPizza"
          onChange={(event) => setNewPizzaMenu({ ...newPizzaMenu, name: event.target.value })} 
        />
        <div>
        <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.peperoni}
              onChange={() => handleToppingChange("peperoni")}
            />
            Peperoni
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.queso}
              onChange={() => handleToppingChange("queso")}
            />
            Cheese
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.orilla}
              onChange={() => handleToppingChange("orilla")}
            />
            Stuffed Crust
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.salsa}
              onChange={() => handleToppingChange("salsa")}
            />
            Salsa
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.meet}
              onChange={() => handleToppingChange("meet")}
            />
            Meat
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.jalapeno}
              onChange={() => handleToppingChange("jalapeno")}
            />
            Jalapeno
          </label>
          <label>
            <input
              type="checkbox"
              checked={newPizzaMenu.pina}
              onChange={() => handleToppingChange("pina")}
            />
            Pineapple
          </label>
        </div>
        <button type="submit">Create Custom Pizza</button>
      </form>
    </>
  );
}

export default App;