import React from 'react'

const UserList = ({ user }) => {

    return (
        <div>
            <h1>name : {user.name}</h1>
            <h3>user name : {user.username}</h3>
            <h2>email: {user.email}</h2>
            ---------------------------------------------------------------------------------------------------------------------
        </div>
    )
}

export default UserList