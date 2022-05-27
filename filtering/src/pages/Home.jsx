import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <ul>
            <li><Link to="/contacts">All Contacts</Link></li>
            <li><Link to="/contacts/details">Contact Details</Link></li>
        </ul>
    </div>
  )
}

export default Home