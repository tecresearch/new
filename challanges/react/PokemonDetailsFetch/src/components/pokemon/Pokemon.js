// import React from 'react'

// export const Pokemon = ({ pokemon }) => {
// 	return (
// 		<div className="card outlined px-50 py-30" style={{ width: '900px' }}>
// 			<div className="card-header">
// 				<h4 className="card-title">
// 					Pokemon Details
// 				</h4>
// 			</div>
// 			<div className="card-body">
// 				<div>
// 					<p>
// 						<strong>ID: </strong>
// 						<span data-testid="pokemon-id">1</span>
// 					</p>
// 					<p>
// 						<strong>Name: </strong>
// 						<span data-testid="pokemon-name">Ivysaur</span>
// 					</p>
// 					<p>
// 						<strong>Type: </strong>
// 					</p>
// 					<ul data-testid="pokemon-types">
// 						<li data-testid="pokemon-type-Grass">Grass</li>
// 						<li data-testid="pokemon-type-Poison">Poison</li>
// 					</ul>
// 					<p>
// 						<strong>Height: </strong>
// 						<span data-testid="pokemon-height">0.71 m</span>
// 					</p>
// 					<p>
// 						<strong>Weight: </strong>
// 						<span data-testid="pokemon.weight">6.9 kg</span>
// 					</p>
// 					<p>
// 						<strong data-testid="pokemon-weeknesses">
// 							Weaknesses:
// 						</strong>
// 					</p>
// 					<ol>
// 						<li>Fire</li>
// 						<li>Ice</li>
// 						<li>Flying</li>
// 						<li>Psychic</li>
// 					</ol>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

import React from 'react';

export const Pokemon = ({ pokemon }) => {
	return (
		<div className="card outlined px-50 py-30" style={{ width: '900px' }}>
			<div className="card-header">
				<h4 className="card-title">
					Pokemon Details
				</h4>
			</div>
			<div className="card-body">
				<div>
					<p>
						<strong>ID: </strong>
						<span data-testid="pokemon-id">{pokemon.id}</span>
					</p>
					<p>
						<strong>Name: </strong>
						<span data-testid="pokemon-name">{pokemon.name}</span>
					</p>
					<p>
						<strong>Type: </strong>
					</p>
					<ul data-testid="pokemon-types">
						{pokemon.type.map((type, index) => (
							<li key={index} data-testid={`pokemon-type-${type}`}>{type}</li>
						))}
					</ul>
					<p>
						<strong>Height: </strong>
						<span data-testid="pokemon-height">{pokemon.height}</span>
					</p>
					<p>
						<strong>Weight: </strong>
						<span data-testid="pokemon-weight">{pokemon.weight}</span>
					</p>
					<p>
						<strong>Weaknesses: </strong>
					</p>
					<ol>
						{pokemon.weaknesses.map((weakness, index) => (
							<li key={index}>{weakness}</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}