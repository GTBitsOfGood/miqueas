import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFemale } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import '../../public/table_component.css';

function TableComponent (props) {
    const gender = props.gender.toLowerCase()[0]

    return <div>
        <div className='rows'>
            {gender=='m' && <FontAwesomeIcon className='male' icon={faMale} />}
            {gender=='f' && <FontAwesomeIcon className='female' icon={faFemale} />}
            <p className='itemName'>{props.col0}</p>
            <p className='text'>{props.col1}</p>
            <p className='text'>{props.col2}</p>
            <p className='text'>{props.col3}</p>
            <FontAwesomeIcon className='chevron' icon={faChevronRight} />
        </div>

    </div>
}

export default TableComponent;
