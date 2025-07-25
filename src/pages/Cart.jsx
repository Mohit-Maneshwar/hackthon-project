import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-zinc-400">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain bg-white p-2 rounded mb-4"
              />
              <h2 className="text-lg font-semibold text-center mb-2">{item.title}</h2>
              <p className="text-rose-400 font-bold text-sm mb-1">₹{item.price}</p>

              <div className="flex items-center space-x-4 mb-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)
                  }
                  className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              <p className="text-zinc-300 text-sm mb-3">
                Total: ₹{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm bg-transparent border border-rose-400 text-rose-400 px-3 py-1 rounded hover:bg-rose-500 hover:text-white transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Grand Total: ₹{getTotal()}
          </h2>
          <button
            onClick={clearCart}
            className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
