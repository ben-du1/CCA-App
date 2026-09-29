import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import DeleteIcon from '@mui/icons-material/Delete';
const Post = ({ post, password, getPosts }) => {

    const id = post.post_id;
    const title = post.title;
    console.log(post.date);
    const date = new Date(parseFloat(post.date));
    const deletePost = async () => {
        await fetch('/api/posts/delete', {
            method: "post",
            body: JSON.stringify({
                post_id: post.post_id,
                password: password
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            window.location.reload()
        });
    }

    return (
        <div className="Post" style={{ display: "flex", flexWrap: "wrap" }}>
            <Typography component="b">{title}</Typography><Typography component="p">&nbsp;({date.toLocaleString()})</Typography>
            <Typography component="em">{post.image}</Typography>
            <div style={{ width: "100%" }} />
            <Button onClick={deletePost} color="error"><DeleteIcon />Delete</Button>
        </div>
    )
}

export default Post