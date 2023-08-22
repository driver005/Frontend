import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useLocation, useNavigate, useMatch } from 'react-router';
import { connect } from 'react-redux';
import {
    Container,
    Alert,
    Button,
    FormGroup,
    Form,
    Label,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText,
} from 'react-bootstrap';
import Widget from '../../components/Widget/Widget';
import { loginUser } from '../../../actions/user';
import microsoft from '../../assets/microsoft.png';

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        if (token) return true;
    }

    constructor(props) {
        super(props);

        this.state = {
            email: 'admin@flatlogic.com',
            password: 'password',
        };

        this.doLogin = this.doLogin.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signUp = this.signUp.bind(this);
        this.location = useLocation()
        this.navigate = useNavigate()
        this.match = useMatch()
    }

    changeEmail(event) {
        this.setState({ email: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    doLogin(e) {
        e.preventDefault();
        this.props.dispatch(
            loginUser({ email: this.state.email, password: this.state.password }),
        );
    }

    signUp() {
        this.navigate('/register');
    }

    render() {
        const { from } = this.location.state || {
            from: { pathname: '/app' },
        }; // eslint-disable-line

        // cant access login page while logged in
        if (
            Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))
        ) {
            return <Navigate to={from} />;
        }

        return (
            <div className='auth-page'>
                <Container>
                    <Widget
                        className='widget-auth mx-auto'
                        title={<h3 className='mt-0'>Login to your Web App</h3>}>
                        <p className='widget-auth-info'>Use your email to sign in.</p>
                        <Form onSubmit={this.doLogin}>
                            {this.props.errorMessage && (
                                <Alert
                                    className='alert-sm widget-middle-overflow rounded-0'
                                    color='danger'>
                                    {this.props.errorMessage}
                                </Alert>
                            )}
                            <Form.Group className='mt'>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <InputGroup className='input-group-no-border'>
                                    <InputGroup.Prepend addontype='prepend'>
                                        <InputGroup.Text>
                                            <i className='la la-user text-white' />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id='email'
                                        className='input-transparent pl-3'
                                        value={this.state.email}
                                        onChange={this.changeEmail}
                                        type='email'
                                        required
                                        name='email'
                                        placeholder='Email'
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                                <InputGroup className='input-group-no-border'>
                                    <InputGroup.Prepend addontype='prepend'>
                                        <InputGroup.Text>
                                            <i className='la la-lock text-white' />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id='password'
                                        className='input-transparent pl-3'
                                        value={this.state.password}
                                        onChange={this.changePassword}
                                        type='password'
                                        required
                                        name='password'
                                        placeholder='Password'
                                    />
                                </InputGroup>
                            </Form.Group>
                            <div className='bg-widget auth-widget-footer'>
                                <Button
                                    type='submit'
                                    color='danger'
                                    className='auth-btn'
                                    size='sm'
                                    style={{ color: '#fff' }}>
                                    <span className='auth-btn-circle' style={{ marginRight: 8 }}>
                                        <i className='la la-caret-right' />
                                    </span>
                                    {this.props.isFetching ? 'Loading...' : 'Login'}
                                </Button>
                                <p className='widget-auth-info mt-4'>
                                    Don't have an account? Sign up now!
                                </p>
                                <Link className='d-block text-center mb-4' to='register'>
                                    Create an Account
                                </Link>
                                <div className='social-buttons'>
                                    <Button color='primary' className='social-button'>
                                        <i className='social-icon social-google' />
                                        <p className='social-text'>GOOGLE</p>
                                    </Button>
                                    <Button color='success' className='social-button'>
                                        <i
                                            className='social-icon social-microsoft'
                                            style={{ backgroundImage: `url(${microsoft})` }}
                                        />
                                        <p className='social-text' style={{ color: '#fff' }}>
                                            MICROSOFT
                                        </p>
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Widget>
                </Container>
                <footer className='auth-footer'>
                    {new Date().getFullYear()} &copy; Light Blue Template - React Admin
                    Dashboard Template Made by{' '}
                    <a
                        href='https://flatlogic.com'
                        rel='noopener noreferrer'
                        target='_blank'>
                        Flatlogic LLC
                    </a>
                    .
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default connect(mapStateToProps)(Login);
