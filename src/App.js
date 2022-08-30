import "./App.css";
import { Homepage } from "./Homepage/Homepage";
import { Navbar } from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./Products/Products";
import { AddItem } from "./Products/ProductItem/AddItem";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Products /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
