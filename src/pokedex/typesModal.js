import React, {Component} from 'react';

class TypesModal extends Component {
    constructor() {
        super();

        this.getTypes = this.getTypes.bind(this);
    }

    getTypes(effectiveness) {
        let json = this.props.typeJson[effectiveness];

        if (json === undefined) {
            return;
        }

        return (
            <div className={effectiveness}>
                <p className="effectiveness-title">{effectiveness.split('_').join(' ')}</p>
                {json.map((type) => <div className={type}>{type}</div>)}
            </div>
        )
    }

    render() {
        return (
            <div className="modal">
                {this.getTypes("super_effective")}
                {this.getTypes("not_very_effective")}
                {this.getTypes("no_effect")}
                {this.getTypes("resistant_to")}
                {this.getTypes("weak_to")}
                {this.getTypes("immune_to")}
            </div>
        )
    }
}

export default TypesModal