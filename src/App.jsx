import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import PlateCard from "./components/PlateCard";
import "./App.css";

function App() {
  const plats = [
    { name: "Pizza", price: 80, is_available: true },
    { name: "Burger", price: 60, is_available: true },
    { name: "Tacos", price: 50, is_available: false },
    { name: "Salad", price: 40, is_available: true },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {plats.map((plat, index) => (
        <PlateCard key={index} {...plat} />
      ))}
    </div>
  );
}

export default App;