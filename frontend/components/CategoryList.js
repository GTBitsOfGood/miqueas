import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFemale, faMale, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../public/categorylist.css';

const addCategory = (categoryName, items) => {
    return(
        <tr key={categoryName}>
            {items[0].gender=='male' && <td className='icon'><FontAwesomeIcon className='male' icon={faMale} /></td>}
            {items[0].gender=='female' && <td className='icon'><FontAwesomeIcon className='female' icon={faFemale} /></td>}
            {items[0].gender==null && <td></td>}
            <td width='50%'>{categoryName}</td>
            <td width='10%'><FontAwesomeIcon className='chevron' icon={faChevronRight} /></td>
        </tr>
    )
}

const CategoryList = (props) => {
    let finalTable = [];
    for (let category of props.categories) {
        finalTable.push(addCategory(category, props.items[category]));
    }
    return(finalTable);
}
export default CategoryList;
