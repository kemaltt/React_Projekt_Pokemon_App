import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Type from "./pages/Type";
import PokemonDetail from "./components/PokemonDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type" element={<Type />} />
        <Route path="/detail/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
