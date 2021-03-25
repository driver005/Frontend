import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import a1 from '../../../assets/people/a1.jpg';
import a2 from '../../../assets/people/a2.jpg';
import a4 from '../../../assets/people/a4.jpg';
import a6 from '../../../assets/people/a6.jpg';
import avatar from '../../../assets/avatar.png';
import { H6, P, Listgroupimg, Listgroupitem, Listgroupspan, Time } from '../../../styles/notifications';
import Messagecomponent from '../Messagecomponent';


function Message(props) {
  return (
  <Listgroupitem>
    <Listgroupspan className={[`thumb-sm`].join(' ')}>
      <Listgroupimg className="rounded-circle" src={props.img} alt="..." />
      <i className={`status status-bottom ${props.online}`} />
    </Listgroupspan>
    <Time className={"text-link help float-right"}>{props.time}</Time>
    <H6 className={`m-0 ${props.h6class}`}>{props.name}</H6>
    <P className={"deemphasize text-ellipsis m-0"}>{props.message}</P>
  </Listgroupitem>
  )
}

function MessagesDemo(props) {
  return (
    <React.Fragment>
      <Messagecomponent
        dropdown={props.dropdown || false}
        img={a2} 
        online={'bg-success'} 
        time={"10 sec ago"} 
        h6class={`fw-bold mb-1`} 
        name={"Chris Gray"}
        message={"Hey! What's up? So many times since we"}
      />
      <Messagecomponent
        dropdown={props.dropdown || false}
        img={avatar} 
        online={'bg-success'} 
        time={"2 min ago"} 
        h6class={`mb-1`} 
        name={"Jamey Brownlow"}
        message={"Good news coming tonight. Seems they agreed to proceed"}
      />
      <Messagecomponent
        dropdown={props.dropdown || false} 
        img={a1} 
        online={'bg-warning'} 
        time={"9 min ago"} 
        h6class={`mb-1`} 
        name={"Jamey Brownlow"}
        message={"Good news coming tonight. Seems they agreed to proceed"}
      />
      <Messagecomponent
        dropdown={props.dropdown || false} 
        img={avatar} 
        online={'bg-danger'} 
        time={"12:56 AM"} 
        h6class={`mb-1`} 
        name={"Jamey Brownlow"}
        message={"Good news coming tonight. Seems they agreed to proceed"}
      />
      <Messagecomponent
        dropdown={props.dropdown || false}
        img={a4} 
        online={'bg-primary'} 
        time={"Yesterday"} 
        h6class={`mb-1`} 
        name={"Jamey Brownlow"}
        message={"Good news coming tonight. Seems they agreed to proceed"}
      />
      <Messagecomponent
        dropdown={props.dropdown || false}
        img={a6} 
        online={'bg-success'} 
        time={"Apr 23"} 
        h6class={`mb-1`} 
        name={"Freda Edison"}
        message={"Hey what's up? Me and Monica going for a lunch somewhere. Wanna join?"}
      />
    </React.Fragment>
  );
}


export default MessagesDemo;
