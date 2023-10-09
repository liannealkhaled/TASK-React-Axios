import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="Home" Component={Home}></Route>
        <Route path="PetList" Component={PetList}></Route>
        <Route path="PetDetail/:petId" Component={PetDetail}></Route>
      </Routes>
    </div>
  );
}

export default App;
