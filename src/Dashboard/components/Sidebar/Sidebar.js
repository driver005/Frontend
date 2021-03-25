import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Progress, Alert} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {dismissAlert} from '../../actions/alerts';
import LinksGroup from './LinksGroup/LinksGroup';

import {changeActiveSidebarItem} from '../../actions/navigation';
import {logoutUser} from '../../actions/user';
import HomeIcon from '../Icons/HomeIcon/HomeIcon.js';
import TypographyIcon from '../Icons/TypographyIcon/TypographyIcon.js';
import TablesIcon from '../Icons/TablesIcon/TablesIcon.js';
import NotificationsIcon from '../Icons/NotificationsIcon/NotificationsIcon.js';
import ComponentsIcon from '../Icons/ComponentsIcon/ComponentsIcon.js';
import { A, H5, Header, Nav, Span, Ul, Labelul, Labela, Labelspan, I, Projectdiv, Projectalert, Projectprogress, Projectspan, Projectsmall, } from '../../styles/sidebar';



class Sidebar extends React.Component {
    static propTypes = {
        sidebarStatic: PropTypes.bool,
        sidebarOpened: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
        activeItem: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }).isRequired,
    };

    static defaultProps = {
        sidebarStatic: false,
        activeItem: '',
    };

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    componentDidMount() {
        this.element.addEventListener('transitionend', () => {
            if (this.props.sidebarOpened) {
                this.element.classList.add('open');
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
            if (nextProps.sidebarOpened) {
                this.element.style.height = `${this.element.scrollHeight}px`;
            } else {
                this.element.classList.remove('open');
                setTimeout(() => {
                    this.element.style.height = '';
                }, 0);
            }
        }
    }

    dismissAlert(id) {
        this.props.dispatch(dismissAlert(id));
    }

    doLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <Nav
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <Header>
                    <A href="https://demo.flatlogic.com/light-blue-react/">Light <Span
                        className="fw-bold">Blue</Span></A>
                </Header>
                <Ul>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName={<HomeIcon  />}
                        link="/app/main"
                        index="main"
                    />
                    <H5>TEMPLATE</H5>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Typography"
                        isHeader
                        iconName={<TypographyIcon />}
                        link="/app/typography"
                        index="core"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Tables Basic"
                        isHeader
                        iconName={<TablesIcon  />}
                        link="/app/tables"
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Notifications"
                        isHeader
                        iconName={<NotificationsIcon />}
                        link="/app/notifications"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Calendar"
                        isHeader
                        iconName={<NotificationsIcon />}
                        link="/app/calendar"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Jitsi"
                        isHeader
                        iconName={<NotificationsIcon />}
                        link="/app/jitsi"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Quiz"
                        isHeader
                        iconName={<NotificationsIcon />}
                        link="/app/quiz"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Todolist"
                        isHeader
                        iconName={<NotificationsIcon />}
                        link="/app/todolist"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Components"
                        isHeader
                        iconName={<ComponentsIcon />}
                        link="/app/components"
                        index="components"
                        childrenLinks={[
                            {
                                header: 'Charts', link: '/app/components/charts',
                            },
                            {
                                header: 'Icons', link: '/app/components/icons',
                            },
                            {
                                header: 'Maps', link: '/app/components/maps',
                            },
                        ]}
                    />
                </Ul>
                <H5>
                    LABELS
                    {/* eslint-disable-next-line */}
                </H5>
                {/* eslint-disable */}
                <Labelul >
                    <li>
                        <Labela href="#">
                            <I className="fa fa-circle text-success ml-2"/>
                            <Labelspan >My Recent</Labelspan>
                        </Labela>
                    </li>
                    <li>
                        <Labela href="#">
                            <I className="fa fa-circle text-primary ml-2"/>
                            <Labelspan >Starred</Labelspan>
                        </Labela>
                    </li>
                    <li>
                        <Labela href="#">
                            <I className="fa fa-circle text-danger ml-2"/>
                            <Labelspan >Background</Labelspan>
                        </Labela>
                    </li>
                </Labelul>
                {/* eslint-enable */}
                <H5 >
                    PROJECTS
                </H5>
                <Projectdiv >
                    {this.props.alertsList.map(alert => // eslint-disable-line
                        <Projectalert
                            key={alert.id}
                            color="transparent"
                            isOpen={true} // eslint-disable-line
                            toggle={() => {
                                this.dismissAlert(alert.id);
                            }}
                        >
                            <Projectspan>{alert.title}</Projectspan><br/>
                            <Projectprogress className={`bg-subtle-blue progress-xs mt-2 mb-1`} color={alert.color}
                                      value={alert.value}/>
                            <Projectsmall>{alert.footer}</Projectsmall>
                        </Projectalert>,
                    )}
                </Projectdiv>
            </Nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
        alertsList: store.alerts.alertsList,
        activeItem: store.navigation.activeItem,
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
