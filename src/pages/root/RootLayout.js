import { Outlet } from "react-router";
import RootNavigation from "../../components/root/RootNavigation";

function RootLayout() {
  return (
    <>
      <RootNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
