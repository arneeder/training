import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import SearchBar from '../components/SearchBar'
import SortByPopularity from '../components/SortByPopularity'
import WonOscar from '../components/WonOscar'
import allContacts from '../contacts.json'


const AllContacts = () => {

    const [contacts, setContacts] = useState([])

    const [searchStr, setSearchStr] = useState('')
    const [popularity, setPopularity] = useState(0)
    const [wonOscar, setWonOscar] = useState(false)

    const handlePopulartiy = e => {
        setPopularity( () => e.target.value)
    }

    const sortByPopularity = () => {
        const sorted = contacts.slice()
        sorted.sort( (a, b) => b.popularity - a.popularity)
        setContacts( () => sorted)
    }

    useEffect(() => {
        setContacts( () => allContacts)
    }, [])
    
    console.log(contacts);
    return (
        <>
            <SearchBar 
                setSearchStr={setSearchStr}
            />
            <WonOscar 
                setWonOscar={setWonOscar}
            />
            <label>Min Popularity: </label>
            <input type="number" onChange={ handlePopulartiy } />
            <SortByPopularity sortByPopularity={sortByPopularity} />
            {
                contacts
                .filter( contact => contact.name.toLowerCase().includes(searchStr.toLowerCase()))
                .filter( contact => contact.popularity >= popularity)
                .filter( contact => wonOscar ? contact.wonOscar === wonOscar : true )
                    .map( contact => {
                        return (
                            <Contact
                                key={contact.id}
                                contact={contact}
                            />
                        )
                    })
            }
        </>
    )

}

export default AllContacts