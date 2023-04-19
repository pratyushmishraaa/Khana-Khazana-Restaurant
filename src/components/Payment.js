import { useState } from "react";
import Menu from "../components/Menu";

function FoodList({ foods }) {
  const [cart, setCart] = useState({});
  const [checkedOut, setCheckedOut] = useState(false);

  const handleAddToCart = (food, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [food.id]: { ...food, quantity },
    }));
  };

  const handleCheckout = () => {
    setCheckedOut(true);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    // handle payment logic here
    alert("Payment successful!");
  };

  const foodCards = foods.map((food) => (
    <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
  ));

  return (
    <div className="food-list">
      {foodCards}
      <button className="button checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
      {checkedOut && (
        <div className="payment-form">
          <h2>Payment Information</h2>
          <form onSubmit={handlePayment}>
            <label htmlFor="name">Name on Card:</label>
            <input type="text" id="name" required />
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" id="card-number" required />
            <label htmlFor="expiration">Expiration Date:</label>
            <input type="text" id="expiration" required />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" required />
            <button type="submit" className="button pay-button">
              Pay Now
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FoodList;
