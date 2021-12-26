import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtbHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClass = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtbHighlighted(true);
    const timer = setTimeout(() => {
      setBtbHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
