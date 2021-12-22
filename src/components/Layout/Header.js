import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onPressCartButton} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of deliciou food!" />
      </div>
    </Fragment>
  );
};
export default Header;
