// import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  // //Utilizar useEffect para que la función solo se ejecute una vez
  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="cardGrid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
