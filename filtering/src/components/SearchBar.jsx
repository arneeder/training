import React from 'react'

const SearchBar = props => {

    const handleSearchStr = e => {
        props.setSearchStr( () => e.target.value)
    }

    return (
        <div className='searchBar'>
            <label>Name: </label>
            <input type="text" onChange={ handleSearchStr } />
        </div>
    )
}

export default SearchBar