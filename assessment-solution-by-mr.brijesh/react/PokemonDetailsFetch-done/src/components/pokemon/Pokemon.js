import React from 'react';

export const Pokemon = ({ pokemon }) => {
  return (
    <div className="card outlined px-50 py-30" style={{ width: '900px' }}>
      <div className="card-header">
        <h4 className="card-title">Pokemon Details</h4>
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
              <li key={index} data-testid={`pokemon-type-${type}`}>
                {type}
              </li>
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
          <ol data-testid="pokemon-weaknesses">
            {pokemon.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
