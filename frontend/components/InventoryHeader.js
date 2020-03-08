import Link from 'next/link';
import Table from './Table.js'

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1>Inventory</h1>
      <Table items={this.props.items} headerColumns={['name', 'staff', 'child', 'stock']}></Table>
    </div>
  }
}

export default InventoryHeader;

