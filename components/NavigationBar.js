import ActiveLink from './ActiveLink'
import { Button} from 'react-bootstrap';
import {ShoppingCart, Person} from 'styled-icons/material'
import {Plus} from 'styled-icons/boxicons-regular'
import {Clipboard} from 'styled-icons/boxicons-regular'
import {Clock} from 'styled-icons/feather'
import '../public/navbar.css';

export default () => (
  <div>
    <ActiveLink href="/profile"><Button className="inline-block"><Person size="48"/><span className ="caption">Profile</span></Button></ActiveLink>
    <ActiveLink href="/inventory"><Button className="inline-block"><ShoppingCart size="48"/><span className ="caption">Shopping List</span></Button></ActiveLink>
    <ActiveLink href="/add"><Button variant="secondary" className="inline-block"><Plus size="48"/><span className ="caption">Add Item</span></Button></ActiveLink>
    <ActiveLink href="/log"><Button className="inline-block"><Clipboard size="48"/><span className ="caption">View Log</span></Button></ActiveLink>
    <ActiveLink href="/"><Button className="inline-block"><Clock size="48"/><span className ="caption">Transaction History</span></Button></ActiveLink>

  </div>
) 