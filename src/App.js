
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Annonce from "./Components/Annonce/Annonce";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";


function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Annonce" element={<Annonce />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
