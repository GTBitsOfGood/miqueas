import Link from 'next/link';
import Table from './Table.js'

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <h1> Welcome to the Miqueas Inventory</h1>
      <Table></Table>
    </div>
  }
}

export default InventoryHeader;
