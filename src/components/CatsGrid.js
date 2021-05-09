import React, { useState, useEffect } from "react";

export const CatsGrid = () => {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=6&api_key=8d351156-6ee0-4f2f-926b-62fea133a318";

    const resp = await fetch(url);

    const data = await resp.json();

    const catImg = data.map((img) => {
      return {
        id: img.id,
        url: img.url,
      };
    });

    setImagen(catImg);
  };

  return (
    <div className="imgContainer">
      {imagen.map(({ id, url }) => (
        <img className="catImg" key={id} src={url} alt="" />
      ))}
    </div>
  );
};
