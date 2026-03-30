import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import PlateCard from "./components/PlateCard";
import "./App.css";

function App() {

  return (
    <div>
      <PlateCard name="Pizza" price={75}  is_available={true} />
      <PlateCard name="Sushi" price={120} is_available={false}  />

    </div>
  );
}

export default App;
