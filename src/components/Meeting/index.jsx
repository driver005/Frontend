import { ScheduleMeeting } from "./components/ScheduleMeeting/ScheduleMeeting";
import './styles.css';
import { isSameDay, parseISO, format, isPast } from 'date-fns'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import CreateMeetingComponent from "./components/CreateMeeting";
import Loading from "../LoadingAnimation";
import { meeting } from "../../actions/meeting";
import { useEffect, useState } from "react";
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';
import React from 'react'

const timezone = "Europe/Berlin"

const MeetingComponent = () => {
    //var data = useSelector(state => state.meeting)
    //data = data.map((value, i) => {
    //    var startTime = zonedTimeToUtc(parseISO(value.startTime), timezone)
    //    var endTime = zonedTimeToUtc(parseISO(value.endTime), timezone)
    //    //if (!isPast(endTime)) {
    //    return {
    //        ...value,
    //        startTime,
    //        endTime
    //    }
    //    //}
    //})
    ////data = data.filter(x => x !== null)
    //if (!data.length) return <Loading />;


    return (
        <>
            {/*<section className='section meeting-section gray-bg' id='about'>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                backgroundColor="dark"
                eventDurationInMinutes={30}
                availableTimeslots={data}
                onStartTimeSelect={console.log}
            />

            <CreateMeetingComponent />

    </section>*/}
        </>
    )
}

export default MeetingComponent