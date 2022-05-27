import React from 'react'

const WonOscar = props => {
    
    const handleWonOscar = e => {
        props.setWonOscar( () => e.target.checked)
    }
    
    return (
        <div className='won-oscar'>
            <label>Won Oscar? </label>
            <input onChange={handleWonOscar} type="checkbox" name="Won Oscar?" />
        </div>
    )
}

export default WonOscar