import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/navbar";
import HomePage from "./Components/Pages/homePage";
import FavoritePage from "./Components/Pages/favoritePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
