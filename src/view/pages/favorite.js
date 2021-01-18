import React, { useEffect, useState } from 'react';
import LocalData from '../../data/local-data';
import PokemonList from '../components/pokemon-list';

const Favorite = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const favPokemon = await LocalData.getAllFavorited();
            setPokemon(favPokemon);
        };
        getPokemons();
      }, []);

    const emptyPokemon = () => {
        if (pokemon.length < 1) return (<i className="empty">No favorited pokemon</i>)
    }

    return (
        <div className="container" >
            <p className="page-title">Your Favorite</p>
            <PokemonList pokemons={pokemon} />
            {emptyPokemon()}
        </div>
    )

}

export default Favorite;