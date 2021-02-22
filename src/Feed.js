import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel.js"
import MessageSender from "./MessageSender.js"
import Post from "./Post.js"
import db from "./firebase";
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('time', 'desc').onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        );
    }, []);

    return (
        <div className="feed">
            {/**Story Row */}
            <StoryReel />
            {/**Messenger sender */}
            <MessageSender />
            {/**Main Feeds */}
            {posts.map((post) =>(
                <Post
                    key = {post.id}
                    profilePic = {post.data.profilePic}
                    message = {post.data.message}
                    time = {post.data.time}
                    username = {post.data.username}
                    image={post.data.image}
                 />
            ))}
        </div>
    )
}

export default Feed
