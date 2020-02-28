import Link from 'next/link';
import Table from './Table.js'

let columns = ['name', 'date', 'price']
let products = [{
  key: 0,
  name: "Banana",
  date: "2020-01-01",
  price: 0.99
}, {
  key: 1,
  name: "Apple",
  date: "2012-11-16",
  price: 1.99
}, {
  key: 2,
  name: "Carrot",
  date: "2004-04-13",
  price: 0.08
}, {
  key: 3,
  name: "Dog",
  date: "2004-09-30",
  price: 89.99
}, {
  key: 4,
  name: "Elephant",
  date: "2000-01-01",
  price: 800
}, {
  key: 5,
  name: "Fries",
  date: "2012-10-16",
  price: 3.87
}, {
  key: 6,
  name: "Grapes",
  date: "2019-03-29",
  price: 5.87
}, {
  key: 7,
  name: "Hat",
  date: "2020-04-01",
  price: 11.92
}, {
  key: 8,
  name: "Ice",
  date: "2016-12-12",
  price: 0.03
}, {
  key: 9,
  name: "Jar",
  date: "2008-11-30",
  price: 10.01
}, {
  key: 10,
  name: "Kangaroo",
  date: "2017-04-12",
  price: 76.00
},];

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1>Inventory</h1>
      <Table columns={columns} products={products}></Table>
    </div>
  }
}

export default InventoryHeader;

