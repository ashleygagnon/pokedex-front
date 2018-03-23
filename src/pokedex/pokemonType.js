import React from 'react';
import Popup from 'reactjs-popup';
import TypesModal from './typesModal';

const PokemonType = (props) => {
        return (
            <Popup
                trigger={<button className={props.type}>
                    {props.type}
                </button>}
                closeOnDocumentClick
            >
                <TypesModal typeJson={props.typesJson}/>
            </Popup>
        )
};

export default PokemonType;