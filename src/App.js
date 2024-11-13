import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { NotPage } from "./page/NotPage";
import { Shop } from "./page/Shop";
import { Detail } from "./page/Detail";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { Cart } from "./page/Cart";
import { Checkout } from "./page/Checkout";
import "./components/style/styleRespnsive.css";
import { History } from "./page/History";
import { InfoOrder } from "./page/InfoOder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/clientapp" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/clientapp/shop" element={<Shop />} />
            <Route path="/clientapp/shop/:category" element={<Shop />} />
            <Route path="/clientapp/detail" element={<Detail />} />
            <Route path="/clientapp/detail/:id" element={<Detail />} />
            <Route path="/clientapp/register" element={<Register />} />
            <Route path="/clientapp/login" element={<Login />} />
            <Route path="/clientapp/cart" element={<Cart />} />
            <Route path="/clientapp/checkout" element={<Checkout />} />
            <Route path="*" element={<NotPage />} />
            <Route path="/clientapp/history" element={<History />} />
            <Route path="/clientapp/infoorder/:id" element={<InfoOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
