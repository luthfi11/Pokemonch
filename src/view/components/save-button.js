import React, { useEffect, useState, useCallback } from 'react';
import LocalData from '../../data/local-data';

const SaveButton = ({ pokemon }) => {

    const savePokemon = () => {
        LocalData.savePokemon(pokemon);
        forceUpdate();
    }

    const deletePokemon = () => {
        LocalData.deletePokemon(pokemon.id);
        forceUpdate();
    }

    const [isExist, setState] = useState(false);
    const forceUpdate = useCallback(() => setState({}), []);

    useEffect(() => {
        const getPokemon = async () => {
            const state = await LocalData.getPokemonById(pokemon.id);
            setState(!!state);
        };
        getPokemon();
    }, );

    if (!isExist) {
        return (<button className="save-button" onClick={savePokemon}>Add to favorite</button>);
    } else {
        return (<button className="remove-button" onClick={deletePokemon}>Remove from favorite</button>);
    }
    
}

export default SaveButton;