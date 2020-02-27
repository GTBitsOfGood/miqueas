import Link from 'next/link';
import Table from './Table.js'
import '../public/search.css';

class InventoryHeader extends React.Component {
  render() {
    return <div>
      <div className="active-cyan-3 active-cyan-4 mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
      </div>
      <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">all</button>
        <button type="button" className="btn btn-secondary">bodega</button>
        <button type="button" className="btn btn-secondary">downstairs</button>
      </div>
      <Table></Table>
    </div>
  }
}

export default InventoryHeader;

