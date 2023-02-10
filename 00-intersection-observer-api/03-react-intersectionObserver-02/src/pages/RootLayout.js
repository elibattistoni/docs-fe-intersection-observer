import { Outlet } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import MainNavigation from "../components/MainNavigation";

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
