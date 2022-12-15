import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Elements/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
