import { Products, Navbar } from "./components";
import Cart from "./components/Cart/Cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
