import RootNavigation from "../../components/root/RootNavigation";
import classes from "./RootError.module.css";
function RootError() {
  return (
    <>
      <RootNavigation />
      <h2 className={classes["root-error__title"]}>An error occurred!</h2>
      <p className={classes["root-error__description"]}>Page not found</p>
    </>
  );
}

export default RootError;
