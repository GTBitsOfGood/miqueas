import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
import { getTransactions, getTransactionItem } from '../frontend/actions/transaction.js'
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
    let transactionArray = [];
    try {
      let transactions = await getTransactions();
      for (let transaction of transactions) {
        let finalItems = transaction.transactionItems.map((id) => {
          return { 
            date: transaction.transaction_date,
            staff: transaction.staff_name,
            ...getTransactionItem(id),
            a:1
          }
        })
        transactionArray.push(await Promise.all(finalItems));
      }
    } catch (e) {
      console.error(e);
    }
    Promise.all(transactionArray).then(values => {
      this.setState({allItems: values})
      console.log("values: ",values);
    })
    console.log("transaction: ",transactionArray)
  }

  // getTransactionItem() {
  //   return new Promise((resolve, reject) =>{
  //     getTransactionItem.subscribe(function(result) {
  //       if (result['err']) {
  //         reject(result['err']);
  //       } else {
  //         resolve(result);
  //       }
  //     }) 
  //   })
  // } 

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
