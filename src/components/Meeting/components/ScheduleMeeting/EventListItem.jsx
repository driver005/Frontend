import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  color: ${({ selected, backgroundColor }) => (selected ? `rgb(255, 255, 255)` : backgroundColor == "light" ? `rgb(20,20,20)` : `#a7a7a7`)};
  background-color: ${({ selected, primaryColor }) => (selected ? primaryColor : `rgba(0,0,0,0)`)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  :hover {
    opacity: 0.8;
    background-color: ${({ selected, primaryColor, primaryColorFaded }) =>
        selected ? primaryColor : primaryColorFaded};
  }
`;

const CancelButton = styled.button`
  padding: 8px 24px;
  border: none;
  background-color: ${({ backgroundColor }) => (backgroundColor == "light" ? 'rgb(0, 0, 0, 0)' : '#4a5053')};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 100%;
  :hover {
    opacity: 0.7;
    background-color: ${({ backgroundColor }) => (backgroundColor == "light" ? 'rgb(0, 0, 0, 0)' : '#4a5053')};
  }
`;

const EventListItem = ({
    onStartTimeSelect,
    startTimeEvent,
    selected = false,
    onCancelClicked,
    borderRadius,
    primaryColor,
    primaryColorFaded,
    backgroundColor,
    availableTimeslot,
    fromto
}) => {
    return (
        <Container>
            <Button
                selected={Boolean(selected)}
                borderRadius={borderRadius}
                primaryColorFaded={primaryColorFaded}
                primaryColor={primaryColor}
                backgroundColor={backgroundColor}
                onClick={!fromto ? onStartTimeSelect : () => { }}
            >
                {fromto ?
                    format(availableTimeslot.startTime, 'h:mm a', { timeZone: 'Europe/Berlin' })
                    + " - " +
                    format(availableTimeslot.endTime, 'h:mm a', { timeZone: 'Europe/Berlin' })
                    : format(startTimeEvent.startTime, 'h:mm a', { timeZone: 'Europe/Berlin' })
                }
                {selected && 'Confirm '}
            </Button>
            {selected && (
                <CancelButton borderRadius={borderRadius} onClick={onCancelClicked}>
                    Cancel
                </CancelButton>
            )}
        </Container>
    );
};

export default EventListItem;
