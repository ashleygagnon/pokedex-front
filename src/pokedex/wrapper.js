import React, {Component} from 'react';
import PokedexLeft from './pokedexLeft';
import PokedexRight from './pokedexRight';

class Wrapper extends Component {

    constructor() {
        super();

        this.navigationHandler = this.navigationHandler.bind(this);
        this.powerHandler = this.powerHandler.bind(this);
        this.state = ({
            isOn: true,
            pokemon: [
                {"name": "Bulbasaur",
                    "number": 1,
                    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
                    "types": ["GRASS", "POISON"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [2],
                    "height": "2'04\"",
                    "weight": "15.2 lbs",
                    "abilities": ["Overgrow", "Chlorophyll"],
                    "nickname": "Seed Pokemon"
                },
                {"name": "Ivysaur",
                    "number": 2,
                    "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
                    "types": ["GRASS", "POISON"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [3],
                    "height": "3'03\"",
                    "weight": "28.7 lbs",
                    "abilities": ["Overgrow", "Chlorophyll"],
                    "nickname": "Seed Pokemon"
                },
                {"name": "Venusaur",
                    "number": 3,
                    "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
                    "types": ["GRASS", "POISON"],
                    "isCaught": false,
                    "isSeen": false,
                    "height": "6'07\"",
                    "weight": "220.5 lbs",
                    "abilities": ["Overgrow", "Chlorophyll"],
                    "nickname": "Seed Pokemon"
                },
                {
                    "name": "Charmander",
                    "number": 4,
                    "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
                    "types": ["FIRE"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [5],
                    "height": "2'00\"",
                    "weight": "18.7 lbs",
                    "abilities": ["Blaze"],
                    "nickname": "Lizard Pokemon"
                },
                {
                    "name": "Charmeleon",
                    "number": 5,
                    "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
                    "types": ["FIRE"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [6],
                    "height": "3'07\"",
                    "weight": "41.9 lbs",
                    "abilities": ["Blaze"],
                    "nickname": "Flame Pokemon"
                },
                {
                    "name": "Charizard",
                    "number": 6,
                    "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
                    "types": ["FIRE", "FLYING"],
                    "isCaught": false,
                    "isSeen": false,
                    "height": "5'07\"",
                    "weight": "199.5 lbs",
                    "abilities": ["Blaze"],
                    "nickname": "Flame Pokemon"
                },
                {
                    "name": "Squirtle",
                    "number": 7,
                    "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
                    "types": ["WATER"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [8],
                    "height": "1'08\"",
                    "weight": "19.8 lbs",
                    "abilities": ["Torrent"],
                    "nickname": "Tiny Turtle Pokemon"
                },
                {
                    "name": "Wartortle",
                    "number": 8,
                    "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
                    "types": ["WATER"],
                    "isCaught": false,
                    "isSeen": false,
                    "evolutions": [9],
                    "height": "3'03\"",
                    "weight": "49.6 lbs",
                    "abilities": ["Torrent"],
                    "nickname": "Turtle Pokemon"
                },
                {
                    "name": "Blastoise",
                    "number": 9,
                    "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
                    "types": ["WATER"],
                    "isCaught": false,
                    "isSeen": false,
                    "height": "5'03\"",
                    "weight": "188.5 lbs",
                    "abilities": ["Torrent"],
                    "nickname": "Shellfish Pokemon"
                }
            ],
            activePokemonNumber: 1,
            typesEffectiveness: [
                {
                    "type": "GRASS",
                    "super_effective": [
                        "WATER",
                        "GROUND",
                        "ROCK"
                    ],
                    "not_very_effective": [
                        "FIRE",
                        "GRASS",
                        "POISON",
                        "FLYING",
                        "BUG",
                        "DRAGON",
                        "STEEL"
                    ],
                    "resistant_to": [
                        "WATER",
                        "ELECTRIC",
                        "GRASS",
                        "GROUND"
                    ],
                    "weak_to": [
                        "FIRE",
                        "ICE",
                        "POISON",
                        "FLYING",
                        "BUG"
                    ]
                },
                {
                    "type": "POISON",
                    "super_effective": [
                        "GRASS",
                        "FAIRY"
                    ],
                    "not_very_effective": [
                        "POISON",
                        "GROUND",
                        "ROCK",
                        "GHOST"
                    ],
                    "no_effect": [
                        "STEEL"
                    ],
                    "resistant_to": [
                        "GRASS",
                        "FIGHTING",
                        "POISON",
                        "BUG",
                        "FAIRY"
                    ],
                    "weak_to": [
                        "GROUND",
                        "PSYCHIC"
                    ]
                }
            ]
        })
    }

    pokedexCreater(isOn) {
        return (
            <div className="pokedex-wrapper">
                <PokedexLeft
                    isOn={isOn}
                    pokemonJson={this.state.pokemon[this.state.activePokemonNumber-1]}
                    powerHandler={this.powerHandler}
                    navigationHandler={this.navigationHandler}
                />
                { isOn
                    ? <PokedexRight
                    typesJson={this.state.typesEffectiveness}
                    pokemonJson={this.state.pokemon[this.state.activePokemonNumber-1]}
                />
                    : <div></div>
                }
                <div className="pokedex-hinges"></div>
            </div>
        )
    }

    powerHandler() {
        this.setState(prevState =>({isOn: !prevState.isOn}))
    }

    navigationHandler(direction) {
        if (direction === "left" && this.state.activePokemonNumber > 1) {
            this.setState(prevState => ({ activePokemonNumber: prevState.activePokemonNumber-1 }) )
        } else if (direction === "right" && this.state.activePokemonNumber < this.state.pokemon.length) {
            this.setState(prevState => ({ activePokemonNumber: prevState.activePokemonNumber+1 }) )
        }
    }

    render() {
        return (
            <div className="main">
                {this.pokedexCreater(this.state.isOn)}
            </div>
        )
    };

}

export default Wrapper;