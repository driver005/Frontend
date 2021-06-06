import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin , { Draggable } from '@fullcalendar/interaction'; // needed for dayClick
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import "./styles.css";

// must manually import the stylesheets for each plugin
// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import Widget from "../../components/Widget/Widget";
import { Colcomponent, PageI, Draggablevent, Draggableventinner, Draggableventslist, I, PageH3, Pagep, Pagetitle, Rowcomponent} from "../../styles/calendar";


import Popup from '../../components/Popup/Popup'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      popupinput: '',
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date().getTime()}
      ],
      canDrop: true,
      draggableitem: [
        {
          title: "Make a tea",
          icon: "text-success"
        },
        {
          title: "Make a tea",
          icon: "text-danger"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  draggableitem = {
    title: "Make 2a tea",
    icon: "text-danger"
  }
  

  setCanDrop = () => {};
  calendarComponentRef = React.createRef();
  draggable = React.createRef([])
  ALLDRAGGABLES = []


  handleAddDraggable = (e) => {
    this.draggable={current: e}
    this.ALLDRAGGABLES.push(this.draggable)
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  handleDateClick = arg => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault()
    const all = this.state.draggableitem.push({title: this.state.popupinput, icon: 'text-success'})
    this.setState({...this.state.draggableitem, all, popupinput: ''});
    
  };
  

  Component = (title, icon, key) => {
    return (
    <Draggablevent key={key} ref={this.handleAddDraggable} data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }' >
      <Draggableventinner  className='fc-event'>
        <PageI className={`fas fa-circle ${icon}`} />
        {title}
      </Draggableventinner>
    </Draggablevent>
    )
  }


  componentDidMount() {
    var containerEl = null
    for(containerEl in this.ALLDRAGGABLES) {
      if (this.ALLDRAGGABLES[containerEl].current == null) continue;
      new Draggable(this.ALLDRAGGABLES[containerEl].current, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
          return {
            title: eventEl.innerText
          };
        }
      });
      if (containerEl !== -1) {
        this.ALLDRAGGABLES[containerEl] = []
      }
    }
  }

  componentDidUpdate() {
    var containerEl = null
    for(containerEl in this.ALLDRAGGABLES) {
      if (this.ALLDRAGGABLES[containerEl].current == null || this.ALLDRAGGABLES[containerEl].current == []) continue;
      new Draggable(this.ALLDRAGGABLES[containerEl].current, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
          return {
            title: eventEl.innerText
          };
        }
      });
      if (containerEl !== -1) {
        this.ALLDRAGGABLES[containerEl] = []
      }
      
    }
  }
  
  render() {
    const { draggableitem, calendarWeekends, calendarEvents } = this.state
    return (
      <Rowcomponent className={'row'}>
        <Colcomponent lg={4} md={6} xs={12}>
          <Pagetitle>{moment().format('MMMM YYYY - dddd')}</Pagetitle>
          <PageH3>
            Draggable <strong>Events</strong>
          </PageH3>
          <Pagep>
            Just drap and drop events from there directly into the calendar.  
          </Pagep>
          <Draggableventslist>
            {this.state.draggableitem.map((item, index) => this.Component(item.title, item.icon, index))}
          </Draggableventslist>
          <Popup input={this.handleFormChange} value={this.state} onSubmit={this.handleClick}/>
         
        </Colcomponent>
        <Colcomponent lg={8} md={6} xs={12}>
        <Widget>
          <FullCalendar
            editable={true}
            defaultView="timeGridWeek"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin  ]}
            ref={this.calendarComponentRef}
            weekends={calendarWeekends}
            events={calendarEvents}
            dateClick={this.handleDateClick}
            eventDrop={info => {
              //<--- see from here
              const { start, end } = info.oldEvent._instance.range;
              const {
                start: newStart,
                end: newEnd
              } = info.event._instance.range;
              if (new Date(start).getTime() === new Date(newStart).getTime()) {
                info.revert();
              }
            }}
          />
        </Widget>
      </Colcomponent>
    </Rowcomponent>
    );
  }
}


