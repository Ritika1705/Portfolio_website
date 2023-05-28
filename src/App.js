import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home_component';
import About from './About_component';
import Contact from "./Contact_component";
import './App.css';

function App()
{
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={< Home/>}></Route>
          <Route path="/about" element={< About/>}></Route>
          <Route path="/contact" element={< Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;