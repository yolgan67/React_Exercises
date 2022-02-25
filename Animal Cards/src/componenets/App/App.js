import React from "react";
import data from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./App.css";

function showAdditional(additional) {
  console.log(additional);
  const alertInformation =
    additional !== undefined
      ? Object.entries(additional)
          .map((information) => `${information[0]}: ${information[1]}`)
          .join("\n")
      : "boş";

  alert(alertInformation);
}

export default function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  );
}
