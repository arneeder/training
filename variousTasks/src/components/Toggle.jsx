import React from 'react'

const Toggle = props => {
  
    const handleToggle = () => {
        props.setToggle( () => !props.toggle )
    }

    return (
        <div>
            <button type='button' onClick={handleToggle}>
                {props.toggle ? 'Hide Text' : 'Show Text'}
            </button>
            {props.toggle ? <p>some text</p> : ''}
        </div>
  )
}

export default Toggle