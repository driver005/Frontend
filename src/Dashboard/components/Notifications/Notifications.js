import React from 'react';
import {
  ListGroup
} from 'react-bootstrap';
import classnames from 'classnames';
import NotificationsDemo from './notifications-demo/Notifications';
import NewNotificationsDemo from './notifications-demo/NewNotifications';
import MessagesDemo from './notifications-demo/Messages';
import ProgressDemo from './notifications-demo/Progress';
import { Buttongroup, Header, Headerdiv, Headerstrong, Buttoncomponent, Notificationscomponent, Footer, Syncbutton, Footerspan } from '../../../styles/notifications';



class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
    };
  }

  changeNotificationsTab(tab) {
    this.setState({
      notificationsTabSelected: tab,
      newNotifications: null,
    });
  }

  loadNotifications() {
    this.setState({
      isLoad: true,
    });

    setTimeout(() => {
      this.setState({
        newNotifications: (<NotificationsDemo />),
        isLoad: false,
      });
    }, 1500);
  }

  render() {
    let notificationsTab;

    switch (this.state.notificationsTabSelected) {
      case 1:
        notificationsTab = (<NotificationsDemo />);
        break;
      case 2:
        notificationsTab = (<ListGroup className={['thin-scroll'].join(' ')}><MessagesDemo dropdown/></ListGroup>
          );
        break;
      case 3:
        notificationsTab = (<ProgressDemo />);
        break;
      default:
        notificationsTab = (<NotificationsDemo />);
        break;
    }
    return (
      <Notificationscomponent className={` navbar-notifications`}>
        <Header className={['card-header'].join(' ')}>
          <Headerdiv className="text-center mb-sm">
            <Headerstrong>You have 13 notifications</Headerstrong>
          </Headerdiv>
          <Buttongroup >
            <Buttoncomponent variant="outline-primary" size="sm" onClick={() => this.changeNotificationsTab(1)} active={this.state.notificationsTabSelected === 1}>Notifications</Buttoncomponent>
            <Buttoncomponent variant="outline-primary" size="sm" onClick={() => this.changeNotificationsTab(2)} active={this.state.notificationsTabSelected === 2}>Messages</Buttoncomponent>
            <Buttoncomponent variant="outline-primary" size="sm" onClick={() => this.changeNotificationsTab(3)} active={this.state.notificationsTabSelected === 3}>Progress</Buttoncomponent>
          </Buttongroup>
        </Header>
        {this.state.newNotifications || notificationsTab}
        <Footer className={['text-sm', 'card-footer'].join(' ')}>
          <Syncbutton
            color="link"
            className={classnames({ disabled: this.state.isLoad }, 'btn-xs', 'float-right', 'py-0')}
            onClick={() => this.loadNotifications()}
            id="load-notifications-btn"
          >
            {this.state.isLoad ? <span><i className="fas fa-sync fa-spin" /> Loading...</span> : <i className="fas fa-sync" />}
          </Syncbutton>
          <Footerspan className="fs-mini">Synced at: 21 Apr 2014 18:36</Footerspan>
        </Footer>
      </Notificationscomponent>
    );
  }
}

export default Notifications;
