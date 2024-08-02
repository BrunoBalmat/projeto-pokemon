import React from 'react';
import './slots.css'

// import { Container } from './styles';

function Slots() {
  return (
  <div className="pokemonSpace">    
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='pokemonSlot'>
          <img src='icon.png'/>
      </div>
      <div className='addPokemon'>
          <img src='icon2.png'/>
      </div>
  </div>
  )
}

export default Slots;