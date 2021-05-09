import React, { useState } from "react";
import { CatsGrid } from "./components/CatsGrid";

const RandomCatApp = () => {
  const [catsKey, setCatsKey] = useState(0);

  return (
    <div className="catContainer">
      <h1>Random kittens</h1>
      <button onClick={() => setCatsKey((key) => key + 1)} className="catBtn">
        Generate random kitten
      </button>
      <CatsGrid key={catsKey} />
    </div>
  );
};

export default RandomCatApp;
