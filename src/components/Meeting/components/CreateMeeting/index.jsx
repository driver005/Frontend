import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Modal, Button, FormControl } from "react-bootstrap";
import "./styles.css"
import "react-datepicker/dist/react-datepicker.css";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { addMeeting } from "../../../../actions/meeting";
import { set } from 'date-fns'
import { useDispatch } from "react-redux";

const CreateMeetingComponent = () => {
    const dispatch = useDispatch()
    const [user, setUser] = React.useState(
        JSON.parse(localStorage.getItem('profile')),
    );
    const [time, setTime] = useState(['14:00', '17:00']);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [name, setName] = useState("weekly meeting");

    const handelMeeting = () => {
        const data = {
            name: name,
            startTime: set(date, { hours: time[0].split(":")[0], minutes: time[0].split(":")[1], seconds: 0 }),
            endTime: set(date, { hours: time[1].split(":")[0], minutes: time[1].split(":")[1], seconds: 0 }),
        }
        dispatch(addMeeting(data))
        setShow(false)
    }

    return (
        <React.Fragment>
            {(user?.info?.user?.role === "admin") &&
                <div className="w-100 d-flex mt-4 justify-content-center">
                    <div className="flex-column">
                        <h5>Admin only section: </h5>
                        <Button variant="outline-info" onClick={() => setShow(true)}>
                            Add Meeting
                        </Button>
                    </div>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        variant="success"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton className="meeting-closeButton justify-content-center">
                            <Modal.Title id="contained-modal-title-vcenter">
                                Create Event
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="flex-column justify-content-center">
                            <div className="mb-2 flex-row justify-content-center">
                                <h3 className="meeting-text mr-2">{"Name: "}</h3>
                                <FormControl
                                    className="meeting-name"
                                    placeholder="weekly meeting"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={name}
                                    onChange={(name) => setName(name.target.value)}
                                />
                            </div>
                            <div className="mb-2 flex-row justify-content-center">
                                <h3 className="meeting-text mr-2">{"Date: "}</h3>
                                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                            </div>
                            <div className="flex-row justify-content-center">
                                <h3 className="meeting-text mr-2">{"Time: "}</h3>
                                <TimeRangePicker onChange={setTime} value={time} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="d-flex justify-content-center">
                                <Button onClick={() => handelMeeting()} variant="outline-success">
                                    Set Event
                                </Button>
                            </div>
                        </Modal.Footer>

                    </Modal>


                </div>

            }
        </React.Fragment>
    )
}

export default CreateMeetingComponent