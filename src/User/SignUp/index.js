import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Fieldsgroup, Form, Formblock, Formheading, Formmask, Formslide, Formslider, Formstep, Stepnumber, Textfiledinput, Textfiledwrapper, Filedlabel, Textfileddone, Formlabel, Formbutton, Showpassword } from '../styles'
import { signin, signup } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useAlert } from 'react-alert'

const initialState = { firstName: '' , lastName: '' , month: '' , day: '' , year: '' , email: '' , password: '', }
const initialStateboolean = {firstName: false , lastName: false , month: false , day: false , year: false , email: false , username: false , password: false, }

const SignUp = () => {
    const [isShown, setisShown] = React.useState(initialStateboolean);
    const [form, setForm] = React.useState(initialState);
    const [isSignup, setIsSignup] = React.useState(false);
    const [error, seterror] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    const alert = useAlert()
    

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const onSubmit = (e) => {
        if (isSignup) {
          dispatch(signup(form, history))
          .then((promis) => {
            if(promis?.errors) {
                alert.show(promis.message)
            }
          })
          .catch((e) => {console.log(e)})
          
        } else {
          dispatch(signin(form, history))
          .then((promis) => {
            if(promis?.err) {
                alert.show(promis.message)
            }
          })
        }
    };

    function handleTextChange(text) {
        setForm({
            ...form,
            [text.name]: text.value
        });
        if (text.value !== '') {
            setisShown({
                ...isShown,
                [text.name]: true
            });
        } else {
            setisShown({
                ...isShown,
                [text.name]: false
            });
        }
    }

    return (
        <Formblock>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Formslider>
                        <Formslide>
                            <Formstep>
                                <Stepnumber>Step 1/1</Stepnumber>
                                <Formheading>Text fields</Formheading>
                                { isSignup && (
                                <Fieldsgroup>
                                    <Textfiledwrapper half onChange={(e) => handleTextChange(e.target)}>
                                        <Textfiledinput type="text"  maxlength="256" name="firstName" data-name="First name" placeholder="" id="First-name"  ref={register({ required: 'This is required.' })}/>
                                        <Filedlabel for="name" className={ isShown.firstName ? 'load' : 'hide' }>First name</Filedlabel>
                                        <Textfileddone className={form.firstName ? 'active' : 'hide'}/>
                                    </Textfiledwrapper>
                                    <Textfiledwrapper half onChange={(e) => handleTextChange(e.target)}>
                                        <Textfiledinput type="text"  maxlength="256" name="lastName" data-name="Last name" placeholder="" id="Last-name"  ref={register({ required: 'This is required.' })}/>
                                        <Filedlabel for="name-2" className={ isShown.lastName ? 'load' : 'hide'} >Last name</Filedlabel>
                                        <Textfileddone className={form.lastName ? 'active' : 'hide'}/>
                                    </Textfiledwrapper>
                                </Fieldsgroup>
                                )}
                                <Formlabel>Date of birth</Formlabel>
                                <Fieldsgroup>
                                    <React.Fragment>
                                    { isSignup && (
                                        <React.Fragment>
                                            <Textfiledwrapper third onChange={(e) => handleTextChange(e.target)}>
                                                <Textfiledinput type="text"  maxlength="256" name="month" data-name="Month" placeholder="" id="Month"  ref={register({ required: 'This is required.' })}/>
                                                <Filedlabel for="name" className={ isShown.month ? 'load' : 'hide' }>Month</Filedlabel>
                                                <Textfileddone className={form.month ? 'active' : 'hide'}/>
                                            </Textfiledwrapper>
                                            <Textfiledwrapper third onChange={(e) => handleTextChange(e.target)}>
                                                <Textfiledinput type="text"  maxlength="256" name="day" data-name="Day" placeholder="" id="Day"  ref={register({ required: 'This is required.' })}/>
                                                <Filedlabel for="name" className={ isShown.day ? 'load' : 'hide' }>Day</Filedlabel>
                                                <Textfileddone className={form.day ? 'active' : 'hide'}/>
                                            </Textfiledwrapper>
                                            <Textfiledwrapper third onChange={(e) => handleTextChange(e.target)}>
                                                <Textfiledinput type="text"  maxlength="256" name="year" data-name="Year" placeholder="" id="Year"  ref={register({ required: 'This is required.' })}/>
                                                <Filedlabel for="name" className={ isShown.year ? 'load' : 'hide' }>Year</Filedlabel>
                                                <Textfileddone className={form.year ? 'active' : 'hide'}/>
                                            </Textfiledwrapper>
                                            <Textfiledwrapper onChange={(e) => handleTextChange(e.target)}>
                                                <Textfiledinput type="text"  maxlength="256" name="username" data-name="Username" placeholder="" id="Username"  ref={register({ required: 'This is required.' })}/>
                                                <Filedlabel for="name" className={ isShown.username ? 'load' : 'hide' }>Username</Filedlabel>
                                                <Textfileddone className={form.username ? 'active' : 'hide'}/>
                                            </Textfiledwrapper>
                                        </React.Fragment>
                                    )}
                                    <Textfiledwrapper onChange={(e) => handleTextChange(e.target)}>
                                        <Textfiledinput type="text"  maxlength="256" name="email" data-name="Email Address" placeholder="" id="Email Address"  ref={register({ required: 'This is required.' })}/>
                                        <Filedlabel for="name" className={ isShown.email ? 'load' : 'hide' }>Email Address</Filedlabel>
                                        <Textfileddone className={form.email ? 'active' : 'hide'}/>
                                    </Textfiledwrapper>
                                    <Textfiledwrapper onChange={(e) => handleTextChange(e.target)}>
                                        <Textfiledinput type={showPassword ? 'text' : 'password'}   maxlength="256" name="password" data-name="Password" placeholder="" id="Password" ref={register({ required: 'This is required.' })}/>
                                        <Filedlabel for="name" className={ isShown.password ? 'load' : 'hide' }>Password</Filedlabel>
                                        <Showpassword onClick={handleShowPassword}>
                                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} /> 
                                        </Showpassword>
                                    </Textfiledwrapper>
                                    </React.Fragment>
                                </Fieldsgroup>
                            </Formstep>
                        </Formslide>
                    </Formslider>
                <Formbutton type="submit">
                    { isSignup ? 'Sign Up' : 'Sign In' }
                </Formbutton>
                <button onClick={switchMode}>
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </button>
                <h1>
                    {error}
                </h1>
            </Form>
        </Formblock>
    )
}

export default SignUp
