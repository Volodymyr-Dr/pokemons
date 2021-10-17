import React from 'react'

const PokemonList = ({id, image, name, type}) => {
    const style = type + " thumb-container";

    return (
        <div>
            <div className={style}>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </div>
            
        </div>   
    )
}

export default PokemonList
