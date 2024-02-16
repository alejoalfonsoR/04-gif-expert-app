import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GiftItem } from "./GiftItem";

export const GigGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title }) => (
            <GiftItem key={id}/>
        ))}
      </div>
    </>
  );
};
