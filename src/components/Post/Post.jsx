import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
  const {id, title, body} = post;
  return (
    <div className='post'>
      <h5>ID:</h5>
      <h5>{title}+</h5>
      <Link to={`/post/${id}`}>Show Detail</Link>
      <Link to={`/post/${id}`}><button>Show post details</button></Link>
    </div>
  );
};

export default Post;