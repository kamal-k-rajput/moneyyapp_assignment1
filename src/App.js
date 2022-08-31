import "./App.css";
import { Homepage } from "./Homepage/Homepage";
import { Navbar } from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./Products/Products";
import { AddItem } from "./Products/ProductItem/CreateProduct/AddItem";
import { Login } from "./Account/Login";
import { SignUp } from "./Account/SignUp";
import { UpdateProduct } from "./Products/ProductItem/UpdateProduct/UpdateProduct";
import { NotificationPanel } from "./Others/NotificationPanel";
import { Logout } from "./Account/Logout";
import { Cart } from "./Cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <NotificationPanel />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/updatitem" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
