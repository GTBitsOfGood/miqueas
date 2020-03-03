import Link from 'next/link';
import Table from './Table.js'

const products = [{
  key: 0,
  gender: 'Male',
  name: "Banana",
  staff: "Mr. Smith",
  child: "George",
  quantity: 4
}, {
  key: 1,
  gender: 'Female',
  name: "Apple",
  staff: "Mrs. Johnson",
  child: "Abby",
  quantity: 2
}, {
  key: 2,
  gender: 'Male',
  name: "Car",
  staff: "Mrs. Johnson",
  child: "Abby",
  quantity: 2
}]

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1>Inventory</h1>
      <Table products={products} headerColumns={['name', 'staff', 'child', 'quantity']}></Table>
    </div>
  }
}

export default InventoryHeader;

