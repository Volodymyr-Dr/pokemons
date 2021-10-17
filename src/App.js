import React, { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'
import PokemonInfo from './components/PokemonInfo'

import './App.css'

const App = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=12')
 
   const getAllPokemons = async () => {
     const res = await fetch(loadMore)
     const data = await res.json()
 
     setLoadMore(data.next)
 
     function createPokemonObject(results)  {
         setAllPokemons([])
       results.map( async pokemon => {
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
         const data =  await res.json()
         console.log(data)
         setAllPokemons( currentList => [...currentList, data])
         await allPokemons.sort((a, b) => a.id - b.id)
       })
     }
     createPokemonObject(data.results)
   }
  
  useEffect(() => {
   getAllPokemons()
  }, [])
 
   return (
     <div className="app-contaner">
       <h1>Pokedex</h1>
       <div className="pokemon-container">
         <div className="all-container">
           {allPokemons.map( (pokemonStats, index) => 
             <PokemonList
               key={index}
               id={pokemonStats.id}
               image={pokemonStats.sprites.other.dream_world.front_default}
               name={pokemonStats.name}
               type={pokemonStats.types[0].type.name}
               attack={pokemonStats.stats[1].base_stat}
               defense={pokemonStats.stats[2].base_stat}
               hp={pokemonStats.stats[0].base_stat}
               sp_attack={pokemonStats.stats[3].base_stat}
               sp_defense={pokemonStats.stats[4].base_stat}
               speed={pokemonStats.stats[5].base_stat}
               weight={pokemonStats.weight}
               total_moves={pokemonStats.moves.length}
             />)} 
         </div>        
           <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
       </div>
     </div>
   );
 }
 
export default App;