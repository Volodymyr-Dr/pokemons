import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

const PokemonList = ({id, image, name, type, attack, defense, hp, sp_attack, sp_defense, speed, weight, total_moves}) => {

    const type_style = type + " type_button"

    return (
        <div>
        <Link to={`/pokemons/${id}`}>
            <div>
                <div className="thumb-container">
                    <img src={image} alt={name} />
                    <div className="detail-wrapper">
                        <h3>{name}</h3>
                        <div className={type_style}>{type}</div>
                    </div>
                </div>    
            </div> 
        </Link>
        <Switch>
            <Route path={`/pokemons/${id}`}>
                <div className={type_style + " thumb-container position"}>
                    <img src={image} alt={name} />
                    <div className="detail-wrapper">
                        <h3>{name} #0{id}</h3>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Type</div>
                        <div className="value">{type}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Attack</div>
                        <div className="value">{attack}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Defense</div>
                        <div className="value">{defense}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">HP</div>
                        <div className="value">{hp}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">SP Attack</div>
                        <div className="value">{sp_attack}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">SP Defense</div>
                        <div className="value">{sp_defense}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Speed</div>
                        <div className="value">{speed}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Weight</div>
                        <div className="value">{weight}</div>
                    </div>
                    <div className="characteristics_table"> 
                        <div className="characteristics">Total moves</div>
                        <div className="value">{total_moves}</div>
                    </div>
                </div>
            </Route>
        </Switch>
        </div>
    )
}

export default PokemonList
