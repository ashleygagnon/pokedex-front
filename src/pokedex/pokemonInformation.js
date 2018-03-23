import React from 'react';

const PokemonInformation = (props) => {
    return (
        <di--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v className="information-block">
            <div className="nickname">{props.pokemonJson.nickname}</div>
            <div className="height">{props.pokemonJson.height}</div>
            <div className="weight">{props.pokemonJson.weight}</div>
            {props.pokemonJson.evolutions ? <div className="evolution">{props.pokemonJson.evolutions}</div> : <div></div>}
        </di--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v>
    )
};

export default PokemonInformation;