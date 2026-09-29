import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Post from "./Post"
import { useEffect, useState } from 'react'

const ManagePosts = () => {

    const [posts, setPosts] = useState([])
    const [password, setPassword] = useState('')

    const getPosts = async () => {
        const response = await fetch('/api/posts')
        const data = await response.json()

        console.log(data);
        setPosts(data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="ManagePosts">
            <form id="postForm" enctype="multipart/form-data" action="/api/posts/add" method="POST">
                <TextField name="title" placeholder="Title" />
                <br />
                <br />
                <TextField name="author" placeholder="Author/Organization" />
                <br />
                <br />
                <textarea name="content" form="postForm" />
                <br />
                <br />
                <input name="image" type="file" />
                <br />
                <i> Image to Upload: JPG or PNG</i>
                <br />
                <br />
                <br />
                <TextField name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                <br />
                <Button variant="outlined" onClick={() => { document.getElementById("submit-post-form-data").click() }}>Create A New Post</Button>

                <input type="submit" value="Create New Post" id="submit-post-form-data" hidden />
            </form>
            <br />
            <br />
            <br />
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", rowGap: "5px", columnGap: "5px" }}>
                {
                    posts.map((post) =>
                        <Post post={post} getPosts={getPosts} password={password} />
                    )
                }
            </div>
        </div>
    )
}

export default ManagePosts