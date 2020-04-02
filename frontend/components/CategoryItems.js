import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFemale, faMale, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../public/categoryitems.css';

const addNameGroup = (props, items, name) => {
    var femaleCount = 0; var maleCount = 0; 
    var femaleGroup = []; var maleGroup = []; var otherGroup = [];
    var section = []
    console.log(items);
    for (let item of items) {
        if (item.gender == 'female') {
            femaleCount++;
            femaleGroup.push(item);
        } else if (item.gender == 'male') {
            maleCount++;
            maleGroup.push(item);
        } else {
            otherGroup.push(item);
        }

    }
    if (femaleGroup.length != 0) {
        femaleGroup[0].isFirst = true;
    }
    if (maleGroup.length != 0) {
        maleGroup[0].isFirst = true;
    }
    femaleGroup = femaleGroup.concat(maleGroup);
    var itemGroup = femaleGroup.concat(otherGroup);

    for (let item of itemGroup) {
        section.push(
        <tr onClick={()=> props.callback(item.name)} key={item._id}>
            {item.gender=='male' && item.isFirst && <td rowSpan={maleCount} className='icon'><FontAwesomeIcon className='male' icon={faMale} /></td>}
            {item.gender=='female' && item.isFirst && <td rowSpan={femaleCount} className='icon'><FontAwesomeIcon className='female' icon={faFemale} /></td>}
            {item.gender==null && <td></td>}
            {item.isFirst && <td rowSpan={item.gender == 'female' ? femaleCount : maleCount } style={{"textAlign": 'left'}} width='20%'>{item.name}</td>}
            <td width='20%'>{item.typeColor}</td>
            <td width='20%'>{item.size}</td>
            <td width='20%'>{item.stock}</td>
            <td width='10%'><FontAwesomeIcon className='chevron' icon={faChevronRight} /></td>
        </tr>);
    }
    return section;
}

const CategoryItems = (props) => {
    let finalTable = [];
    let dataTable = {};
    let sortTable = [];
    finalTable.push(<tr key ={1}><th colSpan={2}>Name</th><th>Type/Color</th><th>Size</th><th colSpan={2}>Stock</th></tr>)
    for (let item of props.items) {
        if (dataTable[item.name] == null) {
            dataTable[item.name] = [];
            sortTable.push(item.name);
        }
        dataTable[item.name].push(item);
    }
    sortTable.sort();
    for (let i = 0; i<sortTable.length; i++) {
        let name = sortTable[i]
        finalTable = finalTable.concat(addNameGroup(props, dataTable[name], name))
    }
    return(<table className='items'><tbody>{finalTable}</tbody></table>);
}
export default CategoryItems;
