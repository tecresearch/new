import React, { useState } from 'react';
import { Pokemon } from '../pokemon/Pokemon';

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);
  const [search, setSearch] = useState(false);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  const getPokemonById = async (id) => {
    if (id > 0 && id <= 151) {
      const data = await getData(id);
      if (data) {
        setSearch(true);
        setPokemon(data);
        setPrev(!!data?.prev_evolution);
        setNext(!!data?.next_evolution);
      }
    } else {
      alert('Pokemon ID must be between 1 and 151');
    }
  };

  const getData = async (id) => {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/pokemon?id=${id}`);
    const result = await response.json();
    return result.data;
  };

  const handlePrev = () => {
    if (pokemon?.prev_evolution?.length > 0) {
      const prId = Number(pokemon.prev_evolution[0].num);
      setId(prId);
      getPokemonById(prId);
    }
  };

  const handleNext = () => {
    if (pokemon?.next_evolution?.length > 0) {
      const nxId = Number(pokemon.next_evolution[0].num);
      setId(nxId);
      getPokemonById(nxId);
    }
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      {search ? (
        <>
          <Pokemon pokemon={pokemon} />
          <p>
            <button data-testid="pokemon-prev" disabled={!prev} onClick={handlePrev}>
              Previous Evolution
            </button>
            <button data-testid="pokemon-next" disabled={!next} onClick={handleNext}>
              Next Evolution
            </button>
          </p>
        </>
      ) : (
        <p>
          <input
            data-testid="id-input"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            placeholder="Pokemon Id"
          />
          <button data-testid="random-pokemon" onClick={() => getPokemonById(id)} className="text">
            Get Pokemon
          </button>
        </p>
      )}
    </div>
  );
};
