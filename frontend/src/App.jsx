import CategoryNavbarComponent from "./Components/CategoryNavbarComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import LatestArticleComponent from "./Components/LatestArticleComponent";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <HeaderComponent></HeaderComponent>
      <LatestArticleComponent></LatestArticleComponent>
      <CategoryNavbarComponent></CategoryNavbarComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
