import React, { Component } from 'react'
import { Popover, PopoverHeader, PopoverBody, Tooltip, OverlayTrigger,} from 'react-bootstrap';
import { Daycontainer, Daymain, Daynumber, Calendardot, Popovercomponent, Popoverheader, Popoverbody, Daynamespan } from '../../../../../styles/calendar';

class Day extends Component {
  state = {
    tooltipShow: false
  }

  toggleTooltip = () => {
    this.setState({ tooltipShow: !this.state.tooltipShow })
  }

  render() {
    const { day, selected } = this.props;
    return (
      <Daycontainer className={
        (day.isToday ? `today ` : "") +
        (day.isCurrentMonth ? "" : `differentMonth`) +
        (day.date.isSame(selected) ? `selected` : "") +
        (day.hasEvents ? `hasEvents` : "") }> 

        {!day.hasEvents ? 
        <Daynumber>{day.number}</Daynumber> 
        : (day.hasEvents && day.link) 
        ? 
        <React.Fragment>
          <a
            rel="noopener noreferrer"
            target="_blank"
            onMouseEnter={this.toggleTooltip}
            onMouseOut={this.toggleTooltip}
            id={`Tooltip${day.number}`}
            href={day.link ? day.link : "#"} 
            > {day.number}
            {day.itemStyle ? 
              <Daynamespan 
                style={{backgroundColor: `${day.itemStyle}`}} 
              >
              </Daynamespan> : "" }
          </a>
        </React.Fragment> 
        : (day.hasEvents && !day.link)
        ? 
          <React.Fragment>
            <OverlayTrigger 
              placement="top"
              className={'Popover'}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <Popoverheader className={'Header'}>{day.title}</Popoverheader>
                  <Popoverbody>{day.info}</Popoverbody>
                </Tooltip>
              }
              >
              <Daynumber
                id={`Popover${day.number}`}
                className={'dayNumber'}
              > {day.number}
                  {day.itemStyle ? 
                    <Calendardot 
                      style={{backgroundColor: `${day.itemStyle}`}} 
                    >
                    </Calendardot> : "" }
              </Daynumber>
            </OverlayTrigger> 
          </React.Fragment> 
        : "" }
      
      </Daycontainer>
    );
  }
}
export default Day;