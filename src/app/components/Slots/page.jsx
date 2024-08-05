import React, { useEffect, useState } from 'react';
import './slots.css'
import axios from 'axios';

function Slots(pokemon) {

const [pokemonSlots, setPokemonSlots] = useState();

    useEffect(() => {
        axios.get("https://projetopokemon-9caed-default-rtdb.firebaseio.com/Pokemon.json")
            .then(function (response) {
                setPokemonSlots(response.data);
                console.log(pokemonSlots, 'pokemonSlots');
            })
            .catch(function (error) {
                console.error("Erro ao buscar", error);
            });

    }, [pokemon]);


    return (
        <div className="pokemonSpace">
            <div className='pokemonSlot'>
                {/* <img src={pokemonSlots[0].sprites.front_default} alt={pokemon.name} /> */}
            </div>
            <div className='pokemonSlot'>
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
                <img src='icon.png' />
            </div>
            <div className='addPokemon'>
                <img src='icon2.png' />
            </div>
        </div>
    )
}

export default Slots;