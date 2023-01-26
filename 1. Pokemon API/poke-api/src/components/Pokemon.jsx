import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const buscarDatos = () =>{
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
        return response.json();
    }).then(response => {
        console.log(response.results);
        setPokemons(response.results.map((poke)=> ({nombre: poke.name})));
    }).catch(err => {
        console.log(err);
    });
    }

    return (
    <div className='container'>
        <button className='fetcher' onClick={buscarDatos}>Fetch Pokemon</button>
        <ul className='list'>
            {
                pokemons.map((poke, indice)=> <li className='listItem' key={indice}>{poke.nombre}</li> )
            }
        </ul>
    </div>
    )
}

export default Pokemon;