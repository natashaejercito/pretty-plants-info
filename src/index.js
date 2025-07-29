import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const plantData = [
  {
    plantName: "Jade",
    plantType: "Succulent",
    plantImage: "./jade.png",
    plantInfo:
      "Jade plants are known for their thick, fleshy leaves and are considered symbols of good luck and prosperity.",
    careInstructions:
      "Jade plants prefer bright, indirect sunlight and should be watered when the soil is completely dry. They thrive in well-draining soil and should not be overwatered.",
  },
  {
    plantName: "Rose",
    plantType: "Flower",
    plantImage: "./roses.png",
    plantInfo:
      "Roses are beloved for their beauty and fragrance, and they come in a variety of colors, each symbolizing different emotions.",
    careInstructions:
      "Roses require full sun and well-drained soil. They should be watered deeply but infrequently, allowing the soil to dry out between waterings. Regular pruning helps promote healthy growth and blooming.",
  },
  {
    plantName: "Monstera",
    plantType: "Tropical plant",
    plantImage: "./monstera.png",
    plantInfo:
      "Monstera plants are known for their large, unique leaves with natural splits and holes, making them a popular choice for indoor decor.",
    careInstructions:
      "Monstera plants thrive in bright, indirect light and prefer to be watered when the top inch of soil feels dry. They enjoy high humidity and should be planted in well-draining soil.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () =>
    setCurrentIndex((prev) => (prev + 1) % plantData.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + plantData.length) % plantData.length);

  const plant = plantData[currentIndex];

  return (
    <div className="page-wrapper">
      <div className="carousel-container">
        <button className="nav-button-left" onClick={prevCard}>
          ❮
        </button>

        <div className="card">
          <PlantCard plant={plant} />
        </div>

        <button className="nav-button-right" onClick={nextCard}>
          ❯
        </button>
      </div>
    </div>
  );
}

function PlantCard({ plant }) {
  return (
    <div className="plant-container">
      <img src={plant.plantImage} alt={plant.plantName} />
      <h1>{plant.plantName}</h1>
      <h2>{plant.plantType}</h2>
      <p>{plant.plantInfo}</p>
      <p>{plant.careInstructions}</p>
      <div className="buttons">
        <span>
          <a href="#" target="_blank" className="links">
            Learn More
          </a>
        </span>
        <span>
          <a href="#" target="_blank" className="links">
            How to Care
          </a>
        </span>
        <span>
          <a href="#" target="_blank" className="links">
            Where to Buy
          </a>
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
