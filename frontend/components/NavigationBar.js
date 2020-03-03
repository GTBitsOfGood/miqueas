import ActiveLink from './ActiveLink'
import {Button} from 'react-bootstrap';
import {ShoppingCart, Person} from 'styled-icons/material'
import {Plus} from 'styled-icons/boxicons-regular'
import {Clipboard} from 'styled-icons/boxicons-regular'
import {Clock} from 'styled-icons/feather'
import '../../public/navbar.css';

export default () => (
  <div>
    <ActiveLink href="/profile">
      <Button><Person size="30%"/><span className="caption">Profile</span></Button>
      </ActiveLink>
    <ActiveLink href="/inventory">
      <Button><ShoppingCart size="30%"/><span className="caption">Shopping List</span></Button>
      </ActiveLink>
    <ActiveLink href="/add">
      <Button variant="secondary"><Plus size="30%" /><div className="caption">Add Item</div></Button>
      </ActiveLink>
    <ActiveLink href="/log">
      <Button><Clipboard size="30%"/><span className="caption">View Log</span></Button>
      </ActiveLink>
    <ActiveLink href="/">
      <Button><Clock size="30%"/><span className="caption">Transaction History</span></Button>
      </ActiveLink>
  </div>
) 