import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart = [], removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p>Price: ₹{item.price}</p>
                  <p>
                    Quantity:{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </p>
                  <p className="mt-2 font-semibold">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Clear/Checkout Buttons */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</h2>

            <div className="flex gap-4 mt-4">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear Cart
              </button>

              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
