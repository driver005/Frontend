import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from '../../components/Posts/Posts/Posts';
import Form from '../../components/Posts/Form/Form';
import { getPosts } from '../../../actions/posts';
import Widget from '../../components/Widget/Widget';
import { H6title } from '../../../styles/dashboard';
import { Col, Container, Fade, Row } from 'react-bootstrap';

const Post = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Fade in>
            <Container className="ml-0 mr-0" style={{ maxWidth: 'none', }}>
                <Row className="justify-content-between align-items-stretch">
                    <Col xs={12} sm={7}>
                        <Widget title={<H6title> Posts </H6title>}>
                            <Posts setCurrentId={setCurrentId} />
                        </Widget>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Widget title={<H6title> Create your own Post</H6title>}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Widget>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default Post;
