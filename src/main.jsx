import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ]);

const router =createBrowserRouter([
 {
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <First></First>
    },
    {
      path: 'friends',
      element: <Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: 'friend/:friendId',
      element: <FriendDetail></FriendDetail>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path: 'posts',
      element: <Posts></Posts>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path: 'post/:postId',
      element: <PostDetail></PostDetail>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
