import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import BottomActions from "./components/bottomActions";
import Featured from "./pages/Featured";
import ComingSoon from "./pages/ComingSoon";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <BottomActions />

      </BrowserRouter>
    </div>
  )
};

export default App;