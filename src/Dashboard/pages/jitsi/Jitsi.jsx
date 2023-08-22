import React from 'react'
import Widget from '../../components/Widget/Widget'
import { Colcomponent } from '../../../styles/calendar'

function Jitsi() {
    return (

            <header>
            <Colcomponent>
                <Widget style={{height:"100%"}}>
                    <iframe allow={"camera; microphone; fullscreen; display-capture"} src={"https://meet.jit.si/teclab"} style={{height: "calc(102vh - 30vh)", width: "100%", border: "0px"}}></iframe>
                </Widget>
            </Colcomponent>
            </header>
    )
}
// 
export default Jitsi
