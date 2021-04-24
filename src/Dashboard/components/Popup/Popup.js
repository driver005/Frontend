import React from "react";
import Warpper from './Wrapper';
import {
  Modal,
  Button
} from 'react-bootstrap';
import { makeStyles, TextField} from '@material-ui/core';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: "#4e42ffde !important",
    },
    '& .MuiInputBase-root': {
      color: 'rgb(255 255 255)',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1f58f9de',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3f51b557',
    },
  },
}))


const CustomModal = (props) => {
  const [show, setShow] = React.useState(false);
  const classes = useStyles();
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
      <Button variant="outline-primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form autoComplete="off" noValidate className={`${classes.root}`}>
            <TextField name="popupinput" variant="outlined" label="Title" fullWidth value={props.value.popupinput} onChange={props.input} />
          </form>
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