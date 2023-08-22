import React from 'react'
import { ScheduleContainer, ScheduleStagewrapper } from '../../styles/events'
import Stage from './stage'
import './styles.css'

function Events() {
    return (
        <ScheduleContainer className="schedule-container">
            <ScheduleStagewrapper className="schedule-stage__wrapper">
                <Stage />
            </ScheduleStagewrapper>
        </ScheduleContainer>
    )
}

export default Events
