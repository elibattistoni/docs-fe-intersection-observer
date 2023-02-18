import MainContainer from "../components/layout/MainContainer";
import MainNavigation from "../components/layout/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <MainContainer>
        <h2>An error occurred!</h2>
        <p>Could not find this page!</p>
      </MainContainer>
    </>
  );
}

export default ErrorPage;
