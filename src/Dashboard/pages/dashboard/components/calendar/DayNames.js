import React, { Component } from 'react'
import { Daynames, Daynamespan } from '../../../../styles/calendar';

class DayNames extends Component {
  render() {
    return (
      <Daynames>
        <Daynamespan>S</Daynamespan>
        <Daynamespan>M</Daynamespan>
        <Daynamespan>T</Daynamespan>
        <Daynamespan>W</Daynamespan>
        <Daynamespan>T</Daynamespan>
        <Daynamespan>F</Daynamespan>
        <Daynamespan>S</Daynamespan>
      </Daynames>
    );
  }
}

export default DayNames;