import React from 'react'
import {
    NavItem,
    NavLink,
} from "react-bootstrap";
import BellIcon from "../Icons/BellIcon/BellIcon";
import { Alert, Headericon, Headerroot, Inputaddon, Navbarform, Searchcollapse, Notificationswrapper, Navitem, Dropdownmenu, Imagecomponent, Details, Text, Divider, Notificationsmenu, Inputgrouptext, Inputcomponent, Navcomponent, Formcomponent, Dropdowntoggle, Badgecomponents, Dropdowncomponent, Navlink, Avatarimg, Dropdownitem, Buttoncomponent, H6, Badgenotification, Detailscomponent, Alertbutton, Formgroup, Inputgroup, Inputgroupaddon, Message, Span } from "../../../styles/header";

const Main = ({ color, classi, text, link }) => {
    return (
        <Dropdownitem href={link}>
            <Badgenotification color={color}>
                <i className={classi} />
            </Badgenotification>
            <Detailscomponent>{text}</Detailscomponent>
        </Dropdownitem>
    )
}

function Selectcomponent({ toggleSupportDropdown, state }) {
    return (
        <Dropdowncomponent
            className="d-none d-sm-block"
            as={NavItem}
            onClick={toggleSupportDropdown}
        >
            <Dropdowntoggle as={NavLink} className={` text-white`}>
                <BellIcon />
                <Message />
            </Dropdowntoggle>
            <Dropdownmenu className={"support"} show={state.supportOpen} style={{ transform: "translate3d(-199px, 0px, 0px)" }}>
                <Main color="primary" classi="far fa-map" link="/dash/app/corona" text="Check out the Corona map" />
                <Main color="primary" classi="fas fa-cloud" link="/dash/app/weather" text="Check out the Weather map" />
                <Main color="primary" classi="fas fa-table" link="/dash/app/tables" text="Check out the Coin Table" />
                <Main color="primary" classi="fab fa-bitcoin" link="/dash/app/crypto" text="Check out the Coin tracker" />
                <Main color="primary" classi="fas fa-calendar-week" link="/dash/app/calendar" text="Check out the Calendar" />
                <Main color="primary" classi="fas fa-video" link="/dash/app/jitsi" text="Check out Jitsi" />
                <Main color="primary" classi="far fa-list-alt" link="/dash/app/quiz" text="Check out the Quiz" />
                <Main color="primary" classi="fas fa-list-ol" link="/dash/app/todolist" text="Check out the Todolist" />
                <Main color="primary" classi="fas fa-comment-alt" link="/dash/app/chat" text="Check out the Chat" />
                <Main color="primary" classi="fas fa-blog" link="/dash/app/posts" text="Check out the Posts" />
                <Main color="primary" classi="fas fa-chart-pie" link="/dash/app/components/charts" text="Check out the Charts" />
            </Dropdownmenu>
        </Dropdowncomponent>
    )
}

export default Selectcomponent
