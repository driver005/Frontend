import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import UIIcons from '../../pages/components/icons/Icons';
import UINotifications from '../../pages/notifications/Notifications';
import TablesStatic from '../../pages/tables/static/Static';
import MapsGoogle from '../../pages/components/maps/google/Google';
import CoreTypography from '../../pages/typography/Typography';
import Charts from '../../pages/components/charts/Charts';
import Dashboard from '../../pages/dashboard/Dashboard';
import Calendar from '../../pages/calendar/Calendar'
import Quizcomponent from '../../pages/quiz/Quiz'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory/BreadcrumbHistory';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import { Main, Wrap } from '../../styles/layout';
import Jitsi from '../../pages/jitsi/Jitsi';
import Todolist from '../../pages/todolist/Todolist';


class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }


  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div
        className={[
          'sidebar-' + this.props.sidebarPosition,
          'sidebar-' + this.props.sidebarVisibility,
        ].join(' ')}
      >
        <Wrap className={"wrap"}>
          <Header />
          {/* <Chat chatOpen={this.state.chatOpen} /> */}
          {/* <Helper /> */}
          <Sidebar />
          <Hammer onSwipe={this.handleSwipe}>
            <Main>
              <BreadcrumbHistory url={this.props.location.pathname} />
              {// <TransitionGroup>
              //   <CSSTransition
              //     key={this.props.location.key}
              //     classNames="fade"
              //     timeout={200}
              //   >
              //   </CSSTransition>
              // </TransitionGroup>
              }
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/components/icons" exact component={UIIcons} />
                    <Route path="/app/notifications" exact component={UINotifications} />
                    <Route path="/app/components/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route path="/app/calendar" exact component={Calendar} />
                    <Route path="/app/jitsi" exact component={Jitsi} />
                    <Route path="/app/quiz" exact component={Quizcomponent} />
                    <Route path="/app/todolist" exact component={Todolist} />
                    <Route path="/app/components/maps" exact component={MapsGoogle} />
                    <Route path="/app/typography" exact component={CoreTypography} />
                  </Switch>
              <footer>
                Light Blue React Template - React admin template made by <a href="https://flatlogic.com" >Flatlogic</a>
              </footer>
            </Main>
          </Hammer>
        </Wrap>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
