import Link from 'next/link';
import React from 'react';
import { faFemale, faMale, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../public/logtable.css';

const createSection = (itemGroup, date) => {
    var section = []
    section.push(<tr className='section'><th>{date}</th></tr>)
    for (let item of itemGroup) {
        section.push(
            <tr>
                {item.gender=='male' && <FontAwesomeIcon className='male' icon={faMale} />}
                {item.gender=='female' && <FontAwesomeIcon className='female' icon={faFemale} />}
                <td>{item.name}</td>
                <td>{item.staff}</td>
                <td>{item.recipient}</td>
                <td>{item.quantityChanged}</td>
                <FontAwesomeIcon className='chevron' icon={faChevronRight} />
            </tr>
        )
    }
    return section;
}
const createLogTable = (items) => {

}

const LogTable = (props) => {
    let dataTable = {};
    for (let item of props.items) {
        let year = item.date.substring(0,4);
        let month = item.date.substring(5,7);
        let day = item.date.substring(8, 10);
        item.visibleDate = month + "/" + day + "/" + year;
        if (dataTable[item.visibleDate] == null) {
            dataTable[item.visibleDate] = [];
        }
        dataTable[item.visibleDate].push(item);
    }
    console.log("dataTable: ", dataTable );
    for (let dateSet in dateTable) {
        
    }
    return(
<table>
  <thead>
    <tr className="red">
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Color</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Voluptates!</td>
      <td>Fugiat?</td>
      <td>Alias.</td>
      <td>Doloribus.</td>
      <td>Veritatis.</td>
    </tr>
    <tr>
      <td>Veritatis!</td>
      <td>Facilis.</td>
      <td>Expedita?</td>
      <td>Ipsam!</td>
      <td>Omnis!</td>
    </tr>
    <tr className="green">
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Color</th>
      <th>URL</th>
    </tr>
  </tbody>
</table>
    )}
export default LogTable;
