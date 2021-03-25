import React from "react";
import { Row, Col, Progress, Table, Label, Input } from "reactstrap";
import { IoLocationOutline } from 'react-icons/io5'
import Widget from "../../components/Widget/Widget";

import Calendar from "./components/calendar/Calendar";
import Map from "./components/am4chartMap/am4chartMap";
import Rickshaw from "./components/rickshaw/Rickshaw";

import AnimateNumber from "react-animated-number";

import peopleA1 from "../../assets/people/a1.jpg";
import peopleA2 from "../../assets/people/a2.jpg";
import peopleA5 from "../../assets/people/a5.jpg";
import peopleA4 from "../../assets/people/a4.jpg";
import { Colcomponent, Listgroup, Statusstrong, Rowcomponent, Inputcomponent, Numberdiv, H1, Small, H5title, Spantitle, Statitem, P, Span, Rowdiv, Coldiv, H6, Namep, Progresscomponents, Numberspan, H6settings, Inputdiv, Inputbutton, H6title, Statsrow, statitem, H6item, Pnormal, Newspan, Undopadding, Footer, Footerinput, H3, Marketp, Marketspan, Tablesdiv, Tablecomponent, TH, ABCcheckbox, Inputcheckbox, TD, Rickshawdiv, Listgroupcalendar, Calendarbutton, Timespan } from "../../styles/dashboard";
import Notifications from "../../components/Notifications/Notifications";
import MessagesDemo from "../../components/Notifications/notifications-demo/Messages";


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
          <Small>
            <Small>The Lucky One</Small>
          </Small>
        </H1>

        <Rowcomponent>
          <Colcomponent lg={7}>
            <Widget className="bg-transparent">
              <Map />
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
              settings
              refresh
              close
            >
              <P>
                {"Status: "}<Statusstrong>Live</Statusstrong>
              </P>
              <P>
                <Span className="circle bg-default text-white">
                  <IoLocationOutline />
                </Span>{" "}
                &nbsp; 146 Countries, 2759 Cities
              </P>
              <Rowdiv className="row progress-stats">
                <Coldiv className="col-md-9 col-12">
                  <H6 className="name fw-semi-bold">Foreign Visits</H6>
                  <Namep className="description deemphasize mb-xs text-white">
                    Some Cool Text
                  </Namep>
                  <Progresscomponents
                    color="primary"
                    value="60"
                    className="bg-subtle-blue progress-xs"
                  />
                </Coldiv>
                <Numberdiv className="col-md-3 col-12 text-center">
                  <Numberspan className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={75} />%
                    </small>
                  </Numberspan>
                </Numberdiv>
              </Rowdiv>
              <Rowdiv className="row progress-stats">
                <Coldiv className="col-md-9 col-12">
                  <H6 className="name fw-semi-bold">Local Visits</H6>
                  <Namep className="description deemphasize mb-xs text-white">
                    P. to C. Conversion
                  </Namep>
                  <Progresscomponents
                    color="danger"
                    value="39"
                    className="bg-subtle-blue progress-xs"
                  />
                </Coldiv>
                <Numberdiv className="col-md-3 col-12 text-center">
                  <Numberspan className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={84} />%
                    </small>
                  </Numberspan>
                </Numberdiv>
              </Rowdiv>
              <Rowdiv className="row progress-stats">
                <Coldiv className="col-md-9 col-12">
                  <H6 className="name fw-semi-bold">Sound Frequencies</H6>
                  <Namep className="description deemphasize mb-xs text-white">
                    Average Bitrate
                  </Namep>
                  <Progresscomponents
                    color="success"
                    value="80"
                    className="bg-subtle-blue progress-xs"
                  />
                </Coldiv>
                <Numberdiv className="col-md-3 col-12 text-center">
                  <Numberspan className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
                    </small>
                  </Numberspan>
                </Numberdiv>
              </Rowdiv>
              <H6settings className="fw-semi-bold mt">Map Distributions</H6settings>
              <P>
                Tracking: <strong>Active</strong>
              </P>
              <P>
                <Span className="circle bg-default text-white not-svg">
                  <i className="fa fa-cog" />
                </Span>
                &nbsp; 391 elements installed, 84 sets
              </P>
              <Inputdiv className="input-group mt">
                <Inputcomponent
                  type="text"
                  className="form-control bg-custom-dark border-0"
                  placeholder="Search Map"
                />
                <span className="input-group-btn">
                  <Inputbutton
                    type="submit"
                  >
                    <i className="fa fa-search text-light" />
                  </Inputbutton>
                </span>
              </Inputdiv>
            </Widget>
          </Colcomponent>
        </Rowcomponent>
        {/* Littlecomponents */}
        <Rowcomponent>
          <Colcomponent lg={6} xl={4} xs={12}>
            <Widget title={<H6title> USERBASE GROWTH </H6title>} close settings>
              <Statsrow className="stats-row">
                <Statitem className="stat-item">
                  <H6item className="name">Overall Growth</H6item>
                  <Pnormal className="value">76.38%</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name">Montly</H6item>
                  <Pnormal className="value">10.38%</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name">24h</H6item>
                  <Pnormal className="value">3.38%</Pnormal>
                </Statitem>
              </Statsrow>
              <Progresscomponents
                color="success"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-up" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;17% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Colcomponent>
          <Colcomponent lg={6} xl={4} xs={12}>
            <Widget title={<H6title> TRAFFIC VALUES </H6title>} close settings>
              <Statsrow className="stats-row">
                <Statitem className="stat-item">
                  <H6item className="name">Overall Values</H6item>
                  <Pnormal className="value">17 567 318</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name">Montly</H6item>
                  <Pnormal className="value">55 120</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name">24h</H6item>
                  <Pnormal className="value">9 695</Pnormal>
                </Statitem>
              </Statsrow>
              <Progresscomponents
                color="danger"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-down" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;8% lower</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Colcomponent>
          <Colcomponent lg={6} xl={4} xs={12}>
            <Widget title={<H6title> RANDOM VALUES </H6title>} close settings>
              <Statsrow className="stats-row">
                <Statitem className="stat-item">
                  <H6item className="name fs-sm">Overcome T.</H6item>
                  <Pnormal className="value">104.85%</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name fs-sm">Takeoff Angle</H6item>
                  <Pnormal className="value">14.29&deg;</Pnormal>
                </Statitem>
                <Statitem className="stat-item">
                  <H6item className="name fs-sm">World Pop.</H6item>
                  <Pnormal className="value">7,211M</Pnormal>
                </Statitem>
              </Statsrow>
              <Progresscomponents
                color="primary"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-plus" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;8 734 higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Colcomponent>
        </Rowcomponent>

        <Rowcomponent>
          <Colcomponent lg={4} xs={12}>
            <Widget
              title={
                <H6title>
                  <Newspan className="badge badge-success mr-2">New</Newspan> Messages
                </H6title>
              }
              refresh
              close
            >
              <Undopadding className="widget-body undo_padding">
                <Listgroup>
                  <MessagesDemo />
                </Listgroup>
              </Undopadding>
              <Footer className="bg-widget-transparent mt">
                <Footerinput
                  type="search"
                  className="form-control form-control-sm bg-custom-dark border-0"
                  placeholder="Search"
                />
              </Footer>
            </Widget>
          </Colcomponent>

          <Colcomponent lg={4} xs={12}>
            <Widget
              title={
                <H6title>
                  {" "}
                  Market <span className="fw-semi-bold">Stats</span>
                </H6title>
              }
              close
            >
              <div className="widget-body">
                <H3>$720 Earned</H3>
                <Marketp className="fs-mini text-muted mb mt-sm">
                  Target <Marketspan className="fw-semi-bold">$820</Marketspan> day earnings
                  is <Marketspan className="fw-semi-bold">96%</Marketspan> reached.
                </Marketp>
              </div>
              <Tablesdiv className={'widget-table-overflow'}>
                <Tablecomponent striped size="sm">
                  <thead className="no-bd">
                    <tr>
                      <TH>
                        <ABCcheckbox className="checkbox abc-checkbox">
                          <Inputcheckbox
                            className="mt-0"
                            id="checkbox210"
                            type="checkbox"
                            onClick={() => this.checkTable(0)}
                            checked={this.state.checkedArr[0]}
                            readOnly
                          />{" "}
                          <Label for="checkbox210" />
                        </ABCcheckbox>
                      </TH>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TH>
                        <ABCcheckbox className="checkbox abc-checkbox">
                          <Inputcheckbox
                            className="mt-0"
                            id="checkbox212"
                            type="checkbox"
                            onClick={() => this.checkTable(1)}
                            checked={this.state.checkedArr[1]}
                            readOnly
                          />{" "}
                          <Label for="checkbox212" />
                        </ABCcheckbox>
                      </TH>
                      <TD>HP Core i7</TD>
                      <TD className="text-align-right fw-semi-bold">$346.1</TD>
                    </tr>
                    <tr>
                      <TH>
                        <ABCcheckbox className="checkbox abc-checkbox">
                          <Inputcheckbox
                            className="mt-0"
                            id="checkbox214"
                            onClick={() => this.checkTable(2)}
                            type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{" "}
                          <Label for="checkbox214" />
                        </ABCcheckbox>
                      </TH>
                      <TD>Air Pro</TD>
                      <TD className="text-align-right fw-semi-bold">$533.1</TD>
                    </tr>
                  </tbody>
                </Tablecomponent>
              </Tablesdiv>

              <Rickshawdiv
                className="widget-body mt-xlg chart-overflow-bottom"
                style={{ height: "100px" }}
              >
                <Rickshaw height={100} />
              </Rickshawdiv>
            </Widget>
          </Colcomponent>

          <Colcomponent lg={4} xs={12}>
            <Widget
              title={<H6title>Calendar</H6title>}
              settings
              close
              bodyClass={"pt-2 px-0 py-0"}
            >
              <Calendar />
              <Listgroupcalendar className="list-group fs-mini">
                <Calendarbutton className="list-group-item text-ellipsis">
                  <Timespan className="badge badge-pill badge-primary float-right">
                    6:45
                  </Timespan>
                  Weed out the flower bed
                </Calendarbutton>
                <Calendarbutton className="list-group-item text-ellipsis">
                  <Timespan className="badge badge-pill badge-success float-right">
                    9:41
                  </Timespan>
                  Stop world water pollution
                </Calendarbutton>
              </Listgroupcalendar>
            </Widget>
          </Colcomponent>
        </Rowcomponent>
      </div>
    );
  }
}

export default Dashboard;
