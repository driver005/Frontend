import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../../../actions/posts';
import Commoninput from '../../Common';
import { Button, ButtonGroup, Container } from 'react-bootstrap';



const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [postData, setPostData] = useState({ creatorName: user?.info?.user?.username, title: '', message: '', tags: '', selectedFile: '', creator: user?.info?.user?._id, link: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creatorName: user?.info?.user?.username, title: '', message: '', tags: '', selectedFile: '', creator: user?.info?.user?._id, link: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Container className={'bg-transparent'}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h4 variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Post'}</h4>
                <Commoninput inputname="title" label="Title" backgroundcolor={'#151730'} color={'#a0a0a0'} showlabel={postData.title} inputvalue={postData.title} inputid="Title" inputisrequired onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <Commoninput inputname="message" label="Message" backgroundcolor={'#151730'} color={'#a0a0a0'} showlabel={postData.message} inputvalue={postData.message} inputid="Message" inputisrequired onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <Commoninput inputname="tags" label="Tags (coma separated)" backgroundcolor={'#151730'} color={'#a0a0a0'} showlabel={postData.tags} inputvalue={postData.tags} inputid="Tags" inputisrequired onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',').join(';').split(';') })} />
                <Commoninput inputname="link" label="Link" backgroundcolor={'#151730'} color={'#a0a0a0'} showlabel={postData.link} inputvalue={postData.link} inputid="Link" inputisrequired onChange={(e) => setPostData({ ...postData, link: e.target.value })} />
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <ButtonGroup vertical style={{ width: '100%', paddingTop: '1rem' }}>
                    <Button variant="outline-success" size="lg" type="submit" >Submit</Button>
                    <Button variant="outline-danger" size="sm" onClick={clear}>Clear</Button>
                </ButtonGroup>
            </form>
        </Container>
    );
};

export default Form;
