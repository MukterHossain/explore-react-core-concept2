import { useEffect, useState } from "react"
import Post from "./Post";


export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
                
            }
        </div>
    )
}




/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */