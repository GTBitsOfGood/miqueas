import Link from 'next/link';
import React from 'react';
import '../../public/table_header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faFemale, faMale} from "@fortawesome/free-solid-svg-icons";
import TableComponent from "./TableComponent";

function TableHeader (props) {
    const headerColumns = props.headerColumns

    let headerComponents = headerColumns.map((header, index) => {
        return <p className='row' key={index}>{header}</p>
    })

    return <div className='rows'>{headerComponents}</div>
}

export default TableHeader;
