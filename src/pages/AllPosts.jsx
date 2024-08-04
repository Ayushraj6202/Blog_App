import React,{ useState,useEffect } from 'react'
import { Container,PostCard } from '../index'
import appwriteService from "../appWrite/configure"
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'
import AddPost from './AddPost'
import { Link } from 'react-router-dom'

function AllPosts() {
    const [posts,setPosts] = useState([])
    const userId = useSelector((state) => (state.auth.userData))?.$id
    // console.log(userId.$id);

    useEffect(() => {
        appwriteService.getPosts([Query.equal('userId',userId)]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    },[userId])
    if (posts.length === 0) {
        return <div className='text-2xl bg-slate-500'>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-700">
                        AddPost to view here.
                    </h1>
                </div>
            </div>
        </div>
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts