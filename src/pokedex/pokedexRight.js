import React, {Component} from 'react';
import TopRightStyling from './topRightStyling';
import PokemonTypes from "./pokemonTypes";

class PokedexRight extends Component {

    getDescription(pokemonJson) {
        return (
            <span className="pokemon-description-text">
                {pokemonJson.description}
            </span>
        )
    }

    render() {
        return (
            <div className="pokedex-right">
                <TopRightStyling />
                <div className="pokemon-description">
                    {this.getDescription(this.props.pokemonJson)}
                </div>
                <PokemonTypes types={this.props.pokemonJson.types} typesJson={this.props.typesJson}/>
            </div>
        )
    };
}

export default PokedexRight;