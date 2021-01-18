import React from 'react';
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="grid" >
                {pokemons.map((data) => (
                    <Link to={`/pokemon/${data.name}`} key={data.id} >
                        <div className="card" >
                            <div>
                                <img className="card-img" src={data.image} alt={data.name} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{data.name}</h4>
                                <p>{data.classification}</p>
                                <small>{data.types.map((type) => type).join(", ")}</small>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
}

export default PokemonList;