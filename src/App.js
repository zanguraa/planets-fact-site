import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Planets from "./components/Planets";

function App() {

  const colors = ['#419EBB', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];


  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div>
 <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} colors={colors} />
    
   <Routes>

    <Route path="/planets/:name" element={<Planets />} />
   </Routes>
   </div>
  );
}

export default App;
