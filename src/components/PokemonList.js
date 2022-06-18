import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PokemonItem from "./PokemonItem";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      let filteredData = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredData);
      setPokemons(filteredData);
      setSearchTerm("");
    } else {
      setPokemons(pokemons);
      // alert("Please enter a search term");
    }
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((json) => {
        setPokemons(json.results);
      });
  }, []);

  return (
    <div className="pok_container">
      <div className="search">
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search Pokemon"
          />
        </form>
      </div>

      <div className="poke_list">
        {pokemons.map((el) => (
          <PokemonItem name={el.name} url={el.url} />
        ))}
      </div>
    </div>
  );
}
