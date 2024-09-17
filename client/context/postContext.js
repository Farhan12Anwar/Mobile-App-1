import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

//Context
const PostContext = createContext()

const PostProvider = ({ children })  => {
    //state
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    //getposts
    const getAllPosts = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/post/get-all-posts')
            setLoading(false)
            setPosts(data?.posts)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    //initial posts
    useEffect(() => {
        getAllPosts()
    },[])

    return (
        <PostContext.Provider value={[posts,setPosts]}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider };