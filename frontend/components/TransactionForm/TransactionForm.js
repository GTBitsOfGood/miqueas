import React from 'react';
import {getItemVariation} from '../../actions/items';
import TransactionHeader from './TransactionHeader';
import ItemHeader from './ItemHeader';
import GenderSelector from './GenderSelector';
import VerticalRadio from './VerticalRadio';
import QuantitySelector from './QuantitySelector';
import LocationSelector from './LocationSelector';
import NavButtons from './NavButtons';

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemVariation: {},
      gender: 'none',
      quantity: 0,
      typeColor: 'none',
      size: 'none',
      isLoading: true,
      location: 'none',
      name: this.props.name,
      formCompleted: false,
    };
  }

  async componentDidMount() {
    const itemVar = await getItemVariation(this.state.name);
    if (itemVar) {
      this.initStateFromVariation(itemVar);
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  checkRequired(itemProperty) {
    return (itemProperty != null && itemProperty.length > 1);
  }

  checkOneOption(itemProperty) {
    if (itemProperty != null && itemProperty.length == 1) {
      return itemProperty[0];
    }
    return 'none';
  }

  initStateFromVariation(itemVar) {
    this.setState({
      gender: this.checkOneOption(itemVar.gender),
      size: this.checkOneOption(itemVar.size),
      typeColor: this.checkOneOption(itemVar.typeColor),
      isLoading: false,
      itemVariation: itemVar,
    });
  }

  setFormInvalid() {
    this.setState({
      formCompleted: false,
    });
  }

  validateForm(skipCheck) {
    if (skipCheck != 'quantity' && this.state.quantity == 0) {
      this.setFormInvalid();
      return;
    }
    if (skipCheck != 'location' && this.state.location == 'none') {
      this.setFormInvalid();
      return;
    }
    if (skipCheck != 'gender' &&
      this.checkRequired(this.state.itemVariation.gender) &&
      this.state.gender == 'none') {
      this.setFormInvalid();
      return;
    }
    if (skipCheck != 'size' &&
      this.checkRequired(this.state.itemVariation.size) &&
      this.state.size == 'none') {
      this.setFormInvalid();
      return;
    }
    if (skipCheck != 'typeColor' &&
      this.checkRequired(this.state.itemVariation.typeColor) &&
      this.state.typeColor == 'none') {
      this.setFormInvalid();
      return;
    }
    this.setState({
      formCompleted: true,
    });
  }

  handleGenderSwap(i) {
    let gender = 'none';
    switch (i) {
      case 0:
        gender = 'boy';
        break;
      case 1:
        gender = 'girl';
        break;
      case 2:
        gender = 'unisex';
        break;
    }
    this.setState({
      gender: gender,
    });
    this.validateForm('gender');
  }

  changeQuantity(i) {
    this.setState({
      quantity: i,
    });
    if (i == 0) {
      this.setFormInvalid();
    } else {
      this.validateForm('quantity');
    }
  }

  changeSize(newSize) {
    this.setState({
      size: newSize,
    });
    this.validateForm('size');
  }

  changeTypeColor(newTypeColor) {
    this.setState({
      typeColor: newTypeColor,
    });
    this.validateForm('typeColor');
  }

  changeLocation(newLocation) {
    this.setState({
      location: newLocation,
    });
    this.validateForm('location');
  }

  render() {
    const header = <div><TransactionHeader name={'Transaction Form'}/>
      <hr style={{'marginTop': 0}}/>
      <ItemHeader name={this.props.name} category={this.props.category}/>
      <hr style={{'marginTop': 0}}/></div>;

    if (this.state.itemVariation == null ||
      this.state.itemVariation.name == undefined) {
      if (this.state.isLoading) {
        return <div style = {{'textAlign': 'center'}}>
          {header}
          <p>Loading...</p>
        </div>;
      } else {
        return <div style = {{'textAlign': 'center'}}>
          {header}
          <p> Could not find specified item </p>
        </div>;
      }
    }

    const genderSelector = (this.state.itemVariation.gender == null ||
      this.state.itemVariation.gender.length < 2) ? <div/> :
      <div><GenderSelector onClick={(i) => this.handleGenderSwap(i)}/>
        <hr/></div>;

    const typeColorSelector = (this.state.itemVariation.typeColor == null ||
      this.state.itemVariation.typeColor.length < 2) ? <div/> :
      <div><VerticalRadio name={'Type/Color'}
        options = {this.state.itemVariation.typeColor}
        onUpdate={(i) => {
          this.changeTypeColor(i);
        }}/><hr/></div>;

    const sizeSelector = (this.state.itemVariation.size == null ||
      this.state.itemVariation.size.length < 2) ? <div/> :
      <div><VerticalRadio name={'Size'}
        options = {this.state.itemVariation.size}
        onUpdate = {(i) => {
          this.changeSize(i);
        }}/><hr/></div>;

    return (
      <div>
        {header}
        {genderSelector}
        <QuantitySelector quantity={this.state.quantity}
          onChange={(i) => this.changeQuantity(i)}/>
        <hr/>
        {typeColorSelector}
        {sizeSelector}
        <LocationSelector onUpdate={(name) => {
          this.changeLocation(name);
        }}/>
        <hr/>
        <NavButtons disabled = {!this.state.formCompleted}/>
      </div>
    );
  }
}
