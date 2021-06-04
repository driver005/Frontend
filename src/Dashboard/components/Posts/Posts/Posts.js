import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { Col, Row, Spinner } from 'react-bootstrap';
import styled from "styled-components"

const Postscontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  grid-gap: 15px;
`

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <Spinner animation="border" variant="primary" /> : (
      <Postscontainer>
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrentId={setCurrentId} />
        ))}
      </Postscontainer>
    )
  );
};

export default Posts;
