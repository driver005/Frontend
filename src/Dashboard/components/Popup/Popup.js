import React from "react";
import Warpper from './Wrapper';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import './styles.css'



const CustomModal = (props) => {
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    console.log(props)
    return (
        <React.Fragment>
            <Button variant="outline-primary" onClick={handleShow}>
                {props.title || "Click to learn more"}
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete="off" noValidate>
                        <Form.Control name="popupinput" variant="outlined" label="Title" value={props.value.popupinput} onChange={props.input} style={{ backgroundColor: 'transparent', borderColor: '#2c59ff', color: '#c6c6c6' }} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-success"
                        size="lg"
                        block
                        onClick={(e) => {
                            props.onSubmit(e);
                            handleClose();
                        }}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
};

export default Warpper(CustomModal);