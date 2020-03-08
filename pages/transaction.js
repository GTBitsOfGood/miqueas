import translate from '../frontend/components/translate.js';
import React from 'react';
import TransactionHeader from '../frontend/components/TransactionForm/TransactionHeader';
import ItemHeader from '../frontend/components/TransactionForm/ItemHeader';
import QuantitySelector from '../frontend/components/TransactionForm/QuantitySelector';
import VerticalRadio from '../frontend/components/TransactionForm/VerticalRadio';
import HorizontalRadio from '../frontend/components/TransactionForm/HorizontalRadio';
import NavButtons from '../frontend/components/TransactionForm/NavButtons';
import GenderSelector from '../frontend/components/TransactionForm/GenderSelector';
import LocationSelector from '../frontend/components/TransactionForm/LocationSelector';
import {getItemVariation} from '../frontend/actions/items.js';

export default function Transaction({language}) {
  return (
    <div>

      <TransactionForm name={'pants'} category={'clothing'}/>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}


class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemVariation: [],
      gender: 'none',
      quantity: 0,
      typeColor: 'none',
      size: 'none',
      isLoading: true,
      location: 'none',
      name: this.props.name,
    };
  }

  async componentDidMount() {
    const itemVar = await getItemVariation(this.state.name);
    this.initStateFromVariation(itemVar);
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
  }

  changeQuantity(i) {
    this.setState({
      quantity: i,
    });
  }

  changeSize(newSize) {
    this.setState({
      size: newSize,
    });
  }

  changeTypeColor(newTypeColor) {
    this.setState({
      typeColor: newTypeColor,
    });
  }

  render() {
    const header = <div><TransactionHeader name={'Transaction Form'}/>
      <hr style={{'marginTop': 0}}/>
      <ItemHeader name={this.props.name} category={this.props.category}/>
      <hr style={{'marginTop': 0}}/></div>;

    if (this.state.itemVariation == null) {
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
        <LocationSelector/>
        <hr/>
        <NavButtons/>
      </div>
    );
  }
}
