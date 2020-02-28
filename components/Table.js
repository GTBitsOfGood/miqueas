import Link from 'next/link';
import { useTable } from 'react-table'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import React from 'react';

function Table (props) {
    const products = props.products
    const columns = props.columns
    let items = columns.map(column => {
        return <TableHeaderColumn key={column} dataSort dataField={column}>{column}</TableHeaderColumn>
    })
    return <div>
        <BootstrapTable bordered={false} data={products} hover condensed>
            <TableHeaderColumn dataField='key' isKey hidden>Product ID</TableHeaderColumn>
            {items}
        </BootstrapTable>,
    </div>
}

export default Table;