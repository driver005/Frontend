import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  UncontrolledAlert,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
} from "reactstrap";
import Notifications from "../Notifications/Notifications";
import PowerIcon from "../Icons/PowerIcon/PowerIcon.js";
import BellIcon from "../Icons/BellIcon/BellIcon";
import SettingsIcon from "../Icons/SettingsIcon/SettingsIcon.js";
import MessageIcon from "../Icons/MessageIcon/MessageIcon.js";
import BurgerIcon from "../Icons/BurgerIcon/BurgerIcon.js";
import SearchIcon from "../Icons/SearchIcon/SearchIcon.js";
import SearchIconWhite from "../Icons/SearchIconWhite/SearchIconWhite.js";

import { logoutUser } from "../../../actions/user";
import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../../actions/navigation";

import sender1 from "../../assets/1.png";
import sender2 from "../../assets/2.png";
import sender3 from "../../assets/3.png";

import avatar from "../../assets/people/a5.jpg";

import "animate.css";
import { Alert, Headericon, Headerroot, Inputaddon, Navbarform, Searchcollapse, Avatar, Notificationswrapper, Navitem, Dropdownmenu, Image, Details, Text, Divider, Notificationsmenu, Inputgrouptext, Inputcomponent, Navcomponent, Formcomponent, Dropdowntoggle, Badgecomponents, Dropdowncomponent, Navlink, Avatarimg, Dropdownitem, Buttoncomponent, H6, Badgenotification, Detailscomponent, Alertbutton, Formgroup, Inputgroup, Inputgroupaddon, Message, Span } from "../../styles/header";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
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
      notificationsOpen: false,
    };
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  toggleMessagesDropdown() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
    });
  }

  toggleSupportDropdown() {
    this.setState({
      supportOpen: !this.state.supportOpen,
    });
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleAccountDropdown() {
    this.setState({
      accountOpen: !this.state.accountOpen,
    });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar());
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
          className={` mr-5 d-lg-down-none animate__animated animate__bounceIn animate__delay-1s`}
        >
          Check out Light Blue{" "}
          <Alertbutton
            className="btn-link"
            onClick={() => this.setState({ settingsOpen: true })}
          >
            <Headericon />
          </Alertbutton>{" "}on the right!
        </Alert>
        <Searchcollapse
          className={` ml-lg-0 mr-md-`}
          isOpen={this.state.searchOpen}
        >
          <Navbarform
            className={`${
              this.state.searchFocused ? 'navbarFormFocused' : ""
            }`}
          >
            <Inputaddon addonType="prepend">
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
              <Inputgroupaddon addonType="prepend">
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

        <Navcomponent className="ml-md-0 d-flex nav-responsive">
          <Notificationsmenu
            nav
            isOpen={this.state.notificationsOpen}
            toggle={this.toggleNotifications}
            id="basic-nav-dropdown"
            style={{ marginRight: '1.5rem' }}
          >
            <Dropdowntoggle nav caret style={{ color: "#3979F6", padding: 0 }}>
              <Avatar
                className={`rounded-circle thumb-sm float-left`}
              >
                <Avatarimg src={avatar} alt="..." />
              </Avatar>
              <Span >Philip smith</Span>
              <Badgecomponents  color="danger">
                9
              </Badgecomponents>
            </Dropdowntoggle>
            <Notificationswrapper
              right
              className={` py-0 animate__animated animate__faster animate__fadeInUp`}
            >
              <Notifications />
            </Notificationswrapper>
          </Notificationsmenu>
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
            nav
            isOpen={this.state.messagesOpen}
            toggle={this.toggleMessagesDropdown}
          >
            <Dropdowntoggle nav className={` text-white`}>
              <MessageIcon />
            </Dropdowntoggle>
            <Dropdownmenu className={"messages"}>
              <Dropdownitem>
                <Image  src={sender1} alt="" />
                <Details >
                  <div>Jane Hew</div>
                  <Text>Hey, John! How is it going? ...</Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                <Image  src={sender2} alt="" />
                <Details >
                  <div>Alies Rumiancaŭ</div>
                  <Text >
                    I will definitely buy this template
                  </Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                <Image  src={sender3} alt="" />
                <Details >
                  <div>Michał Rumiancaŭ</div>
                  <Text >
                    Is it really Lore ipsum? Lore ...
                  </Text>
                </Details>
              </Dropdownitem>
              <Dropdownitem>
                {/* eslint-disable-next-line */}
                <a href="#" className="text-white">
                  See all messages <i className="fa fa-arrow-right" />
                </a>
              </Dropdownitem>
            </Dropdownmenu>
          </Dropdowncomponent>
          <Divider className={` d-none d-sm-block`} />
          <Dropdowncomponent
            className="d-none d-sm-block"
            nav
            isOpen={this.state.settingsOpen}
            toggle={this.toggleSettingsDropdown}
          >
            <Dropdowntoggle nav className={` text-white`}>
              <SettingsIcon addId='header-settings' />
            </Dropdowntoggle>
            <Dropdownmenu className={"settings"} >
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
          <Dropdowncomponent
            className="d-none d-sm-block"
            nav
            isOpen={this.state.supportOpen}
            toggle={this.toggleSupportDropdown}
          >
            <Dropdowntoggle nav className={` text-white`}>
              <BellIcon />
              <Message />
            </Dropdowntoggle>
            <Dropdownmenu className={"support"} right >
              <Dropdownitem>
                <Badgenotification color="danger">
                <i class="fas fa-bell" />
                </Badgenotification>
                <Detailscomponent>Check out this awesome ticket</Detailscomponent>
              </Dropdownitem>
              <Dropdownitem>
                <Badgenotification color="warning">
                  <i className="fa fa-question-circle" />
                </Badgenotification>
                <Detailscomponent>What is the best way to get ...</Detailscomponent>
              </Dropdownitem>
              <Dropdownitem>
                <Badgenotification color="success">
                  <i className="fa fa-info-circle" />
                </Badgenotification>
                <Detailscomponent>
                  This is just a simple notification
                </Detailscomponent>
              </Dropdownitem>
              <Dropdownitem>
                <Badgenotification color="info">
                  <i className="fa fa-plus" />
                </Badgenotification>
                <Detailscomponent>12 new orders has arrived today</Detailscomponent>
              </Dropdownitem>
              <Dropdownitem>
                <Badgenotification color="danger">
                  <i className="fa fa-tag" />
                </Badgenotification>
                <Detailscomponent>
                  One more thing that just happened
                </Detailscomponent>
              </Dropdownitem>
              <Dropdownitem>
                {/* eslint-disable-next-line */}
                <a href="#" className="text-white">
                  See all tickets <i className="fa fa-arrow-right" />
                </a>
              </Dropdownitem>
            </Dropdownmenu>
          </Dropdowncomponent>
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
