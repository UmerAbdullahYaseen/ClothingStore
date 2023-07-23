import ProductList from "../features/ProductList/components/ProductList";
import NavBar from "../features/Shared/NavBar";

const HomePage = () => {
  return (
    <NavBar>
      <ProductList />
    </NavBar>
  );
};

export default HomePage;
