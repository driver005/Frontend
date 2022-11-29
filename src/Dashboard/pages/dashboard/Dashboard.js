import React from "react";
import { Row, Col, Progress, Table, Form, Button } from "react-bootstrap";
import { IoLocationOutline } from 'react-icons/io5'
import Widget from "../../components/Widget/Widget";
import "./styles.css"

import Calendar from "./components/calendar/Calendar";
import Rickshaw from "./components/rickshaw/Rickshaw";

import AnimateNumber from "react-animated-number";

import peopleA1 from "../../assets/people/a1.jpg";
import peopleA2 from "../../assets/people/a2.jpg";
import peopleA5 from "../../assets/people/a5.jpg";
import peopleA4 from "../../assets/people/a4.jpg";
import { Colcomponent, Listgroup, Statusstrong, Rowcomponent, Inputcomponent, Numberdiv, H1, Small, H5title, Spantitle, Statitem, P, Span, Rowdiv, Coldiv, H6, Namep, Progresscomponents, Numberspan, H6settings, Inputdiv, Inputbutton, H6title, Statsrow, statitem, H6item, Pnormal, Newspan, Undopadding, Footer, Footerinput, H3, Marketp, Marketspan, Tablesdiv, Tablecomponent, TH, ABCcheckbox, Inputcheckbox, TD, Rickshawdiv, Listgroupcalendar, Calendarbutton, Timespan, } from "../../../styles/dashboard";
import Notifications from "../../components/Notifications/Notifications";
import MessagesDemo from "../../components/Notifications/notifications-demo/Messages";
import { World } from "../../components/Charts";
import { ParentSize } from "@visx/responsive";
import Littlecomponents from "../../components/Dashboard/Littlecomponents";
import Dash from "../../components/Dashboard";
import { Link } from "react-router-dom";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graph: null,
            checkedArr: [false, false, false],
        };
        this.checkTable = this.checkTable.bind(this);
    }

    checkTable(id) {
        let arr = [];
        if (id === 0) {
            const val = !this.state.checkedArr[0];
            for (let i = 0; i < this.state.checkedArr.length; i += 1) {
                arr[i] = val;
            }
        } else {
            arr = this.state.checkedArr;
            arr[id] = !arr[id];
        }
        if (arr[0]) {
            let count = 1;
            for (let i = 1; i < arr.length; i += 1) {
                if (arr[i]) {
                    count += 1;
                }
            }
            if (count !== arr.length) {
                arr[0] = !arr[0];
            }
        }
        this.setState({
            checkedArr: arr,
        });
    }

    render() {
        return (
            <div>
                <H1 className="page-title">
                    Dashboard &nbsp;
                </H1>

                <Rowcomponent>
                    <Colcomponent lg={7}>
                        <Widget className="bg-transparent w-100" bodyClass="height-65vh">
                            <ParentSize>{({ width, height }) => <World width={width} height={height} />}</ParentSize>
                        </Widget>
                    </Colcomponent>
                    <Colcomponent lg={1} />
                    <Colcomponent lg={4}>
                        <Widget
                            className="bg-transparent"
                            title={
                                <H5title>
                                    {" "}
                                    Map
                                    <Spantitle className="fw-semi-bold">&nbsp;Statistics</Spantitle>
                                </H5title>
                            }
                            close
                        >
                            <P>
                                <Span className="circle bg-default text-white">
                                    <IoLocationOutline />
                                </Span>{" "}
                                &nbsp; 146 Countries, 2759 Cities
                            </P>
                            <P>
                                {"Population: "}<Statusstrong>Almost 8 billon people</Statusstrong>
                            </P>
                            <Button as={Link} to='/dash/app/components/charts' variant="outline-primary" >
                                Check out more cool statistics
                            </Button>
                        </Widget>
                    </Colcomponent>
                </Rowcomponent>
                <Dash />
            </div>
        );
    }
}

export default Dashboard;
