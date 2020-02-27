import Link from 'next/link';
import { useTable } from 'react-table'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

var products = [{
    id: 1,
    name: "Product1",
    date: 'today',
    price: 120
}, {
    id: 2,
    name: "Product2",
    date: 'today',
    price: 80
}, {
    id: 3,
    name: "Product3",
    date: 'today',
    price: 90
}];

class Table extends React.Component {
    render() {
        return <div>
            <BootstrapTable data={products} striped hover>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>,
        </div>
    }
}

export default Table;
