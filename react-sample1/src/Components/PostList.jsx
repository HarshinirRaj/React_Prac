import Post from './Post';

import classes from './PostList.module.css';

import { Hearts } from 'react-loading-icons';
import {useLoaderData} from 'react-router-dom';


function PostList(){
    const posts = useLoaderData();
    return (
    <>
    {/* list of posts */}
    {posts.length > 0 ?
    <ul className={classes.posts}>
        {posts.map((post) => (
        <Post key={post.id} id = {post.id} author={post.author} body={post.body}/>
        ))}
    </ul> : null}

    {posts.length === 0 && (
        <div style={{ textAlign : 'center', color:'white'}}>
            <h2>There are no posts yet</h2>
            <p> Try adding something! </p>
        </div>

    )}
    </>
    )
}

export default PostList;