// import { Button, Col, Form, Row } from 'react-bootstrap'
// import React, { useState } from 'react'
// import { Formblock } from './styles'
// import { useForm } from 'react-hook-form'


// export default function Contact() {
//     const internalState = { email: '', username: '', subject: '', message: '' }

//     const [input, setinput] = useState(internalState)
//     const { register, formState: { errors }, handleSubmit } = useForm();

//     const handelChange = (e) => {
//         setinput({ ...input, [e.target.name]: e.target.value })
//     }

//     const onSubmit = () => {
       
//     }

//     return (
//         <div style={{ height: '100vh' }}>
//             <Formblock>
//                 <Form>
//                     <h1>
//                         Contact us
//                     </h1>
//                     <Form.Group as={Row} controlId="formName">
//                         <Form.Label column sm="2">
//                             Name
//                         </Form.Label>
//                         <Col sm="10">
//                             <Form.Control name="username" type="text" placeholder="Name" onChange={handelChange} {...register("username", { required: true, pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u })} />
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formEmail">
//                         <Form.Label column sm="2">
//                             Email
//                         </Form.Label>
//                         <Col sm="10">
//                             <Form.Control name="email" type="text" placeholder="Email" onChange={handelChange} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formSubject">
//                         <Form.Label column sm="2">
//                             Subject
//                         </Form.Label>
//                         <Col sm="10">
//                             <Form.Control name="subject" type="text" placeholder="Subject" onChange={handelChange} {...register("subject", { required: true })} />
//                         </Col>
//                     </Form.Group>
//                     <Form.Group controlId="ControlTextarea1">
//                         <Form.Label>Message</Form.Label>
//                         <Form.Control as="textarea" rows={3} name="message" onChange={handelChange} />
//                     </Form.Group>
//                     <Button variant="outline-primary" size="lg" block type="submit">Send</Button>
//                 </Form>
//             </Formblock>
//         </div>
//     )
// }