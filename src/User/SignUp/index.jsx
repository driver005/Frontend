import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Fieldsgroup,
    Formcomponent,
    Formblock,
    Formheading,
    Formmask,
    Formslide,
    Formslider,
    Formstep,
    Stepnumber,
    Textfiledinput,
    Textfiledwrapper,
    Filedlabel,
    Textfileddone,
    Formlabel,
    Formbutton,
    Showpassword,
    Textfiledcontainer,
    ButtonWrapper,
} from '../styles';
import { signin, signup } from '../../actions/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl } from 'react-bootstrap';

const css = `
    body {
        background: #2c3e50;
    }
`;

const initialState = {
    firstName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    email: '',
    password: '',
};
const initialStateboolean = {
    firstName: false,
    lastName: false,
    month: false,
    day: false,
    year: false,
    email: false,
    username: false,
    password: false,
};

const SignUp = () => {
    const [isShown, setisShown] = React.useState(initialStateboolean);
    const [form, setForm] = React.useState(initialState);
    const [isSignup, setIsSignup] = React.useState(false);
    const [error, seterror] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const dispatch = useDispatch();
    const history = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const state = {
        options: {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
        },
    };

    const addSuccessNotification = (message) =>
        toast.dark(`${message}`, state.options);

    const addErrorNotification = (message) => {
        toast.error(`${message}`, state.options);
    };

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const onSubmit = (e) => {
        if (isSignup) {
            dispatch(signup(form, history)).then((promis) => {
                if (promis?.message) {
                    addErrorNotification(promis.message);
                } else {
                    addSuccessNotification('Successful Signed up');
                }
            });
        } else {
            dispatch(signin(form, history)).then((promis) => {
                if (promis?.err) {
                    addErrorNotification(promis.message);
                } else {
                    addSuccessNotification('Successful Signed in');
                }
            });
        }
    };

    function handleTextChange(text) {
        setForm({
            ...form,
            [text.name]: text.value,
        });
        if (text.value !== '') {
            setisShown({
                ...isShown,
                [text.name]: true,
            });
        } else {
            setisShown({
                ...isShown,
                [text.name]: false,
            });
        }
    }

    return (
        <Formblock>
            <Formcomponent onSubmit={handleSubmit(onSubmit)}>
                <Formslider>
                    <Formslide>
                        <Formstep>
                            {
                                // <Stepnumber>Step 1/1</Stepnumber>
                            }
                            <Formheading>Text fields</Formheading>
                            {isSignup && (
                                <Fieldsgroup>
                                    <Textfiledcontainer half>
                                        <Textfiledwrapper
                                            onChange={(e) => handleTextChange(e.target)}>
                                            <Textfiledinput
                                                type='text'
                                                maxlength='256'
                                                name='firstName'
                                                data-name='First name'
                                                placeholder=''
                                                id='First-name'
                                                {...register('firstName', {
                                                    required: true,
                                                    pattern:
                                                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                                                })}
                                            />
                                            <Filedlabel
                                                htmlFor='firstName'
                                                className={isShown.firstName ? 'load' : 'hide'}>
                                                First name
                                            </Filedlabel>
                                            <Textfileddone
                                                className={form.firstName ? 'active' : 'hide'}
                                            />
                                        </Textfiledwrapper>
                                        {errors.firstName && (
                                            <FormControl.Feedback
                                                type='invalid'
                                                className={'d-block'}>
                                                Please choose a username.
                                            </FormControl.Feedback>
                                        )}
                                    </Textfiledcontainer>
                                    <Textfiledcontainer half>
                                        <Textfiledwrapper
                                            onChange={(e) => handleTextChange(e.target)}>
                                            <Textfiledinput
                                                type='text'
                                                maxlength='256'
                                                name='lastName'
                                                data-name='Last name'
                                                placeholder=''
                                                id='Last-name'
                                                {...register('lastName', {
                                                    required: true,
                                                    pattern:
                                                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                                                })}
                                            />
                                            <Filedlabel
                                                htmlFor='lastName'
                                                className={isShown.lastName ? 'load' : 'hide'}>
                                                Last name
                                            </Filedlabel>
                                            <Textfileddone
                                                className={form.lastName ? 'active' : 'hide'}
                                            />
                                        </Textfiledwrapper>
                                        {errors.lastName && (
                                            <FormControl.Feedback
                                                type='invalid'
                                                className={'d-block'}>
                                                Please choose a username.
                                            </FormControl.Feedback>
                                        )}
                                    </Textfiledcontainer>
                                </Fieldsgroup>
                            )}
                            {isSignup && <Formlabel>Date of birth</Formlabel>}
                            <Fieldsgroup>
                                <React.Fragment>
                                    {isSignup && (
                                        <React.Fragment>
                                            <Textfiledcontainer third>
                                                <Textfiledwrapper
                                                    onChange={(e) => handleTextChange(e.target)}>
                                                    <Textfiledinput
                                                        type='text'
                                                        maxlength='256'
                                                        name='month'
                                                        data-name='Month'
                                                        placeholder=''
                                                        id='Month'
                                                        {...register('month', {
                                                            required: true,
                                                            max: 12,
                                                            min: 0,
                                                        })}
                                                    />
                                                    <Filedlabel
                                                        htmlFor='month'
                                                        className={isShown.month ? 'load' : 'hide'}>
                                                        Month
                                                    </Filedlabel>
                                                    <Textfileddone
                                                        className={form.month ? 'active' : 'hide'}
                                                    />
                                                </Textfiledwrapper>
                                                {errors.month && (
                                                    <FormControl.Feedback
                                                        type='invalid'
                                                        className={'d-block'}>
                                                        Please choose a username.
                                                    </FormControl.Feedback>
                                                )}
                                            </Textfiledcontainer>
                                            <Textfiledcontainer third>
                                                <Textfiledwrapper
                                                    third
                                                    onChange={(e) => handleTextChange(e.target)}>
                                                    <Textfiledinput
                                                        type='text'
                                                        maxlength='256'
                                                        name='day'
                                                        data-name='Day'
                                                        placeholder=''
                                                        id='Day'
                                                        {...register('day', {
                                                            required: true,
                                                            max: 31,
                                                            min: 0,
                                                        })}
                                                    />
                                                    <Filedlabel
                                                        htmlFor='day'
                                                        className={isShown.day ? 'load' : 'hide'}>
                                                        Day
                                                    </Filedlabel>
                                                    <Textfileddone
                                                        className={form.day ? 'active' : 'hide'}
                                                    />
                                                </Textfiledwrapper>
                                                {errors.day && (
                                                    <FormControl.Feedback
                                                        type='invalid'
                                                        className={'d-block'}>
                                                        Please choose a username.
                                                    </FormControl.Feedback>
                                                )}
                                            </Textfiledcontainer>
                                            <Textfiledcontainer third>
                                                <Textfiledwrapper
                                                    third
                                                    onChange={(e) => handleTextChange(e.target)}>
                                                    <Textfiledinput
                                                        type='text'
                                                        maxlength='256'
                                                        name='year'
                                                        data-name='Year'
                                                        placeholder=''
                                                        id='Year'
                                                        {...register('year', {
                                                            required: true,
                                                            max: 2021,
                                                            min: 1900,
                                                        })}
                                                    />
                                                    <Filedlabel
                                                        htmlFor='year'
                                                        className={isShown.year ? 'load' : 'hide'}>
                                                        Year
                                                    </Filedlabel>
                                                    <Textfileddone
                                                        className={form.year ? 'active' : 'hide'}
                                                    />
                                                </Textfiledwrapper>
                                                {errors.year && (
                                                    <FormControl.Feedback
                                                        type='invalid'
                                                        className={'d-block'}>
                                                        Please choose a username.
                                                    </FormControl.Feedback>
                                                )}
                                            </Textfiledcontainer>
                                            <Textfiledcontainer>
                                                <Textfiledwrapper
                                                    onChange={(e) => handleTextChange(e.target)}>
                                                    <Textfiledinput
                                                        type='text'
                                                        maxlength='256'
                                                        name='username'
                                                        data-name='Username'
                                                        placeholder=''
                                                        id='Username'
                                                        {...register('username', { required: true })}
                                                    />
                                                    <Filedlabel
                                                        htmlFor='username'
                                                        className={isShown.username ? 'load' : 'hide'}>
                                                        Username
                                                    </Filedlabel>
                                                    <Textfileddone
                                                        className={form.username ? 'active' : 'hide'}
                                                    />
                                                </Textfiledwrapper>
                                                {errors.year && (
                                                    <FormControl.Feedback
                                                        type='invalid'
                                                        className={'d-block'}>
                                                        Please choose a username.
                                                    </FormControl.Feedback>
                                                )}
                                            </Textfiledcontainer>
                                        </React.Fragment>
                                    )}
                                    <Textfiledcontainer>
                                        <Textfiledwrapper
                                            onChange={(e) => handleTextChange(e.target)}>
                                            <Textfiledinput
                                                type='text'
                                                maxlength='256'
                                                name='email'
                                                data-name='Email Address'
                                                placeholder=''
                                                id='Email Address'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^\S+@\S+$/i,
                                                })}
                                            />
                                            <Filedlabel
                                                htmlFor='email'
                                                className={isShown.email ? 'load' : 'hide'}>
                                                Email Address
                                            </Filedlabel>
                                            <Textfileddone
                                                className={form.email ? 'active' : 'hide'}
                                            />
                                        </Textfiledwrapper>
                                        {errors.email && (
                                            <FormControl.Feedback
                                                type='invalid'
                                                className={'d-block'}>
                                                Please choose a username.
                                            </FormControl.Feedback>
                                        )}
                                    </Textfiledcontainer>
                                    <Textfiledcontainer>
                                        <Textfiledwrapper
                                            onChange={(e) => handleTextChange(e.target)}>
                                            <Textfiledinput
                                                type={showPassword ? 'text' : 'password'}
                                                maxlength='256'
                                                name='password'
                                                data-name='Password'
                                                placeholder=''
                                                id='Password'
                                                {...register('password', { required: true })}
                                            />
                                            <Filedlabel
                                                htmlFor='password'
                                                className={isShown.password ? 'load' : 'hide'}>
                                                Password
                                            </Filedlabel>
                                            <Showpassword onClick={handleShowPassword}>
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </Showpassword>
                                        </Textfiledwrapper>
                                        {errors.password && (
                                            <FormControl.Feedback
                                                type='invalid'
                                                className={'d-block'}>
                                                Please choose a username.
                                            </FormControl.Feedback>
                                        )}
                                    </Textfiledcontainer>
                                </React.Fragment>
                            </Fieldsgroup>
                        </Formstep>
                    </Formslide>
                </Formslider>
                <ButtonWrapper>
                    <Formbutton type='submit'>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Formbutton>
                    <button onClick={switchMode}>
                        {isSignup
                            ? 'Already have an account? Sign in'
                            : "Don't have an account? Sign Up"}
                    </button>
                </ButtonWrapper>
            </Formcomponent>
            <style>{css}</style>
        </Formblock>
    );
};

export default SignUp;
