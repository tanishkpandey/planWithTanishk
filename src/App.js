import React from "react";
import data from "./data";
import Tours from "./components/Tours";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <div>
          <h2>No tours left 🙄</h2>
          <button
            onClick={() => {
              setTours(data);
            }}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
