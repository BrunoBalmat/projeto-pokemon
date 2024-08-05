import React, { useEffect, useState } from 'react';
import Slots from '../../components/Slots/page'
import Modal from '../../components/Modal/page'
import './searchScreen.css';
import { Tooltip } from "@nextui-org/react";
import axios from 'axios';

export default function SearchScreen() {


  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [pokemon, setPokemon] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 4000);
  };
  
  

  const sortearNumero = () => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * (1015) + 1);
    setNumeroSorteado(numero); 
    }, 2000);       
  };



  useEffect(() => {
    if (numeroSorteado) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`)
            .then(function (response) {
              setPokemon(response.data);
            })
            .catch(function (error) {
                console.error("Erro ao buscar", error);
            });
    }
}, [numeroSorteado]);


console.log(pokemon, 'pokemon');


  return (
    <div className='principal'>
      <Slots pokemon={pokemon}/>
      <div>
        {isSearching ? <Tooltip
          content={<img src="searchingTooltip.png" alt="" />}
          isOpen={true}>
          <button className="tooltip-button" >
            <img className='ash' src="https://s3-alpha-sig.figma.com/img/1793/f5dd/cf2fa68d85b6e426d80b9acf8f7cbd17?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iR5AvCBAQkLxs8jHSrzuSxKN9ZjVAqmH5Tf2ddeDAzvJe39tRyBAvvDG1U1of8~1AVYQDs5j9gZLGAZuzxDuLzcLYAPlsZr0NnIFTriWf4FfV2UXudJbMRQIG3ZJOTIZzshtLiZdqkTnaOu8dXFOMyrxUnWyZ3v13b448rDfvnf6DhYdITZ1vg74sbUtPYKyKu5nZ4f-aZmdZ7crvAdOcB045RJTjH7~10g1YzOnpvdsLAjT7~6cEEntmBI0fJUO36tCc8L~yUKWc0fGVA4C97sUrvy4FU8K~UFwC5PCdRD6JqwJI~~-YPl82D6KCD7q~HsSC~6vOEckJgvWQHpwUQ__" alt="" />
          </button>
        </Tooltip> : <Tooltip
          content={<img src="base.png" alt="" />} >
          <button className="tooltip-button" onClick={()=> {handleSearch(); sortearNumero();}}>
            <img className='ash' src="ash.png" alt="" />
          </button>
        </Tooltip>}
        <Modal pokemon={pokemon} setPokemon={setPokemon}/>
      </div>
    </div>
  )
}
