import { gql } from 'apollo-boost';

const ApiRepository = {
    getAllPokemon(count) { 
        return gql`query getAllPokemon {
                pokemons(first: ${count}) {
                    id
                    name
                    image
                    classification
                    types
                }
            }`
    },

    getPokemonDetail(name) {
        return gql`query getPokemonDetail {
            pokemon(name: "${name}") {
                id
                name
                image
                classification
                types
                number
                weight{
                    maximum
                    minimum
                }
                height {
                    maximum
                    minimum
                }
                resistant
                weaknesses
                maxCP
                maxHP
                evolutions {
                    number
                    name
                    image
                    types
                }
                evolutionRequirements {
                    amount
                    name
                }
            }
        }`
    }
}

export default ApiRepository;