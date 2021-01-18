import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ApiRepository from '../../data/api-repository';
import PokemonList from '../components/pokemon-list';

const Search = () => {

    const { loading, error, data } = useQuery(ApiRepository.getAllPokemon(151));
    const [pokemons, setPokemon] = useState([]);

    const searchPokemon = (e) => {
        const filteredPokemon = data.pokemons.filter((pokemon) => pokemon.name.toUpperCase().includes(e.target.value.toUpperCase()))
        setPokemon(filteredPokemon);

        if (!e.target.value) {
            setPokemon([]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    if (loading) return <div className="lds-ripple"><div></div><div></div></div>;
    if (error) return <p>Failed to fetch data</p>;
    
    return (
        <div className="container" >
            <p className="page-title">Search Pokemon</p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={searchPokemon} placeholder="Pokemon Name"/>
            </form>
            {pokemons ? <PokemonList pokemons={pokemons} /> : ""}
        </div>
    )
}

export default Search;