import ActiveLink from './ActiveLink'
import {Button} from 'react-bootstrap';
import {ShoppingCart, Person} from 'styled-icons/material'
import {Plus} from 'styled-icons/boxicons-regular'
import {Clipboard} from 'styled-icons/boxicons-regular'
import {Menu} from 'styled-icons/boxicons-regular/Menu'
import '../../public/navbar.css';

export default () => (
  <div>
    <ActiveLink href="/profile">
      <Button><Person size="30%"/><span className="caption">profile</span></Button>
      </ActiveLink>
    <ActiveLink href="/inventory">
      <Button><ShoppingCart size="30%"/><span className="caption">shopping list</span></Button>
      </ActiveLink>
    <ActiveLink href="/add">
      <Button variant="secondary"><Plus size="30%" /><div className="caption"></div></Button>
      </ActiveLink>
    <ActiveLink href="/log">
      <Button><Clipboard size="30%"/><span className="caption">log</span></Button>
      </ActiveLink>
    <ActiveLink href="/">
      <Button><Menu size="30%"/><span className="caption">inventory</span></Button>
      </ActiveLink>
  </div>
) 