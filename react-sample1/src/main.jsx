import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Posts, {loader as postsLoader} from './Routes/Posts'
import './index.css'

import NewPost, {action as newPostAction} from './Routes/NewPost'
import RootLayout from './Routes/RootLayout'
import PostDetails, {loader as postDetailsLoader} from './Routes/PostDetails'


const router_config = createBrowserRouter([
  {
    path : '/', 
    element : <RootLayout />, 
    children:[
      {
        path : '/', 
        element : <Posts />,
        loader : postsLoader,
        children : [
          {path : '/create-post', element : <NewPost />, action : newPostAction },
            // dynamic routing - fetch details of a single post
          {path : '/:postId', element : <PostDetails />, loader : postDetailsLoader }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router_config}/>
  </React.StrictMode>,
)
