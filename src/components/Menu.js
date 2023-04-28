import React from "react";
import axios from "axios";
import food1 from "../images/Kadai-Paneer.jpg";
import food2 from "../images/big_momos-15964.jpg";
import food3 from "../images/idli.jpg";
import food4 from "../images/Masala-Dosa.jpg";
import "../stylesheets/Menu.css";

const foods = [
{ name: "Kadhai Paneer", image: food1, price: 9.99 },
{ name: "Momos", image: food2, price: 5.99 },
{ name: "Idli", image: food3, price: 4.99 },
{ name: "Dosa", image: food4, price: 14.99 }
];

function FoodCard({ food, onAddToCart }) {
const [quantity, setQuantity] = React.useState(1);
const handleIncrement = () => {
setQuantity(quantity + 1);
};
const handleDecrement = () => {
if (quantity > 1) {
setQuantity(quantity - 1);
}
};
return (

<div className="food-card">
<img src={food.image} alt={food.name} />
<h3>{food.name}</h3>
<div className="food-paisa">Rs {food.price.toFixed(2)}</div>
<div className="quantity">
<button onClick={handleDecrement}>-</button>
<span>{quantity}</span>
<button onClick={handleIncrement}>+</button>
</div>
<button onClick={() => onAddToCart({ ...food, quantity })}>
Add to Basket
</button>
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
const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
const handleCheckout = () => {
axios
.post("http://localhost:3001/app", { items: cart, finalAmount: total })
.then(() => {
onCheckout();
alert("Your order has been placed successfully!");
})
.catch((error) => {
console.error("Error saving order", error);
});
};
return (

<div className="checkout-button">
<button onClick={handleCheckout}>
<i className="fa-solid fa-bag-shopping fa-2x"></i>(Rs{total.toFixed(2)})
</button>
<div>
{cart.map((item) => (
<p>
{item.name} - Rs {(item.price * item.quantity).toFixed(2)}
</p>
))}
<p>Total: Rs{total.toFixed(2)}</p>
</div>
</div>
);
}
function App() {
const [cart, setCart] = React.useState([]);
const [message, setMessage] = React.useState("");
const addToCart = (food) => {
setCart([...cart, food]);
};
const checkout = () => {
  console.log("checkout clicked");
  alert("Thank you for your order!");
  setCart([]);
};
return (

<div className="App">
<FoodList foods={foods} onAddToCart={addToCart} />
<CheckoutButton cart={cart} onCheckout={checkout} />
{message && <div id="message">{message}</div>}
</div>
);
}
export default App;