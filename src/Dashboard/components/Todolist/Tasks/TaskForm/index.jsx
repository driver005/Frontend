import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import NProgress from 'react-nprogress'
import { CustomButton, CustomInput } from '../../common'
import Alert from '../Alert'
import 'react-nprogress/nprogress.css'
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
import { Card, Centertext, Datapicker, Select } from '../../../../styles/todolist'

export default class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.task ? props.task.name : '',
            type: props.task ? props.task.type : 'Code',
            day: props.task ? new Date(props.task.day) : new Date(),
            createdAt: props.task ? new Date(props.task.createdAt) : new Date(),
            completed: props.task ? props.task.completed : false,
            _id: props.task ? props.task._id : null,
            error: undefined
        }
    }
    closeModal = () => this.setState({ error: undefined })
    componentWillMount() {
        NProgress.start()
    }

    componentDidMount() {
        NProgress.done()
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    onDateChange = day => {
        if(!day) this.setState({ day: new Date() })
        else this.setState({ day })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, day, type, createdAt, completed, _id } = this.state
        const {onSubmit, closeModal} = this.props

        if(!name || !day || !type) this.setState({ error: 'Fill in all the fields' })
        else {
            NProgress.start()
            onSubmit({
                _id,
                name,
                type,
                day: day.valueOf(),
                createdAt: createdAt.valueOf(),
                completed
            })

            e.target.type.value = ''
            this.setState({
                name: '',
                type: 'Code',
                day: new Date()
            })
            NProgress.done()
            closeModal()
        }
    }

    
    render() {
        const {name, type, day, error} = this.state
        return (
            <Card className="card">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="column xlarge-4 small-12">
                            <div className="input-field purple-input">
                                <Datapicker
                                    placeholderText="Choose date"
                                    todayButton={"Today"}
                                    selected={day}
                                    onChange={this.onDateChange}
                                    minDate={new Date()}
                                    monthsShown={2}
                                />
                            </div>
                        </div>
                        <div className="column xlarge-4 small-12" style={{marginTop: "1.2rem"}}>
                            <CustomInput
                                icon="fas fa-tasks"
                                type="text"
                                placeholder="Enter a new task" 
                                autoComplete="off"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="column xlarge-4 small-12" style={{marginTop: "1.2rem", marginBottom: "1.2rem"}}>
                            <div className="input-field purple-input">
                                <Select name="type" onChange={this.handleChange} value={type}>
                                    <option defaultValue value="Code">Code</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <Centertext className="center-text">
                        <CustomButton typeBtn="submit">Submit</CustomButton>
                    </Centertext>
                </form>
                <Alert alertMessage={error} closeModal={this.closeModal} />
            </Card>
        )
    }
}