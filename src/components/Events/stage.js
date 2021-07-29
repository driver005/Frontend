import React from 'react'
import { Divider, ScheduleStage, ScheduleStagetitle } from '../../styles/events'
import SlotCard from './card'

function Stage() {
    return (
        <React.Fragment>
            <ScheduleStage className="schedule-stage">
                <ScheduleStagetitle className="schedule-stage__title">
                    <h3>Stage X</h3>
                </ScheduleStagetitle>
                    <SlotCard />
            </ScheduleStage>
            <Divider className="divider" /> 
        </React.Fragment>    
    )
}

export default Stage
