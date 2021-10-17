import React from 'react'


const PokemonInfo = ({id, image, name, type, attack, defense, hp, sp_attack, sp_defense, speed, weight, total_moves}) => {
    const style = type + " thumb-container";

    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name} #0{id}</h3>
                <small>Type: {type}</small>
            </div>
            <div>Attack {attack}</div>
            <div>Defense {defense}</div>
            <div>HP {hp}</div>
            <div>SP Attack {sp_attack}</div>
            <div>SP Defense {sp_defense}</div>
            <div>Speed {speed}</div>
            <div>Weight {weight}</div>
            <div>Total moves {total_moves}</div>
        </div>
    )
}

export default PokemonInfo