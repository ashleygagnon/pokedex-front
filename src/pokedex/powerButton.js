import React from 'react';

const PowerButton = (props) => {
    let className = "power-button";

    props.isOn ? className="power-button" : className="power-button-off";

    return (
        <div className={className} onClick={props.handler}></div>
    )
};

export default PowerButton;