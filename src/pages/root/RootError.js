import RootNavigation from "../../components/root/RootNavigation";
import classes from "./RootError.module.css";
function RootError() {
  return (
    <>
      <RootNavigation />
      <section className={classes["error__container"]}>
        <h2 className={classes["error__title"]}>An error occurred!</h2>
        <p className={classes["error__description"]}>Page not found</p>
      </section>
    </>
  );
}

export default RootError;
