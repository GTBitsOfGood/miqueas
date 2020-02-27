import Link from 'next/link';
import Table from './Table.js'

let columns = ['name', 'date', 'price']
let products = [{
  name: "test",
  date: "yesterday",
  price: 120
}, {
  name: "Product2",
  date: 'today',
  price: 80
}, {
  name: "Product3",
  date: 'today',
  price: 90
}];

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1>Inventory</h1>
      <Table columns={columns} products={products}></Table>
    </div>
  }
}

export default InventoryHeader;

