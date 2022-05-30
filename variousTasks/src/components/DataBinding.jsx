import React from 'react'

const DataBinding = ({ setInputString, inputString }) => {
  
    const handleInputChange = e => {
        setInputString( () => e.target.value)
    }
  
    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <p>{inputString}</p>
            <button type="submit" disabled={!inputString}>Submit</button>
        </div>
  )
}

export default DataBinding