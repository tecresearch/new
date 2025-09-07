import React, { useState } from "react";
import { Pokemon } from "../pokemon/Pokemon";

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState("");

  const getPokemonById = async (pokemonId) => {
    const numId = Number(pokemonId);
    if (numId < 1 || numId > 151) {
      alert("Pokemon ID must be between 1 and 151");
      return;
    }
    try {
      const res = await fetch(
        `https://jsonmock.hackerrank.com/api/pokemon?id=${numId}`
      );
      const data = await res.json();
      if (data.data) {
        setPokemon(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrev = () => {
    if (pokemon?.prev_evolution?.length) {
      const prevId = pokemon.prev_evolution[0].num;
      getPokemonById(prevId);
    }
  };

  const handleNext = () => {
    if (pokemon?.next_evolution?.length) {
      const nextId = pokemon.next_evolution[0].num;
      getPokemonById(nextId);
    }
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <Pokemon pokemon={pokemon} />
      <p>
        <button
          data-testid="pokemon-prev"
          disabled={!pokemon?.prev_evolution}
          onClick={handlePrev}
        >
          Previous Evolution
        </button>
        <button
          data-testid="pokemon-next"
          disabled={!pokemon?.next_evolution}
          onClick={handleNext}
        >
          Next Evolution
        </button>
      </p>
      <p>
        <input
          data-testid="id-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="Pokemon Id"
        />
        <button
          data-testid="random-pokemon"
          onClick={() => getPokemonById(id)}
          className="text"
        >
          Get Pokemon
        </button>
      </p>
    </div>
  );
};
