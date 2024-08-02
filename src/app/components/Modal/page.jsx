import React, { useEffect, useState } from "react";
import "./modal.css";

export default function Modal({ pokemon, setPokemon }) {
    const [type0, setType0] = useState("");
    const [type1, setType1] = useState("");

    const convertUnit = (value) => {
        return (value * 0.1).toFixed(1);
    };

    useEffect(() => {
        if (pokemon?.types?.length > 0) {
            const primaryType = pokemon.types[0].type.name;
            const secondaryType = pokemon.types[1]?.type.name;

            const typeTranslations = {
                normal: "NORMAL",
                fire: "FOGO",
                water: "ÁGUA",
                grass: "PLANTA",
                flying: "VOADOR",
                fighting: "LUTADOR",
                poison: "VENENO",
                electric: "ELETRICO",
                ground: "TERRESTRE",
                rock: "PEDRA",
                psychic: "PSÍQUICO",
                ice: "GELO",
                bug: "INSETO",
                ghost: "FANTASMA",
                steel: "AÇO",
                dragon: "DRAGÃO",
                dark: "SOMBRIO",
                fairy: "FADA"
            };

            setType0(typeTranslations[primaryType] || primaryType.toUpperCase());
            setType1(secondaryType ? typeTranslations[secondaryType] || secondaryType.toUpperCase() : "");
        }
    }, [pokemon]);

    const getColorByType = (type) => {
        switch (type) {
            case "NORMAL": return "#C4C0B4";
            case "FOGO": return "#CF2C03";
            case "ÁGUA": return "#3B9BF1";
            case "PLANTA": return "#67AF32";
            case "VOADOR": return "#8FA4FF";
            case "LUTADOR": return "#852816";
            case "VENENO": return "#924990";
            case "ELETRICO": return "#F8D030";
            case "TERRESTRE": return "#C5A455";
            case "PEDRA": return "#5E491C";
            case "PSÍQUICO": return "#E25484";
            case "GELO": return "#B4EDF8";
            case "INSETO": return "#87950C";
            case "FANTASMA": return "#6969AF";
            case "AÇO": return "#7F8488";
            case "DRAGÃO": return "#7361D1";
            case "SOMBRIO": return "#413831";
            case "FADA": return "#E29FE6";
            default: return "#68A090";
        }
    };

    if (pokemon) {
        return (
            <div className="container-modal">
                <div className="janela">
                    <div className="janela-interno">
                        <div className='modal-pai'>
                            <button className="fechar" onClick={() => setPokemon('')}><img src="Xicon.png" alt="Fechar" /></button>
                            <div className="modal-filho">
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: "16px" }}>
                                {pokemon.name.toUpperCase()}
                                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h2>HP</h2> {pokemon?.stats[0].base_stat}/{pokemon?.stats[0].base_stat}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h2>ALTURA</h2> {convertUnit(pokemon.height)} m
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h2>PESO</h2> {convertUnit(pokemon.weight)} kg
                                    </div>
                                </div>
                                <div>
                                    <h2>TIPO</h2>
                                </div>
                                <div className="pokemonType-container">

                                    <div className="pokemonType" style={{ backgroundColor: getColorByType(type0), height:'32px', borderRadius: '42px', color: 'white' }}>{type0}</div>

                                    {type1 && <div className="pokemonType" style={{ backgroundColor: getColorByType(type1), height:'32px', borderRadius: '42px', color: 'white' }}>{type1}</div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
