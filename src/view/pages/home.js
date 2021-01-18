import React from 'react';
import PokemonList from '../components/pokemon-list';
import { useQuery } from '@apollo/react-hooks';
import ApiRepository from '../../data/api-repository';

const Home = () => {
    const { loading, error, data } = useQuery(ApiRepository.getAllPokemon(50));

    if (loading) return <div className="lds-ripple"><div></div><div></div></div>;
    if (error) return <p>Failed to fetch data</p>;

    return (
        <div className="container" >
            <p className="page-title">Pokemon List</p>
            <PokemonList pokemons={data.pokemons} />
        </div>
    )
}

export default Home;
