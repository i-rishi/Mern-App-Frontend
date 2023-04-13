import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
