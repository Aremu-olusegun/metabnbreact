import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaceToStay from "./containers/PlaceToStay";
import { Homepage } from "./components/Homepage";
import { CreateWallet } from "./CreateWallet";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BrowserRouter>
        <CreateWallet showModal={showModal} setShowModal={setShowModal} />
        <Routes>
          <Route
            exact path="/"
            element={<Homepage showModal={showModal} setShowModal={setShowModal}/>}
          ></Route>
          <Route exact path="/Placetostay" element={<PlaceToStay showModal={showModal} setShowModal={setShowModal}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

