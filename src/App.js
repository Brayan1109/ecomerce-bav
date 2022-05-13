import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logaut from "./pages/Logaut";
import Shop from "./pages/Shop";
import ProtectPages from "./pages/ProtectPages";
import { ProductId } from "./pages/ProductId";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logaut" element={<Logaut />} />

      <Route element={<ProtectPages />}>
        <Route path="/" element={<h3>Inicio</h3>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductId />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/cart/pay" element={<Pay />} />
      </Route>
    </Routes>
  );
}

export default App;
