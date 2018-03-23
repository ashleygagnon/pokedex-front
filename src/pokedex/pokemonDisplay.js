import React, {Component} from 'react';

class PokemonDisplay extends Component {

    getImage(pokemonJson) {
        let backgroundImage = "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/600px-001Bulbasaur.png";

        let divStyle = {
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };


        return divStyle;
    }


    getName(pokemonJson) {
        return (<span className="pokemon-name-text">
            {pokemonJson.name}
        </span>)
    }

    getNumber(pokemonJson) {
        let number = pokemonJson.number;
        if (number < 10) {
            return (<span className="pokemon-number-text">
                00{pokemonJson.number}
            </span>)
        }
        if (number < 100) {
            return (<span className="pokemon-number-text">
                0{pokemonJson.number}
            </span>)
        } else {
            return (<span className="pokemon-number-text">
                {pokemonJson.number}
            </span>)
        }

    }

    render() {
        return (
            <div className="pokemon-display">
                <div className="pokemon-display-image" style={this.getImage(this.props.pokemonJson)}></div>
                <div className="pokemon-display-text">
                    <span className="pokemon-number-text">{this.getNumber(this.props.pokemonJson)}</span>
                    <span className="pokemon-name-text">{this.getName(this.props.pokemonJson)}</span>
                </div>
                <div className="arrow-left" onClick={() => this.props.navigationHandler("left")}></div>
                <div className="arrow-right" onClick={() => this.props.navigationHandler("right")}></div>
            </div>
        )
    };
}

export default PokemonDisplay;