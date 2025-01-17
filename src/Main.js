import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
import Kartta from "./Kartta";
import FormComponent from "./FormComponent";
import App from "./StyledComponent"
import Kamera from "./Kamera"
import Sää from "./Sää";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

// Rekisteröidään Chart.js komponentit
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Perus Single Page Application (SPA)</h1>
        <ul className="header">
          <li><NavLink exact to="/">Koti</NavLink></li>
          <li><NavLink to="/Tarina">Tarinaa</NavLink></li>
          <li><NavLink to="/Yhteys">Yhteys</NavLink></li>
          <li><NavLink to="/Kartta">Kartta</NavLink></li>
          <li><NavLink to="/FormComponent">FormComponent</NavLink></li>
          <li><NavLink to="/App">StyledComponent</NavLink></li>
          <li><NavLink to="/Kamera">Kamera</NavLink></li>
          <li><NavLink to="/Sää">Sää</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Koti />} />
            <Route path="/Tarina" element={<Tarina />} />
            <Route path="/Yhteys" element={<Yhteys />} />
            <Route path="/Kartta" element={<Kartta />} />
            <Route path="/FormComponent" element={<FormComponent />} />
            <Route path="/App" element={<App />} />
            <Route path="/Kamera" element={<Kamera />} />
            <Route path="/Sää" element={<Sää />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
