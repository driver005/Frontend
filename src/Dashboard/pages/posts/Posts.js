import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../../components/Posts/Posts/Posts';
import Form from '../../components/Posts/Form/Form';
import { getPosts } from '../../../actions/posts';
import useStyles from './styles';
import Widget from '../../components/Widget/Widget';
import { H6title } from '../../styles/dashboard';

const Post = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container style={{marginLeft: '0px', marginRight: '0px', maxWidth: 'none',}}>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Widget title={<H6title> Posts </H6title>}>
                        <Posts setCurrentId={setCurrentId} />
                    </Widget>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Widget title={<H6title> Create your own Post</H6title>}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Widget>
                </Grid>
            </Grid>
            </Container>
        </Grow>
    );
};

export default Post;
