import classes from './Post.module.css';
import {Link} from 'react-router-dom'; 

function Post({id, author, body}){

    return (
        <li className={classes.post}>
                <h3 className={classes.author}> <b> {author} </b></h3>
                <p className={classes.text}> {body}  </p>
            <Link to={id} type="button">More Details</Link>
        </li>
    )
}

export default Post;