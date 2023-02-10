import MainContainer from "../components/MainContainer";
import MainNavigation from "../components/MainNavigation";

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
