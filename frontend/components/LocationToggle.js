import React from 'react';
import {ToggleButtonGroup, ToggleButton, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/location_toggle.css'
import fetch from 'isomorphic-unfetch';


class LocationToggle extends React.Component {

  constructor(props) {
    super(props);
    this.locations = props.locations;
    this.state = {
      location : -1,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    alert(value);
    this.setState({location: value});
    //sort goes here
  }

  render() {
    return (
    <ButtonToolbar>
      <ToggleButtonGroup  type="radio" name="options" onChange={this.onChange}>
        {
          this.locations.map((value, index) => <ToggleButton className={`${this.state.location == index ? "btn-select" : "btn-not"}`} key={index} value={index}>{value}</ToggleButton>)
        }
      </ToggleButtonGroup>
    </ButtonToolbar>
    )
  }
}

export default LocationToggle;

