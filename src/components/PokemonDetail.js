import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState([]);
  const [img, setImg] = useState("");
  const [type, setType] = useState("");
  const [type2, setType2] = useState("");

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json);
        setImg(json.sprites.other.dream_world.front_default);
        setType(json.types[0].type.name);
        setType2(json.types[1].type.name);
      });
  }, []);
  console.log(pokemon);
  return (
    <div className="poke_detail">
      <img src={img} alt={name} />
      <div className="description_detail">
        <h1>
          {name.replace(name.slice(0, 1), name.slice(0, 1).toUpperCase())}{" "}
        </h1>

        <div className="type">
          {type2 ? <span>{type2.toUpperCase()}</span> : null}

          {type ? (
            <span
              style={{
                backgroundColor:
                  type == "grass"
                    ? "#57921C"
                    : null || type == "water"
                    ? "#6AD2FF"
                    : null || type == "electric"
                    ? "#FFE600"
                    : null,
              }}
            >
              {type.toUpperCase()}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
