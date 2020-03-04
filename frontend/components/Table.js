import Link from 'next/link';
import React from 'react';
import TableComponent from "./TableComponent";
import TableHeader from "./TableHeader";

function Table (props) {
    const products = props.products
    let headerColumns = props.headerColumns.map(header => {
        if (typeof(header) === 'string') {
            return header.toLowerCase()
        } else {
            return header
        }
    })

    let tableComponents = products.map(product => {
        if (!product.gender) {
            product.gender = ''
        }
        return <TableComponent
            key={product.key}
            gender={product.gender}
            col0={product[headerColumns[0]]}
            col1={product[headerColumns[1]]}
            col2={product[headerColumns[2]]}
            col3={product[headerColumns[3]]}
        />
    })
    return <div>
        <TableHeader headerColumns={headerColumns}/>
        {tableComponents}
    </div>
}

export default Table;
