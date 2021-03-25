import React, { Component } from 'react'
import { Popover, PopoverHeader, PopoverBody, Tooltip,} from 'reactstrap';
import { Daycontainer, Daymain, Daynumber, Calendardot, Popovercomponent, Popoverheader, Popoverbody, Daynamespan } from '../../../../styles/calendar';

class Day extends Component {
  state = {
    popoverShow: false,
    tooltipShow: false
  }

  togglePopover = () => {
    this.setState({ popoverShow: !this.state.popoverShow })
  }

  toggleTooltip = () => {
    this.setState({ tooltipShow: !this.state.tooltipShow })
  }

  render() {
    const { day, selected } = this.props;
    console.log(day)
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
          <Tooltip 
            placement="top" 
            isOpen={this.state.tooltipShow} 
            toggle={this.toggleTooltip} 
            target={`Tooltip${day.number}`}>
            {day.title}
          </Tooltip>
        </React.Fragment> 
        : (day.hasEvents && !day.link)
        ? 
          <React.Fragment>
            <Daynumber
              onClick={this.togglePopover}
              id={`Popover${day.number}`}
              className={'dayNumber'}
            > {day.number}
                {day.itemStyle ? 
                  <Calendardot 
                    style={{backgroundColor: `${day.itemStyle}`}} 
                  >
                  </Calendardot> : "" }
            </Daynumber>
            <Popovercomponent 
              placement="top" 
              isOpen={this.state.popoverShow} 
              target={`Popover${day.number}`} 
              toggle={this.togglePopover}
              className={'Popover'}
              >
              <Popoverheader className={'Header'}>{day.title}</Popoverheader>
              <Popoverbody>{day.info}</Popoverbody>
            </Popovercomponent> 
          </React.Fragment> 
        : "" }
      
      </Daycontainer>
    );
  }
}
export default Day;