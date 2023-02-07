import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":itemId" element={<ProductPage />} />
        </Route>

        <Route path="wishlist" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
