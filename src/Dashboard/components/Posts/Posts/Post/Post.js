import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import {FiThumbsUp} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import {FiMoreHorizontal} from 'react-icons/fi';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));
  const Likes = () => {
    if (post.likes?.length > 0) {
      return post.likes.includes(user?.info?.user?._id)
        ? (
          <React.Fragment><FiThumbsUp fontSize="small" size={20} style={{marginRight: '2px',fill: '##00000061', stroke: '#324db5'}} /><span className={classes.cardActionsText}>{post.likes?.length > 2 ? `You and ${post.likes?.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</span></React.Fragment>
        ) : (
          <React.Fragment><FiThumbsUp fontSize="small" size={15} style={{marginRight: '2px'}} /><span className={classes.cardActionsText}>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</span></React.Fragment>
        );
    } else {
      return <React.Fragment><FiThumbsUp fontSize="small" size={15} style={{marginRight: '2px'}} /><span className={classes.cardActionsText}>Like</span></React.Fragment>;
    }

    
  };

  return (
    <Card className={classes.card} style={{ background: '#ec7f7f12' }}>
      
      <div className={classes.mediaWrapper}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      </div>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creatorName}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.info?.user?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><FiMoreHorizontal size={25} /></Button>
        </div>
        )}
      <div className={classes.details}>
        <Typography variant="body2" color="primary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} color="primary" gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="primary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.info?.user} onClick={() => dispatch(likePost(post._id))}><Likes /></Button>
        {(post.link) && (
          <a href={post.link}><Button variant="outlined" color="primary">Open Website</Button></a>
        )}
        {(user?.info?.user?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><MdDelete size={15}  /> <span className={classes.cardActionsText}>Delete</span></Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
