import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router'
import { ToggleButtonGroup, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
import { getTransactions, getTransactionItem } from '../frontend/actions/transaction.js'

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '1', isAdmin: false, isAll: true, isBodega: false,
      isDownstairs: false, isCloset: false, allItems: [], bodegaItems: [], downstairsItems: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    let itemArray = [];
    try {
      const transactions = await getTransactions();
      console.log(JSON.stringify(transactions));
      for (let transaction of transactions) {
        console.log('transaction: ' + transaction)
        console.log('transactionItems: ' + transaction.items)
         for (let item of transaction.items) {
           console.log('item: ' + item);
           const result = await getTransactionItem(item);
           console.log('result: ' + result);
           itemArray.push(result);
         }
      }
    } catch (e) {
      console.error(e);
    }
    this.setState({allItems: itemArray})
    console.log(itemArray);
  }

  handleChange(value) {
    this.setState({selectedValue: value});
    switch (value) {
      case 1:
        this.setState({isAll: true, isBodega: false, isDownstairs: false, isCloset: false}); break;
      case 2:
        this.setState({isAll: false, isBodega: true, isDownstairs: false, isCloset: false}); break;
      case 3:
        this.setState({isAll: false, isBodega: false, isDownstairs: true, isCloset: false}); break;
      case 4:
        this.setState({isAll: false, isBodega: false, isDownstairs: false, isCloset: true}); break;
    }
  }
  render() {
    return (
      <div className="Clean">
        <h1>Log</h1>
        <Row></Row>
        <ToggleButtonGroup className="Location" name="Radio" value={this.state.value} onChange={this.handleChange}>
          <ToggleButton
            className={this.state.isAll ? 'selected': 'o1'} value={1}>all</ToggleButton>
          <ToggleButton
            className={this.state.isBodega ? 'selected':'o1'} value={2}>bodega</ToggleButton>
          <ToggleButton
            className={this.state.isDownstairs?'selected':'o1'} value={3}>downstairs</ToggleButton>
          {this.state.isAdmin && <ToggleButton
            className={this.state.isCloset ? 'selected':'o1'} value={4}>closet</ToggleButton>}
        </ToggleButtonGroup>
        <div className="Footer"><NavigationBar/></div>
      </div>
    );
  }
}
export const Row = ({transItem, props}) => {
  const onRowPressed = () => {
    Router.push('/[tid]', '/'+transItem._id)
  }
  return (
    <div onClick={onRowPressed}>
      Hi
    </div>
  )
}
export default Log;
