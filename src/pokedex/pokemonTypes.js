import React from 'react';
import PokemonType from "./pokemonType";

const PokemonTypes = (props) => {
        return (
            <div className="pokemon-types">
                {props.types.map((type, i) => <PokemonType typesJson={props.typesJson[i]} type={type} />)}
            </div>
        )
};

export default PokemonTypes;