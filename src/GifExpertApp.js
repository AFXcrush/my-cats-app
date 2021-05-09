import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategory] = useState(["KoRn"]);

  //   const handleAdd = () => {
  //     setCategory([...categories, "Chris Malinchak"]);
  //   };

  return (
    <>
      <h2>Gif Expert</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
