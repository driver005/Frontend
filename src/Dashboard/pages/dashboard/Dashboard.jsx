import React from "react";
import { Row, Col, ProgressBar, Table, Form, Button } from "react-bootstrap";
import { IoLocationOutline } from 'react-icons/io5'
import Widget from "../../components/Widget/Widget";
import "./styles.css"
import {
    Colcomponent,
    Statusstrong,
    Rowcomponent,
    H5title, Spantitle,
    Span
} from "../../../styles/dashboard";
import { World } from "../../components/Charts";
import { ParentSize } from "@visx/responsive";
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
