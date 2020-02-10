import React from 'react';
import PropTypes from 'prop-types';

/**
 * SmartForm allows easy construction of forms from JSON
 */
class SmartForm extends React.Component {
  /**
   * A constructor for the SmartForm
   * @param {object} props the properties to build the SmartForm
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders the SmartForm based on the provided properties
   * @return {jsx} JSX Rendering of the SmartForm
   */
  render() {
    const now = new Date();
    return <form method={'get'} action={'/inventory'}>
      <Dropdown name={'Dropdown'}
        options={['test1', 'test2']} required = {true}/>
      <TextInput name={'Text'} required = {true} />
      <DateInput name={'Date'} required = {true} def={now}/>
      <TimeInput name={'Time'} required = {true} def = {now}/>
      <TextAreaInput name={'Notes'} required = {true}/>
      <NumberInput name={'Qty Change'} required = {true}/>
      <input type={'submit'} value={'Submit'}/>
    </form>;
  }
}

/**
 * @param {object} props the properties of the dropdown menu
 *      (name [string], options [string array], required [boolean])
 * @return {jsx} the rendered dropdown menu
 * @constructor
 */
function Dropdown(props) {
  const options = [];
  const id = props.name.replace(' ', '-') + '-dropdown';
  props.options.forEach((option) => options.push(<option
    value={option} key={option}>{option}</option>));
  return (
    <div>
      <label htmlFor={id}>{props.name}</label>
      <br/>
      <select id={id} name={props.name}
        required={props.required}>
        {options}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  required: PropTypes.bool.isRequired,
};

/**
 * A constructor for a TextInput item in the form
 * @param {object} props the properties of the text input
 *      (name [string], required [bool])
 * @return {jsx} the rendered text input
 * @constructor
 */
function TextInput(props) {
  const id = props.name.replace(' ', '-') + '-txtinput';
  return (
    <div>
      <label htmlFor={id}>{props.name}</label>
      <br/>
      <input id={id} type={'text'} name={props.name}
        required={props.required}/>
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

/**
 * A class to create a Date Input form item
 */
class DateInput extends React.Component {
  /**
   * A constructor for the DateInput form item
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);
    const dateObj = (this.props.def) ? this.props.def : new Date();
    let date = dateObj.getFullYear() + '-';
    if (dateObj.getMonth() < 9) {
      date += '0';
    }
    date += (dateObj.getMonth() + 1) + '-';
    if (dateObj.getDate() < 10) {
      date += '0';
    }
    date += dateObj.getDate();
    this.state = {
      date: date,
    };
  }

  /**
   * A function to update the state of the form item on change
   * @param {event} i the event triggered by changing the form value
   */
  onChange(i) {
    this.setState({
      date: i.target.value,
    });
  }

  /**
   * Renders the DateInput form item in jsx
   * @return {jsx} the rendered DateInput form item
   */
  render() {
    const id = this.props.name.replace(' ', '-') + '-date';

    return (
      <div>
        <label htmlFor={id}>{this.props.name}</label>
        <br/>
        <input id={id} type={'date'} name={this.props.name}
          value={this.state.date}
          required={this.props.required}
          onChange={(i) => this.onChange(i)}/>
      </div>
    );
  }
}

DateInput.propTypes = {
  def: PropTypes.instanceOf(Date),
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

/**
 * A class to create a TimeInput form component
 */
class TimeInput extends React.Component {
  /**
   * A constructor for the TimeInput form component
   * @param {object} props the properties of the time input form component
   *    (def [Date], name [string], required [bool])
   * @constructor
   */
  constructor(props) {
    super(props);
    const dateObj = (this.props.def) ? this.props.def : new Date();
    let time = '';
    if (dateObj.getHours() < 10) {
      time += '0';
    }
    time += dateObj.getHours() + ':';
    if (dateObj.getMinutes() < 10) {
      time += '0';
    }
    time += dateObj.getMinutes();
    this.state = {
      time: time,
    };
  }

  /**
   * Update the state of the time input when the user changes it
   * @param {event} i the onChange event response
   */
  onChange(i) {
    this.setState({
      time: i.target.value,
    });
  }

  /**
   * Renders the TextInput form component
   * @return {jsx} the rendered TimeInput
   */
  render() {
    const id = this.props.name.replace(' ', '-') + '-time';
    return (
      <div>
        <label htmlFor={id}>{this.props.name}</label>
        <br/>
        <input id={id} type={'time'} name={this.props.name}
          value={this.state.time}
          required={this.props.required}
          onChange={(i) => this.onChange(i)}
        />
      </div>
    );
  }
}

TimeInput.propTypes = {
  def: PropTypes.instanceOf(Date),
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

/**
 * A TextAreaInput form component
 * @param {object} props the properties of the TextAreaInput
 * @return {jsx} the rendered jsx of the TextAreaInput
 * @constructor
 */
function TextAreaInput(props) {
  const id = props.name.replace(' ', '-') + '-text-area';
  return (
    <div>
      <label htmlFor={id}>{props.name}</label>
      <br/>
      <textarea id={id} name={props.name} required={props.required}
        style={{resize: 'none'}}/>
    </div>
  );
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

/**
 * A NumberInput form component
 */
class NumberInput extends React.Component {
  /**
   * A constructor for the NumberInput
   * @param {object} props the properties of the number form component
   *      (name [string], required [boolean], def [number])
   * @constructor
   */
  constructor(props) {
    super(props);
    const val = props.def ? props.def : 0;
    this.state = {
      val: val,
    };
  }

  /**
   * Handler when the form item changes to update state of the NumberInput
   * @param {event} i the event triggered when the number form item changes
   */
  onChange(i) {
    this.setState({
      val: i.target.value,
    });
  }

  /**
   * Render the NumberInput class
   * @return {jsx} the rendered view of the NumberInput class
   */
  render() {
    const id = this.props.name.replace(' ', '-') + '-number';
    return (
      <div>
        <label htmlFor ={id}>{this.props.name}</label>
        <br/>
        <input type={'number'} name={this.props.name} value={this.state.val}
          required={this.props.required}
          onChange = {(i) => this.onChange(i)}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  def: PropTypes.number,
};


export default SmartForm;
