import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
import { getTransactions, getTransactionItem } from '../frontend/actions/transaction.js'
import { get1000Items } from '../frontend/actions/items.js'
import Table from '../frontend/components/Table.js'

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
    //this is going to be a fake log screen just for demo purposes:
    const tempItems = await get1000Items(); 
    this.setState({allItems: tempItems});
    // let itemArray = [];
    // try {
    //   const transactions = await getTransactions();
    //   console.log(JSON.stringify(transactions));
    //   for (let transaction of transactions) {
    //     console.log('transaction: ' + transaction)
    //     console.log('transactionItems: ' + transaction.items)
    //      for (let item of transaction.items) {
    //        console.log('item: ' + item);
    //        const result = await getTransactionItem(item);
    //        console.log('result: ' + result);
    //        itemArray.push(result);
    //      }
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
    // this.setState({allItems: itemArray})
    // console.log(itemArray);
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
        <div style={{height: '70vh', overflowY:'auto'}}>
        <Table items={this.state.allItems} headerColumns={['name', 'type', 'size', 'stock']}></Table>
        </div>

        <div className="Footer"><NavigationBar/></div>
      </div>
    );
  }
}
export default Log;
