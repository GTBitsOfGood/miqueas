import Link from 'next/link';
import Table from './Table.js'

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1>Inventory</h1>
      <Table items={this.props.items} headerColumns={['name', 'type', 'size', 'stock']}></Table>
    </div>
  }
}

export default InventoryHeader;

