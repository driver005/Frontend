import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';


import a3 from '../../../assets/people/a3.jpg';
import a5 from '../../../assets/people/a5.jpg';
import { Buttonnotification } from '../../../styles/button';
import { Buttoncomponent } from '../../../styles/header';
import { Listgroup, Listgroupimg, Listgroupitem, Listgroupspan, P, Time, A } from '../../../styles/notifications';

class NotificationsDemo extends React.Component {
  render() {
    return (
      <Listgroup className={['thin-scroll'].join(' ')}>
        <Listgroupitem >
          <Listgroupspan className={['image thumb-sm'].join(' ')}>
            <Listgroupimg className="rounded-circle" src={a3} alt="..." />
          </Listgroupspan>
          <P className="m-0 overflow-hidden">
            1 new user just signed up! Check out
            {/* eslint-disable */}
            &nbsp;<A href="#">Monica Smith</A>'s account.
            {/* eslint-enable */}
            <Time className="help-block m-0">
              2 mins ago
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['icon thumb-sm'].join(' ')}>
            <i className="glyphicon fa fa-upload" />
          </Listgroupspan>
          <P className="text-ellipsis m-0">
            2.1.0-pre-alpha just released.
            <Time className="help-block m-0">
              5h ago
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['icon thumb-sm'].join(' ')}>
            <i className="fa fa-bolt fa-lg" />
          </Listgroupspan>
          <P className="text-ellipsis m-0 overflow-hidden">
            Server load limited.
            <Time className="help-block m-0">
              7h ago
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['image thumb-sm'].join(' ')}>
            <Listgroupimg className="rounded-circle" src={a5} alt="..." />
          </Listgroupspan>
          <P className="m-0 overflow-hidden">
            {/* eslint-disable */}
            User <A href="#">Jeff</A> registered
            {/* eslint-enable */}
            &nbsp;
            <Buttonnotification size="xs" color="success" className="mr-1">Allow</Buttonnotification>
            <Buttonnotification size="xs" color="danger">Deny</Buttonnotification>
            <Time className="help-block m-0">
              12:18 AM
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['icon thumb-sm'].join(' ')}>
            <i className="fa fa-shield fa-lg" />
          </Listgroupspan>
          <P className="m-0 overflow-hidden">
            {/* eslint-disable */}
            Instructions for changing your Envato Account password. Please
            check your account <a href="#">security page</a>.
            {/* eslint-enable */}
            <Time className="help-block m-0">
              12:18 AM
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['icon thumb-sm'].join(' ')}>
            <i className="fa fa-facebook" />
          </Listgroupspan>
          <P className="text-ellipsis m-0">
            New <strong>76</strong> facebook likes received.
            <Time className="help-block m-0">
              15 Apr 2014
            </Time>
          </P>
        </Listgroupitem>
        <Listgroupitem >
          <Listgroupspan className={['icon thumb-sm'].join(' ')}>
            
            <i className="fa fa-circle-o text-white" />
            
          </Listgroupspan>
          <P className="text-ellipsis m-0">
            Dark matter detected.
            <Time className="help-block m-0">
              15 Apr 2014
            </Time>
          </P>
        </Listgroupitem>
      </Listgroup>
    );
  }
}

export default NotificationsDemo;
