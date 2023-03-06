import React from 'react'

const UserList = ({ user }) => {

    return (
        <div>
            <h2>User Number {user.id}</h2>
            ---------------------------------------------------------------------------------------------------------------------
            <h4>Name : {user.name}</h4>
            <h4>User name : {user.company.name}</h4>
            <h4>Adresse : {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</h4>
            <h4>Company Name : {user.name}</h4>

            <h4>-- Contact :</h4>
            <ul>
                <li><h5>Email : {user.email}</h5></li>
                <li><h5>Phone : {user.phone}</h5></li>
                <li><h5>Website : <a href={user.website}>{user.website}</a></h5></li>
            </ul>
            ---------------------------------------------------------------------------------------------------------------------
        </div>
    )
}

export default UserList