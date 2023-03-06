import React from 'react'

const UserList = ({ user }) => {

    return (
        <div>
            <h2>User Number {user.id}</h2>
            ---------------------------------------------------------------------------------------------------------------------
            <h4>name : {user.name}</h4>
            <h4>user name : {user.username}</h4>
            <h4>email : {user.email}</h4>
            ---------------------------------------------------------------------------------------------------------------------
        </div>
    )
}

export default UserList