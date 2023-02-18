import { Outlet } from "react-router-dom";
import IONavigation from "../../components/intersection-observer/IONavigation";

function LayoutIO() {
  return (
    <>
      <IONavigation />
      <Outlet />
    </>
  );
}

export default LayoutIO;
