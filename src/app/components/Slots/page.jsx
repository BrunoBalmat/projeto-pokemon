import React, { useEffect, useState } from 'react';
import './slots.css'
import axios from 'axios';

function Slots(pokemon) {

    const [pokemonSlots, setPokemonSlots] = useState();

    useEffect(() => {
        axios.get("https://projetopokemon-9caed-default-rtdb.firebaseio.com/Pokemon.json")
            .then(function (response) {
                const data = response.data;
                const pokemonArray = Object.values(data); // Convert object to array
                setPokemonSlots(pokemonArray);
                console.log(pokemonArray, 'pokemonSlots');
            })
            .catch(function (error) {
                console.error("Erro ao buscar", error);
            });
    }, [pokemon]);


    return (
        <div className="pokemonSpace">
            <div className='pokemonSlot'>
                <img src={pokemonSlots[0]?.pokemon?.sprites?.front_default} />
            </div>
            <div className='pokemonSlot'>
            <img src={pokemonSlots[1]?.pokemon?.sprites?.front_default} />
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
            <img src={pokemonSlots[2]?.pokemon?.sprites?.front_default} />
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
            <img src={pokemonSlots[3]?.pokemon?.sprites?.front_default} />
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
            <img src={pokemonSlots[4]?.pokemon?.sprites?.front_default} />
                <img src='icon.png' />
            </div>
            <div className='pokemonSlot'>
            <img src={pokemonSlots[5]?.pokemon?.sprites?.front_default} />
                <img src='icon.png' />
            </div>
            <div className='addPokemon'>
                <img src='icon2.png' />
            </div>
        </div>
    )
}

export default Slots;