import React, {Component} from 'react';
import PowerButton from './powerButton';
import TopLeftStyling from './topLeftStyling';
import PokemonDisplay from './pokemonDisplay';
import PokemonInformation from './pokemonInformation';

class PokedexLeft extends Component {
    constructor() {
        super();

        this.getActivePokemon = this.getActivePokemon.bind(this);
    }

    getActivePokemon() {
        return this.props.pokemon[this.props.pokemonNumber-1]
    }

    render() {
        return (
            <div className="pokedex-left">
                <TopLeftStyling/>
                <PowerButton isOn={this.props.isOn} handler={this.props.powerHandler} />
                {this.props.isOn ?
                    <div>
                        <PokemonDisplay
                        pokemonJson={this.props.pokemonJson}
                        navigationHandler={this.props.navigationHandler}/>
                        <PokemonInformation
                        pokemonJson={this.props.pokemonJson} />
                    </div>
                    : <div></div>
                }
            </div>

        )
    };
}

export default PokedexLeft;