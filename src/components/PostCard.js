import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PostCard = ({ post }) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(function (res) {
                // handle success
                setComments(res.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        <div>
            <h1>--- Title : {post.title}</h1>
            <h3>--- Body : {post.body}</h3>
            <h2>--- Comments:</h2>
            <ul>
                {comments.map((comment,id) =>
                
                <li key={id}>
                    <b>{comment.name}</b>
                    <p>{comment.body}</p>
                    <p>{comment.email}</p>
                </li>
                
            )}----------------------</ul>
            <h2>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</h2>
        </div>
    )
}

export default PostCard