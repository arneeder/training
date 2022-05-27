import React from 'react'

const Contact = props => {
  return (
    <div className='contact-detail'>
        <h3>{props.contact.name}</h3>
        <img className='contact-img' src={props.contact.pictureUrl} alt={`Picture of ${props.contact.name}`} />
    </div>
  )
}

export default Contact