import React from "react";
import axios from "axios";
import food1 from "../images/Dal-Tadka.jpg";
import food2 from "../images/Dal-Tadka.jpg";
import food3 from "../images/Dal-Tadka.jpg";
import food4 from "../images/Dal-Tadka.jpg";
import "../stylesheets/Menu.css";

const foods = [
  { name: "Kadhai Paneer", image: food1, price: 9.99 },
  { name: "Momos", image: food2, price: 5.99 },
  { name: "Idli", image: food3, price: 4.99 },
  { name: "Dosa", image: food4, price: 14.99 }
];

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <div>${food.price.toFixed(2)}</div>
      <button onClick={() => onAddToCart(food)}>Add to Basket</button>
    </div>
  );
}

function FoodList({ foods, onAddToCart }) {
  return (
    <div className="food-list">
      {foods.map((food) => (
        <FoodCard key={food.name} food={food} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

function CheckoutButton({ cart, onCheckout }) {
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  const handleCheckout = () => {
    axios.post("http://localhost:3000/app", { items: cart, finalAmount: total })
      .then(() => {
        onCheckout();
      })
      .catch((error) => {
        console.error("Error saving order", error);
      });
  };
  return (
    <div className="checkout-button">
      <button onClick={handleCheckout}>Checkout (${total.toFixed(2)})</button>
    </div>
  );
}

function App() {
  const [cart, setCart] = React.useState([]);
  const addToCart = (food) => {
    setCart([...cart, food]);
  };
  const checkout = () => {
    alert("Thank you for your order!");
    setCart([]);
  };
  return (
    <div className="App">
      <FoodList foods={foods} onAddToCart={addToCart} />
      <CheckoutButton cart={cart} onCheckout={checkout} />
    </div>
  );
}

export default App;
