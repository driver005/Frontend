import { Button, Col, Form, Row } from 'react-bootstrap'
import React, {useState} from 'react'
import { Formblock } from './styles'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../../api'
import { ToastonError } from '../Toast'


export default function Contact() {
    const internalState = {email: '', username: '', subject: '', message: ''}

    const [input, setinput] = useState(internalState)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelChange = (e) => {
        setinput({...input, [e.target.name]: e.target.value})
    } 

    const onSubmit = () => {
        sendEmail(input)
        .then(data => {
            ToastonError(data)
        })
    }

    return (
        <div style={{backgroundColor: '#b1b1b1', width: '100vw', height: '100vh'}}>
        <Formblock>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>
                Contact us
            </h1>
            <Form.Group as={Row} controlId="formName">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="username" type="text" placeholder="Name" onChange={handelChange} ref={register({ required: true, pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u })}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="email" type="text" placeholder="Email" onChange={handelChange} ref={register({ required: true, pattern: /^\S+@\S+$/i})}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formSubject">
                <Form.Label column sm="2">
                    Subject
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="subject" type="text" placeholder="Subject" onChange={handelChange} ref={register({ required: true})}/>
                </Col>
            </Form.Group>
            <Form.Group controlId="ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" onChange={handelChange} />
            </Form.Group>
            <Button variant="outline-primary" size="lg" block type="submit">Send</Button>
            </Form>
        </Formblock>
        </div>
    )
}