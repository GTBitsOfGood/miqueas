import Link from 'next/link';
import React from 'react';
import TableComponent from "./TableComponent";
import TableHeader from "./TableHeader";

function Table (props) {
    const products = props.items

    let headerColumns = props.headerColumns.map(header => {
        if (typeof(header) === 'string') {
            return header.toLowerCase()
        } else {
            return header
        }
    })
    /*Once the database has proper data in it we should remove the two conditionals
    in the for loop */
    let tableHeaderCols = headerColumns.slice();
    headerColumns[1] = "typeColor"
    for (var i = 0; i<products.length;i++) {
        products[i].key = i;
        if (!products[i].size) {
            products[i].size = "N/A"
        }
        if (!products[i].typeColor) {
            products[i].typeColor = "N/A"
        }
    }

    let tableComponents = products.map(product => {
        if (!product.gender) {
            product.gender = 'f'
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
        <TableHeader headerColumns={tableHeaderCols}/>
        {tableComponents}
    </div>
}

export default Table;
