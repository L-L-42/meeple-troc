import { Routes, Route } from "react-router-dom";
import FaqPage from "./pages/FaqPage";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}

export default App;
