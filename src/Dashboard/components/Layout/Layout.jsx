import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import UIIcons from '../../pages/components/icons/Icons';
import UINotifications from '../../pages/notifications/Notifications';
import MapsGoogle from '../../pages/components/maps/google/Google';
import CoreTypography from '../../pages/typography/Typography';
import Charts from '../../pages/components/charts/Charts';
import Dashboard from '../../pages/dashboard/Dashboard';
import Calendar from '../../pages/calendar/Calendar';
import Quizcomponent from '../../pages/quiz/Quiz';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory/BreadcrumbHistory';
import {
    openSidebar,
    closeSidebar,
    changeSidebarVisibility,
} from '../../../actions/navigation';
import { Main, Wrap, Div } from '../../../styles/layout';
import Jitsi from '../../pages/jitsi/Jitsi';
import Todolist from '../../pages/todolist/Todolist';
import Chat from '../../pages/chat/Chat';
import Post from '../../pages/posts/Posts';
import CoronaTracker from '../Coronamap';
import Crypto from '../Crypto';
import DataTable from '../../pages/Table';
import Weather from '../Weather';
import { withRouter } from '../../../helper/withRouter';

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

    componentDidMount() {
        if (this.props.windowDimensions.width <= 570) {
            this.props.dispatch(changeSidebarVisibility('hide'));
        }
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
            <Div
                className={[
                    'sidebar-' + this.props.sidebarPosition,
                    'sidebar-' + this.props.sidebarVisibility,
                ].join(' ')}>
                <Wrap className={'wrap'}>
                    <Header />
                    {/* <Chat chatOpen={this.state.chatOpen} /> */}
                    {/* <Helper /> */}
                    <Sidebar
                        sidebarPosition={this.props.sidebarPosition}
                        sidebarVisibility={this.props.sidebarVisibility}
                        windowDimensions={this.props.windowDimensions}
                    />

                    <Main>
                        <BreadcrumbHistory url={this.props.location.pathname} />
                        {
                            // <TransitionGroup>
                            //   <CSSTransition
                            //     key={this.props.location.key}
                            //     classNames="fade"
                            //     timeout={200}
                            //   >
                            //   </CSSTransition>
                            // </TransitionGroup>
                        }
                        <TransitionGroup>
                            <CSSTransition
                                key={this.props.location.key}
                                classNames='fade'
                                timeout={200}>
                                <Routes location={`${this.props.location.pathname}/`}>
                                    <Route
                                        path={`/`}
                                        exact
                                        element={
                                            <Navigate to={`/dash/app/main/dashboard`} replace />
                                        }
                                    />
                                    <Route
                                        path={`/app`}
                                        exact
                                        element={
                                            <Navigate to={`/dash/app/main/dashboard`} replace />
                                        }
                                    />
                                    <Route
                                        path={`/app/main`}
                                        exact
                                        element={
                                            <Navigate
                                                to={`/dash/app/main/dashboard`}
                                                replace
                                            />
                                        }
                                    />
                                    <Route
                                        path={`/app/main/dashboard`}
                                        element={<Dashboard />}
                                    />
                                    <Route
                                        path={`/app/components/icons`}
                                        element={<UIIcons />}
                                    />
                                    <Route
                                        path={`/app/notifications`}
                                        element={<UINotifications />}
                                    />
                                    <Route
                                        path={`/app/components/charts`}
                                        element={<Charts />}
                                    />
                                    <Route
                                        path={`/app/tables`}
                                        element={<DataTable />}
                                    />
                                    <Route
                                        path={`/app/calendar`}
                                        element={<Calendar />}
                                    />
                                    <Route
                                        path={`/app/jitsi`}
                                        element={<Jitsi />}
                                    />
                                    <Route
                                        path={`/app/quiz`}
                                        element={<Quizcomponent />}
                                    />
                                    <Route
                                        path={`/app/todolist`}
                                        element={<Todolist />}
                                    />
                                    <Route
                                        path={`/app/chat`}
                                        element={<Chat />}
                                    />
                                    <Route
                                        path={`/app/posts`}
                                        element={<Post />}
                                    />
                                    <Route
                                        path={`/app/components/maps`}
                                        element={<MapsGoogle />}
                                    />
                                    <Route
                                        path={`/app/corona`}
                                        element={<CoronaTracker />}
                                    />
                                    <Route
                                        path={`/app/weather`}
                                        element={<Weather />}
                                    />
                                    <Route
                                        path={`/app/crypto`}
                                        element={<Crypto />}
                                    />
                                    <Route
                                        path={`/app/typography`}
                                        element={<CoreTypography />}
                                    />
                                    <Route
                                        path='*'
                                        exact
                                        render={() => <Navigate to={`/notfound`} />}
                                    />
                                </Routes>
                            </CSSTransition>
                        </TransitionGroup>
                    </Main>
                </Wrap>
            </Div>
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
