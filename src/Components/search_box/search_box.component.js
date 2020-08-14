import React from 'react'
import './search-box.styles.css'
export const SearchBox =({placeholder,handlingEve})=>(
    <input className='search' type='search' placeholder={placeholder}
     onChange={handlingEve} />
)