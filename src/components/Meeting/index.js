import { ScheduleMeeting } from "./components/ScheduleMeeting/ScheduleMeeting";
import './styles.css';
import { isSameDay, parseISO, format } from 'date-fns'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import CreateMeetingComponent from "./components/CreateMeeting";
import Loading from "../LoadingAnimation";
import { meeting } from "../../actions/meeting";
import { useEffect, useState } from "react";
const { zonedTimeToUtc, utcToZonedTime } = require('date-fns-tz');

const timezone = "Europe/Berlin"

const MeetingComponent = () => {
    var data = useSelector(state => state.meeting)
    data = data.map((value, i) => {
        return {
            ...value,
            startTime: zonedTimeToUtc(parseISO(value.startTime), timezone),
            endTime: zonedTimeToUtc(parseISO(value.endTime), timezone),

        }
    })
    if (!data.length) return <Loading />;


    return (
        <section className='section meeting-section gray-bg' id='about'>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                backgroundColor="dark"
                eventDurationInMinutes={30}
                availableTimeslots={data}
                onStartTimeSelect={console.log}
            />

            <CreateMeetingComponent />

        </section>
    )
}

export default MeetingComponent