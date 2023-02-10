import { Outlet } from "react-router-dom";
import MainContainer from "../components/layout/MainContainer";
import MainNavigation from "../components/layout/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

export default RootLayout;
