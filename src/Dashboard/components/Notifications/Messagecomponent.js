import React from 'react';

import { H6, Listgroupimg, Listgroupitem, Listgroupitembutton, Listgroupspan, P, Time } from '../../styles/notifications'


function Messagecomponent(props) {
    return (
        <React.Fragment>
            {props.dropdown ? (
            <Listgroupitem>
                <Listgroupspan className={[`thumb-sm`].join(' ')}>
                    <Listgroupimg className="rounded-circle" src={props.img} alt="..." />
                    <i className={`status status-bottom ${props.online}`} />
                </Listgroupspan>
                <Time className={"text-link help float-right"}>{props.time}</Time>
                <H6 className={`m-0 ${props.h6class}`}>{props.name}</H6>
                <P className={"deemphasize text-ellipsis m-0"}>{props.message}</P>
            </Listgroupitem>
            ) : (
                <Listgroupitembutton>
                    <Listgroupspan className={[`thumb-sm`].join(' ')}>
                        <Listgroupimg className="rounded-circle" src={props.img} alt="..." />
                        <i className={`status status-bottom ${props.online}`} />
                    </Listgroupspan>
                    <Time className={"text-link help float-right"}>{props.time}</Time>
                    <H6 className={`m-0 ${props.h6class}`}>{props.name}</H6>
                    <P className={"deemphasize text-ellipsis m-0"}>{props.message}</P>
                </Listgroupitembutton>
            )
        }
        </React.Fragment>
    )
}

export default Messagecomponent
