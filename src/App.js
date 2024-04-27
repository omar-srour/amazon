import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/css';
import './App.css';

import { Home } from "./Home";
import { Headers } from "./Headers";
import ProuductDetail from "./ProuductDetail";
import ProductDetail from "./ProuductDetail";
import Shop from "./Shop";
import Checkout from "./checkout";




function App() {
  return (
    <div className="App">
     
     <Headers/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Shop/:categoryy" element={<Shop/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    


    </div>
  );
}

export default App;
