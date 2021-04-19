import "./App.css";
import { useState, useRef, useEffect } from "react";

import Header from "./components/Header.js";
import UpperBodyPart from "./components/UpperBodyPart.js";
import PhonesBodyPart from "./components/PhonesBodyPart.js";
import LowerBodyPart from "./components/LowerBodyPart.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <UpperBodyPart />
      <PhonesBodyPart />
      <LowerBodyPart />
      <Footer />
    </div>
  );
}

export default App;
