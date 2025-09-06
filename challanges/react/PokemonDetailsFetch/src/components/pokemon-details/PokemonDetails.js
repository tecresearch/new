import React, { useEffect, useState } from 'react';
import { Pokemon } from '../pokemon/Pokemon';
import { isDisabled } from '@testing-library/user-event/dist/cjs/utils/index.js';
export const PokemonDetails = () => {
	const [pokemon, setPokemon] = React.useState([]);
	const [id, setId] = React.useState(0);
	const [search, setSearch] = useState(false);
	const [next, setNext] = useState(false);
	const [prev, setPrev] = useState(false);
	
	const getPokemonById = async (id) => {

		if (id > 0 && id <=151) {
			const data = await getData(id);
			console.log(data);
			if (data) {
				setSearch(true);
				setPokemon(data);
				setPrev(!!data?.pre_evolution);
				setNext(!!data?.next_evolution);
			} else {
				return;
			}

		} else {
			alert('Pokemon ID must be between 1 and 151');
		}
	}

	const getData = (id) => {
		const ans = fetch(`https://jsonmock.hackerrank.com/api/pokemon?id=${id}`)
			.then(r => r.json())
			.then(d => {
				return d.data;
			});

		return ans;

	}

	
		const handlePrev=()=>{

				if(pokemon?.prev_evolution && pokemon.prev_evolution.length>0){
					const pr=pokemon.prev_evolution[0].num;
					const prId=Number(pr);
					setId(prId);
					getPokemonById(prId);
				}
		}
		const handleNext=()=>{

				if(pokemon?.next_evolution && pokemon.next_evolution.length>0){
					const nx=pokemon.next_evolution[0].num;
					const nxId=Number(nx);
					setId(nxId);
					getPokemonById(nxId);
				}
		}
	return (
		<div className="mt-50 layout-column justify-content-center align-items-center" >
			{search && <>
				<Pokemon pokemon={pokemon} />
				<p>
					<button data-testid="pokemon-prev" disabled={!prev} onClick={handlePrev}>Previous Evolution</button>
					<button data-testid="pokemon-next" disabled={!next} onClick={handleNext}>Next Evolution</button>
				</p>
			</>}
		{ !search&&	<p>
				<input data-testid="id-input" value={id} onChange={(e) => setId(Number(e.target.value))} type="number" placeholder='Pokemon Id'></input>
				<button data-testid="random-pokemon" onClick={() => getPokemonById(id)} className='text'>Get Pokemon</button>
			</p>}
		</div>
	)
}