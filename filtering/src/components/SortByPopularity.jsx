import React from 'react'

const SortByPopularity = props => {

    return (
        <div className='sort-by-popularity'>
            <button onClick={props.sortByPopularity}>Sort By Popularity</button>
        </div>
    )
}

export default SortByPopularity