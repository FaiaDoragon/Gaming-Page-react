import React from 'react'
import { useState } from 'react'

import '../css/nav-bar.css'

export const Searchvar = () => {

    const [search, setSearch] = useState("");

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div id='gameserch'>
            <div id='search'>
                <label htmlFor="">Busqueda: </label>
                <input id='searchvar' placeholder='Buscar Juego'
                    onChange={onChange} />
            </div>
            <div>
                {search}
            </div>
        </div>
    )
}
