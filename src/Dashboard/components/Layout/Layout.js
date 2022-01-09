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
import Calendar from '../../pages/calendar/Calendar';
import Quizcomponent from '../../pages/quiz/Quiz';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory/BreadcrumbHistory';
import {
	openSidebar,
	closeSidebar,
	changeSidebarPosition,
	changeSidebarVisibility,
} from '../../../actions/navigation';
import { Main, Wrap, Div } from '../../../styles/layout';
import Jitsi from '../../pages/jitsi/Jitsi';
import Todolist from '../../pages/todolist/Todolist';
import Chat from '../../pages/chat/Chat';
import Post from '../../pages/posts/Posts';
import PageError from '../../../Errors/400';
import CoronaTracker from '../Coronamap';
import Crypto from '../Crypto';
import DataTable from '../../pages/Table';
import Weather from '../Weather';
import Footer from '../../../components/Footer/Footer';

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
					<Hammer onSwipe={this.handleSwipe}>
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
									<Switch>
										<Route
											path={`${this.props.match.path}`}
											exact
											render={() => (
												<Redirect to={`${this.props.match.path}app/main`} />
											)}
										/>
										<Route
											path={`${this.props.match.path}app`}
											exact
											render={() => (
												<Redirect to={`${this.props.match.path}app/main`} />
											)}
										/>
										<Route
											path={`${this.props.match.path}app/main`}
											exact
											render={() => (
												<Redirect
													to={`${this.props.match.path}app/main/dashboard`}
												/>
											)}
										/>
										<Route
											path={`${this.props.match.path}app/main/dashboard`}
											component={Dashboard}
										/>
										<Route
											path={`${this.props.match.path}app/components/icons`}
											component={UIIcons}
										/>
										<Route
											path={`${this.props.match.path}app/notifications`}
											component={UINotifications}
										/>
										<Route
											path={`${this.props.match.path}app/components/charts`}
											component={Charts}
										/>
										<Route
											path={`${this.props.match.path}app/tables`}
											component={DataTable}
										/>
										<Route
											path={`${this.props.match.path}app/calendar`}
											component={Calendar}
										/>
										<Route
											path={`${this.props.match.path}app/jitsi`}
											component={Jitsi}
										/>
										<Route
											path={`${this.props.match.path}app/quiz`}
											component={Quizcomponent}
										/>
										<Route
											path={`${this.props.match.path}app/todolist`}
											component={Todolist}
										/>
										<Route
											path={`${this.props.match.path}app/chat`}
											component={Chat}
										/>
										<Route
											path={`${this.props.match.path}app/posts`}
											component={Post}
										/>
										<Route
											path={`${this.props.match.path}app/components/maps`}
											component={MapsGoogle}
										/>
										<Route
											path={`${this.props.match.path}app/corona`}
											component={CoronaTracker}
										/>
										<Route
											path={`${this.props.match.path}app/weather`}
											component={Weather}
										/>
										<Route
											path={`${this.props.match.path}app/crypto`}
											component={Crypto}
										/>
										<Route
											path={`${this.props.match.path}app/typography`}
											component={CoreTypography}
										/>
										<Route
											path='*'
											exact
											render={() => <Redirect to={`/notfound`} />}
										/>
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						</Main>
					</Hammer>
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
