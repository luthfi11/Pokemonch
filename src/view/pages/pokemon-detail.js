import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import ApiRepository from '../../data/api-repository';
import SaveButton from '../components/save-button';

const PokemonDetail = () => {
    const { name } = useParams();
    const { loading, error, data } = useQuery(ApiRepository.getPokemonDetail(name));
    
    window.scrollTo(0, 0);
    
    if (loading) return <div className="lds-ripple"><div></div><div></div></div>;
    if (error) return <p>Failed to fetch data</p>;

    return (
        <div className="container">
            <img src={data.pokemon.image} alt={data.pokemon.name} className="img-detail" />
            <p className="title">{data.pokemon.name}</p>
            <p className="subtitle">#{data.pokemon.number}</p>

            <SaveButton pokemon={data.pokemon} />

            <div className="section-info">
                <p>Classification</p>
                <b>{data.pokemon.classification}</b>
            </div>

            <div className="section-info">
                <p>Size</p>
                Weight : <b>{data.pokemon.weight.minimum} - {data.pokemon.weight.maximum}</b><br/>
                Height : <b>{data.pokemon.height.minimum} - {data.pokemon.height.maximum}</b>
            </div>

            <div className="section-info">
                <p>Types</p>
                <ul className="list-rounded">{data.pokemon.types.map((type) => (
                            <li>{type}</li>
                        )
                    )}
                </ul>
            </div>

            <div className="section-info">
                <p>Resistant</p>
                <ul className="list-rounded">{data.pokemon.resistant.map((res) => (
                            <li>{res}</li>
                        )
                    )}
                </ul>
            </div>

            <div className="section-info">
                <p>Weaknesses</p>
                <ul className="list-rounded">{data.pokemon.weaknesses.map((weak) => (
                            <li>{weak}</li>
                        )
                    )}
                </ul>
            </div>

            <div className="section-info">
                <p>Max CP</p>
                <b>{data.pokemon.maxCP}</b>
            </div>

            <div className="section-info">
                <p>Max HP</p>
                <b>{data.pokemon.maxHP}</b>
            </div>

            <div className="section-info">
                <p>Evolution</p>
                {data.pokemon.evolutions ? data.pokemon.evolutions.map((pokemon) => (
                    <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id} >
                        <div className="evolution-section">
                            <img src={pokemon.image} alt={pokemon.name} />
                            <div>
                                <h4>{pokemon.name}</h4>
                                <small>#{pokemon.number}</small>
                                <ul className="list-rounded">{pokemon.types.map((type) => (
                                            <li>{type}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Link>
                )) : <b><i>None</i></b> }
            </div>

            <div className="section-info">
                <p>Evolution Requirements</p>
                <b>{data.pokemon.evolutionRequirements ? 
                    `${data.pokemon.evolutionRequirements.amount} ${data.pokemon.evolutionRequirements.name}` : 
                    <i>None</i>}
                </b>
            </div>
        </div>
    )
}

export default PokemonDetail;