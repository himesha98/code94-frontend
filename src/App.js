import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import ProdMain from "./components/productsMain/ProdMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addproduct from "./components/productsMain/addproduct/Addproduct";
import Editproduct from "./components/productsMain/editproduct/Editproduct";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route element={<Editproduct />} path="/editproduct" />
        <Route element={<Addproduct />} path="/addproduct" />
          <Route element={<ProdMain />} path="/" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
