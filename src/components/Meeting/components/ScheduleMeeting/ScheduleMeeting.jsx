import React, { useEffect } from 'react';
import {
    addDays,
    addMinutes,
    addMonths,
    differenceInMinutes,
    format,
    isPast,
    isSameDay,
    isSameMinute,
    subDays,
    subMonths,
} from 'date-fns';

import { Arrow } from '../ArrowSVG';
import ScheduleCalendar from './ScheduleCalendar';
import StartTimeList from './EventList';
import rgba from 'color-rgba';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  box-shadow: 0 5px 22px rgba(20, 21, 21, 0.22), 0px 1px 4px rgba(20, 21, 21, 0.14);
  padding: 16px;
  margin: 16px;
  flex-direction: column;
  background: ${({ backgroundColor }) => (backgroundColor == "dark" ? "#17191a" : "#fff")};
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    padding: 8px;
    margin: 8px;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 16px;
  @media (max-width: 768px) {
    width: auto;
    height: 1px;
  }
`;

const CalendarContainer = styled.div`
  flex: 1;
`;

const StartTimeListContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    min-height: 301px;
  }
`;

const StartTimeListContainerAbsolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SelectedDayTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const ArrowButton = styled.button`
  outline: none;
  background: none;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  color: ${({ backgroundColor }) => backgroundColor == "dark" && "#e8e6e3"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  opacity: 0.4;
  margin: 0;
  &:hover {
    opacity: 0.7;
    background: rgba(0, 0, 0, 0.03);
  }
`;

