import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  NavItem,
  NavLink,
  ButtonGroup,
  Fade,
} from "react-bootstrap";
import Notifications from "../Notifications/Notifications";
import PowerIcon from "../Icons/PowerIcon/PowerIcon.js";
import SettingsIcon from "../Icons/SettingsIcon/SettingsIcon.js";
import BurgerIcon from "../Icons/BurgerIcon/BurgerIcon.js";

import * as actionType from "../../../constants/actionTypes";
import decode from 'jwt-decode';
import {
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../../actions/navigation";

import './styles.css'


import { Alert, Headericon, Headerroot, Inputaddon, Navbarform, Searchcollapse, Notificationswrapper, Navitem, Dropdownmenu, Imagecomponent, Details, Text, Divider, Notificationsmenu, Inputgrouptext, Inputcomponent, Navcomponent, Formcomponent, Dropdowntoggle, Badgecomponents, Dropdowncomponent, Navlink, Avatarimg, Dropdownitem, Buttoncomponent, H6, Badgenotification, Detailscomponent, Alertbutton, Formgroup, Inputgroup, Inputgroupaddon, Message, Span } from "../../../styles/header";
import Selectcomponent from "./select";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleMessagesDropdown = this.toggleMessagesDropdown.bind(this);
    this.toggleSupportDropdown = this.toggleSupportDropdown.bind(this);
    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

    this.state = {
      visible: true,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      showPopup: false,
      user: null,
    };
  }

  componentDidMount() {
    const token = this.state.user?.access_token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    this.setState({ user: JSON.parse(localStorage.getItem('profile')) });
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: false, //!this.state.notificationsOpen,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
    });
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  doLogout() {
    this.props.dispatch({ type: actionType.LOGOUT });
    this.props.history.push('/');
    this.setState({user: null});
  }

  toggleMessagesDropdown() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    });
  }

  toggleSupportDropdown() {
    this.setState({
      supportOpen: !this.state.supportOpen,
      messagesOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    });
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
      messagesOpen: false,
      supportOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    });
  }

  toggleAccountDropdown() {
    this.setState({
      accountOpen: !this.state.accountOpen,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      notificationsOpen: false,
    });
  }

  toggleSidebar() {
    this.props.sidebarVisibility == "show"
      ? this.toggleVisibilitySidebar("hide")
      : this.toggleVisibilitySidebar("show");
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    return (
      <Headerroot className={`d-print-none main-navbar`}>
        
        <Alert
          dismissible
          onClose={() => this.setState({showPopup: !this.state.showPopup})}
          style={{display: this.state.showPopup ? 'none' : ''}}
        >
          Check out Light Blue{" "}
          <Alertbutton
            className="btn-link"
            onClick={this.toggleSettingsDropdown}
          >
            <Headericon />
          </Alertbutton>
          {" "}on the right!
        </Alert>
        
        {/*
        <Searchcollapse
          className={` ml-lg-0 mr-md-`}
          
        >
          <Navbarform
            className={`${
              this.state.searchFocused ? 'navbarFormFocused' : ""
            }`}
          >
            <Inputaddon addontype="prepend">
              <Inputgrouptext>
                <i className="fa fa-search" />
                
              </Inputgrouptext>
            </Inputaddon>
            <Inputcomponent
              id="search-input-2"
              placeholder="Search..."
              className="input-transparent"
              onFocus={() => this.setState({ searchFocused: true })}
              onBlur={() => this.setState({ searchFocused: false })}
            />
          </Navbarform>
        </Searchcollapse>
        <Formcomponent className="d-md-down-none mr-3 ml-3" inline>
          <Formgroup>
            <Inputgroup className="input-group-no-border">
              <Inputgroupaddon addontype="prepend">
                <Inputgrouptext>
                  <SearchIconWhite />
                </Inputgrouptext>
              </Inputgroupaddon>
              <Inputcomponent
                id="search-input"
                className="input-transparent"
                placeholder="Search Dashboard"
              />
            </Inputgroup>
          </Formgroup>
        </Formcomponent>
        */}
        <Navcomponent className="ml-md-0 d-flex nav-responsive">
          <Notificationsmenu
            as={NavItem}
            id="basic-nav-dropdown"
            style={{ padding: '0 12px' }}
          >
            <Dropdowntoggle as={NavLink} style={{ color: "#3979F6", padding: 0 }} onClick={this.toggleNotifications}>
              {/*alt={this.state.user?.info.user.name} src={this.state.user?.info.user.imageUrl} roundedCircle*/}
              <div className="rounded-circle bg-primary text-white align-middle align-items-center justify-content-center d-flex mr-2" style={{width: '2.3rem', height: '2.3rem'}}>{this.state.user?.info.user.name.charAt(0)}</div>
              <h5 className="mb-0">{this.state.user?.info.user.name}</h5>
              {/* 
              <Badgecomponents  color="danger">
                9
              </Badgecomponents>
              */}
            </Dropdowntoggle>
            <Notificationswrapper
              show={this.state.notificationsOpen}
              className={` py-0 animate__animated animate__faster animate__fadeInUp`}
            >
              <Notifications />
            </Notificationswrapper>
          </Notificationsmenu>
          {/* 
          <Navitem className="d-lg-none d-md-block d-sm-none">
            <Navlink
              onClick={this.toggleSearchOpen}
              href="#"
            >
              <SearchIcon />
            </Navlink>
          </Navitem>
          <Dropdowncomponent
            className="d-none d-sm-block"
            as={NavItem}
            onClick={this.toggleMessagesDropdown}
          >
            <Dropdowntoggle as={NavLink} className={` text-white`}>
              <MessageIcon />
            </Dropdowntoggle>
            <Dropdownmenu show={this.state.messagesOpen} className={"messages"} style={{transform: "translate3d(-209px, 0px, 0px)"}}>
              <Dropdownitem>
                <Imagecomponent  src={sender1} alt="" />
                <Details >
                  <div>Jane Hew</div>
                  <Text>Hey, John! How is it going? ...</Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                <Imagecomponent  src={sender2} alt="" />
                <Details >
                  <div>Alies Rumiancaŭ</div>
                  <Text >
                    I will definitely buy this template
                  </Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                <Imagecomponent  src={sender3} alt="" />
                <Details >
                  <div>Michał Rumiancaŭ</div>
                  <Text >
                    Is it really Lore ipsum? Lore ...
                  </Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                <a href="#" className="text-white">
                  See all messages <i className="fa fa-arrow-right" />
                </a>
              </Dropdownitem>
            </Dropdownmenu>
          
          </Dropdowncomponent>
          */}
          <Divider className={` d-none d-sm-block`} />
          <Dropdowncomponent
            className="d-none d-sm-block"
            as={NavItem}
            onClick={this.toggleSettingsDropdown}
          >
            <Dropdowntoggle as={NavLink} className={` text-white`}>
              <SettingsIcon addId='header-settings' />
            </Dropdowntoggle>
            <Dropdownmenu show={this.state.settingsOpen} className={"settings"} style={{transform: "translate3d(0px, 0px, 0px)"}}>
              <H6>Sidebar on the</H6>
              <ButtonGroup size="sm">
                <Buttoncomponent
                  color="primary"
                  onClick={() => this.moveSidebar("left")}
                  className={
                    this.props.sidebarPosition === "left" ? "active" : ""
                  }
                >
                  Left
                </Buttoncomponent>
                <Buttoncomponent
                  color="primary"
                  onClick={() => this.moveSidebar("right")}
                  className={
                    this.props.sidebarPosition === "right" ? "active" : ""
                  }
                >
                  Right
                </Buttoncomponent>
              </ButtonGroup>
              <H6 className="mt-2">Sidebar</H6>
              <ButtonGroup size="sm">
                <Buttoncomponent
                  color="primary"
                  onClick={() => this.toggleVisibilitySidebar("show")}
                  className={
                    this.props.sidebarVisibility === "show" ? "active" : ""
                  }
                >
                  Show
                </Buttoncomponent>
                <Buttoncomponent
                  color="primary"
                  onClick={() => this.toggleVisibilitySidebar("hide")}
                  className={
                    this.props.sidebarVisibility === "hide" ? "active" : ""
                  }
                >
                  Hide
                </Buttoncomponent>
              </ButtonGroup>
            </Dropdownmenu>
          </Dropdowncomponent>
          <Selectcomponent state={this.state} toggleSupportDropdown={this.toggleSupportDropdown} />
          <NavItem>
            <Navlink
              onClick={this.doLogout}
              className={`text-white`}
              href="#"
            >
              <PowerIcon />
            </Navlink>
          </NavItem>
          <Navitem className="d-md-none">
            <Navlink
              onClick={this.toggleSidebar}
              className={`text-white`}
              href="#"
            >
            <BurgerIcon />
            </Navlink>
          </Navitem>
        </Navcomponent>
      </Headerroot>
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
