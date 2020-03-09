import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import {ToggleButtonGroup, Button, ButtonGroup, ToggleButton} from 'react-bootstrap';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
import { LogInDimensions } from 'styled-icons/feather';
import {getTransactions} from '../frontend/actions/transaction.js'

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: '1', isAdmin: false, isAll: true, isBodega: false,
      isDownstairs: false, isCloset: false, allItems: [], bodegaItems: [], downstairsItems:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const transactions = await getTransactions();
    console.log(transactions);

  }

  handleChange(value) {
    console.log(value);
    this.setState({ selectedValue: value });
    switch(value){
      case 1:
        this.setState({ isAll: true, isBodega: false, isDownstairs: false, isCloset: false})
        break;
      case 2:
        this.setState({isAll: false, isBodega: true, isDownstairs: false, isCloset: false})
        break;
      case 3:
        this.setState({isAll:false, isBodega: false, isDownstairs: true, isCloset: false})
        break;
      case 4:
        this.setState({isAll:false, isBodega: false, isDownstairs: false, isCloset: true})
        break;
    }
  }
  render() {
    return (
      <div className="Clean">
        <h1>Log</h1>
        <ToggleButtonGroup className="Location" name="hi" value={this.state.value} onChange={this.handleChange}>
      <ToggleButton 
        style={this.state.isAll ? {backgroundColor:'#51ADA9', color:'white'} : {backgroundColor:'white'}} 
        className="o1" value={1}>all</ToggleButton>
      <ToggleButton 
        style={this.state.isBodega ? {backgroundColor:'#51ADA9', color:'white'} : {backgroundColor:'white'}} 
        className="o1" value={2}>bodega</ToggleButton>
      <ToggleButton 
        style={this.state.isDownstairs ? {backgroundColor:'#51ADA9', color:'white'} : {backgroundColor:'white'}} 
        className="o1" value={3}>downstairs</ToggleButton>
      {this.state.isAdmin && <ToggleButton 
          className="o1" value={4}>closet</ToggleButton>}
    </ToggleButtonGroup>
        <div className="Footer"><NavigationBar /></div>
      </div>
    );
  }

} 
export default Log;
