import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Widget from '../../../../components/Widget/Widget';



class Maps extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-title">
          Google <span className="fw-semi-bold">Maps</span>
        </h1>
      </div>);
  }

}

export default Maps;
