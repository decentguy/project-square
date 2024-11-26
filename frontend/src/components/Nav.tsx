import React, { useState } from 'react';
import { Button, Navbar } from 'react-bulma-components';


const Nav: React.FC = () => {
  const [isActive, setisBurgerMenuActive] = useState(false);
  return (
    <Navbar active={isActive} color='primary' fixed='top' pl={5} pr={5}>
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            alt="Product Square"
            src="/images/brands/logo.svg"
          />
        </Navbar.Item>
        <Navbar.Burger
          onClick={() => {
            setisBurgerMenuActive(!isActive);
          }}
        >
        </Navbar.Burger>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align='right'>
          <Navbar.Item href="#services">
            Services
          </Navbar.Item>
          <Navbar.Item href="#industries">
            Industries
          </Navbar.Item>
          <Navbar.Item href="#cases">
            Cases
          </Navbar.Item>
          <Navbar.Item href="#contact">
            Contact
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align='right'>
          <Button className='action' size="small" rounded>
            Let's Talk
          </Button>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
};

export default Nav;