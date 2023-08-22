import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import "./styles.css"
import { likePost, deletePost } from '../../../../../actions/posts';
import { Button, Card, Col, Dropdown } from 'react-bootstrap';
import { CardActions, Details, Img, Imgdiv, Linkbutton, Overlay, Overlay2, P, Span, Title } from './styles'



const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes?.length > 0) {
            return post.likes.includes(user?.info?.user?._id)
                ? (
                    <React.Fragment><FiThumbsUp fontSize="small" size={15} style={{ marginRight: '2px', fill: 'black', stroke: '#2b2626' }} /><Span>{post.likes?.length > 2 ? `You and ${post.likes?.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</Span></React.Fragment>
                ) : (
                    <React.Fragment><FiThumbsUp fontSize="small" size={15} style={{ marginRight: '2px' }} /><Span>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</Span></React.Fragment>
                );
        } else {
            return <React.Fragment><FiThumbsUp fontSize="small" size={15} style={{ marginRight: '2px' }} /><Span>Like</Span></React.Fragment>;
        }


    };

    return (
        <Card style={{ background: '#ec7f7f12' }}>
            <Imgdiv>
                <Img variant="top" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            </Imgdiv>
            <Card.Body>
                <Overlay>
                    <h3>{post.creatorName}</h3>
                </Overlay>
                {(user?.info?.user?._id === post?.creator) && (
                    <Overlay2>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                <FiMoreHorizontal size={25} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {(user?.info?.user?._id === post?.creator) && (<Dropdown.Item onClick={() => setCurrentId(post._id)}>Edit</Dropdown.Item>)}
                                {(user?.info?.user?._id === post?.creator) && (<Dropdown.Item onClick={() => dispatch(deletePost(post._id))}>Delete</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Overlay2>
                )}

                <Details>
                    <Col>
                        <legend>Title:</legend>
                        <P className='title-post'>{post.title}</P>
                    </Col>
                    <Col>
                        <legend>Message:</legend>
                        <P className='message'>{post.message}</P>
                    </Col>
                    <Col>
                        <legend>Tags:</legend>
                        <P className='tags'>{post.tags.map((tag) => `#${tag} `)}</P>
                    </Col>
                </Details>

                <CardActions>
                    <Linkbutton variant="link" size="small" disabled={!user?.info?.user} onClick={() => dispatch(likePost(post._id))}><Likes /></Linkbutton>
                    <Button className={`align-items-center d-flex" variant="outline-primary ${post.link ? 'visible' : 'invisible'}`} disabled={!post.link} href={post.link}>Open Website</Button>
                </CardActions>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {moment(post.createdAt).fromNow()}</small>
            </Card.Footer>
        </Card>
    );

};



export default Post;
