import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Progress, Alert} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {dismissAlert} from '../../../actions/alerts';
import LinksGroup from './LinksGroup/LinksGroup';
import { BsChatSquare, IoCloseOutline, BiBitcoin, FcTodoList, AiOutlineLineChart, FaRegListAlt, BiVideo, BsCalendar, BiNotification, BiHomeAlt, FiFileText, FaTable, FaBlog, CgWebsite, RiMapLine } from 'react-icons/all'
import {changeActiveSidebarItem, changeSidebarVisibility} from '../../../actions/navigation';
import {logoutUser} from '../../../actions/user';
import { A, H5, Header, Nav, Span, Ul, Labelul, Labela, Labelspan, I, Projectdiv, Projectalert, Projectprogress, Projectspan, Projectsmall, MobileCloseButton, } from '../../styles/sidebar';
import teclab from '../../../images/Logo_VDI_teclab4_X1.jpg'


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
        this.mobilecloseaction = this.mobilecloseaction.bind(this);
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

    mobilecloseaction() {
        this.props.dispatch(changeSidebarVisibility("hide"));
    }

    render() {
        return (
            <Nav
                className={[
                    'sidebar-' + this.props.sidebarPosition,
                    'sidebar-' + this.props.sidebarVisibility,
                ].join(' ')}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <Header>
                    <A href="/">
                        <img height="50px" src={teclab} />
                        {/*<Span>TECLAB</Span>*/}
                    </A>
                </Header>
                <MobileCloseButton onClick={this.mobilecloseaction}>
                    <IoCloseOutline size="20" />
                </MobileCloseButton>
                <Ul>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName={<BiHomeAlt size="18" fill="#3979F6"  />}
                        link={`${this.props.match.path}app/main`}
                        index="main"
                    />
                    <H5>TEMPLATE</H5>
                   {/* <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Typography"
                        isHeader
                        iconName={<FiFileText size="18" stroke="#3979F6" />}
                        link={`${this.props.match.path}app/typography`}
                        index="core"
                   />*/}
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Corona Map"
                        isHeader
                        iconName={<RiMapLine size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/corona`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Weather Map"
                        isHeader
                        iconName={<RiMapLine size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/weather`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Coin Table"
                        isHeader
                        iconName={<FaTable size="18" fill="#3979F6"  />}
                        link={`${this.props.match.path}app/tables`}
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Crypto Coins"
                        isHeader
                        iconName={<BiBitcoin size="23" fill="#3979F6"  />}
                        link={`${this.props.match.path}app/crypto`}
                        index="ui"
                    />
                    {/*<LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Notifications"
                        isHeader
                        iconName={<BiNotification size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/notifications`}
                        index="ui"
                    />*/}
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Calendar"
                        isHeader
                        iconName={<BsCalendar size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/calendar`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Jitsi"
                        isHeader
                        iconName={<BiVideo size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/jitsi`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Quiz"
                        isHeader
                        iconName={<FaRegListAlt size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/quiz`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Todolist"
                        isHeader
                        iconName={<FcTodoList size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/todolist`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Chat"
                        isHeader
                        iconName={<BsChatSquare size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/chat`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Posts"
                        isHeader
                        iconName={<FaBlog size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/posts`}
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Charts"
                        isHeader
                        iconName={<AiOutlineLineChart size="18" fill="#3979F6" />}
                        link={`${this.props.match.path}app/components/charts`}
                        index="ui"
                    />
                    {/*<LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Components"
                        isHeader
                        iconName={<CgWebsite size="18"  fill="#3979F6" />}
                        link={`${this.props.match.path}app/components`}
                        index="components"
                        childrenLinks={[
                            {
                                header: 'Charts', link: `${this.props.match.path}app/components/charts`
                            },
                            {
                                header: 'Icons', link: `${this.props.match.path}app/components/icons`
                            },
                            {
                                header: 'Maps', link: `${this.props.match.path}app/components/maps`
                            },
                        ]}
                    />*/}
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
                {/* <H5 >
                    {this.props.alertsList.length > 0 ? 'PROJECTS' : ''}
                </H5>
                <Projectdiv >
                    {this.props.alertsList.map(alert => // eslint-disable-line
                        <Projectalert
                            key={alert.id}
                            color="transparent"
                            dismissible
                            onClose={() => {
                                this.dismissAlert(alert.id);
                            }}
                        >
                            <Projectspan>{alert.title}</Projectspan><br/>
                            <Projectprogress className={`bg-subtle-blue progress-xs mt-2 mb-1`} variant={alert.color}
                                    now={alert.value} animated={true} />
                            <Projectsmall>{alert.footer}</Projectsmall>
                        </Projectalert>,
                    )}
                </Projectdiv>*/}
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
