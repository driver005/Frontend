import React from 'react'
import { createNewsletter } from '../../api/index'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';

const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    
    

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }

`;


const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB') };
    white-space: nowrap;
    padding: ${(big) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontbig}) => (fontbig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7') };
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

const Formwrapper = styled.form`
    display: flex;
    margin-bottom: 0px;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 479px)
    {
        flex-wrap: wrap;
    }
`

const Newsletterfield = styled.input`
    background-attachment: scroll !important;
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    background-color: #181a1b;
    margin-right: 12px;
    margin-bottom: 0px;
    padding-left: 27px;
    border-radius: 100px;
    color: #d8d5d0;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    border: none;
    @media screen and (max-width: 479px)
    {
        margin-right: 0px;
        margin-bottom: 15px;
    }

    @media screen and (max-width: 479px)
    {
        margin-right: 0px;
        margin-bottom: 15px;
    }

`

const Sendbutton = styled.button`
    background-attachment: scroll !important;
    display: inline-block;
    text-decoration: none;
    line-height: normal;
    margin-top: 0px;
    padding: 16px 45px;
    border-radius: 100px;
    border: none;
    background-color: ${({primary}) => (primary ? '#4B59F7' : '#181a1b') };
    color: #d8d5d0;
    font-size: 15px;
    line-height: 21px;

    @media screen and (max-width: 479px)
    {
        width: 100%;
    }

`
const Formblock = styled.div`
    display: block;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding: 0px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    background-color: transparent;
    font-family: Inter, sans-serif;
    color: #333;
    font-weight: 400;
    margin: 0 0 15px;

    @media screen and (max-width: 479px)
    {
        flex-wrap: wrap;
    }

`

export default function Newsletter(props) {
    const [input, setinput] = React.useState()
    
    const onSubmithandler = (e) => {
        e.preventDefault();
        createNewsletter({email: input})
        .then(data => {
            if(data.data.err){
                toast.error(
                    data.data.err,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                    }
                )
            } else {    
                toast.success(
                    data.data.msg,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                    }
                )
            }
        })
    }
    return(
        <Formblock>
            <Formwrapper onSubmit={onSubmithandler}>
                <Newsletterfield 
                    type="text"
                    name="email" 
                    placeholder="Enter Email" 
                    id="email" 
                    onChange={(e) => setinput(e.target.value)}
                />
                <Sendbutton
                    primary={props.primary}
                    type="submit" 
                >Submit</Sendbutton>
            </Formwrapper>
        </Formblock>
    )
}