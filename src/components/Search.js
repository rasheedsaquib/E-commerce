import React from 'react'
import Product from './Product'
import Cart from './Cart'

function Search({placeholder, data}) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      <div className='dataResult'>
        {data.map((value,key)=>{
            return <div>{value.title}</div>


        } )}
      </div>

    </div>
  )
}

export default Search
