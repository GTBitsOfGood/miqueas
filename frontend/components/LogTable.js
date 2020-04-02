import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFemale, faMale, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../public/logtable.css';

const createSection = (itemGroup, date) => {
    var section = []
    section.push(<tr key={date}><th colSpan={7}>{date}</th></tr>)
    for (let item of itemGroup) {
        section.push(
            <tr key={item.transactionId}>
                {item.gender=='male' && <td className='icon'><FontAwesomeIcon className='male' icon={faMale} /></td>}
                {item.gender=='female' && <td className='icon'><FontAwesomeIcon className='female' icon={faFemale} /></td>}
                <td width='20%'>{item.name}</td>
                <td width='20%'>{item.staff}</td>
                <td width='20%'>{item.recipient}</td>
                <td className={item.quantityChanged < 0 ? 'red':'green'} width='20%'>{item.quantityChanged}</td>
                <td width='10%'><FontAwesomeIcon className='chevron' icon={faChevronRight} /></td>
            </tr>
    )}
    return section;
}

const LogTable = (props) => {
    let dataTable = {};
    let finalTable = [];
    let sortTable = [];
    for (let item of props.items) {
        let year = item.date.substring(0,4);
        let month = item.date.substring(5,7);
        let day = item.date.substring(8, 10);
        item.visibleDate = month + "/" + day + "/" + year;
        if (dataTable[item.visibleDate] == null) {
            dataTable[item.visibleDate] = [];
            sortTable.push(year + month + day);
        }
        dataTable[item.visibleDate].push(item);
    }
    sortTable.sort();
    for (let i = sortTable.length-1; i>=0; i--) {
        let date = sortTable[i].substring(4,6) + "/" + sortTable[i].substring(6,8) + "/" + sortTable[i].substring(0,4);
        finalTable = finalTable.concat(createSection(dataTable[date], date))
    }
    return(finalTable);
}
export default LogTable;
