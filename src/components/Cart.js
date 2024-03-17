import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>cart </h1>
      <button onClick={() => handleClearCart()}>Clear cart</button>
      {cartItems.map((cartItem) => (
        <ItemList item={cartItem} key={cartItem.id}></ItemList>
      ))}
      {cartItems.length === 0 && <h1>Cart is empty</h1>}
    </>
  );
};

export default Cart;
