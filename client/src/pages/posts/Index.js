import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"




function Index({ user }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
    }, [])
    console.log(posts)
    return (
            <div>
                <h1>Tasks</h1>
                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    {user && 
                        <Link to="/posts/new">
                            <button type="button" class="btn btn-primary">New Entry</button>
                        </Link>
                    }
    
                </div>
                <img src="https://i.postimg.cc/rsYmfybH/ppltodo.webp" alt="pplworking" /> 
            </div>
    )
}

export default Index