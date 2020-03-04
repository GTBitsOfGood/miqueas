import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFemale } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import '../../public/table_component.css';

function TableComponent (props) {
    const gender = props.gender.toLowerCase()[0]
    const col0 = props.col0
    const col1 = props.col1
    const col2 = props.col2
    const col3 = props.col3

    return <div>
        <div className='rows'>
            {gender=='m' && <FontAwesomeIcon className='male' icon={faMale} />}
            {gender=='f' && <FontAwesomeIcon className='female' icon={faFemale} />}
            <p className='itemName'>{col0}</p>
            <p className='text'>{col1}</p>
            <p className='text'>{col2}</p>
            <p className='text'>{col3}</p>
            <FontAwesomeIcon className='chevron' icon={faChevronRight} />
        </div>

    </div>
}

export default TableComponent;
