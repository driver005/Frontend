import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Spinner from './Spinner'
import { updateNewsletter } from '../api/index'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles.css'

export default class Confirm extends Component {
    state = {
        confirming: true
    }

    componentDidMount = () => {
        const { id } = this.props.match.params

        updateNewsletter({ id })
            .then(data => {
                this.setState({ confirming: false })
                if (data.data.err) {
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
            .catch(err => console.log(err))
    }

    render = () =>
        <div className='confirm'>
            {this.state.confirming
                ? <Spinner size='8x' spinning={'spinning'} />
                : <Navigate to='/' />
            }
        </div>
}