export const ScheduleMeeting = ({
    availableTimeslots = [],
    borderRadius = 0,
    primaryColor = '#3f5b85',
    backgroundColor = "light",
    emptyListContentEl,
    eventStartTimeSpreadInMinutes = 0,
    eventDurationInMinutes = 30,
    onSelectedDayChange,
    onStartTimeSelect,
    scheduleMeetingStyles,
}) => {
    const [r, g, b, alpha] = rgba(primaryColor) || [0, 0, 0, 1];
    const primaryColorRGB = `rgba(${r},${g},${b},${alpha})`;
    const primaryColorFaded = `rgba(${r},${g},${b},${alpha / 9})`;

    const [selectedDay, setSelectedDay] = React.useState(new Date());
    const [startTimeEventsList, setStartTimeEventsList] = React.useState([]);
    const [selectedDayStartTimeEventsList, setSelectedDayStartTimeEventsList] = React.useState([]);
    const [timeslot, setTimeslot] = React.useState([]);

    const onDaySelected = (day) => {
        setSelectedDay(day);
        onSelectedDayChange && onSelectedDayChange(day);
        availableTimeslots.filter(({ startTime }, i) => {
            if (isSameDay(startTime, day)) {
                setTimeslot(availableTimeslots[i])
            }
        })
    };

    const splitTimeslot = (startTimeEvent) => {
        const splitTimeslots = [null, null];
        const minutesIntoTimeslotEventWillStart = differenceInMinutes(
            startTimeEvent.startTime,
            new Date(startTimeEvent.availableTimeslot.startTime),
        );

        if (minutesIntoTimeslotEventWillStart !== 0) {
            const newFirstTimeslot = {
                oldId: startTimeEvent.availableTimeslot._id,
                startTime: startTimeEvent.availableTimeslot.startTime,
                endTime: addMinutes(new Date(startTimeEvent.availableTimeslot.startTime), minutesIntoTimeslotEventWillStart),
            };
            splitTimeslots[0] = newFirstTimeslot;
        }

        const startTimeOfEndingSplitTimeslot = addMinutes(
            new Date(startTimeEvent.availableTimeslot.startTime),
            minutesIntoTimeslotEventWillStart + eventDurationInMinutes,
        );
        if (differenceInMinutes(startTimeOfEndingSplitTimeslot, new Date(startTimeEvent.availableTimeslot.endTime)) !== 0) {
            const newSecondTimeslot = {
                oldId: startTimeEvent.availableTimeslot._id,
                startTime: startTimeOfEndingSplitTimeslot,
                endTime: startTimeEvent.availableTimeslot.endTime,
            };
            splitTimeslots[1] = newSecondTimeslot;
        }

        return splitTimeslots;
    };

    const _onStartTimeSelect = (startTimeEvent) => {
        const splitTimeslots = splitTimeslot(startTimeEvent);
        const startTimeEventEmitObject = {
            ...startTimeEvent,
            splitTimeslot: splitTimeslots,
        };

        if (onStartTimeSelect) {
            onStartTimeSelect(startTimeEventEmitObject);
        }
    };

    useEffect(() => {
        // compile a list of all possible event start times given all timeslots
        const startTimeEvents = [];

        // iterate through all available timeslots
        for (const availableTimeslot of availableTimeslots) {
            const timeslotDuration = differenceInMinutes(
                new Date(availableTimeslot.endTime),
                new Date(availableTimeslot.startTime),
            );

            // this prevents start times from being created where the event duration runs past the available timeslot
            let startTimesPossible =
                Math.floor(timeslotDuration / (eventDurationInMinutes + eventStartTimeSpreadInMinutes)) - 1;

            while (startTimesPossible >= 0) {
                const newStartTimeEvent = {
                    availableTimeslot,
                    startTime: addMinutes(
                        new Date(availableTimeslot.startTime),
                        startTimesPossible * (eventDurationInMinutes + eventStartTimeSpreadInMinutes),
                    ),
                };
                startTimeEvents.push(newStartTimeEvent);
                startTimesPossible--;
            }
        }

        setStartTimeEventsList(startTimeEvents);
    }, [availableTimeslots, eventDurationInMinutes, eventStartTimeSpreadInMinutes]);

    useEffect(() => {
        const startTimeEventsToDisplay = [];

        // filter out startTimeEvents so we get the list of ones to display next to the calendar
        for (const startTimeEvent of startTimeEventsList) {
            // make sure its the same day as the selected day

            if (isSameDay(startTimeEvent.startTime, selectedDay)) {
                // prevents duplicate times (in case there are multiple overlapping shifts)
                if (
                    startTimeEventsToDisplay.filter((item) =>
                        isSameMinute(item.startTime, startTimeEvent.startTime),
                    ).length === 0
                ) {
                    if (!isPast(startTimeEvent.startTime)) {
                        startTimeEventsToDisplay.push(startTimeEvent);
                    }
                }
            }
        }

        // order the events by first in the day
        const orderedEvents = startTimeEventsToDisplay.sort(
            (a, b) => a.startTime.getTime() - b.startTime.getTime(),
        );

        setSelectedDayStartTimeEventsList(orderedEvents);
    }, [selectedDay, startTimeEventsList]);

    const goToPreviousMonth = () => {
        setSelectedDay(subMonths(selectedDay, 1));
    };

    const goToNextMonth = () => {
        setSelectedDay(addMonths(selectedDay, 1));
    };

    const goToPreviousDay = () => {
        setSelectedDay(subDays(selectedDay, 1));
    };

    const goToNextDay = () => {
        setSelectedDay(addDays(selectedDay, 1));
    };

    return (
        <Container>
            <Inner borderRadius={borderRadius} style={scheduleMeetingStyles} backgroundColor={backgroundColor}>
                <CalendarContainer>
                    <Header>
                        <ArrowButton backgroundColor={backgroundColor} borderRadius={borderRadius} onClick={goToPreviousMonth}>
                            <Arrow direction="back" />
                        </ArrowButton>
                        <SelectedDayTitle>{format(selectedDay, 'LLLL yyyy')}</SelectedDayTitle>
                        <ArrowButton backgroundColor={backgroundColor} borderRadius={borderRadius} onClick={goToNextMonth}>
                            <Arrow direction="forward" />
                        </ArrowButton>
                    </Header>
                    <ScheduleCalendar
                        borderRadius={borderRadius}
                        primaryColor={primaryColorRGB}
                        backgroundColor={backgroundColor}
                        selectedDay={selectedDay}
                        availableTimeslots={availableTimeslots}
                        primaryColorFaded={primaryColorFaded}
                        onDaySelected={onDaySelected}
                    />
                </CalendarContainer>
                <Divider />
                <StartTimeListContainer>
                    <StartTimeListContainerAbsolute>
                        <Header>
                            <ArrowButton backgroundColor={backgroundColor} borderRadius={borderRadius} onClick={goToPreviousDay}>
                                <Arrow direction="back" />
                            </ArrowButton>
                            <SelectedDayTitle>{format(selectedDay, 'cccc, LLLL do')}</SelectedDayTitle>
                            <ArrowButton backgroundColor={backgroundColor} borderRadius={borderRadius} onClick={goToNextDay}>
                                <Arrow direction="forward" />
                            </ArrowButton>
                        </Header>
                        <StartTimeList
                            primaryColorFaded={primaryColorFaded}
                            primaryColor={primaryColorRGB}
                            backgroundColor={backgroundColor}
                            borderRadius={borderRadius}
                            emptyListContentEl={emptyListContentEl}
                            onStartTimeSelect={_onStartTimeSelect}
                            startTimeListItems={selectedDayStartTimeEventsList}
                            availableTimeslot={timeslot}
                            fromto={true}
                        />
                    </StartTimeListContainerAbsolute>
                </StartTimeListContainer>
            </Inner>
        </Container>
    );
};
