import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";

function App() {

  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
   <Routes>
    <Route path="/planets/:name" element={<Planets />} />
   </Routes>
  );
}

export default App;
