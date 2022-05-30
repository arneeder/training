import React from 'react'

const List = ({ users }) => {
    return (
        <div>
            <ul>
                {users.map( user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
  )
}

export default List