import classes from "./MainContainer.module.css";

function MainContainer(props) {
  return <main className={classes.container}>{props.children}</main>;
}

export default MainContainer;
