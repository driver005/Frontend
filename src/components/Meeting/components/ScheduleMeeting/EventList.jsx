import React, { useState } from 'react';

import EventListItem from './EventListItem';
import { StartTimeEvent } from './ScheduleMeeting';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: ${({ scroll }) => (scroll ? `scroll` : `hidden`)};
  padding-bottom: 24px;
  padding-top: 16px;
`;

const ScrollEdgeFade = styled.div`
  position: absolute;
  width: 100%;
  height: 24px;
  left: 0;
  right: 0;
  z-index: 12;
  pointer-events: none;
  &.top {
    background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
    top: 42px;
  }
  &.bottom {
    bottom: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
  }
`;

const ListItemDivider = styled.div`
  flex-shrink: 0;
  flex: 1;
  padding: 0.5px;
  margin: 0px 8px;
  position: relative;
  background: ${({ makeTransparent }) => (makeTransparent ? `transparent` : `rgba(0, 0, 0, 0.05)`)};
`;

const StyledP = styled.p`
  margin: 0;
  opacity: 0.5;
  margin-bottom: 24px;
`;

const NoTimesAvailableContainer = styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventList = ({
    startTimeListItems = [],
    onStartTimeSelect,
    emptyListContentEl,
    borderRadius,
    primaryColorFaded,
    primaryColor,
    backgroundColor,
    availableTimeslot,
    fromto = false,
}) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const _onStartTimeSelect = (startTimeEvent, index) => {
        if (selectedItemIndex === index) {
            onStartTimeSelect(startTimeEvent);
        } else {
            setSelectedItemIndex(index);
        }
    };

    const emptyListElement = emptyListContentEl || (
        <NoTimesAvailableContainer>
            <StyledP>No times available</StyledP>
        </NoTimesAvailableContainer>
    );

    return (
        <>
            {(fromto ? availableTimeslot.length === 0 : startTimeListItems.length === 0) ? (
                emptyListElement
            ) : (
                <>
                    {backgroundColor == "light" && <ScrollEdgeFade className="top" />}
                    {backgroundColor == "light" && <ScrollEdgeFade className="bottom" />}
                    <Container scroll={!fromto}>
                        {fromto ?
                            <EventListItem
                                primaryColorFaded={primaryColorFaded}
                                borderRadius={borderRadius}
                                primaryColor={primaryColor}
                                backgroundColor={backgroundColor}
                                availableTimeslot={availableTimeslot}
                                fromto={true}
                            /> :
                            startTimeListItems.map((startTimeEvent, i) => (
                                <React.Fragment key={i}>
                                    <EventListItem
                                        primaryColorFaded={primaryColorFaded}
                                        borderRadius={borderRadius}
                                        primaryColor={primaryColor}
                                        backgroundColor={backgroundColor}
                                        onCancelClicked={() => setSelectedItemIndex(-1)}
                                        selected={i === selectedItemIndex}
                                        startTimeEvent={startTimeEvent}
                                        onStartTimeSelect={() => _onStartTimeSelect(startTimeEvent, i)}
                                    />
                                    {i !== startTimeListItems.length - 1 && (
                                        <ListItemDivider makeTransparent={selectedItemIndex === i || selectedItemIndex === i + 1} />
                                    )}
                                </React.Fragment>
                            ))
                        }
                    </Container>
                </>
            )}
        </>
    );
};
export default EventList;
