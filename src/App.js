import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TheNavbar from "./components/TheNavbar";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import CartDetails from "./components/CartDetails";
import PageNotFound from "./components/PageNotFound";
import CartPage from "./components/CartPage";
import TheModel from "./components/TheModel";
import MyContext from "./store/context";
import React, { useContext } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
function App() {
  const ctx = useContext(MyContext);
  return (
    <>
      <TheNavbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cardDetails/:id" element={<CartDetails />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <TheModel show={ctx.modalShow} onHide={() => ctx.setModalShow(false)} />
      <footer
        className="text-center py-2 mt-5"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Done By Abdallah Abu ZAID <RiEmotionHappyLine />
      </footer>
    </>
  );
}

export default App;
