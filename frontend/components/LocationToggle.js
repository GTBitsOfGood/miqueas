import React from 'react';
import {ToggleButtonGroup, ToggleButton, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetch from 'isomorphic-unfetch';


class LocationToggle extends React.Component {

  constructor(props) {
    super(props);
    this.locations = props.locations;
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    alert(value);
    //sort goes here
  }

  render() {
    return (
    <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options" onChange={this.onChange}>
        {
          this.locations.map((value, index) => <ToggleButton key={index} value={index}>{value}</ToggleButton>)
        }
      </ToggleButtonGroup>
    </ButtonToolbar>
    )
  }
}

export default LocationToggle;

