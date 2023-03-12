import classes from './NewPost.module.css';
import {Link, Form, redirect} from 'react-router-dom';
import Modal from '../Components/Modal'

function NewPost({onAddPost}){
   return (
      <Modal>
        <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
            <Link to="/" type="button">Cancel</Link>
            <button> Submit </button>
        </p>
      </Form>
    </Modal>
   )
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //{body:'...', author:'...'}

   // adding data to backend
   await fetch('http://localhost:3000/posts',{
    method: 'POST',
    headers : {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(postData)
  });

  return redirect('/');
}