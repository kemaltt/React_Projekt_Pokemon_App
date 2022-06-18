import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PokemonItem({ name, url }) {
  const [img, setImg] = useState("");
  const [type, setType] = useState("");
  let netlfiy;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setImg(json.sprites.other.dream_world.front_default);
        setType(json.types[0].type.name);
      });
  }, [netlfiy]);

  return (
    <div className="poke_item">
      <img src={img} alt={name} />
      <div className="description">
        <h4>{name} </h4>
        <p>Type: {type}</p>
      </div>
      <Link className="poke_item_link" to={`/detail/${name}`}>
        Read More
      </Link>
    </div>
  );
}
